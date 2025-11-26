class linkedList{
    constructor(head=null){
        this.head = head;
    }

    append(value){
        if(this.head == null){
            let newnode = new Node(value, null);
            this.head = newnode;
        }
        else{
            let current = this.head;
            while(current.next != null){
                current = current.next;
            }
            current.next = new Node(value, null);
        }
    }

    prepend(value){
        if(this.head == null){
            let newnode = new Node(value,null);
            this.head = newnode;
        }
        else{
            let newnode = new Node(value, this.head);
            this.head = newnode;
        }
    }
    toString(){
        if(this.head == null){
            return 'null'
        }
        else{
            let current = this.head;
            let result= '';
            while(current != null){
                result += `(${current.value}) ->`
                current = current.next;
            }
            result += null
            return result;
        }
    }
}

class Node{
    constructor(value=null, next=null){
        this.value = value;
        this.next = next;
    }
}






class HashMap{
    constructor(loadFactor=0.75, capacity=16){
        this.loadFactor = loadFactor;
        this.capactiy = capacity;
        this.contains = {};
        this.allKeys = [];
    }
    hash(key){
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i<key.length;i++){
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.capactiy;
        }
        return hashCode;

    }


    // set(key,value){
    //     console.log(this.capactiy)
    //     if(Object.keys(this.contains).length > this.capactiy * this.loadFactor){
    //         this.capactiy = this.capactiy * 2;
    //     }
    //     key = this.hash(key);
    //     if(key in this.contains){
    //         //has to be bracket notation. Dot notation will set key name to 'key'
    //         console.log(`I am the old value: ${this.contains[key]}`)
    //         this.contains[key] = value
    //         console.log(`I am the new value: ${this.contains[key]}`)
    //     }
    //     else{
    //         this.contains[key] = value;
    //     }
    //     return ;
    // }

    set(key,value){
        this.allKeys.push(key);
         if(this.allKeys.length > (this.capactiy * this.loadFactor)){
            console.log('enter')
             this.capactiy = this.capactiy * 2;

         }
        if(this.allKeys.includes(key)){
            //updating to new value 
        }
        else{
            //creating new value
        }
        key = this.hash(key); //sets key to hashed key (bucket value) 
        if(key in this.contains){
            this.contains[key].append(value);
        }
        else{
            this.contains[key] = new linkedList();
            this.contains[key].append(value)
        }
    }

    get(key){
        if( this.contains[this.hash(key)]){
            return this.contains[this.hash(key)].toString()
        }
        else{
            return null;
        }
    }

    remove(key){
        if(this.contains[key]){
            delete this.contains[key];
            return true;
        }
        else{
            return false;
        }
    }

    length(){
        return Object.keys(this.contains).length;
    }

    clear(){
        this.contains = {};
        return this.contains;
    }

    keys(){
        let arr = Object.keys(this.contains);
        return arr;
        
    }

    values(){
        let arr = Object.values(this.contains);
        return arr;

    }

    entries(){
        let arr = [];
        
        for(let i = 0; i < Object.keys(this.contains).length; i ++){
            if (i < 0 || i >= Object.keys(this.contains).length) {
                throw new Error("Trying to access index out of bounds");
            }
            arr.push([Object.keys(this.contains)[i],Object.values(this.contains)[i].toString()])
        }
        return arr;
    }
}
const test = new HashMap() 
test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown') //missing repeated key
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple') //missing repeated key
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')
test.set('moon', 'silver') // capacity not doubled becasue some items still missing
test.set('apricot','apricot')

console.log(test.entries())

