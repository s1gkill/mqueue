import { Message } from "../Message";
import { Topic } from "../Topic";

interface QueueElement {
  message: Message,
  topic: Topic
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

  dequeue(): void {
    this.queue.pop();
  }

  printQueueElements(): void {
    console.log(this.queue);
  }
}