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
import { CostePerfil } from './costePerfil';
import { Pago } from './pago';


export interface Presupuesto {
    fechaCreacion: Date;
    fechaActualizacion: Date;
    margen: number;
    total?: number;
    costePerfiles: Array<CostePerfil>;
    pagos: Array<Pago>;
}