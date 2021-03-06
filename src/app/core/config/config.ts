import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModuleConfig {
  sortIcon ?= 'fa-sort';
  sortAscIcon ?= 'fa-sort-up';
  sortDescIcon ?= 'fa-sort-down';
  sortIconSelector ?= 'span.fa';
  i18nEnabled ?= false;
  defaultI18nLang ?= 'en';
  alertAsToast ?= false;
  alertTimeout ?= 5000;
  classBadgeTrue ?= 'badge badge-success';
  classBadgeFalse ?= 'badge badge-danger';
  classTrue ?= 'fa fa-lg fa-check text-success';
  classFalse ?= 'fa fa-lg fa-times text-danger';
}
