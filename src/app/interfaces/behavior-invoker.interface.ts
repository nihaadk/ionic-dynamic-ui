import { BehaviorMethod } from './behavior-method.interface';
import { Icon } from './icon.interface';
import { Parameter } from './parameter.interface';

export interface BehaviorInvoker {
  t: string;
  objId: number;
  parentId: number;
  statusId: number;
  behavior: number;
  methods: BehaviorMethod[] | null;
  parameters: { [key: string]: Parameter };
  presentation: Icon | null;
  shortcut: string | null;
}
