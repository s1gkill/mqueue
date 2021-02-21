export interface Client {
  id: string;
  topicList: string[];
  addTopic(arg: string): boolean;
  removeTopic(arg: string): boolean;
  destroy(): void;
}