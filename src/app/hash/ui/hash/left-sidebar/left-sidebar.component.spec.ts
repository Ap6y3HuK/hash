import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSidebarComponent } from 'app/hash/ui/hash/left-sidebar/left-sidebar.component';
import { HashModule } from 'app/hash/ui/hash/hash.module';

describe('LeftSidebarComponent', () => {
  let component: LeftSidebarComponent;
  let fixture: ComponentFixture<LeftSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HashModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
