import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExhibitionComponent } from './new-exhibition.component';

describe('NewExhibitionComponent', () => {
  let component: NewExhibitionComponent;
  let fixture: ComponentFixture<NewExhibitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewExhibitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewExhibitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
