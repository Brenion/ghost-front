import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPadComponent } from './control-pad.component';

describe('ControlPadComponent', () => {
  let component: ControlPadComponent;
  let fixture: ComponentFixture<ControlPadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlPadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
