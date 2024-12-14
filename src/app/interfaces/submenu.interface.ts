
import { Icon } from "./icon.interface";
import { Invoker } from "./invoker.interface";

export interface SubMenu {
    name: string;
    icon: Icon;
    invokers: Invoker[];
  }
  