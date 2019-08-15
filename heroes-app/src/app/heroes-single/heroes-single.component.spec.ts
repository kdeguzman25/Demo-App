import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesSingleComponent } from './heroes-single.component';

describe('HeroesSingleComponent', () => {
  let component: HeroesSingleComponent;
  let fixture: ComponentFixture<HeroesSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
