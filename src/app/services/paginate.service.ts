import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaginateService {
  per_page: number = 12;

  getPerPage(): number {
    return this.per_page;
  }

  constructor() { }
}
