const bengali = {
  name: "Bengali / বাংলা",
  description: "孟加拉文是婆羅米系文字，由左至右書寫。輔音預設帶有內在母音「অ /ɔ/」，以母音符號（কার kār）修改。",
  details: [
    { title: "文字類型", content: "Abugida：每個輔音字母預設帶有短母音，須加符號修改。" },
    { title: "使用地區", content: "孟加拉國、印度西孟加拉邦、阿薩姆邦等。" },
    { title: "字母數",   content: "輔音 39 個，母音獨立字母 11 個。" }
  ],
  consonants: [
    { char: "ক", name: "kô",  ipa: "/kɔ/",  audio: "consonants/ka.mp3" },
    { char: "খ", name: "khô", ipa: "/kʰɔ/", audio: "consonants/kha.mp3" },
    // ... 繼續
  ],
  vowels: [
    // group: 'independent' = 獨立字母（字根）
    { char: "অ", name: "ô",  ipa: "/ɔ~o/", group: "independent", audio: "vowels/o.mp3" },
    { char: "আ", name: "a",  ipa: "/a/",   group: "independent", audio: "vowels/a.mp3" },
    { char: "ই", name: "i",  ipa: "/i/",   group: "independent", audio: "vowels/i.mp3" },
    { char: "ঈ", name: "ī",  ipa: "/i/",   group: "independent", audio: "vowels/ii.mp3" },
    { char: "উ", name: "u",  ipa: "/u/",   group: "independent", audio: "vowels/u.mp3" },
    { char: "ঊ", name: "ū",  ipa: "/u/",   group: "independent", audio: "vowels/uu.mp3" },
    { char: "এ", name: "e",  ipa: "/e/",   group: "independent", audio: "vowels/e.mp3" },
    { char: "ঐ", name: "oi", ipa: "/oi/",  group: "independent", audio: "vowels/oi.mp3" },
    { char: "ও", name: "o",  ipa: "/o/",   group: "independent", audio: "vowels/oo.mp3" },
    { char: "ঔ", name: "ou", ipa: "/ou/",  group: "independent", audio: "vowels/ou.mp3" },

    // group: 'diacritic' = 附在輔音上的符號（kār）
    { char: "া", name: "ā-kār",  ipa: "/a/",  group: "diacritic" },
    { char: "ি", name: "hrasva i-kār", ipa: "/i/", group: "diacritic" },
    { char: "ী", name: "dīrgha i-kār", ipa: "/i/", group: "diacritic" },
    { char: "ু", name: "hrasva u-kār", ipa: "/u/", group: "diacritic" },
    { char: "ূ", name: "dīrgha u-kār", ipa: "/u/", group: "diacritic" },
    { char: "ে", name: "e-kār",  ipa: "/e/",  group: "diacritic" },
    { char: "ৈ", name: "oi-kār", ipa: "/oi/", group: "diacritic" },
    { char: "ো", name: "o-kār",  ipa: "/o/",  group: "diacritic" },
    { char: "ৌ", name: "ou-kār", ipa: "/ou/", group: "diacritic" },
  ]
};

export default bengali;