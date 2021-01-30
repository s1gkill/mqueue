import { PubClient } from "../publishers/PubClient";
import { SubClient } from "../subscribers/SubClient";

export interface Register {
  subscriber?: SubClient;
  publisher?: PubClient;
  add(arg: SubClient | PubClient): void;
  remove(arg: string): void;
}