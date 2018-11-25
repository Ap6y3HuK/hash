import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Person } from 'app/hash/infrastructure/domain/Person';

@Component({
  selector: 'app-person-header',
  templateUrl: './person-header.component.html',
  styleUrls: ['./person-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonHeaderComponent implements OnInit {

  @Input()
  person: Person;

  constructor() { }

  ngOnInit() {
  }

}
