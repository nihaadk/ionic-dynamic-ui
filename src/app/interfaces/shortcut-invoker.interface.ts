import { Invoker } from "./invoker.interface";

export interface ShortcutInvoker extends Invoker {
    tempParamkey: string;
}