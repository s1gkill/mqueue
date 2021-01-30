import { Client } from "../interfaces/Client";
import { SubRegister } from './SubRegister';
import { SubRegisterService } from './SubRegisterService';
import { PubRegisterService } from '../publishers/PubRegisterService';
import { PubRegister } from "../publishers/PubRegister";
import { generateGUID } from "../utils";

// TODO: abstract class for clients?
export class SubClient implements Client {
  id: string;
  topicList: Array<string>;
  subscribers: SubRegister;
  publishers: PubRegister;

  constructor(topicList: Array<string> = []) {
    this.id = generateGUID();
    this.topicList = topicList;

    this.subscribers = SubRegisterService.getInstance();
    this.publishers = PubRegisterService.getInstance();

    this.subscribers.add(this);
  }

  // TODO: validate topic string format
  addTopic(topic: string): boolean {
    if (!this.publishers.getAvailableTopics().includes(topic)) {
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

  // TODO: remove instance or opt out from receiving events? will GC remove it?
  destroy(): boolean {
    this.subscribers.remove(this.id);
    return true;
  }

  private subscriptionExists(topic: string): boolean {
    return !!this.topicList.find(existingTopic => existingTopic === topic);
  }
}