import { Register } from "../interfaces/Register";
import { PubClient } from "./PubClient";

export class PubRegister implements Register {
  publishers: PubClient[];

  constructor() {
    this.publishers = [];
  }

  add(publisher: PubClient): boolean {
    this.publishers.push(publisher);
    return true;
  }

  remove(publisherId: string): boolean {
    this.publishers = this.publishers.filter(publisher => publisher.id !== publisherId);
    return true;
  }

  getAvailableTopics(): string[] {
    console.log(this.publishers)
    return this.publishers.reduce((topics, { topicList }) => [...topics, ...topicList], <string[]>[]);
  }

  getPublishers(): string[] {
    return this.publishers.map(publisher => publisher.id);
  }
}