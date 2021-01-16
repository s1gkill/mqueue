import { Register } from "../interfaces/Register";
import { SubClient } from "./SubClient";

export class SubRegister implements Register {
  subscribers: Set<SubClient>;

  constructor() {
    this.subscribers = new Set();
  }

  add(subscriber: SubClient): boolean {
    if (this.subscribers.has(subscriber)) {
      return false;
    }

    this.subscribers.add(subscriber);
    return true;
  }

  remove(subscriber: SubClient): boolean {
    return this.subscribers.delete(subscriber);
  }

  printSubscribers(): void {
    console.log(this.subscribers);
  }
}