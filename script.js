


class Node {
    constructor(value){
        this.value = null
        this.nextNode = null
    }
}


class LinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }
    
    // append(value) adds a new node containing value to the end of the list
    append(value){
        const newNode = new Node(value)
        newNode.nextNode = this.head
        this.head = newNode
        this.size++;
    }

    
}