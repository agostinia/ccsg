import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Record }         from '../Model/record';
import { RecordService }  from '../record.service';

@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.css']
})
export class RecordDetailComponent implements OnInit {
  @Input() record: Record;

  constructor(
    private route: ActivatedRoute,
    private recordService: RecordService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getRecord();
  }

  getRecord(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.recordService.getRecord(id)
      .subscribe(record => this.record = record);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.recordService.updateRecord(this.record)
      .subscribe(() => this.goBack());
  }
  

}
