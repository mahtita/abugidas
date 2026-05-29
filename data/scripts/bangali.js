const bengali = {
  name: "Bengali / বাংলা",
  description: "孟加拉文是一種婆羅米系文字，用於孟加拉語及阿薩姆語。由左至右書寫，輔音預設帶有內在母音「অ」。",
  details: [
    {
      title: "文字類型",
      content: "Abugida（元音附標文字）：輔音字母預設帶有短母音，透過母音符號（kār）修改。"
    },
    {
      title: "使用地區",
      content: "孟加拉國、印度西孟加拉邦、阿薩姆邦等。"
    }
  ],
  consonants: [
    { char: "ক", name: "kô", ipa: "/kɔ/", audio: "consonants/ka.mp3" },
    { char: "খ", name: "khô", ipa: "/kʰɔ/", audio: "consonants/kha.mp3" },
    { char: "গ", name: "gô", ipa: "/ɡɔ/", audio: "consonants/ga.mp3" },
    // ... 繼續填入
  ],
  vowels: [
    { char: "অ", name: "ô", ipa: "/ɔ~o/", audio: "vowels/o.mp3" },
    { char: "আ", name: "a", ipa: "/e/", audio: "vowels/a.mp3" },
    { char: "ই", name: "i", ipa: "/i/", audio: "vowels/i.mp3" },
    // ... 繼續填入
  ]
};

export default bengali;