import { Component, Inject, OnInit } from '@angular/core';
import { DatePipe, DecimalPipe, PercentPipe } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { GroupFieldsComponent } from './group-fields/group-fields.component';


import { CRUDInterface } from '../../../../_core/crud.interface';
import { AppCrudTableComponent } from '../app-crud-table.component';

@Component({
  selector: 'app-crud-dialog',
  templateUrl: './crud-dialog.component.html',
  styleUrls: ['./crud-dialog.component.scss']
})
export class CrudDialogComponent implements OnInit {
  mode = null;
  crudTable: AppCrudTableComponent;
  service: CRUDInterface;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<any>) { }

  ngOnInit() {
    if (!this.data.data) {
      this.data.data = {};
    }
    this.mode = this.data.mode;
  }

  saveDataNew() {
    this.saveData();
    this.data.data = {};
    this.ngOnInit();
  }

  saveDataClose() {
    this.saveData();
    this.dialogRef.close();
  }

  private saveData() {
    this.service.save(this.data.data).subscribe(response => {
      if (this.data.data === undefined || this.data.data.id === undefined) {
        this.data.dataSource.data.unshift(response);
        this.crudTable.refreshTable();
      }
    });
  }

}
