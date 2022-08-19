import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FadersComponent } from './faders.component';

describe('FadersComponent', () => {
  let component: FadersComponent;
  let fixture: ComponentFixture<FadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FadersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
