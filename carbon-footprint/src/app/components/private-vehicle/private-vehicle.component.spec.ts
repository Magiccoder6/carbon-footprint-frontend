import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivateVehicleComponent } from './private-vehicle.component';

describe('PrivateVehicleComponent', () => {
  let component: PrivateVehicleComponent;
  let fixture: ComponentFixture<PrivateVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivateVehicleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivateVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
