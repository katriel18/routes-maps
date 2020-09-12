import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticMapsComponent } from './static-maps.component';

describe('StaticMapsComponent', () => {
  let component: StaticMapsComponent;
  let fixture: ComponentFixture<StaticMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
