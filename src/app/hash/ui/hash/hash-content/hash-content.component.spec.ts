import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HashContentComponent } from 'app/hash/ui/hash/hash-content/hash-content.component';

describe('HashContentComponent', () => {
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
