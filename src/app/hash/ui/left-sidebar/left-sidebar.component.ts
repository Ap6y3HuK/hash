import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { ArticleRepository } from 'app/hash/infrastructure/store/article/ArticleRepository';
import { Article } from 'app/hash/infrastructure/domain/Article';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit, OnDestroy {

  destroy$: Subject<any> = new Subject();

  articles: Array<Article>;

  constructor(private articleRepository: ArticleRepository) {
  }

  ngOnInit() {
    this.articleRepository.selectArticles()
        .pipe(takeUntil(this.destroy$))
        .subscribe((articles: Array<Article>) => {
          this.articles = articles;
        });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
