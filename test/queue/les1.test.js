import MyCircularQueue from '../../code/queue/les1'

test('MyCircularQueue:1', () => {
  let queue = new MyCircularQueue(4)
  queue.enQueue(2)
  expect(queue.isFull()).toBe(false)
  expect(queue.enQueue(1)).toBe(true)
  expect(queue.Front()).toBe(2)
  expect(queue.Rear()).toBe(1)
})
