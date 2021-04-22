import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurclientAdditionComponent } from './ourclient-addition.component';

describe('OurclientAdditionComponent', () => {
  let component: OurclientAdditionComponent;
  let fixture: ComponentFixture<OurclientAdditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurclientAdditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurclientAdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
