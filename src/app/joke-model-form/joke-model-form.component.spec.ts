import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeModelFormComponent } from './joke-model-form.component';

describe('JokeModelFormComponent', () => {
  let component: JokeModelFormComponent;
  let fixture: ComponentFixture<JokeModelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JokeModelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JokeModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
