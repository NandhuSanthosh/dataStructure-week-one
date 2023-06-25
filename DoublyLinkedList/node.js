class Node{
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList{
    head = null
    tail = null
    length = 0

    push(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        this.tail = newNode
        this.length++;
    }

    pop(){
        if(this.isEmpty()) return 
        let output = this.tail;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.tail = this.tail.prev
            this.tail.next = null;
        }
        this.length--;
        output.prev = null;
        return output;
    }
    display(){
        if(this.isEmpty()){
            return
        }
        let output = ''
        function helper(curr){
            if(!curr) return;
            output += `${curr.value} `
            helper(curr.next)
        }
        helper(this.head);
        console.log(output)
    }

    displayRev(){
        if(!this.isEmpty()) {
            let output = '';
            function helper(curr){
                if(!curr) return;
                output += `${curr.value} `
                helper(curr.prev)
            }
            helper(this.tail);
            console.log(output)
        }
    }

    shift(){
        if(this.isEmpty()) return;
        let poppedNode = this.head;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.head = this.head.next;
            this.head.prev = null;
        }
        this.length--;
        poppedNode.next = null;
        return poppedNode;
    }

    isEmpty(){
        if(!this.head){
            console.log('ll empty')
            return true;
        }
        return false;
    }
}

let ll = new DoublyLinkedList()
ll.push(10)
ll.push(20)
ll.push(30)
ll.display()

console.log(ll.shift())
ll.display();
console.log(ll.shift())
ll.display();
console.log(ll.shift())
ll.display();
// console.log(ll.tail)