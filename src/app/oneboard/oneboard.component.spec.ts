import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneboardComponent } from './oneboard.component';

describe('OneboardComponent', () => {
  let component: OneboardComponent;
  let fixture: ComponentFixture<OneboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OneboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OneboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
