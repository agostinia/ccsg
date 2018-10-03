import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecordsComponent }      from './records/records.component';
import { RecordDetailComponent }  from './record-detail/record-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/records', pathMatch: 'full' },
  { path: 'detail/:id', component: RecordDetailComponent },
  { path: 'records', component: RecordsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
