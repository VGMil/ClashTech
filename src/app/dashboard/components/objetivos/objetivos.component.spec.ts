import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjetivosComponent } from './objetivos.component';

describe('ObjetivosComponent', () => {
  let component: ObjetivosComponent;
  let fixture: ComponentFixture<ObjetivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObjetivosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObjetivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
