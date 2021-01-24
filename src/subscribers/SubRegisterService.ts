import { SubRegister } from "./SubRegister"

export class SubRegisterService {
  private static instance: SubRegister

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() { }

  public static getInstance(): SubRegister {
    if (!SubRegisterService.instance) {
      SubRegisterService.instance = new SubRegister();
    }
    return SubRegisterService.instance;
  }
}