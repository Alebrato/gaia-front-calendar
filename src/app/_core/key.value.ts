/**
 * KeyValue
 */
export type KeyValue = KeyValueSimple | KeyValueGroup;
export interface KeyValueSimple {
    key: string;
    value: string;
    formatType: string;
    sort?: string;
    visible?: boolean;
    editable?: boolean;
    filtrable?: boolean;
}
export interface KeyValueGroup {
    value: string;
    elements: KeyValue[];
}

export function isKeyValueGroup(arg: any): arg is KeyValueGroup {
    return arg && arg.elements !== undefined;
}

export function reduceKeyValue(prevVal: KeyValueSimple[] = [], curVal: KeyValue): KeyValueSimple[] {
    if (!isKeyValueGroup(curVal)) {
      prevVal.push(<KeyValueSimple> curVal);
      return prevVal;
    } else {
      prevVal = prevVal.concat(curVal.elements.reduce(reduceKeyValue, []));
      return prevVal;
    }
  }
