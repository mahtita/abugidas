import bengali from '../data/scripts/bengali.js';

// 文字系統資料註冊表
const SCRIPTS = {
  bengali,
  // devanagari: devanagariData,  ← 之後加入
};

const select = document.getElementById('scriptSelect');
const infoContent = document.getElementById('infoContent');
const consonantsGrid = document.getElementById('consonantsGrid');
const vowelsGrid = document.getElementById('vowelsGrid');
const toggleBtn = document.getElementById('toggleInfo');
const infoPanel = document.getElementById('infoContent');

// ── 展開/收合說明 ──
toggleBtn.addEventListener('click', () => {
  const isOpen = infoPanel.style.display !== 'none';
  infoPanel.style.display = isOpen ? 'none' : 'block';
  toggleBtn.setAttribute('aria-expanded', String(!isOpen));
});

// ── 切換文字系統 ──
select.addEventListener('change', () => loadScript(select.value));

function loadScript(key) {
  const data = SCRIPTS[key];
  if (!data) return;
  renderInfo(data);
  renderGrid(consonantsGrid, data.consonants, key);
  renderGrid(vowelsGrid, data.vowels, key);
}

// ── 渲染說明 ──
function renderInfo(data) {
  infoContent.innerHTML = `
    <h3>${data.name}</h3>
    <p>${data.description}</p>
    ${data.details ? data.details.map(d => `<h3>${d.title}</h3><p>${d.content}</p>`).join('') : ''}
  `;
}

// ── 渲染字母格子 ──
function renderGrid(container, letters, scriptKey) {
  container.innerHTML = '';
  letters.forEach(letter => {
    const card = document.createElement('div');
    card.className = 'letter-card';
    card.innerHTML = `
      <div class="letter-char">
        ${letter.image
          ? `<img src="assets/images/${scriptKey}/${letter.image}" alt="${letter.name}" />`
          : letter.char}
      </div>
      <div class="letter-name">${letter.name}</div>
      <div class="letter-ipa">${letter.ipa}</div>
    `;
    // 播放音檔
    card.addEventListener('click', () => {
      if (letter.audio) {
        const audio = new Audio(`assets/audio/${scriptKey}/${letter.audio}`);
        audio.play();
      }
    });
    container.appendChild(card);
  });
}

// ── 初始載入 ──
loadScript('bengali');