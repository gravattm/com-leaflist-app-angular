import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ErrorRoute, NavRoute } from './shared/layouts';
import { DEBUG_INFO_ENABLED } from './app.constants';

const LAYOUT_ROUTES = [NavRoute, ...ErrorRoute];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        ...LAYOUT_ROUTES
      ],
      { useHash: false, enableTracing: DEBUG_INFO_ENABLED }
    )
  ],
  exports: [RouterModule]
})
export class LeafListAppRoutingModule { }
