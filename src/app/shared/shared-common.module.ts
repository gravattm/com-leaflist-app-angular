import { NgModule } from '@angular/core';
import { LeafListSharedLibsModule } from './shared-libs.module';

@NgModule({
  imports: [LeafListSharedLibsModule],
  declarations: [],
  exports: [LeafListSharedLibsModule]
})
export class LeafListSharedCommonModule { }
