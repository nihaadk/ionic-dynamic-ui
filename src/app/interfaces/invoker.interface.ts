import { Icon } from "ionicons/dist/types/components/icon/icon";
import { Parameter } from "./parameter.interface";

export interface Invoker {
  t: string;
  objId: number;
  activityId: number;
  methodId: number;
  parentId: number;
  methodName: string;
  parameters: { [key: string]: Parameter };
  presentation: Icon;
  shortcut: string;
  reference: string | null;
  target: string | null;
  tempParamkeyObjlistSelected: string;
  tempParamkeyObjlistViewed: string;
}
