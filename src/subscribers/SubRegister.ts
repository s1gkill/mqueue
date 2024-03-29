import { Register } from "../interfaces/Register";
import { SubClient } from "./SubClient";

export class SubRegister implements Register {
  private subscribers: SubClient[];

  constructor() {
    this.subscribers = [];
  }

  add(subscriber: SubClient): void {
    this.subscribers.push(subscriber);
  }

  remove(subscriberId: string): void {
    this.subscribers = this.subscribers.filter(subscriber => subscriber.id !== subscriberId);
  }

  getSubscribers(): string[] {
    return this.subscribers.map(subscriber => subscriber.id);
  }
}