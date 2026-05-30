import bengali from '../data/scripts/bengali.js';
import myamma from '../data/scripts/myamma.js';

const SCRIPTS = { 
  bengali,
  myamma,
};

const select           = document.getElementById('scriptSelect');
const infoContent      = document.getElementById('infoContent');
const consonantsGrid   = document.getElementById('consonantsGrid');
const vowelsGrid       = document.getElementById('vowelsGrid');
const toggleBtn        = document.getElementById('toggleInfo');

// ── 展開/收合 ──
toggleBtn.addEventListener('click', () => {
  const isOpen = infoContent.style.display !== 'none';
  infoContent.style.display = isOpen ? 'none' : 'block';
  toggleBtn.classList.toggle('collapsed', isOpen);
});

select.addEventListener('change', () => loadScript(select.value));

function loadScript(key) {
  const data = SCRIPTS[key];
  if (!data) return;
  renderInfo(data);
  renderConsonants(consonantsGrid, data.consonantTable, key);
  renderVowels(vowelsGrid, data.vowels, key);
}

// ── 說明 ──
function renderInfo(data) {
  infoContent.innerHTML = `
    <h3>${data.name}</h3>
    <p>${data.description}</p>
    ${(data.details || []).map(d => `<h3>${d.title}</h3><p>${d.content}</p>`).join('')}
  `;
}

// ── 輔音表格 ──
function renderConsonants(container, table, scriptKey) {
  container.innerHTML = '';
  if (!table) return;

  const t = document.createElement('table');
  t.className = 'consonant-table';

  // 第一列：大分類標頭（colspan）
  if (table.colGroups) {
    const tr0 = document.createElement('tr');
    // 左上角空格（row header 佔位）
    const corner = document.createElement('th');
    corner.rowSpan = 2;
    tr0.appendChild(corner);

    table.colGroups.forEach(g => {
      const th = document.createElement('th');
      th.colSpan = g.span;
      th.className = 'col-group' + (g.gold ? ' col-group-gold' : '');
      th.textContent = g.label;
      tr0.appendChild(th);
    });
    t.appendChild(tr0);
  }

  // 第二列：細分欄標頭
  const trHead = document.createElement('tr');
  if (!table.colGroups) {
    const corner = document.createElement('th');
    trHead.appendChild(corner);
  }
  table.colHeaders.forEach(h => {
    const th = document.createElement('th');
    th.innerHTML = h;
    trHead.appendChild(th);
  });
  t.appendChild(trHead);

  // 資料列
  table.rows.forEach(row => {
    const tr = document.createElement('tr');

    // 列標頭
    const rowTh = document.createElement('th');
    rowTh.className = 'row-header';
    rowTh.innerHTML = row.label;
    tr.appendChild(rowTh);

    // 每個儲存格
    row.cells.forEach(cell => {
      const td = document.createElement('td');
      if (!cell) {
        td.className = 'empty';
      } else {
        td.appendChild(makeCard(cell, scriptKey));
      }
      tr.appendChild(td);
    });

    t.appendChild(tr);
  });

  container.appendChild(t);
}

// ── 母音 ──
function renderVowels(container, vowels, scriptKey) {
  container.innerHTML = '';
  const groups = [
    { key: 'independent', label: '獨立字母 Independent' },
    { key: 'diacritic',   label: '字根符號 Vowel Mark (Kār)' },
  ];
  groups.forEach(({ key, label }) => {
    const letters = vowels.filter(v => v.group === key);
    if (!letters.length) return;
    const groupDiv = document.createElement('div');
    groupDiv.className = 'vowel-group';
    const labelEl = document.createElement('div');
    labelEl.className = 'vowel-group-label';
    labelEl.textContent = label;
    const grid = document.createElement('div');
    grid.className = 'letter-grid';
    letters.forEach(l => grid.appendChild(makeCard(l, scriptKey)));
    groupDiv.append(labelEl, grid);
    container.appendChild(groupDiv);
  });
}

// ── 卡片 ──
function makeCard(letter, scriptKey) {
  const card = document.createElement('div');
  card.className = 'letter-card';
  card.innerHTML = `
    ${letter.audio ? '<span class="audio-dot"></span>' : ''}
    <div class="letter-char">
      ${letter.image
        ? `<img src="assets/images/${scriptKey}/${letter.image}" alt="${letter.name}">`
        : letter.char}
    </div>
    <div class="letter-name">${letter.name}</div>
    <div class="letter-ipa">${letter.ipa}</div>
  `;
  if (letter.audio) {
    card.addEventListener('click', () => {
      card.classList.add('playing');
      const audio = new Audio(`assets/audio/${scriptKey}/${letter.audio}`);
      audio.play().catch(() => {});
      // 動畫結束後復原
      audio.onended = () => card.classList.remove('playing');
      // 若無音檔或很短，至少 600ms 後也復原
      setTimeout(() => card.classList.remove('playing'), 1500);
    });
  }
  return card;
}

loadScript('bengali');
loadScript('myamma');