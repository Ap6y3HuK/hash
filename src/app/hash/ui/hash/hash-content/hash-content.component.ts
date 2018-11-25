import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ArticleRepository } from 'app/hash/infrastructure/store/article/ArticleRepository';
import { Article } from 'app/hash/infrastructure/domain/Article';
import { Person } from 'app/hash/infrastructure/domain/Person';
import { PersonRepository } from 'app/hash/infrastructure/store/person/PersonRepository';
import { filter } from 'rxjs/internal/operators';

@Component({
  selector: 'app-hash-content',
  templateUrl: './hash-content.component.html',
  styleUrls: ['./hash-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HashContentComponent implements OnInit {

  selectedArticle: Article;
  selectedPerson: Person;

  constructor(private articleRepository: ArticleRepository,
              private personRepository: PersonRepository,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.subscribeForSelectedArticle();
  }

  private subscribeForSelectedArticle(): void {
    this.articleRepository.listenSelectedArticle()
      .pipe(
        filter((article) => article !== null)
      )
      .subscribe((article: Article) => {
        this.selectedArticle = article;
        this.discoverPerson(article.authorId);
      });
  }

  private discoverPerson(id: number): void {
    this.personRepository.getPerson(id)
        .pipe(
          filter((person) => person !== null)
        )
        .subscribe((person: Person) => {
          this.selectedPerson = person;
          this.changeDetectorRef.detectChanges();
        })
  }
}
