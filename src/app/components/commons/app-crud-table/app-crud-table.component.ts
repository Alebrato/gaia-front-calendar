import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { MatDialog, MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { CRUDInterface } from '../../../_core/crud.interface';
import { KeyValue, KeyValueSimple, KeyValueGroup, isKeyValueGroup, reduceKeyValue } from '../../../_core/key.value';
import { CrudDialogComponent } from './crud-dialog/crud-dialog.component';
import { GroupColumn } from '../../../_core/group.column';

import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeInLeft, bounceInLeft, bounceInUp, bounceInRight, bounceInDown } from 'ng-animate';

// tslint:disable-next-line:import-blacklist
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-app-crud-table',
  templateUrl: './app-crud-table.component.html',
  styleUrls: ['./app-crud-table.component.scss'],
  animations: [
    trigger('fadeInLeft', [transition('* => *', useAnimation(fadeInLeft, { params: { timing: 2, delay: 6000 } }))]),
    trigger('bounceInLeft', [transition('* => *', useAnimation(bounceInLeft,
      { params: { timing: 2, delay: 600 } }))]),
    trigger('bounceInRight', [transition('* => *', useAnimation(bounceInRight))]),
    trigger('bounceInUp', [transition('* => *', useAnimation(bounceInUp))]),
    trigger('bounceInDown', [transition('* => *', useAnimation(bounceInDown))]),
  ]
})
export class AppCrudTableComponent implements OnInit {

  bounceInUp: any;
  bounceInLeft: any;
  bounceInRight: any;
  bounceInDown: any;
  fadeInLeft: any;

  @Input() service: CRUDInterface;
  @Input() columns: KeyValue[];
  @Input() groups: GroupColumn[];
  @Input() editableValidation;
  @Input() deletableValidation;
  @Input() disableCreatable: boolean;
  @Input() modalTitle: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private datePipe = new DatePipe('es_ES');
  private decimalPipe = new DecimalPipe('es_ES');

  isLoadingResults: Boolean;
  dataSource = new MatTableDataSource<any>();
  completeData = [];

  columnas: KeyValue[] = [];
  columnasFlat: KeyValueSimple[] = [];
  columnasFiltrables: KeyValueSimple[] = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    if (!this.columns || !this.columns.length) {
      this.columnas = [
        { key: 'fechaCreacion', value: 'Fecha creación', formatType: 'shortDate' },
        { key: 'fechaActualizacion', value: ' Fecha actualización', formatType: 'shortDate' },
      ];
    } else {
      this.columnas = this.columns;
    }
    this.columnasFlat = this.columnas.reduce(reduceKeyValue, []); // TODO extraer de los grupos
    this.columnasFiltrables = this.columnasFlat.filter(columna => {
      return columna.filtrable;
    });
    this.loadTable();
  }

  columnsToDisplay() {
    return ['select'].concat(this.columnasFlat.filter(keyVal => keyVal.visible !== false).map(function (keyVal) { return keyVal.key; }));
  }

  dataLength() {
    return this.dataSource.data.length;
  }

  valueOf(row, key, formatType) {
    const val = this.getVal(row, key);
    switch (formatType.toLowerCase()) {
      case 'shortdate':
        return this.datePipe.transform(val, 'shortDate');
      case 'date':
        return this.datePipe.transform(val, 'short');
      case 'amount':
        return this.decimalPipe.transform(val, '1.2-2');
      case 'percentage':
        return this.decimalPipe.transform(val, '1.3-3<');
      case 'number':
      case 'integer':
        return this.decimalPipe.transform(val, '1.0-0');
    }
    return val;
  }

  getVal(row, key) {
    if (row === undefined) {
      return '';
    }
    if (key.indexOf('.') > 0) {
      row = row[key.slice(0, key.indexOf('.'))];
      key = key.slice(key.indexOf('.') + 1);
      return this.getVal(row, key);
    }
    return row[key];
  }

  classFormat(formatType, customClass) {
    switch (formatType.toLowerCase()) {
      case 'shortdate':
      case 'date':
        return 'date ' + customClass;
      case 'amount':
      case 'number':
      case 'integer':
      case 'percentage':
        return 'number ' + customClass;
    }
    return 'string ' + customClass;
  }

  addRow() {
    const dialogRef = this.dialog.open(CrudDialogComponent, {
      data: {
        mode: 'new',
        columns: this.columnas,
      }
    });
    dialogRef.componentInstance.service = this.service;
    dialogRef.componentInstance.crudTable = this;
  }

  editRow(row) {
    const dialogRef = this.dialog.open(CrudDialogComponent, {
      data: {
        columns: this.columnas,
        data: row,
        mode: 'edit',
      }
    });
    dialogRef.componentInstance.service = this.service;
    dialogRef.componentInstance.crudTable = this;
  }

  deleteRow(row) {
    this.service.delete(row.id).subscribe(result => {
      this.removeFromTable(row);
    });
  }

  refreshTable() {
    this.dataSource.connect().next(this.dataSource.data);
    this.refreshPaginator();
  }

  applyFilter(pattern) {
    this.dataSource.data = this.completeData.filter(row => {
      for (const column of this.columnasFiltrables) {
        if ((row[column.key] + '').toLowerCase().indexOf(pattern.toLowerCase()) >= 0) {
          return true;
        }
      }
      return false;
    });
    this.dataSource.connect().next(this.dataSource.data);
    this.refreshPaginator();
  }

  editable(row) {
    if (typeof this.editableValidation === typeof function () { }) {
      return this.editableValidation(row);
    }
    return this.editableValidation !== false;
  }

  deletable(row) {
    if (typeof this.deletableValidation === typeof function () { }) {
      return this.deletableValidation(row);
    }
    return this.deletableValidation !== false;
  }

  private loadTable() {
    const delay_observable = of('').pipe(delay(1000));
    delay_observable.subscribe(s => {
      this.isLoadingResults = true;
      this.service.getAll()
        .subscribe(response => {
          this.completeData = response;
          this.dataSource.data = response;
          this.refreshPaginator();
        }, error => {
          console.error(error);
        }, () => {
          this.isLoadingResults = false;
        });
    });
  }

  private removeFromTable(row) {
    const index = this.dataSource.data.indexOf(row);
    if (index >= 0) {
      this.dataSource.data.splice(index, 1);
      this.refreshTable();
    }
  }

  private refreshPaginator() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
