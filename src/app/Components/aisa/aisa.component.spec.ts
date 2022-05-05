import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AisaComponent } from './aisa.component';

describe('AisaComponent', () => {
  let component: AisaComponent;
  let fixture: ComponentFixture<AisaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AisaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
