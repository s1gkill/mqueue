import { PubRegister } from "./PubRegister";

export class PubRegisterService {
  private static instance: PubRegister

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() { }

  public static getInstance(): PubRegister {
    if (!PubRegisterService.instance) {
      PubRegisterService.instance = new PubRegister();
    }
    return PubRegisterService.instance;
  }
}