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
    private heroService: RecordService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getRecord();
  }

  getRecord(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getRecord(id)
      .subscribe(hero => this.record = hero);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.updateHero(this.record)
      .subscribe(() => this.goBack());
  }
  

}
