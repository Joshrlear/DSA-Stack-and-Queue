class Stack {
    constructor() {
        this.top = null
    }

    push(data) {
        // empty stack, create placeholder node
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }
        // insert nodeat top, replace placeholder node if exists
        const node = new _Node(data, this.top)
        this.top = node
    }
    
    pop() {
        // declare top node
        const node = this.top
        // remove current top and make next the new top
        this.top = node.next
        return node.data
    }

    peek() {
        // empty stack
        if (!this.top) { return ' list is empty' }
        return this.top
    }

    isEmpty() {
        const result = !this.top ? true : false
        return result
    }

    display(n) {
        if (!this.top) { return ' list is empty' }
        let result = n <= 1 && this.top
        let currNode = this.top
        let count = 1
        while (currNode !== null && n > 1 && count !== n) {
            count ++
            currNode = currNode.next
            result = currNode
            if (!currNode.next) { return 'item does not exist' }
        }
        return result
    }
}

class _Node {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}


module.exports = Stack;

function currentAnime() {
    let fairyTail = new Stack
    //console.log('is empty before list:', fairyTail.isEmpty())
    fairyTail.push('natsu')
    fairyTail.push('gray')
    fairyTail.push('happy')
    fairyTail.push('lucy')
    fairyTail.push('erza')
    fairyTail.push('jellal')
    //console.log('before pop:', JSON.stringify(fairyTail))
    //console.log('top before pop:', fairyTail.peek())
    fairyTail.pop()
    //console.log('after pop:', JSON.stringify(fairyTail))
    //console.log('top after pop:', fairyTail.peek())
    //console.log('is empty after list:', fairyTail.isEmpty())
    //console.log('display 3rd:', fairyTail.display(2))
    return fairyTail
}
//currentAnime()

function is_palindrome(s) {
    // create variables to compare
    const stack = new Stack
    const reversed = new Stack

    // check if empty
    if (!s) { return 'cannot parse empty input'}
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    
    // push to stack
    for (i of s) { stack.push(i) }
    // convert to string so that it doesn't
    // change on pop
    const first = JSON.stringify(stack)

    // push to reversed
    while (stack.top) { reversed.push(stack.pop()) }
    // convert to string b/c stack is string
    const second = JSON.stringify(reversed)

    // return true/false
    return first === second
}

// True, true, true, false
//console.log(is_palindrome("dad"));
//console.log(is_palindrome("A man, a plan, a canal: Panama"));
//console.log(is_palindrome("1001"));
//console.log(is_palindrome("Tauhida"));
//console.log(is_palindrome())

function balancePar(s) {
    // is empty
    if (!s) { return 'cannot parse empty string'}
    // add open parenthases to stack
    const stack = new Stack
    let i = 0
    while (s.length > i) {

        // if open, push to stack
        s[i] === '[' && stack.push(s[i])
        s[i] === '{' && stack.push(s[i])
        s[i] === '(' && stack.push(s[i])
        
        // if closeout properly, pop
        s[i] === ']' && stack.peek().data === '[' && stack.pop()
        s[i] === '}' && stack.peek().data === '{' && stack.pop()
        s[i] === ')' && stack.peek().data === '(' && stack.pop()

        i ++
    }
    let msg = !stack.peek().data ? true : false
    return msg
}

//console.log('1',balancePar('for (i of arr) { return 2 }')) // should be true
//console.log('2',balancePar('[1,2,3,{item: test}, 5]')) // should be true
//console.log('3',balancePar('{arr1: [1,2,3], arr2: [4,5]}')) // should be true
//console.log('4',balancePar('[({}[])]')) // should be true
//console.log('5',balancePar('[{({})]]')) // should be false
//console.log('6',balancePar('')) // should be "cannot parse empty string"

function list() {
    let list = new Stack
    list.push(1)
    list.push(5)
    list.push(2)
    list.push(12)
    list.push(6)
    list.push(8)
    return list
}

function sort(stack) {
    // if empty
    if (!stack) { return 'cannot sort empty stack'}
    // only one in stack
    if (!stack.top.next) { return 'stack already sorted'}
    // declare empty sortedStack
    let sorted = new Stack
    sorted.push(stack.pop())
    // while stack not empty
    while (!stack.isEmpty()) {
        // stack.top is temp
        let temp = stack.pop()
        // while sorted not empty and temp larger than sorted.top
        while (!sorted.isEmpty() && temp > sorted.peek().data) {
            // temp greater. pop sorted, push to stack
            // push temp to sorted. stack.top now temp
            // now is < sorted.top. break condition
            // move back to 1st loop
            stack.push(sorted.pop())
        }
        sorted.push(temp)
    }
    return sorted
}

//console.log(JSON.stringify(sort(list())))
//console.log(JSON.stringify(sort(currentAnime())))