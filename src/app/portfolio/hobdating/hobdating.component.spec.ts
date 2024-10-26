import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobdatingComponent } from './hobdating.component';

describe('HobdatingComponent', () => {
  let component: HobdatingComponent;
  let fixture: ComponentFixture<HobdatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HobdatingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobdatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
