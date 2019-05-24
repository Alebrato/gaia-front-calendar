import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Sociedad } from '../model/sociedad';
import { Oficina } from '../model/oficina';
import { Direccion } from '../model/direccion';
import { Empleado } from '../model/empleado';
import { Injectable } from '@angular/core';
import { MockService } from './mock.service';

@Injectable()
export class MockOverrideService extends MockService {
// Overrides id generator and delivers next available `id`, starting with 1001.
genId<T extends { id: any }>(collection: T[], collectionName: string): any {
  return this.guid();
}

// Pseudo guid generator
guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
}
