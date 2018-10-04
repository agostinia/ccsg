import { Component, OnInit } from '@angular/core';

import { Record } from '../Model/record';
import { RecordService } from '../record.service';

@Component({
  selector: 'app-records',
  templateUrl: './records.component.html',
  styleUrls: ['./records.component.css']
})
export class RecordsComponent implements OnInit {
  records: Record[];

  constructor(private recordService: RecordService) { }

  ngOnInit() {
    this.getrecords();
  }

  getrecords(): void {
    this.recordService.getRecords()
    .subscribe(records => this.records = records);
  }

  add(f1: string, f2: string, f3: string): void {
    this.recordService.addRecord({ f1: f1.trim(),f2: f2.trim(), f3: f3.trim()  } as Record)
      .subscribe(record => {
        this.records.push(record);
      });
  }


  delete(record: Record): void {
    this.records = this.records.filter(h => h !== record);
    this.recordService.deleteRecord(record).subscribe();
  }


}
