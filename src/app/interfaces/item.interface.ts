import { BehaviorInvoker } from './behavior-invoker.interface';
import { DragAndDrop } from './drag-and-drop.interfac';
import { Icon } from './icon.interface';
import { Invoker } from './invoker.interface';
import { ObjClass } from './obj-class.interface';
import { ShortcutInvoker } from './shortcut-invoker.interface';
import { StatusInfo } from './status-info.interface';

export interface Item {
  objId: number;
  parentId: number;
  objName: string;
  objclass: ObjClass;
  italic: boolean;
  type: string;
  sortLevel: number;
  classification: number;
  behaviors: (Invoker | null)[];
  statusInfo: StatusInfo;
  objClassIcon: Icon;
  attrValues: (string | null)[];
  onDoubleClick: BehaviorInvoker;
  onRightClick: Invoker;
  onShortcut: ShortcutInvoker;
  onDragAndDrop: DragAndDrop | null;
  onRefreshObj: Invoker;
  onPreview: BehaviorInvoker;
  tooltip: string;
  internalValue: string;
  displayValue: string;
  hasCheckbox: boolean;
  displayFormat: any | null;
}
