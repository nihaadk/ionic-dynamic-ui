// export interface ObjForm {
//   t: string;
//   target: string;
//   txnId: string;
//   windowName: string;
//   attributeProfileId: number;
//   autoResize: boolean;
//   hasKeepAliveThread: boolean;
//   isViewMode: boolean;
//   dialogPrefs: DialogPreferences;
//   attributeValues: AttributeValues;
//   showTypes: ShowTypes;
// }

// interface DialogPreferences {
//   toolbar: string;
//   menubar: string;
//   scrollbars: string;
//   resizable: string;
//   width: string;
//   location: string;
//   height: string;
//   status: string;
// }

// interface AttributeValue {
//   t: string;
//   internalValue: string;
//   displayValue: string;
// }

// interface AttributeValues {
//   [key: string]: AttributeValue;
// }

// interface ShowTypes {
//   [key: string]: ShowType;
// }

// interface ShowType {
//     t: string;
//     name: string;
//     items: string[];
//     maxHSize: number;
//     maxVSize: number;
//   }

interface DialogPreferences {
  toolbar: string;
  menubar: string;
  scrollbars: string;
  resizable: string;
  width: string;
  location: string;
  height: string;
  status: string;
}

interface AttributeValue {
  t: string;
  internalValue: string;
  displayValue: string;
}

interface AttributeValues {
  [key: string]: AttributeValue;
}

interface Option {
  t: string;
  internalValue: string;
  displayValue: string;
}

interface ShowTypeItem {
  t: string;
  attributeName: string;
  displayName: string;
  displayNameWidth: number;
  hPos: number;
  vPos: number;
  colSpan: number;
  rowSpan: number;
  attributeProfileId: number;
  showType: string;
  seq: number;
  mandatory: boolean;
  hidden: boolean;
  readonly: boolean;
  popupMandatory: string;
  attrType: string;
  alignment: string;
  info: string;
  format: string | null;
  popupObjId: number;
  systemAttributeName: string | null;
  tag: string;
  tagPrefs: Record<string, string>;
  icon?: string | null;
  checker?: string;
  reference?: string | null;
  options?: Option[];
  invokerRequest?: InvokerRequest;
}

interface InvokerRequest {
  t: string;
  parameters: Record<string, string>;
  txnId: string;
  stepNo: number;
  presentation: string | null;
  shortcut: string;
}

interface ShowType {
  t: string;
  name: string;
  items: ShowTypeItem[];
  maxHSize: number;
  maxVSize: number;
}

interface ShowTypes {
  [key: string]: ShowType;
}

export interface ObjForm {
  t: string;
  target: string;
  txnId: string;
  windowName: string;
  attributeProfileId: number;
  autoResize: boolean;
  hasKeepAliveThread: boolean;
  isViewMode: boolean;
  dialogPrefs: DialogPreferences;
  attributeValues: AttributeValues;
  showTypes: ShowTypes;
}
