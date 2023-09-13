export interface Question {
    id: number,
    name: string,
    text: string,
    uiType: string,
    valueType: string,
    valueOptions: ValueOption[],
}

interface ValueOption {
    nextId: number | boolean,
    value: number | boolean | string,
    text: string
}

export interface Answer {
    name: string,
    value: number | boolean | string
}