import { mQueue, publishers } from "..";
import { Message } from "../Message";
import { Topic } from "../Topic";

export class PubClient {
  id: string;
  topicList: Set<Topic>

  constructor() {
    this.id = `p${Date.now().toString()}`;
    this.topicList = new Set();

    publishers.add(this);
  }

  publish(topic: Topic, message: Message): boolean {
    if (!this.topicList.has(topic)) {
      return false;
    }

    mQueue.enqueue({ topic, message });
    return true;
  }

  addTopic(topic: Topic): boolean {
    if (this.topicList.has(topic)) {
      return false;
    }

    this.topicList.add(topic);
    return true;
  }

  removeTopic(topic: Topic): boolean {
    return this.topicList.delete(topic);
  }

  destroy(): boolean {
    return publishers.remove(this);
  }
}