import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadGeoComponent } from './read-geo.component';

describe('ReadGeoComponent', () => {
  let component: ReadGeoComponent;
  let fixture: ComponentFixture<ReadGeoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadGeoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadGeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
