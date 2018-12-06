import { NgModule } from '@angular/core';
import { SearchResultComponent } from './search-result/search-result';
import {IonicModule} from "ionic-angular";
import { RepositoryResultComponent } from './repository-result/repository-result';
@NgModule({
	declarations: [SearchResultComponent,
    RepositoryResultComponent],
	imports: [IonicModule],
	exports: [SearchResultComponent,
    RepositoryResultComponent]
})
export class ComponentsModule {}
