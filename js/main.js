import bengali from '../data/scripts/bengali.js';

const SCRIPTS = { bengali };

const select       = document.getElementById('scriptSelect');
const infoContent  = document.getElementById('infoContent');
const consonantsGrid = document.getElementById('consonantsGrid');
const vowelsGrid   = document.getElementById('vowelsGrid');
const toggleBtn    = document.getElementById('toggleInfo');

toggleBtn.addEventListener('click', () => {
  const isCollapsed = infoContent.style.display === 'none';
  infoContent.style.display = isCollapsed ? 'block' : 'none';
  toggleBtn.classList.toggle('collapsed', !isCollapsed);
});

select.addEventListener('change', () => loadScript(select.value));

function loadScript(key) {
  const data = SCRIPTS[key];
  if (!data) return;
  renderInfo(data);
  renderGrid(consonantsGrid, data.consonants, key);
  renderVowels(vowelsGrid, data.vowels, key);  // ← 母音用獨立函式
}

function renderInfo(data) {
  infoContent.innerHTML = `
    <h3>${data.name}</h3>
    <p>${data.description}</p>
    ${(data.details || []).map(d => `<h3>${d.title}</h3><p>${d.content}</p>`).join('')}
  `;
}

function renderGrid(container, letters, scriptKey) {
  container.innerHTML = '';
  const grid = document.createElement('div');
  grid.className = 'letter-grid';
  letters.forEach(letter => grid.appendChild(makeCard(letter, scriptKey)));
  container.appendChild(grid);
}

// 母音：分兩區
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

    groupDiv.appendChild(labelEl);
    groupDiv.appendChild(grid);
    container.appendChild(groupDiv);
  });
}

function makeCard(letter, scriptKey) {
  const card = document.createElement('div');
  card.className = 'letter-card';
  card.innerHTML = `
    ${letter.audio ? '<span class="audio-icon">♪</span>' : ''}
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
      audio.play();
      audio.onended = () => card.classList.remove('playing');
    });
  }
  return card;
}

loadScript('bengali');