import { Queue } from "./queue/Queue";
import { PubClient } from "./publishers/PubClient";
import { PubRegister } from "./publishers/PubRegister";
import { SubRegister } from "./subscribers/SubRegister";
import { SubClient } from "./subscribers/SubClient";

export const mQueue = new Queue();
export const publishers = new PubRegister();
export const subscribers = new SubRegister();

const sub1 = new SubClient();
const sub2 = new SubClient();
const pub1 = new PubClient(['Money']);
const pub2 = new PubClient(['Books']);
subscribers.add(sub1);
subscribers.add(sub2);
sub1.addTopic('Money');
sub1.addTopic('Paska');
sub1.addTopic('Money');
console.log(publishers.getAvailableTopics());




