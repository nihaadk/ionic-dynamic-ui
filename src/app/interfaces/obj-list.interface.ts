import { ColumnFormat } from "./column-format.interface";
import { DragAndDrop } from "./drag-and-drop.interfac";
import { FlexGridOptions } from "./flex-grid-options.interface";
import { Invoker } from "./invoker.interface";
import { Item } from "./item.interface";
import { ShortcutInvoker } from "./shortcut-invoker.interface";
import { ShowType } from "./show-type.interface";
import { ToolbarItem } from "./toolbar-item.interface";

export interface Objlist {
    t: string;
    target: string;
    objId: number;
    parentId: number;
    objName: string;
    attributeProfileId: number;
    autoRefreshIntervalSeconds: number | null;
    attrNames: string[];
    attrTypes: string[];
    attrFormats: string[];
    headerInfos: string[];
    items: Item[];
    columnFormats: ColumnFormat[];
    conditionalFormatting: string[];
    onRightClick: Invoker;
    onShortcut: ShortcutInvoker;
    onDragAndDrop: DragAndDrop | null;
    onRefresh: Invoker;
    toolbar: ToolbarItem[];
    breadcrumb: any | null;
    checkboxesEnabled: boolean;
    checkboxesAlwaysVisible: boolean;
    multiselect: boolean;
    exportToPdf: boolean;
    exportToExcel: boolean;
    selectedItemIndex: number;
    header: any | null;
    breadcrumbOption: string;
    previewOptions: string;
    flexGridOptions: FlexGridOptions;
    showTypes: { [key: string]: ShowType };
}
