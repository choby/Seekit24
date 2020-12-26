
export interface AttributeConfig {
    relevanceAttributes: RelevanceAttribute[];
    attributes: Attribute[];
}


export interface Attribute {
    attrId: number;
    attrName: string;
    attrNameEn: string;
    attrNameKh: string;
    values: AttributeValue[];
}

export interface AttributeValue {
    attrValId: number;
    valueName: string;
    valueNameEn: string;
    valueNameKh: string;
}

export interface RelevanceAttribute {
    id: number;
    parentId: string;
    attrId: number;
    attrName: string;
    valueId: number;
    valueName: string;
    relevances: RelevanceAttribute[];
}