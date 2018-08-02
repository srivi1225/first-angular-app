import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GotCharacterComponent } from './got-character.component';

describe('GotCharacterComponent', () => {
  let component: GotCharacterComponent;
  let fixture: ComponentFixture<GotCharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GotCharacterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GotCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
