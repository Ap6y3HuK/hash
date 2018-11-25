import { NgModule } from '@angular/core';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { HashContentComponent } from 'app/hash/ui/hash-content/hash-content.component';
import { LeftSidebarComponent } from 'app/hash/ui/left-sidebar/left-sidebar.component';

import { HashResource } from 'app/hash/infrastructure/HashResource';
import { storeSymbol } from 'app/hash/infrastructure/store/State';
import { reducers } from 'app/hash/infrastructure/store/HashReducers';

import { ArticleEffects } from 'app/hash/infrastructure/store/article/ArticleEffects';
import { ArticleRepository } from 'app/hash/infrastructure/store/article/ArticleRepository';
import { ArticleCommandDispatcher } from 'app/hash/infrastructure/store/article/ArticleCommandDispatcher';

import { PersonEffects } from 'app/hash/infrastructure/store/person/PersonEffects';
import { PersonRepository } from 'app/hash/infrastructure/store/person/PersonRepository';
import { PersonCommandDispatcher } from 'app/hash/infrastructure/store/person/PersonCommandDispatcher';

@NgModule({
  declarations: [
    HashContentComponent,
    LeftSidebarComponent
  ],
  imports: [
    MatListModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreModule.forFeature(storeSymbol, reducers),
    EffectsModule.forRoot([
      ArticleEffects,
      PersonEffects
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    HashResource,
    ArticleCommandDispatcher,
    PersonCommandDispatcher,
    ArticleRepository,
    PersonRepository
  ],
  exports: [
    HashContentComponent
  ]
})
export class HashModule {

  constructor(private articleCommandDispatcher: ArticleCommandDispatcher,
              private personCommandDispatcher: PersonCommandDispatcher) {
    articleCommandDispatcher.initArticles();
    personCommandDispatcher.initPersons();
  }
}
