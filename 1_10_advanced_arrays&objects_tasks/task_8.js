class prefixTrieVariables {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class prefixTrie {
    constructor() {
      this.root = new prefixTrieVariables();
    }
  
    insert(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) {
          node.children[char] = new prefixTrieVariables(); // to‘g‘rilangan joy
        }
        node = node.children[char];
      }
      node.isEndOfWord = true;
    }
  
    search(word) {
      let node = this.root;
      for (let char of word) {
        if (!node.children[char]) {
          return false;
        }
        node = node.children[char];
      }
      return node.isEndOfWord;
    }
  }
  
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  const trie = new prefixTrie();
  
  function menu() {
    console.log("\n[1] So`z qo`shish");
    console.log("[2] So`z qidirish");
    console.log("[0] Chiqish\n");
  
    rl.question("Tanlang: ", function (tanlov) {
      if (tanlov === "1") {
        rl.question("So`z kiriting: ", function (soz) {
          trie.insert(soz);
          console.log(`✅ "${soz}" muvaffaqiyatli qo‘shildi`);
          menu();
        });
      } else if (tanlov === "2") {
        rl.question("Qidiriladigan so'z: ", function (soz) {
          if (trie.search(soz)) {
            console.log(`🔍 "${soz}" mavjud`);
          } else {
            console.log(`❌ "${soz}" topilmadi`);
          }
          menu();
        });
      } else if (tanlov === "0") {
        console.log("👋 Chiqildi");
        rl.close();
      } else {
        console.log("❗ Noto‘g‘ri tanlov");
        menu();
      }
    });
  }
  
  menu();
  