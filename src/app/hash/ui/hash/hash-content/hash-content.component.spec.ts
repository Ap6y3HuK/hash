import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashContentComponent } from './hash.component';

describe('HashComponent', () => {
  let component: HashContentComponent;
  let fixture: ComponentFixture<HashContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HashContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HashContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
