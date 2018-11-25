import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HashContentComponent } from 'app/hash/ui/hash/hash-content/hash-content.component';
import { PersonHeaderComponent } from 'app/hash/ui/hash/hash-content/person-header/person-header.component';
import { ArticleComponent } from 'app/hash/ui/hash/hash-content/article/article.component';

@NgModule({
  declarations: [
    HashContentComponent,
    PersonHeaderComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HashContentComponent
  ]
})
export class HashContentModule {

}
