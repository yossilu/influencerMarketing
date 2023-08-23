import { Component, OnInit } from '@angular/core';
import { IgService } from '../../services/ig-service.service';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  searchControl = new FormControl();
  filteredItems: UserModel[] = [];

  constructor(private igService: IgService) {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(300),
        switchMap((value) => this.igService.getProfiles(value))
      )
      .subscribe((items: any) => {
        const users: UserModel[] = items.data;
        this.filteredItems = users;
      });
   }

  displayFn(item: any): string {
    return item && item.fullname ? item.fullname : '';
  }

  onOptionSelected(item: any): void {
    this.igService.getPosts(item);
  }

  ngOnInit(): void {
  }

  trackByFunction(index: number, item: any): number {
    return item.user_id;
  }

}
