import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeChildComponentComponent } from './some-child-component.component';

describe('SomeChildComponentComponent', () => {
  let component: SomeChildComponentComponent;
  let fixture: ComponentFixture<SomeChildComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeChildComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
