import { Message } from "../interfaces/Message";

interface QueueElement {
  message: Message,
  topic: string
}

export class Queue {
  queue: Array<QueueElement>;

  constructor() {
    this.queue = [];
  }

  enqueue(element: QueueElement): boolean {
    this.queue.push(element)
    return true;
  }

  dequeue(): boolean {
    if (this.isEmpty()) {
      return false;
    }

    this.queue.shift();
    return true;
  }

  getFront(): QueueElement {
    return this.queue[0];
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  printQueueElements(): void {
    console.log(this.queue);
  }
}