import { Queue } from "./Queue";

export class QueueService {
  private static instance: Queue;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() { }

  public static getInstance(): Queue {
    if (!QueueService.instance) {
      QueueService.instance = new Queue();
    }
    return QueueService.instance;
  }
}
