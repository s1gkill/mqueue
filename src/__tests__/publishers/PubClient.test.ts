import { PubClient } from '../../publishers/PubClient';
import { PubRegister } from '../../publishers/PubRegister';

jest.mock('../../publishers/PubRegister.ts');

describe('PubClient', () => {
  let instance: PubClient;
  const mockAvailableTopics = jest.fn();
  PubRegister.prototype.getAvailableTopics = mockAvailableTopics;

  beforeEach(() => {
    instance = new PubClient();
  });

  describe(('initialising'), () => {
    it('should initialise with an id and empty topic list', () => {
      const { id, topicList } = instance;
      expect(id).toBeDefined();
      expect(topicList).toEqual(expect.arrayContaining([]));
    });

    it('should initialise with given topics', () => {
      const topic1 = 'topic1';
      const topic2 = 'topic2';
      instance = new PubClient([topic1, topic2])
      expect(instance.topicList).toEqual(expect.arrayContaining([topic1, topic2]));
    });
  });

  describe(('adding topic(s)'), () => {
    it('should add a new topics', () => {
      const topic1 = 'topic1';
      const topic2 = 'topic2';
      mockAvailableTopics.mockReturnValue([]);
      instance.addTopic(topic1);
      instance.addTopic(topic2);

      expect(instance.topicList).toEqual(expect.arrayContaining([topic1, topic2]));
    });

    it('should return false and log if topic already exists', () => {
      console.log = jest.fn();
      mockAvailableTopics.mockReturnValue(['topic']);

      expect(instance.addTopic('topic')).toBe(false);
      expect(console.log).toHaveBeenCalled();
    });
  });

  describe('removing topic(s)', () => {
    it('should remove topic and return true', () => {
      const topic1 = 'topic1';
      const topic2 = 'topic2';
      instance.addTopic(topic1);
      instance.addTopic(topic2);

      expect(instance.topicList).toEqual(expect.arrayContaining([topic1, topic2]));
      expect(instance.removeTopic(topic1)).toBe(true);
      expect(instance.topicList).toEqual(expect.arrayContaining([topic2]));
    });
  });

  describe('remove publisher', () => {
    it('should remove itself from the available publishers in register and return true', () => {
      expect(instance.destroy()).toBe(true);
    });
  });
});