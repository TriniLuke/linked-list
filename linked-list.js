// Linked List using JavaScript

class Node { // create a node class
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList { // create a linked list
  constructor() {
    this.head = null
    this.size = 0
  }

  isEmpty() { // check if its empty
    return this.size === 0
  }

  getSize() { // return size or number of items in the list
    return this.size
  }

  prepend(value) { // add a value to the front of the list
    const node = new Node(value)
    if(!this.isEmpty()) {
      node.next = this.head
      this.head = node
    }
    this.head = node
    this.size++
  }

  append(value) { // add a value to the end of the list
    const node = new Node(value)
    if(this.isEmpty()) {
      this.head = node
    } else {
      let prev = this.head
      while(prev.next) {
        prev = prev.next
      }
      prev.next = node
    }
    this.size++
  }

  getHead() { // get the item at the beginning of the list
    if(this.isEmpty()) {
      console.log('This list is empty')
      return -1
    }
    return this.head.value
  }

  getTail() { // get last item in the list
    if(this.isEmpty()) {
      console.log('This list is empty')
      return -1
    } else {
      let curr = this.head
      while(curr.next) {
        curr = curr.next
        if(curr.next === null) return curr.value
      }
    }
  }

  at(index) { // return item at specific index in the list
    if(index < 0 || index >= this.size) {
      console.log('List is empty')
      return null
    }
    let curr = this.head
    if(index === 0) {
      this.head = this.head.null
    } else {
      for(let i = 0; i < index; i++) {
        curr = curr.next
      }
    }
    return curr.value
  }

  insertAt(value, index) { // insert item at a specific index in the list
    if(index < 0 || index > this.size) return
    if(index === 0) {
      this.prepend(value)
    } else {
      const node = new Node(value)
      let prev = this.head
      for(let i = 0; i < index - 1; i++) {
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size++
    }
  }

  removeAt(index) { // remove an item at a specific index in the list
    if(index < 0 || index >= this.size) {
      console.log('List is empty')
      return null
    }
    let removedNode
    if(index === 0) {
      removedNode = this.head
      this.head = this.head.null
    } else {
      let prev = this.head
      for(let i = 0; i < index - 1; i++) {
        prev = prev.next
      }
      removedNode = prev.next
      prev.next = removedNode.next
    }
    this.size--
    return removedNode.value
  }

  pop() { // remove an item at the end of the list
    if(this.isEmpty()) {
      return -1;
    } else {
      let curr = this.head
      let prev = this.head

      while(curr.next) {
        prev = curr
        curr = curr.next
      }
      prev.next = null

      this.size--
      return curr.value;
    }
  }

  find(value) { // return an item if it is in the list
    if(this.isEmpty()) return -1;
    let curr = this.head
    let i = 0
    while(curr) {
      if(curr.value === value) {
        return i
      }
      curr = curr.next
      i++
    }
    return -1
  }

  contains(value) { // true if an item is in the list
    if(this.isEmpty()) return false
    let curr = this.head
    let i = 0
    while(curr) {
      if(curr.value === value) {
        return true
      }
      curr = curr.next
      i++
    }
    return false
  }

  toString() { // return a string of all the items in the list
    if(this.isEmpty()) {
      console.log('List is empty')
    } else {
      let curr = this.head
      let listValues = ''
      while(curr) {
        listValues += `${curr.value} `
        curr = curr.next
      }
      console.log(listValues)
    }
  }
}
