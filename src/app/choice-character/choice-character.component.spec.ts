import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceCharacterComponent } from './choice-character.component';

describe('ChoiceCharacterComponent', () => {
  let component: ChoiceCharacterComponent;
  let fixture: ComponentFixture<ChoiceCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoiceCharacterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoiceCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
