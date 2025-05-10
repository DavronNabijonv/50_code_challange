//  Implement a Linked List in Javascript with insert , delete, and search methods.

class Node{
    constructor(value){
        this.value = value; // Tugunning qiymati
        this.next = null; // Keyingi tugun dastlab yo`q
    }
}

class LinkedList {

    constructor(){
        this.head = null // Boshi dastlab bo`sh bo`ladi
    }

    insert(value){
        let newNode = new Node(value);

        if(!this.head){   // Agar bosh tugun bo`lmasa
            this.head = newNode;
            return;
        }

        let current = this.head;
        while(current.next){  // oxirgi tugunga yetguncha yuramiz
            current = current.next;
        }

        current.next = newNode; // Yangi tugunni ohiriga qo`shamiz

    }

    delete(value){
        if(!this.head) return; // Agar ro`yhat bo`sh bo`lsa, hech narsa qilmaymiz.

        if(this.head.value === value) return this.head = this.head.next; // Agar bosh tugun o`chirilishi kerak bo`lsa
        
        let current = this.head;
        while(current.next && current.next.value !== value){
            current = current.next;
        }
        if(current.next)current.next = current.next.next;
    }

    search(value){
        let current = this.head;
        while(current){
            if(current.value === value)return true;
            current = current.next;
        }

        return false;

    }
}


const list = new LinkedList();
list.insert(1); 
list.insert(2); 
list.insert(3);
list.con();
console.log(list.search(3));

