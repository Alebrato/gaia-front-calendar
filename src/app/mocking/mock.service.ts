import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Sociedad } from '../model/sociedad';
import { Oficina } from '../model/oficina';
import { Direccion } from '../model/direccion';
import { Empleado } from '../model/empleado';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';
import { Rol } from '../model/rol';

@Injectable()
export class MockService implements InMemoryDbService {
  createDb() {
    const myes = [
      { id: 1, name: 'Zero' },
      { id: 11, name: 'Mr. Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    const clientes: Cliente[] = [
      {
        id: '1',
        fechaCreacion: new Date('08/01/19'),
        fechaActualizacion: new Date('08/01/19'),
        cif: '77777276',
        nombre: 'Cliente1',
        razonSocial: 'Consultoria',
        direccion: {
          id: '1',
          direccion: 'C/ Me falta un Tornillo nº2',
          cp: '09001',
          poblacion: 'Burgos',
          provincia: 'Burgos',
          pais: 'España'
        },
        sector: {
          id: '1',
          nombre: 'Alimentación',
          descripcion: undefined
        },
        contacto: [
          {
            titulo: 'Paquita Salas',
            nombre: 'encargada',
            telefono: '666 333 222',
            email: 'psalas@cliente.com',
            comentarios: undefined
          }
        ]
      },
      {
        id: '2',
        fechaCreacion: new Date('08/01/19'),
        fechaActualizacion: new Date('08/01/19'),
        cif: '77777276',
        nombre: 'Cliente2',
        razonSocial: 'Consultoria',
        direccion: {
          id: '1',
          direccion: 'C/ Me falta un Tornillo nº2',
          cp: '09001',
          poblacion: 'Burgos',
          provincia: 'Burgos',
          pais: 'España'
        },
        sector: {
          id: '1',
          nombre: 'Alimentación',
          descripcion: undefined
        },
        contacto: [
          {
            titulo: 'Paquita Salas',
            nombre: 'encargada',
            telefono: '666 333 222',
            email: 'psalas@cliente.com',
            comentarios: undefined
          }
        ]
      },
      {
        id: '3',
        fechaCreacion: new Date('08/01/19'),
        fechaActualizacion: new Date('08/01/19'),
        cif: '77777276',
        nombre: 'Cliente 3',
        razonSocial: 'Consultoria',
        direccion: {
          id: '1',
          direccion: 'C/ Me falta un Tornillo nº2',
          cp: '09001',
          poblacion: 'Burgos',
          provincia: 'Burgos',
          pais: 'España'
        },
        sector: {
          id: '1',
          nombre: 'Alimentación',
          descripcion: undefined
        },
        contacto: [
          {
            titulo: 'Paquita Salas',
            nombre: 'encargada',
            telefono: '666 333 222',
            email: 'psalas@cliente.com',
            comentarios: undefined
          }
        ]
      }
    ];
    const sociedades: Sociedad[] = [
      {
        id: '1',
        nombre: 'Sociedad 1',
        cif: '1234567H',
        direccionSocial: {
          id: '1',
          cp: '47001',
          provincia: 'Valladolid',
          poblacion: 'Valladolid',
          direccion: 'C/ Me falta un Tornillo nº2',
          pais: 'España'
        },
        direccionFiscal: {
          id: '1',
          cp: '47001',
          provincia: 'Valladolid',
          poblacion: 'Valladolid',
          direccion: 'C/ Me falta un Tornillo nº2',
          pais: 'España'
        }
      },
      {
        id: '2',
        nombre: 'Sociedad 2',
        cif: '1234567H',
        direccionSocial: {
          id: '1',
          cp: '47001',
          provincia: 'Valladolid',
          poblacion: 'Valladolid',
          direccion: 'C/ Me falta un Tornillo nº2',
          pais: 'España'
        },
        direccionFiscal: {
          id: '1',
          cp: '47001',
          provincia: 'Valladolid',
          poblacion: 'Valladolid',
          direccion: 'C/ Me falta un Tornillo nº2',
          pais: 'España'
        }
      },
      {
        id: '3',
        nombre: 'Sociedad 3',
        cif: '1234567H',
        direccionSocial: {
          id: '1',
          cp: '47001',
          provincia: 'Valladolid',
          poblacion: 'Valladolid',
          direccion: 'C/ Me falta un Tornillo nº2',
          pais: 'España'
        },
        direccionFiscal: {
          id: '1',
          cp: '47001',
          provincia: 'Valladolid',
          poblacion: 'Valladolid',
          direccion: 'C/ Me falta un Tornillo nº2',
          pais: 'España'
        }
      }
    ];
    const oficinas: Oficina[] = [
      {
        id: '1',
        nombre: 'Oficina1',
        direccion: {
          id: '1',
          direccion: 'C/ Me falta un Tornillo nº2',
          cp: '09001',
          poblacion: 'Burgos',
          provincia: 'Burgos',
          pais: 'España'
        },
        contacto: {
          id: '1',
          fechaCreacion: new Date('08/01/19'),
          fechaActualizacion: new Date('08/01/19'),
          nombre: 'pepe',
          apellidos: 'apellido1',
          direccion: {
            id: '1',
            direccion: 'C/ Me falta un Tornillo nº2',
            cp: '09001',
            poblacion: 'Burgos',
            provincia: 'Burgos',
            pais: 'España'
          },
          email: 'mail@avertia.es',
          telefono: '656 66 66 88',
          sociedad: {
            id: '1',
            nombre: 'Sociedad 1',
            cif: '1234567H',
            direccionSocial: {
              id: '1',
              cp: '47001',
              provincia: 'Valladolid',
              poblacion: 'Valladolid',
              direccion: 'C/ Me falta un Tornillo nº2',
              pais: 'España'
            },
            direccionFiscal: {
              id: '1',
              cp: '47001',
              provincia: 'Valladolid',
              poblacion: 'Valladolid',
              direccion: 'C/ Me falta un Tornillo nº2',
              pais: 'España'
            }
          },
          oficina: {
            id: '1',
            nombre: 'Oficina1',
            direccion: {
              id: '1',
              direccion: 'C/ Me falta un Tornillo nº2',
              cp: '09001',
              poblacion: 'Burgos',
              provincia: 'Burgos',
              pais: 'España'
            },
            contacto: {
              id: '1',
              fechaCreacion: new Date('08/01/19'),
              fechaActualizacion: new Date('08/01/19'),
              nombre: 'Bogavante',
              apellidos: 'apellido1',
              direccion: {
                id: '1',
                direccion: 'C/ Me falta un Tornillo nº2',
                cp: '09001',
                poblacion: 'Burgos',
                provincia: 'Burgos',
                pais: 'España'
              },
              email: 'mail@avertia.es',
              telefono: '656 66 66 88',
              sociedad: {
                id: '1',
                nombre: 'Sociedad 1',
                cif: '1234567H',
                direccionSocial: {
                  id: '1',
                  cp: '47001',
                  provincia: 'Valladolid',
                  poblacion: 'Valladolid',
                  direccion: 'C/ Me falta un Tornillo nº2',
                  pais: 'España'
                },
                direccionFiscal: {
                  id: '1',
                  cp: '47001',
                  provincia: 'Valladolid',
                  poblacion: 'Valladolid',
                  direccion: 'C/ Me falta un Tornillo nº2',
                  pais: 'España'
                }
              },
              oficina: undefined,
              ubicacion: 'Burgos',
              cargos: [],
              salario: '6000',
              otros: 'null',
            },
            fechaCreacion: new Date('08/01/19'),
            fechaActualizacion: new Date('08/01/19'),
          },
          ubicacion: 'Burgos',
          cargos: [],
          salario: '6000',
          otros: 'null',
        },
        fechaCreacion: new Date('08/01/19'),
        fechaActualizacion: new Date('08/01/19'),
      },
      {
        id: '2',
        nombre: 'Oficina2',
        direccion: {
          id: '1',
          direccion: 'C/ Me falta un Tornillo nº2',
          cp: '09001',
          poblacion: 'Burgos',
          provincia: 'Burgos',
          pais: 'España'
        },
        contacto: {
          id: '1',
          fechaCreacion: new Date('08/01/19'),
          fechaActualizacion: new Date('08/01/19'),
          nombre: 'Rodolfo',
          apellidos: 'apellido1',
          direccion: {
            id: '1',
            direccion: 'C/ Me falta un Tornillo nº2',
            cp: '09001',
            poblacion: 'Burgos',
            provincia: 'Burgos',
            pais: 'España'
          },
          email: 'mail@avertia.es',
          telefono: '656 45 67 23',
          sociedad: {
            id: '1',
            nombre: 'Sociedad 1',
            cif: '1234567H',
            direccionSocial: {
              id: '1',
              cp: '47001',
              provincia: 'Valladolid',
              poblacion: 'Valladolid',
              direccion: 'C/ Me falta un Tornillo nº2',
              pais: 'España'
            },
            direccionFiscal: {
              id: '1',
              cp: '47001',
              provincia: 'Valladolid',
              poblacion: 'Valladolid',
              direccion: 'C/ Me falta un Tornillo nº2',
              pais: 'España'
            }
          },
          oficina: undefined,
          ubicacion: 'Burgos',
          cargos: [],
          salario: '6000',
          otros: 'null',
        },
        fechaCreacion: new Date('08/01/19'),
        fechaActualizacion: new Date('08/01/19'),
      }
    ];
    const direcciones: Direccion[] = [
      {
        id: '1',
        direccion: 'C/ Me falta un Tornillo nº2',
        cp: '47001',
        poblacion: 'Valladolid',
        provincia: 'Valladolid',
        pais: 'España'
      },
      {
        id: '2',
        direccion: 'C/ Mayor nº12',
        cp: '47001',
        poblacion: 'Valladolid',
        provincia: 'Valladolid',
        pais: 'España'
      }
    ];
    const empleados: Empleado[] = [
      {
        id: '1',
        fechaCreacion: new Date('08/01/19'),
        fechaActualizacion: new Date('08/01/19'),
        nombre: 'chancleto',
        apellidos: 'Corto de Miras',
        direccion: {
          id: '1',
          cp: '47001',
          provincia: 'Valladolid',
          poblacion: 'Valladolid',
          direccion: 'C/ Me falta un Tornillo nº2',
          pais: 'España'
        },
        email: 'ccorto@avertia.es',
        telefono: '626 123 123',
        sociedad: {
          id: '1',
          nombre: 'Sociedad 1',
          cif: '1234567H',
          direccionSocial: {
            id: '1',
            cp: '47001',
            provincia: 'Valladolid',
            poblacion: 'Valladolid',
            direccion: 'C/ Me falta un Tornillo nº2',
            pais: 'España'
          },
          direccionFiscal: {
            id: '1',
            cp: '47001',
            provincia: 'Valladolid',
            poblacion: 'Valladolid',
            direccion: 'C/ Me falta un Tornillo nº2',
            pais: 'España'
          }
        },
        oficina: {
          id: '1',
          nombre: 'Oficina1',
          direccion: {
            id: '1',
            direccion: 'C/ Me falta un Tornillo nº2',
            cp: '09001',
            poblacion: 'Burgos',
            provincia: 'Burgos',
            pais: 'España'
          },
          contacto: {
            id: '1',
            fechaCreacion: new Date('08/01/19'),
            fechaActualizacion: new Date('08/01/19'),
            nombre: 'Pepito',
            apellidos: 'apellido1',
            direccion: {
              id: '1',
              direccion: 'C/ Me falta un Tornillo nº2',
              cp: '09001',
              poblacion: 'Burgos',
              provincia: 'Burgos',
              pais: 'España'
            },
            email: 'mail@avertia.es',
            telefono: '656 66 66 88',
            sociedad: {
              id: '1',
              nombre: 'Sociedad 1',
              cif: '1234567H',
              direccionSocial: {
                id: '1',
                cp: '47001',
                provincia: 'Valladolid',
                poblacion: 'Valladolid',
                direccion: 'C/ Me falta un Tornillo nº2',
                pais: 'España'
              },
              direccionFiscal: {
                id: '1',
                cp: '47001',
                provincia: 'Valladolid',
                poblacion: 'Valladolid',
                direccion: 'C/ Me falta un Tornillo nº2',
                pais: 'España'
              }
            },
            oficina: undefined,
            ubicacion: 'Burgos',
            cargos: [],
            salario: '6000',
            otros: 'null',
          },
          fechaCreacion: new Date('08/01/19'),
          fechaActualizacion: new Date('08/01/19'),
        },
        ubicacion: 'Valladolid',
        cargos: undefined,
        salario: '35000',
        otros: undefined
      },
      {
        id: '2',
        fechaCreacion: new Date('08/01/19'),
        fechaActualizacion: new Date('08/01/19'),
        nombre: 'Rodolfo',
        apellidos: 'Corto de Miras',
        direccion: undefined,
        email: 'rcorto@avertia.es',
        telefono: '626 123 123',
        sociedad: undefined,
        oficina: undefined,
        ubicacion: 'Valladolid',
        cargos: undefined,
        salario: '55000',
        otros: undefined
      },
      {
        id: '3',
        fechaCreacion: new Date('08/01/19'),
        fechaActualizacion: new Date('08/01/19'),
        nombre: 'Roberto',
        apellidos: 'Corto de Miras',
        direccion: undefined,
        email: 'ccorto@avertia.es',
        telefono: '626 123 123',
        sociedad: undefined,
        oficina: undefined,
        ubicacion: 'Valladolid',
        cargos: undefined,
        salario: '40000',
        otros: undefined
      }
    ];

    const credentials = [{
      id: '1',
      nombre: 'Cesar',
      apellidos: 'Santillan',
      token: 'jjsgdkjghakfhkejhfjkjehwjkdfhkjewfkjdcbwekjdhfkjewhk',
      identifier: 'admin',
      password: 'admin',
      roles: [Rol.Empleado]
    }];

    return { myes, clientes, sociedades, oficinas, direcciones, empleados, credentials };
  }
}
