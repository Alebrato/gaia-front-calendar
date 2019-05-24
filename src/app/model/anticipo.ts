/**
 * Avertia Financieros
 * API definition for Avertia Financieros
 *
 * OpenAPI spec version: 1.0.0
 * Contact: sistemas@avertia.es
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { BSONObjectID } from './bSONObjectID';


/**
 * Anticipo
 */
export interface Anticipo {
    id?: BSONObjectID;
    fechaCreacion?: Date;
    fechaActualizacion?: Date;
    importe?: number;
    banco?: string;
    cuentas?: number;
}

export const keyValuesAnticipo = [
    // TODO Editar variables visibles en tabla de CRUD
    /*
     * formatType posibles:
     *      - 'date'
     *      - 'shortdate'
     *      - 'number'
     *      - 'amount'
     *      - 'percentage'
     *      - 'integer'
     *      - 'string'
     */
    { key: 'fechaCreacion', value: '@fechaCreacion', formatType: 'Date', visible: true, editable: false, filtrable: false} ,
    { key: 'fechaActualizacion', value: '@fechaActualizacion', formatType: 'Date', visible: true, editable: false, filtrable: false} ,
    { key: 'importe', value: '@importe', formatType: 'amount', visible: true, editable: true, filtrable: true} ,
    { key: 'banco', value: '@banco', formatType: 'string', visible: true, editable: true, filtrable: true} ,
    { key: 'cuentas', value: '@cuentas', formatType: 'number', visible: true, editable: true, filtrable: true} ,
];
