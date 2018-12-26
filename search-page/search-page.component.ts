import { User } from './../User';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SearchPageService } from '../search-page.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  searchForm: FormGroup;
  users: User[] = [];

  constructor(private fb: FormBuilder, private searchPageService: SearchPageService) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      searchField: ['', Validators.required]
    });
  }

  searchData() {
    this.searchPageService.getDetails(this.searchForm.get('searchField').value)
    .subscribe(data => this.users = <User[]>data);
  }

}
