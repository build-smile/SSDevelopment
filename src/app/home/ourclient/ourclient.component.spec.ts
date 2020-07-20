import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurclientComponent } from './ourclient.component';

describe('OurclientComponent', () => {
  let component: OurclientComponent;
  let fixture: ComponentFixture<OurclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
