import { mQueue } from "..";
import { Client } from "../interfaces/Client";
import { Message } from "../interfaces/Message";
import { generateGUID } from "../utils";
import { PubRegister } from "./PubRegister";
import { PubRegisterService } from "./PubRegisterService";

export class PubClient implements Client {
  id: string;
  topicList: Array<string>;
  publishers: PubRegister;

  constructor(topicList: Array<string> = []) {
    this.id = generateGUID();
    this.topicList = topicList;

    this.publishers = PubRegisterService.getInstance();
    this.publishers.add(this);
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
    if (this.publishers.getAvailableTopics().includes(topic)) {
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
    this.publishers.remove(this.id);
    return true;
  }

  private topicExists(topic: string) {
    return !!this.topicList.find(existingTopic => existingTopic === topic);
  }
}