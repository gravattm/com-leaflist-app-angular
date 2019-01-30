import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LeafListSharedModule } from '../../shared';
import { SearchComponent, SearchRoute } from './';

@NgModule({
  imports: [
    LeafListSharedModule,
    RouterModule.forChild([SearchRoute]),
  ],
  declarations: [SearchComponent]
})
export class SearchModule { }
