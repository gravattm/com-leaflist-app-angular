import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SLPaginationUtil } from './pagination-util.service';

@Injectable({ providedIn: 'root' })
export class SLResolvePagingParams implements Resolve<any> {
  constructor(private paginationUtil: SLPaginationUtil) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
    const defaultSort = route.data['defaultSort'] ? route.data['defaultSort'] : 'id,asc';
    const sort = route.queryParams['sort'] ? route.queryParams['sort'] : defaultSort;
    return {
      page: this.paginationUtil.parsePage(page),
      predicate: this.paginationUtil.parsePredicate(sort),
      ascending: this.paginationUtil.parseAscending(sort)
    };
  }
}
