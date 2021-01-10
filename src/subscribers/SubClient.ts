import { Topic } from "../Topic";
import { subscribers } from '../index';

export class SubClient {
  id: string;
  topicList: Set<Topic>

  constructor() {
    this.id = `s${Date.now().toString()}`;
    this.topicList = new Set();

    subscribers.add(this);
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
    return subscribers.remove(this);
  }
}