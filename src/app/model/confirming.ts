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
 * Confirming
 */
export interface Confirming {
    id?: BSONObjectID;
    fechaCreacion?: Date;
    fechaActualizacion?: Date;
    importe?: string;
}

export const keyValuesConfirming = [
    // TODO Editar variables visibles en tabla de CRUD
    /*
     * formatType posibles:
     *      - 'date'
     *      - 'shortDate'
     *      - 'number'
     *      - 'amount'
     *      - 'percentage'
     *      - 'integer'
     *      - 'string'
     */
    { key: 'id', value: '@id', formatType: 'BSONObjectID', visible: true, editable: true} ,
    { key: 'fechaCreacion', value: '@fechaCreacion', formatType: 'Date', visible: true, editable: true} ,
    { key: 'fechaActualizacion', value: '@fechaActualizacion', formatType: 'Date', visible: true, editable: true} ,
    { key: 'importe', value: '@importe', formatType: 'string', visible: true, editable: true} ,
];

