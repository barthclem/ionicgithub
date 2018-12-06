import {Component, Input} from '@angular/core';
import {User} from "../../models/user.interface";

@Component({
  selector: 'search-result',
  templateUrl: 'search-result.html'
})
export class SearchResultComponent {

  text: string;
@Input() user: User;

  constructor() {
     console.log(`User loaded is => ${JSON.stringify(this.user)}`);
  }

}
