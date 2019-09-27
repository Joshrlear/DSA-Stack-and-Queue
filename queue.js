class Queue {
    constructor() {
        this.first = null
        this.last = null
    }

    enqueue(data) {
        // create new node with data
        const node = new _Node(data)
        // is queue empty
        if (!this.first) { this.first = node }
        // queue not empty. insert node last
        if (this.last) { this.last.next = node }
        // update node as last
        this.last = node
        return node
    }

    dequeue() {
        // queue empty
        if (!this.first) { return 'queue is empty'}
        // queue not empty
        // delcare node we wish to remove
        const node = this.first
        // reclassify the second node as the first node
        this.first = this.first.next
        // node we want to remove is the last node
        // declare last to null. to show empyt queue
        if (node === this.last) { this.last = null }
        return node.value
    }
}

class _Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

function peek(queue) {
    // queue empty
    if (!queue.last) { return 'The queue is empty'}
    return queue.first
}

function isEmpty(queue) {
    if (!queue.last) { return 'The queue is empty'}
    return 'not empty'
}

function display(queue) {
    // require stack so that we can refill queue once empty
    // we could just use queue but this is more fun
    const Stack = require('./stack')
    const stack = new Stack
    // queue empty
    if (!queue.last) { return 'The queue is empty'}
    // create array to store vals for easy viewing
    let allValues = []
    // while queue isn't empty, add values to allValues array
    // once finished queue needs to be replenished so that
    // we can make additional calls to queue
    while (queue.last) {
        allValues.push(queue.dequeue())
        stack.push(allValues[0])
    }
    // refill the now empty queue
    while (stack.top) {
        queue.enqueue(stack.pop())
    }
    return allValues
}

function favBooks() {
    const listOfBooks = new Queue
    const emptyQueue = new Queue
    listOfBooks.enqueue({ title: 'The Obstacle Is the Way: The Timeless Art of Turning Trials into Triumph', author: 'Ryan Holiday'})
    listOfBooks.enqueue({ title: 'Shoe Dog', author: 'Phil Knight'})
    listOfBooks.enqueue({ title: 'Smarter Faster Better: The Secrets of Being Productive in Life and Business', author: 'Charles Duhigg'})
    listOfBooks.enqueue({ title: 'The Lean Startup: How Today\'s Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses', author: 'Eric Ries'})
    listOfBooks.enqueue({ title: 'Elon Mush Tesla, SpaceX, and the Quest for a Fantastic Future', author: 'Ashlee Vance'})
    //console.log(listOfBooks)
    //console.log(peek(listOfBooks))
    //console.log(peek(emptyQueue))
    //console.log(isEmpty(listOfBooks))
    //console.log(isEmpty(emptyQueue))
    console.log(display(listOfBooks))
    console.log(display(emptyQueue))
}
favBooks()