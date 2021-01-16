import { PubClient } from "../publishers/PubClient";
import { SubClient } from "../subscribers/SubClient";

export interface Register {
  subscriber?: SubClient;
  publisher?: PubClient;
  add(arg: SubClient | PubClient): boolean;
  remove(arg: string): boolean;
}