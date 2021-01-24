import { PubRegister } from '../publishers/PubRegister';
import { SubClient } from '../subscribers/SubClient';

jest.mock('../publishers/PubRegister.ts');

describe('SubClient', () => {
  let instance: SubClient;
  const mockAvailableTopics = jest.fn();
  PubRegister.prototype.getAvailableTopics = mockAvailableTopics;

  beforeEach(() => {
    instance = new SubClient();
  });

  describe(('initialising'), () => {
    it('should initialise with an id that has a prefix "s" and empty topic list', () => {
      const { id, topicList } = instance;
      expect(id).toEqual(expect.stringMatching(/^s.*$/i));
      expect(topicList).toEqual(expect.arrayContaining([]));
    });
  });

  describe(('subscribing to a topic'), () => {
    it('should add a new topics into the list of subscribed topics', () => {
      const topic1 = 'topic1';
      const topic2 = 'topic2';
      mockAvailableTopics.mockReturnValue([topic1, topic2]);
      instance.addTopic(topic1);
      instance.addTopic(topic2);

      expect(instance.topicList).toEqual(expect.arrayContaining([topic1, topic2]));
    });

    it('should return false and log if topic is not available', () => {
      console.log = jest.fn();
      mockAvailableTopics.mockReturnValue(['anotherTopic']);

      expect(instance.addTopic('someTopic')).toBe(false);
      expect(console.log).toHaveBeenCalled();
    });

    it('should return false and log if already subscribed to a topic', () => {
      const topic = 'topic';
      console.log = jest.fn();
      mockAvailableTopics.mockReturnValue(['topic']);
      instance.addTopic(topic);

      expect(instance.addTopic(topic)).toBe(false);
      expect(console.log).toHaveBeenCalled();
    });
  });

  describe('unsubscribing from a topic', () => {
    it('should remove topic from subscriptions and return true', () => {
      const topic1 = 'topic1';
      const topic2 = 'topic2';
      mockAvailableTopics.mockReturnValue([topic1, topic2]);
      instance.addTopic(topic1);
      instance.addTopic(topic2);

      expect(instance.topicList).toEqual(expect.arrayContaining([topic1, topic2]));
      expect(instance.removeTopic(topic1)).toBe(true);
      expect(instance.topicList).toEqual(expect.arrayContaining([topic2]));
    });
  });

  describe('remove subscriber', () => {
    it('should remove itself from the available subscribers in register and return true', () => {
      expect(instance.destroy()).toBe(true);
    });
  });
});