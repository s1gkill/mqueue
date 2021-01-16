import { publishers, subscribers } from '../index';
import { Client } from "../interfaces/Client";

// TODO: abstract class for clients?
export class SubClient implements Client {
  id: string;
  topicList: Array<string>;

  constructor(topicList: Array<string> = []) {
    this.id = `s${Date.now().toString()}`;
    this.topicList = topicList;

    subscribers.add(this);
  }

  addTopic(topic: string): boolean {
    if (!publishers.getAvailableTopics().includes(topic)) {
      console.log(`/// Topic with name '${topic}' does not exist ///`);
      return false;
    }

    if (this.subscriptionExists(topic)) {
      console.log(`/// Already subscribed to topic with name '${topic}' ///`);
      return false;
    }

    this.topicList.push(topic);
    return true;
  }

  removeTopic(topic: string): boolean {
    this.topicList = this.topicList.filter(existingTopic => existingTopic !== topic);
    return true;
  }

  // TODO: remove instance or opt out from receiving events?
  destroy(): boolean {
    return subscribers.remove(this);
  }

  private subscriptionExists(topic: string): boolean {
    return !!this.topicList.find(existingTopic => existingTopic === topic);
  }
}