/**
 * Avertia Security
 * API definition for Avertia Security
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@avertia.es
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Rol } from './rol';


/**
 * Token object
 */
export interface Token {
    /**
     * Token value
     */
    readonly token?: string;
    /**
     * Expiry date
     */
    readonly expiresOn?: Date;
    /**
     * User identifier
     */
    readonly username?: string;
    /**
     * User email
     */
    readonly email?: string;
    /**
     * User name
     */
    readonly name?: string;
    /**
     * User roles
     */
    readonly roles?: Array<Rol>;
}