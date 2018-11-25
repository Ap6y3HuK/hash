import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hash',
  templateUrl: './hash.component.html',
  styleUrls: ['./hash.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HashComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
