


class Node {
    constructor(value){
        this.value = value
        this.nextNode = null
    }
}


class SinglyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0
    }
    
    // append/push(value) adds a new node containing value to the end of the list
    append(value){ //this function should accept a value
        const newNode = new Node(value)//create a new node using the value passed to the function
        if(!this.head){
            this.head = newNode;
            //if there is no head property on the list, set the head and tail to be the new created node
            this.tail = this.head;
        }else{
            //otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
        this.size++;//increment the length by one 
        return this;
    }
    // unshift
    prepend(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head
        }else {
            // otherwise set the newly created Node's next property to be the current head property on the list
            newNode.nextNode = this.head;
            // set the head property on the list to be that newly created node 
            this.head = newNode;
        }
        this.size++
        return this;
    }

    getSize(){//size returns the total number of nodes in the list
        return this.size;
    }

    getHead(){//head returns the first node in the list
        return this.head;
    }

    getTail(){//tail returns the last node in the list
        return this.tail;
    }

    at(index){//get/at(index) returns the node at the given index
        //if index is less than 0 or greater than or equal to the length of the list, return null
        if(index < 0 || index >= this.size) return null;
        // loop through the list until you reach the index and return the node at that specific index
        let counter = 0
        let current = this.head;
        while(counter !== index){
            current = current.nextNode;
            counter++
        }
        return current;
    }

    pop(){//pop removes the last element from the list
        //if there is no node in the list, return undefined
        if(!this.head) return undefined;
        // Loop through the list until you reach the tail
        let current = this.head
        let newTail = current;
        while(current.nextNode){
            newTail = current
            current = current.nextNode
        }
        // Set the next property of the 2nd to last node to be null
        this.tail = newTail
        // set the tail to be the 2nd to last node
        this.tail.nextNode = null
        // decrement the length of the list by 1
        this.size--;
        if(this.size === 0){
            this.head = null
            this.tail = null
        }
        //return the value of the node removed 
        return current;
    }

    contains(value){//returns true if the passed in value is in the list and otherwise returns false.
        let current = this.head
        while(current!==null){
            if(current.value === value){
                return true;
            }
            current = current.next
        }
        return false;
    }

    find(value){//returns the index of the node containing value, or null if not found.
        let current = this.head
        let counter = 0
        while(current!==null){
            if(current.value===value){
                return counter;
            }
            current = this.nextNode
            counter++;
            }    
        return null;
    }

    toString(){//represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
        let result = '';
        let current = this.head;

        while(current !== null){
            result +=`(${current.value} ->)`
            current = current.nextNode
        }
        result += 'null';
        return result;
    }

    insertAt(value, index){//that inserts a new node with the provided value at the given index.
    
    
    }
}

let list = new SinglyLinkedList();
// list.append("HELLO")