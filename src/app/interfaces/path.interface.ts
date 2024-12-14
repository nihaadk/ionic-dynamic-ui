import { Icon } from "ionicons/dist/types/components/icon/icon";
import { Invoker } from "./invoker.interface";

export interface Path {
  name: string;
  icon: Icon;
  invokers: Invoker[];
}