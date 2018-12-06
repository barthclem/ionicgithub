import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../models/user.interface";
import {USER_LIST} from "../../mocks/user.mocks";
import {Repository} from "../../models/repository.interface";
import {REPOSITORY_LIST} from "../../mocks/repository.mocks";
import 'rxjs/add/operator/do';
import {tap} from "rxjs/operators";

/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {

  private  api_url = 'https://api.github.com/users';
  private repos_url = 'repos';

  constructor(private http: HttpClient) {
    console.log('Hello GithubServiceProvider Provider');
  }

  getUserInformation(username: string) : Observable<User>{
    return this.http.get(`${this.api_url}/${username}`)
      .pipe(
        tap(
          data => this.logData(data),
          error => this.logError(error)
        )
      )
      .catch(this.handleError);
  }

  getRepositoryInformation(username: string) : Observable<Repository[]>{
    return this.http.get(`${this.api_url}/${username}/${this.repos_url}`)
      .pipe(
        tap(
          data => this.logData(data),
          error => this.logError(error)
        )
      )
      .catch(this.handleError);
  }

  getUserMockData(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name.indexOf(username) !== -1)[0]);
  }

  getRepositoryMockData(username: string): Observable<Repository[]>{
    return Observable.of(REPOSITORY_LIST.filter(repo => repo.owner.name.indexOf(username) !== -1));
  }

  logData(data: Response | any) {
      console.log(`Data Log -> ${JSON.stringify(data)}`);
  }

  logError(error: any) {
    console.log(`Error Log -> ${error}`);
  }

  handleError(error : HttpErrorResponse | Response | any ) {
    return Observable.throw(error.error.message || 'Server Error');
  }

}
