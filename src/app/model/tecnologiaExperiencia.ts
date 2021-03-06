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
import { Experiencia } from './experiencia';
import { Tecnologia } from './tecnologia';


/**
 * Tecnologia dentro de un cv
 */
export interface TecnologiaExperiencia {
    tecnologia: Tecnologia;
    experiencia: Experiencia;
    masInfo?: string;
}
