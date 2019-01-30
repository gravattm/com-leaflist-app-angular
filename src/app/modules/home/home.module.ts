import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbDateAdapter, NgbDateNativeAdapter } from '@ng-bootstrap/ng-bootstrap';
import { SortByDirective, SortDirective, LeafListSharedModule } from '../../shared';
import { HomeComponent, HomeRoute } from './';

@NgModule({
  imports: [LeafListSharedModule, RouterModule.forChild([HomeRoute])],
  declarations: [
    HomeComponent,
    SortDirective,
    SortByDirective
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
export class HomeModule { }
