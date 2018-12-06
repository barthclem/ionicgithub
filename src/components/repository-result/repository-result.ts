import {Component, Input} from '@angular/core';
import {Repository} from "../../models/repository.interface";

/**
 * Generated class for the RepositoryResultComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'repository-result',
  templateUrl: 'repository-result.html'
})
export class RepositoryResultComponent {

  @Input() repo: Repository;

}
