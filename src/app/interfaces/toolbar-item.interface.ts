import { Icon } from "./icon.interface";
import { Parameter } from "./parameter.interface";

export interface ToolbarItem {
    t: string;
    objId: number;
    activityId: number;
    methodId: number;
    parentId: number;
    methodName: string | null;
    parameters: { [key: string]: Parameter };
    presentation: Icon;
    shortcut: string | null;
    reference: string | null;
    target: string | null;
    tempParamkeyObjlistSelected: string;
    tempParamkeyObjlistViewed: string;
}