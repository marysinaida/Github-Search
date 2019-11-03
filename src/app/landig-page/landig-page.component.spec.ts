import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandigPageComponent } from './landig-page.component';

describe('LandigPageComponent', () => {
  let component: LandigPageComponent;
  let fixture: ComponentFixture<LandigPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandigPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandigPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
