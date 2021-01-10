import { PubClient } from "./PubClient";

export class PubRegister {
  publishers: Set<PubClient>;

  constructor() {
    this.publishers = new Set();
  }

  add(publisher: PubClient): boolean {
    if (this.publishers.has(publisher)) {
      return false;
    }

    this.publishers.add(publisher);
    return true;
  }

  remove(publisher: PubClient): boolean {
    return this.publishers.delete(publisher);
  }

  printPublishers(): void {
    console.log(this.publishers);
  }
}