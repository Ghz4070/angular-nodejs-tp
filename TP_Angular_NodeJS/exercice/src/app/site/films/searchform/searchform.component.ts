import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { SearchmovieService } from '../services/searchmovie.service';
import { FormValidators } from '../validator/form';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {
  searchForm: FormGroup;
  title: FormControl;
  year: FormControl;

  constructor(private searchService: SearchmovieService, private fb: FormBuilder) {
    let titlePattern = '[a-zA-Z0-9,\. ]+';
    let yearPattern = '[0-9]{4}';

    this.title = fb.control('', [Validators.required, Validators.maxLength(30), Validators.pattern(titlePattern)]);
    this.year = fb.control('', [Validators.pattern(yearPattern), FormValidators.integerBetween(1900, 2017)]);

    this.searchForm = fb.group({
      title: this.title,
      year: this.year
    });
  }

  startSearch() {
    let title = this.title.valid ? this.title.value : null;
    let year = this.year.valid ? this.year.value : null;

    if (title) {
      this.searchService.search(title, +year).subscribe((response: any) => console.log(response));
    }

  }

  ngOnInit() { }
}
