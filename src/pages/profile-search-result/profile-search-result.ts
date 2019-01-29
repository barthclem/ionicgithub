import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import {GithubServiceProvider} from "../../providers/github-service/github-service";
import {User} from "../../models/user.interface";
import {Repository} from "../../models/repository.interface";
import {Observable} from "rxjs";
import { WebIntent } from '@ionic-native/web-intent';
/**
 * Generated class for the ProfileSearchResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment:  'profile/results/:username'
})
@Component({
  selector: 'page-profile-search-result',
  templateUrl: 'profile-search-result.html',
})
export class ProfileSearchResultPage {

  username: string;
  userDetails: Observable<User>;
  repoList: Observable<Repository[]>;
  constructor(private navParams: NavParams, private webIntent: WebIntent, private github: GithubServiceProvider) {
  }

  getMockGithubData() {
    this.userDetails = this.github.getUserMockData(this.username);
  }

  getGithubData() {
    this.userDetails = this.github.getUserInformation(this.username);
  }

  getRepositoryInformation() {    this.repoList  = this.github.getRepositoryInformation(this.username);
  }

  getMockRepositoryData() {
    this.repoList  = this.github.getRepositoryMockData(this.username);
  }

  ionViewWillLoad() {
    this.username = this.navParams.get('username');
    if(this.username) {
      // this.getMockGithubData();
      // this.getMockRepositoryData();
      this.getGithubData();
      this.getRepositoryInformation();
      console.log(`Profile Search Page -> ${JSON.stringify(this.username)}`);
    }

    // this.webIntent.startActivity({
    //   package: 'com.android.chrome',
    //   url: 'http://www.google.com',
    //   action: this.webIntent.ACTION_VIEW
    // }).then((intent) => {
    //   console.log (` WebIntent Bus : ${intent}`);
    // });

    this.webIntent.startActivity({
      type: 'image/*',
      action: this.webIntent.ACTION_GET_CONTENT
    }).then((intent) => {
      console.log (` WebIntent Bus : ${intent}`);
    })
  }

}
