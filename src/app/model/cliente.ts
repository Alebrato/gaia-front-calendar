/**
 * Avertia API
 * API definition for Avertia
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@avertia.es
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Direccion } from './direccion';
import { Contacto } from './contacto';
import { Sector } from './sector';

export interface Cliente {
    id?: string;
    fechaCreacion?: Date;
    fechaActualizacion?: Date;
    cif: string;
    nombre: string;
    razonSocial: string;
    direccion?: Direccion;
    sector: Sector;
    contacto: Array<Contacto>;
}

export const keyValuesCliente = [
    {
        value: '@Completar datos del cliente', elements: [
            {
                key: 'cif', value: '@cif', formatType: 'string',
                customClass: 'column-size-2', visible: true, editable: true, filtrable: true
            },
            {
                key: 'nombre', value: '@nombre', formatType: 'string',
                customClass: 'column-size-2', visible: true, editable: true, filtrable: true
            },
            {
                key: 'razonSocial', value: '@razon Social', formatType: 'string',
                customClass: 'column-size-2', visible: true, editable: true, filtrable: true
            },
            {
                key: 'sector.nombre', value: '@nombre sector', formatType: 'string',
                customClass: 'column-size-2', visible: true, editable: true, filtrable: true
            },
        ]
    },
    {
        value: '@Completar dirección cliente', elements: [
            {
                key: 'direccion.direccion', value: '@direccion', formatType: 'string', customClass: 'column-size-3',
                visible: true, editable: true, filtrable: true
            },
            { key: 'direccion.cp', value: '@cp', formatType: 'string', visible: false, editable: true, filtrable: true },
            { key: 'direccion.poblacion', value: '@población', formatType: 'string', visible: false, editable: true, filtrable: true },
            { key: 'direccion.provincia', value: '@provincia', formatType: 'string', visible: false, editable: true, filtrable: true },
            { key: 'direccion.pais', value: '@pais', formatType: 'string', visible: false, editable: true, filtrable: true },
        ]
    },
    {
        value: '@Completar formas contacto del cliente', elements: [
        ]
    },
];
