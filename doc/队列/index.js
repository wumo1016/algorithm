class Queue {
  constructor() {
    this.list = []
  }
  enqueue(val) {
    this.list.push(val)
  }
  dequeue() {
    return this.list.shift()
  }
  get() {
    return this.list
  }
}

const queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.dequeue()

console.log(queue.get())
