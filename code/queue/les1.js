export default class MyCircularQueue {
  constructor (k) {
    this.list = Array(k)
    this.front = 0
    this.rear = 0
    this.max = k
  }

  // 插入元素
  enQueue (num) {
    if (!this.isFull()) {
      this.list[this.rear] = num
      this.rear = (this.rear + 1) % this.max
      return true
    }
    return false
  }

  // 删除元素
  deQueue () {
    let v = this.list[this.front]
    this.list[this.front] = ''
    this.front = (this.front + 1) % this.max
    return v
  }

  isEmpty () {
    return this.front === this.rear && !this.list[this.front]
  }

  isFull () {
    return this.front === this.rear && !!this.list[this.front]
  }

  //  从队首获取元素
  Front () {
    return this.list[this.front]
  }

  // 获取队尾元素
  Rear () {
    let rea = this.rear - 1
    return this.list[rea < 0 ? this.max - 1 : rea]
  }
}
