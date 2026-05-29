const bengali = {
  name: "Bengali / বাংলা",
  description: "孟加拉文是婆羅米系文字，由左至右書寫。輔音預設帶有內在母音「অ /ɔ/」，須以母音符號（কার kār）修改。",
  details: [
    { title: "文字類型", content: "Abugida：每個輔音預設帶有短母音，加符號修改。" },
    { title: "使用地區", content: "孟加拉國、印度西孟加拉邦、阿薩姆邦等。" },
    { title: "字母數",   content: "輔音 39 個，獨立母音字母 11 個。" }
  ],

  // ── 輔音表格定義 ──
  consonantTable: {
    // 橫軸大分類
    colGroups: [
      { label: "স্পর্শ Stop",       span: 4 },
      { label: "অনুনাসিক Nasal",    span: 1 },
      { label: "অন্তঃস্থ Approx.", span: 1 },
      { label: "ঊষ্ম Fricative",    span: 1, gold: true },
    ],
    // 橫軸細項（對應每一欄）
    colHeaders: [
      "অল্পপ্রাণ<br><small>Unaspirated V'less</small>",
      "মহাপ্রাণ<br><small>Aspirated V'less</small>",
      "অল্পপ্রাণ<br><small>Unaspirated Voiced</small>",
      "মহাপ্রাণ<br><small>Aspirated Voiced</small>",
      "অনুনাসিক<br><small>Nasal</small>",
      "অন্তঃস্থ<br><small>Approx.</small>",
      "ঊষ্ম<br><small>Fricative</small>",
    ],
    // 縱軸：每列
    rows: [
      {
        label: "কণ্ঠ্য<br><small>Guttural</small>",
        cells: [
          { char: "ক", name: "kô",  ipa: "/kɔ/",  audio: "consonants/ka.mp3" },
          { char: "খ", name: "khô", ipa: "/kʰɔ/", audio: "consonants/kha.mp3" },
          { char: "গ", name: "gô",  ipa: "/ɡɔ/",  audio: "consonants/ga.mp3" },
          { char: "ঘ", name: "ghô", ipa: "/ɡʱɔ/", audio: "consonants/gha.mp3" },
          { char: "ঙ", name: "ṅô",  ipa: "/ŋɔ/",  audio: "consonants/nga.mp3" },
          null,
          { char: "হ", name: "hô",  ipa: "/hɔ/",  audio: "consonants/ha.mp3" },
        ]
      },
      {
        label: "তালব্য<br><small>Palatal</small>",
        cells: [
          { char: "চ", name: "cô",  ipa: "/tʃɔ/",  audio: "consonants/ca.mp3" },
          { char: "ছ", name: "chô", ipa: "/tʃʰɔ/", audio: "consonants/cha.mp3" },
          { char: "জ", name: "jô",  ipa: "/dʒɔ/",  audio: "consonants/ja.mp3" },
          { char: "ঝ", name: "jhô", ipa: "/dʒʱɔ/", audio: "consonants/jha.mp3" },
          { char: "ঞ", name: "ñô",  ipa: "/nɔ/",   audio: "consonants/nya.mp3" },
          { char: "য", name: "yô",  ipa: "/dʒɔ/",  audio: "consonants/ya.mp3" },
          { char: "শ", name: "śô",  ipa: "/ʃɔ/",   audio: "consonants/sha.mp3" },
        ]
      },
      {
        label: "মূর্ধন্য<br><small>Retroflex</small>",
        cells: [
          { char: "ট", name: "ṭô",  ipa: "/ʈɔ/",  audio: "consonants/tta.mp3" },
          { char: "ঠ", name: "ṭhô", ipa: "/ʈʰɔ/", audio: "consonants/ttha.mp3" },
          { char: "ড", name: "ḍô",  ipa: "/ɖɔ/",  audio: "consonants/dda.mp3" },
          { char: "ঢ", name: "ḍhô", ipa: "/ɖʱɔ/", audio: "consonants/ddha.mp3" },
          { char: "ণ", name: "ṇô",  ipa: "/nɔ/",  audio: "consonants/nna.mp3" },
          { char: "র", name: "rô",  ipa: "/rɔ/",  audio: "consonants/ra.mp3" },
          { char: "ষ", name: "ṣô",  ipa: "/ʃɔ/",  audio: "consonants/ssa.mp3" },
        ]
      },
      {
        label: "দন্ত্য<br><small>Dental</small>",
        cells: [
          { char: "ত", name: "tô",  ipa: "/tɔ/",  audio: "consonants/ta.mp3" },
          { char: "থ", name: "thô", ipa: "/tʰɔ/", audio: "consonants/tha.mp3" },
          { char: "দ", name: "dô",  ipa: "/dɔ/",  audio: "consonants/da.mp3" },
          { char: "ধ", name: "dhô", ipa: "/dʱɔ/", audio: "consonants/dha.mp3" },
          { char: "ন", name: "nô",  ipa: "/nɔ/",  audio: "consonants/na.mp3" },
          { char: "ল", name: "lô",  ipa: "/lɔ/",  audio: "consonants/la.mp3" },
          { char: "স", name: "sô",  ipa: "/sɔ/",  audio: "consonants/sa.mp3" },
        ]
      },
      {
        label: "ওষ্ঠ্য<br><small>Labial</small>",
        cells: [
          { char: "প", name: "pô",  ipa: "/pɔ/",  audio: "consonants/pa.mp3" },
          { char: "ফ", name: "phô", ipa: "/pʰɔ/", audio: "consonants/pha.mp3" },
          { char: "ব", name: "bô",  ipa: "/bɔ/",  audio: "consonants/ba.mp3" },
          { char: "ভ", name: "bhô", ipa: "/bʱɔ/", audio: "consonants/bha.mp3" },
          { char: "ম", name: "mô",  ipa: "/mɔ/",  audio: "consonants/ma.mp3" },
          null,
          null,
        ]
      },
    ]
  },

  vowels: [
    { char: "অ", name: "ô",  ipa: "/ɔ~o/", group: "independent", audio: "vowels/o.mp3" },
    { char: "আ", name: "a",  ipa: "/a/",   group: "independent", audio: "vowels/a.mp3" },
    { char: "ই", name: "i",  ipa: "/i/",   group: "independent", audio: "vowels/i.mp3" },
    { char: "ঈ", name: "ī",  ipa: "/i/",   group: "independent", audio: "vowels/ii.mp3" },
    { char: "উ", name: "u",  ipa: "/u/",   group: "independent", audio: "vowels/u.mp3" },
    { char: "ঊ", name: "ū",  ipa: "/u/",   group: "independent", audio: "vowels/uu.mp3" },
    { char: "এ", name: "e",  ipa: "/e/",   group: "independent", audio: "vowels/e.mp3" },
    { char: "ঐ", name: "oi", ipa: "/oi/",  group: "independent", audio: "vowels/oi.mp3" },
    { char: "ও", name: "o",  ipa: "/o/",   group: "independent", audio: "vowels/oo.mp3" },
    { char: "ঔ", name: "ou", ipa: "/ou/",   group: "independent", audio: "vowels/ou.mp3" },
  ]
};

export default bengali;