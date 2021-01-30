import { PubClient } from "../../publishers/PubClient";
import { PubRegister } from "../../publishers/PubRegister";

describe('PubRegister', () => {
  let instance: PubRegister;

  beforeEach(() => {
    instance = new PubRegister();
  });

  describe('initialisation', () => {
    it('initialises with an empty list of publishers', () => {
      expect(instance.getPublishers()).toEqual(expect.arrayContaining([]));
    });
  });

  describe('adding publishers(s)', () => {
    it('should add a new publishers', () => {
      const pub1 = new PubClient();
      const pub2 = new PubClient();
      instance.add(pub1);
      expect(instance.getPublishers()).toEqual(expect.arrayContaining([pub1.id]));
      instance.add(pub2);
      expect(instance.getPublishers()).toEqual(expect.arrayContaining([pub1.id, pub2.id]));
    });
  });

  describe('removing subscriber(s)', () => {
    it('should remove subscriber', () => {
      const pub1 = new PubClient();
      const pub2 = new PubClient();
      instance.add(pub1);
      instance.add(pub2);
      instance.remove(pub1.id);
      expect(instance.getPublishers()).toEqual(expect.arrayContaining([pub2.id]));
    });
  });
});