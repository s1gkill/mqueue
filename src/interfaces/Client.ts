export interface Client {
  id: string;
  topicList: Array<string>;
  addTopic(arg: string): boolean;
  removeTopic(arg: string): boolean;
  destroy(): void;
}