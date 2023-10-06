import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchTerm = '';
  constructor(

    activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.searchTerm = params.searchTerm;
      }
    });
  }

  searchResult(item: string): void {
    if (item) {
      this.router.navigateByUrl(`/search/${item}`);
    }
  }
}
