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
 * SignUp object
 */
export interface SignUp {
    /**
     * user unique identifier
     */
    identifier: string;
    password: string;
    /**
     * e-mail address
     */
    email: string;
    /**
     * user first name
     */
    firstName: string;
    /**
     * user last name
     */
    lastName: string;
    /**
     * user roles
     */
    roles: Array<Rol>;
}
