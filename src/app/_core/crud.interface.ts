import { Observable } from 'rxjs/Observable';

export interface CRUDInterface {
    delete(id: string): Observable<any>;
    getId(id: string): Observable<any>;
    getAll(): Observable<any>;
    save(body: any): Observable<any>;
}
