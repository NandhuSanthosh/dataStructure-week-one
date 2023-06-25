class Node{
    constructor(value){
        this.value = value
        this.next = null;
    }
}

class LinkedList{

    head = null;
    tail = null;
    length = 0;

    push(value){
        this.length++;
        let newNode = new Node(value)
        if(!this.head){
            this.head = newNode
        }
        else{
            this.tail.next = newNode
        }
        this.tail = newNode
    }

    unShift(value){
        let newNode = new Node(value);

        if(!this.head){
            this.tail = newNode
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    display(){
        if(!this.head){
            console.log("the liked list is empty")
        }

        function helper(curr){
            if(curr){
                console.log(curr.value)
                helper(curr.next)
            }
        }

        helper(this.head)
    }

    displayOn(){
        if(!this.head){
            console.log("Linked list is empty")
            return;
        }
        let output = ''
        function helper(curr){
            if(!curr) return 
            output += `${curr.value} `;
            helper(curr.next);
        }
        helper(this.head)
        console.log(output)
    }

    pop(){
        if(this.head == null){
            console.log("Linked list is empty");
            return;
        }
        this.length--;

        function helper(curr){
            if(curr.next == null){
                return null;
            }
            curr.next = helper(curr.next);
            return curr;
        }

        this.head = helper(this.head)
    }

    shift(){
        if(!this.head){
            return "LL is empty"
        }
        let output = this.head.value;
        this.length--;
        if(!this.head.next){
            this.tail = null;
        }
        this.head = this.head.next;
        return output;
    }

    get(index){
        if(index >= this.length){
            console.log("out of bounce");
            return;
        }

        function helper(index, curr){
            if(!index) return curr.value;
            return helper(index-1, curr.next);
        }

        return helper(index, this.head);
    }

    set(index, value){
        if(index >= this.length){
            return "list out of bound"
        }
        
        let curr = this.head;
        while(index){
            index--;
            curr = curr.next
        }

        curr.value = value;
    }

    insertInto(index, value){
        if(index <= 0){
            this.unShift(value)
        }
        else if(index == this.length){
            this.push(value)
        }
        else if(index > this.length){
            console.log("out of bound")
            return false;
        }
        else{
            let newNode = new Node(value);
            helper(index, this.head)
            this.length++;
        }

        function helper(index, curr){
            if(index){
                curr.next = helper(index-1, curr.next);
                return curr;
            }
            else{
                newNode.next = curr;
                return newNode;
            }
        }
        return true;

    }

    remove(index){
        if(index >=this.length) return false;

        if(index == 0) {
            this.shift();
            return true;
        }

        function helper(index, curr){
            // console.log(index, curr.value)
            if(index){
                curr.next = helper(index-1, curr.next);
                return curr;
            }
            else{
                return curr.next;
            }
        }
        this.length--;
        helper(index, this.head);
    }

    reverse(){

        if(!this.head) return 
        
        var helper = (curr)=>{
            if(!curr.next) {
                this.head = curr;
                return curr;
            }
            helper(curr.next).next = curr;
            curr.next = null;
            return curr;
        }
        this.tail = this.head;
        helper(this.head);
    }

    printReverser(curr){
        if(curr == null) return
        this.printReverser(curr.next)
        console.log(curr.value);
    }

}

let n = new LinkedList()
n.push(10)
n.push(20)
n.push(30)
n.push(40)
// n.push("whatThe")

n.displayOn()
n.reverse()
n.displayOn()

n.insertInto(4, 100)
n.displayOn()

n.reverse();
n.displayOn()
// n.printReverser(n.head)