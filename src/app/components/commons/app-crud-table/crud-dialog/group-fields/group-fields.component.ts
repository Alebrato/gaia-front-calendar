import { Component, OnInit, Input } from '@angular/core';
import { KeyValue } from '../../../../../_core/key.value';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-group-fields',
  templateUrl: './group-fields.component.html',
  styleUrls: ['./group-fields.component.scss']
})
export class GroupFieldsComponent implements OnInit {
  @Input() fields: KeyValue[];
  @Input() data;

  dateForms: FormControl[];
  numberForms: FormControl[];

  constructor() { }

  ngOnInit() {
    this.dateForms = [];
    this.numberForms = [];
    this.prepareGroups(this.fields);
  }

  switchType(format , customClassInput) {
    switch (format.toLowerCase()) {
      case 'shortdate':
      case 'date':
        return 'date ' + customClassInput;
      case 'number':
      case 'integer':
      case 'amount':
      case 'percentage':
        return 'number ' + customClassInput;
    }
    return 'string ' + customClassInput;
  }

  updateDate($event, field) {
    this.data[field.key] = $event.value.getTime();
  }

  numberStep(field) {
    switch (field.formatType) {
      case 'number':
      case 'integer':
        return '1';
      case 'amount':
        return '.01';
      case 'percentage':
        return '.001';
    }
  }

  updateNumber($event, field) {
    this.data[field.key] = $event.target.valueAsNumber;
  }

  private prepareGroups(group) {
    for (const field of group) {
      if (field.formatType !== undefined) {
        this.prepareField(field);
      } else {
        this.prepareGroups(field.elements);
      }
    }
  }

  private prepareField(field) {
    switch (field.formatType.toLowerCase()) {
      case 'shortdate':
      case 'date':
      const formColumn = new FormControl(new Date(this.data[field.key]));
      if (field.editable === false) {
        formColumn.disable();
      }
      this.dateForms[field.key] = formColumn;
      break;
      case 'number':
      case 'integer':
      case 'amount':
      case 'percentage':
      const form = new FormControl(this.data[field.key]);
      if (field.editable === false) {
        form.disable();
      }
      this.numberForms[field.key] = form;
      break;
    }
  }

}
