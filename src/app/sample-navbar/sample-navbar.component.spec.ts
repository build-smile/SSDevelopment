import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleNavbarComponent } from './sample-navbar.component';

describe('SampleNavbarComponent', () => {
  let component: SampleNavbarComponent;
  let fixture: ComponentFixture<SampleNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
