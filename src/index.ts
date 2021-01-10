import { Queue } from "./queue/Queue";
import { PubRegister } from "./publishers/PubRegister";
import { SubRegister } from "./subscribers/SubRegister";

export const mQueue = new Queue();
export const publishers = new PubRegister();
export const subscribers = new SubRegister();

// const subRegister = new SubRegister();
// const sub1 = new SubClient('123');
// const sub2 = new SubClient('456');
// subRegister.add(sub1);
// subRegister.add(sub2);
// subRegister.printSubscribers();
// const topic1 = new Topic('topic1');
// sub1.addTopic(topic1);
// sub1.publish(topic1, new Message('key', 'value'));
// MQueue.printQueueElements();



