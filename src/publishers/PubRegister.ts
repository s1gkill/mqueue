import { Register } from "../interfaces/Register";
import { PubClient } from "./PubClient";

export class PubRegister implements Register {
  publishers: Array<PubClient>

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

  getAvailableTopics(): Array<string> {
    return this.publishers.reduce((topics, { topicList }) => [...topics, ...topicList], <string[]>[]);
  }

  printPublishers(): void {
    console.log(this.publishers);
  }
}