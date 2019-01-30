import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { LeafListSharedModule } from '../../shared';
import { DashboardComponent, DashboardRoute } from './';

@NgModule({
  imports: [
    LeafListSharedModule,
    RouterModule.forChild([DashboardRoute])
  ],
  declarations: [
    DashboardComponent
  ],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: NgbDateAdapter,
      useClass: NgbDateNativeAdapter
    }
  ]
})
export class DashboardModule { }
