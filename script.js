


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

    // prepend(value){
    //     const newNode = new Node(value)
    //     // newNode.
    // }
}

let list = new SinglyLinkedList();
// list.append("HELLO")