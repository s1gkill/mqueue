import { mQueue, publishers } from "..";
import { Client } from "../interfaces/Client";
import { Message } from "../interfaces/Message";

export class PubClient implements Client {
  id: string;
  topicList: Array<string>;

  constructor(topicList: Array<string> = []) {
    this.id = `p${Date.now().toString()}`;
    this.topicList = topicList;

    publishers.add(this);
  }

  publish(topic: string, message: Message): boolean {
    if (!this.topicExists(topic)) {
      console.log(`/// Topic with name ${topic} does not exist`);
      return false;
    }
    mQueue.enqueue({ topic, message });
    return true;
  }

  addTopic(topic: string): boolean {
    if (publishers.getAvailableTopics().includes(topic)) {
      console.log(`/// Topic with name ${topic} already exists`);
      return false;
    }

    this.topicList.push(topic);
    return true;
  }

  removeTopic(topic: string): boolean {
    this.topicList = this.topicList.filter(existingTopic => existingTopic !== topic);
    return true;
  }

  destroy(): boolean {
    return publishers.remove(this.id);
  }

  private topicExists(topic: string) {
    return !!this.topicList.find(existingTopic => existingTopic === topic);
  }
}