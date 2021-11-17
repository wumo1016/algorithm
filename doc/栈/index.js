class Stack {
  constructor() {
    this.list = []
  }
  push(val) {
    this.list.push(val)
  }
  pop() {
    return this.list.pop()
  }
  get() {
    return this.list
  }
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
stack.pop()

console.log(stack.get())
