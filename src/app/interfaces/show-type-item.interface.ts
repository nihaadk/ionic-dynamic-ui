export interface ShowTypeItem {
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
    format: any | null;
    popupObjId: number;
    systemAttributeName: string | null;
    tag: string;
    tagPrefs: { [key: string]: any };
    checker: string;
}
