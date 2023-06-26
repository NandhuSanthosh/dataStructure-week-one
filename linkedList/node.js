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

    sort(){
        if(this.length <= 1) return;
        
        let i = this.head;
        while(i.next){
            let j = i.next;
            while(j){
                if(i.value > j.value){
                    let temp = i.value;
                    i.value = j.value;
                    j.value = temp;
                }
                j = j.next;
            }
            i = i.next;
        }
    }


    // this is a problem i found from leetcode 
    // you are given two numbers in the form of linked list in reverse order
    // 342 = 2 -> 4 -> 3
    // 465 = 5 -> 6 -> 4
    // you have to find the sum of the numbers and return it in the form 
    // of  a reversed linked list;
    // 342 + 465 = 807
    // output = 7 -> 0 -> 8
        static addTwoNumbers(l1, l2){

        let rest = 0;
        function helper(a, b){
            // iterate to the end of both the linked list
            if(!a && !b) {
                let first = new LinkedList();
                if(rest !== 0)
                    first.push(rest);
                return first;
            }

            let nodeVal = 0;
            let smallOutput;
            let sum = 0;
            if(!a){
                rest = Math.floor((b.value + rest) / 10);
                smallOutput = helper(a, b.next)
                sum = b.value
                nodeVal = (b.value + rest) % 10;
            }
            else if(!b){
                rest = Math.floor((a.value + rest) / 10)
                smallOutput = helper(a.next, b)
                sum = a.value;
                nodeVal = (a.value + rest) % 10;
            }
            else{
                sum = a.value + b.value;
                nodeVal = (a.value + b.value + rest) % 10 ;
                rest = Math.floor((a.value + b.value + rest) / 10)
                smallOutput = helper(a.next, b.next);
            }

            smallOutput.unShift(nodeVal);
            return smallOutput;
        }

        
        let output = helper(l1.head, l2.head);
        return output;
    }

}



let n = new LinkedList()
n.push(5)
n.push(6)
n.push(4)

let m = new LinkedList()
m.push(1)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(0)
m.push(1)

n.displayOn()
m.displayOn()
let output = LinkedList.addTwoNumbers(m, n)

output.displayOn();


// n.printReverser(n.head)