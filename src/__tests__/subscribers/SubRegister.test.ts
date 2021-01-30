import { SubClient } from "../../subscribers/SubClient";
import { SubRegister } from "../../subscribers/SubRegister";

describe('SubRegister', () => {
  let instance: SubRegister;

  beforeEach(() => {
    instance = new SubRegister();
  });

  describe('initialisation', () => {
    it('initialises with an empty list of subscribers', () => {
      expect(instance.getSubscribers()).toEqual(expect.arrayContaining([]));
    });
  });

  describe('adding subscriber(s)', () => {
    it('should add a new subscribers', () => {
      const sub1 = new SubClient();
      const sub2 = new SubClient();
      instance.add(sub1);
      expect(instance.getSubscribers()).toEqual(expect.arrayContaining([sub1.id]));
      instance.add(sub2);
      expect(instance.getSubscribers()).toEqual(expect.arrayContaining([sub1.id, sub2.id]));
    });
  });

  describe('removing subscriber(s)', () => {
    it('should remove subscriber', () => {
      const sub1 = new SubClient();
      const sub2 = new SubClient();
      instance.add(sub1);
      instance.add(sub2);
      instance.remove(sub1.id);
      expect(instance.getSubscribers()).toEqual(expect.arrayContaining([sub2.id]));
    });
  });
});