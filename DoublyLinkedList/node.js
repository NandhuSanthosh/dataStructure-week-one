
/*
DOUBLY LINKED LIST OPERATION IMPLEMENTED
    push()                  => inserting at end
    pop()                   => removing from end
    shift()                 => removing from start
    unshift()               => inserting at start
    get()                   => retriving a node by its position
    set()                   => set a value by its position
    insert()                => insert node in a specified index
    remove()                => removing node in a specified index
    
    constructor()           => converting array to Linked List
    deleteByValue()         => Delete node with the value specified
    insertBeforeAndAfter()  =>Insert a node after & before a node with x data
    removeDuplicates()      =>remove duplicates in a sorted singly linked list

*/


class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList{
    head = null
    tail = null
    length = 0

    constructor(arr){
        for(let x of arr){
            this.push(x);
        }
    }

    // add a element to the end
    push(val){
        // create a new node
        let newNode = new Node(val);

        // checks whether LL is empty or not
        if(!this.head){
            this.head = newNode;
        }
        else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }
        this.tail = newNode
        this.length++;
        return this;
    }

    // delete a element from the end
    pop(){
        // if LL empty return 
        if(this.isEmpty()) return 

        // to return the deleted/popped element
        let output = this.tail;

        // if there is only one element in the LL
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }
        else{ // if there is multiple element
            this.tail = this.tail.prev
            this.tail.next = null;
        }

        // updating length and returning the popped node
        this.length--;
        output.prev = null;
        return output;
    }

    // display every element
    display(){
        // return if the LL is empty
        if(this.isEmpty()){
            return
        }

        // this string is used to print the LL, we can use console.log() but it will print each element in 
        // individual lines. I prefer print like this
        let output = ''

        // this recursive function is used to print the LL. The function iterates through every element and 
        // add that to a string
        function helper(curr){
            // console.log(curr.val)
            if(!curr) return;
            output += `${curr.val} `
            helper(curr.next)
        }
        helper(this.head);

        // printing the output
        console.log(output)
    }

    // display every element in reverse order
    displayRev(){

        // almost same as display but we start from the tail and iterates backwards
        if(!this.isEmpty()) {
            let output = '';

            // function to iterate
            function helper(curr){
                if(!curr) return;
                output += `${curr.val} `
                helper(curr.prev)
            }
            helper(this.tail);
            console.log(output)
        }
    }

    // delete element from the begining
    shift(){
        // returns if LL is empty
        if(this.isEmpty()) return;
        
        // storing the first element because we have to return it
        let poppedNode = this.head;

        // if there is only one element 
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }
        else{ // multiple element
            this.head = this.head.next;
            this.head.prev = null;
        }

        // updating length and returning popped element
        this.length--;
        poppedNode.next = null;
        return poppedNode;
    }

    // add element to the begining
    unshift(val){
        // creating a new node
        let newNode = new Node(val);

        // if LL is empty
        if(this.length == 0){
            this.tail = newNode;
        }
        else{ // if there is elments in the LL
            newNode.next = this.head;
            this.head.prev = newNode;
        }
        this.head = newNode;
        this.length++;
        return this;
    }

    // get val of the specified node
    get(index){
        // check whether the index exceed the length or ll is empty
        if(this.isEmpty() || index >= this.length || index < 0) return 

        let curr, currIndex;
        let output;
        // finds the element and returns it
        function getHelper( callback){
            if(index == currIndex){
                return curr
            }
            callback();
            return getHelper(callback)
        }

        // if this index is close start searching starts from the head and if it is close to the 
        // end searching starts from the tail
        if(index < this.length / 2) {
            curr = this.head;
            currIndex = 0;
            return getHelper(fromFrom)
        }
        else {
            curr = this.tail
            currIndex = this.length-1;
            return getHelper( fromEnd)
        }

        // this methods helps us change val of curr 
        function fromFrom(){
            curr = curr.next;
            currIndex++;
        }
        function fromEnd(){
            curr = curr.prev
            currIndex--;
        }
    }

    // set a val in a specified index
    set(index, val){
        // same as get, instead of returning we are chaning the val
        // check whether the index exceed the length or ll is empty
        if(this.isEmpty() || index >= this.length || index < 0) return 

        let curr, currIndex;

        // finds the element and updates it
        function setHelper( callback){
            if(index == currIndex){
                curr.val = val;
                return;
            }
            callback();
            return setHelper(callback)
        }

        // if this index is close start searching starts from the head and if it is close to the 
        // end searching starts from the tail
        if(index < this.length / 2) {
            curr = this.head;
            currIndex = 0;
            return setHelper(fromFrom)
        }
        else {
            curr = this.tail
            currIndex = this.length-1;
            return setHelper( fromEnd)
        }

        // this methods helps us change val of curr 
        function fromFrom(){
            curr = curr.next;
            currIndex++;
        }
        function fromEnd(){
            curr = curr.prev
            currIndex--;
        }
    }

    // insert into linked list
    insert(index, val){
        // create a new Node
        let newNode = new Node(val)

        if(index < 0) return;
        if(index == 0) this.unshift(val)
        // if the index is greater than or equal to the length of the LL
        // insert the new node to the end of the LL
        else if(index >= this.length) this.push(val)
        // if the index is in between the LL, then we are using get method to find the 
        // node which is currently in the index and update the ll
        else{
            // in case of Doubly LL we have to update 4 links when we insert a new Node
            //  1 -> 2 -> 3 -> 4 -> null : if this is our LL
            // and we have to enter a new node in between 2 and 3;

            let elementCurrentlyInTheIndex = this.get(index)    // output of this would be node 3
            elementCurrentlyInTheIndex.prev.next = newNode;     // 2.next = newNode;
            newNode.next = elementCurrentlyInTheIndex;          // newNode.next = 3
            newNode.prev = elementCurrentlyInTheIndex.prev;     // newNode.prev = 2
            elementCurrentlyInTheIndex.prev = newNode;          // 3.prev = newNode;
        }

        this.length++;
        // update length
    }

    // remove a specified node
    remove(index){
        if(index < 0 || index >= this.length) return
        else if(index == this.length-1) return this.pop() 
        else if(index == 0) return this.shift()
        //  1 -> 2 -> 3 -> 4 -> null : if we want to delete 3 from the LL
        let nodeToDelete = this.get(index);             // nodeToDelete = 3
        nodeToDelete.prev.next = nodeToDelete.next // 2.next = 4 , 2 -> 4
        nodeToDelete.next.prev = nodeToDelete.prev // 4.prev = 2 , 2 <- 4
        this.length--;
    }

    // to reverse the dll 
    reverse(){
        if(this.isEmpty()) return;
        function helper(curr){
            if(!curr) return null;
            helper(curr.next);
            let temp = curr.next
            curr.next = curr.prev
            curr.prev = temp
        }
        helper(this.head);
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    // checks whether the node is empty or not
    isEmpty(){
        if(!this.head){
            console.log('ll empty')
            return true;
        }
        return false;
    }

    // deleting all the node with the specified value
    deleteByValue(value){
        // this function will recursively delete all the element with the specified value and
        // will update length

        // if the last get deleted we have to update the tale so we are going to update the tail after all
        // the recursive call is completed and the program starts coming back. So we make the first node which 
        // does have value == curr.val is going to be the tail. Then we make the variable true because we don't
        // have to update the value of the tail again.
        let isTaleUpdated = 0;
        let helper = (curr, prev)=>{
            if(!curr) return null;
            curr.prev = prev;
            if(curr.val === value){
                this.length--;
                return helper(curr.next, prev);
            }
            curr.next = helper(curr.next, curr)
            if(!isTaleUpdated){
                this.tail = curr;
                isTaleUpdated = 1;
            }
            return curr;
        }

        this.head = helper(this.head, null)
    }

    // add newNodeValue before and after node with data == value
    insertBeforeAndAfter(value, newNodeValue){
        let helper = (curr)=>{
            if(!curr) return;
            if(curr.val == value){
                this.length += 2;
                let newNodeBefore = new Node(newNodeValue)
                newNodeBefore.next = curr;
                newNodeBefore.prev = curr.prev;
                curr.prev = newNodeBefore;

                let newNodeAfter = new Node(newNodeValue);
                if(curr.next){
                    curr.next.prev = newNodeAfter;
                }
                else{
                    this.tail = newNodeAfter
                }
                newNodeAfter.prev = curr;
                newNodeAfter.next = helper(curr.next);
                curr.next = newNodeAfter;
                return newNodeBefore;
            }
            curr.next = helper(curr.next);
            return curr;
        }
        this.head = helper(this.head)
    }

    // to remove duplicates from a sorted linked list
    removeDuplicates(){
        if(this.length <= 1) return;
        let isTaleUpdated = 0;
        let helper = (curr)=>{
            if(!curr) return
            curr.next = helper(curr.next)
            if(curr.val == curr.prev.val){
                if(curr.next)
                curr.next.prev = curr.prev;
                this.length--;
                return curr.next;
            }
            if(!isTaleUpdated){
                this.tail = curr;
                isTaleUpdated = 1;
            }
            return curr;
        }
        helper(this.head.next)
    }
}

var doublyLinkedList = new DoublyLinkedList([1, 2, 2, 2, 3, 3, 3]);
// doublyLinkedList.push(1).push(2).push(3).push(4)

doublyLinkedList.display()
doublyLinkedList.insertBeforeAndAfter(3, 4);
doublyLinkedList.displayRev();
doublyLinkedList.display()
console.log(doublyLinkedList.length)