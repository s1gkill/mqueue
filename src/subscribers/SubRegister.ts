import { Register } from "../interfaces/Register";
import { SubClient } from "./SubClient";

export class SubRegister implements Register {
  subscribers: Array<SubClient>;

  constructor() {
    this.subscribers = [];
  }

  add(subscriber: SubClient): boolean {
    this.subscribers.push(subscriber);
    return true;
  }

  remove(subscriberId: string): boolean {
    this.subscribers = this.subscribers.filter(subscriber => subscriber.id !== subscriberId);
    return true;
  }

  printSubscribers(): void {
    console.log(this.subscribers);
  }
}