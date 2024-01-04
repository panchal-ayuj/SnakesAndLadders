import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeboardComponent } from './threeboard.component';

describe('ThreeboardComponent', () => {
  let component: ThreeboardComponent;
  let fixture: ComponentFixture<ThreeboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThreeboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThreeboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
