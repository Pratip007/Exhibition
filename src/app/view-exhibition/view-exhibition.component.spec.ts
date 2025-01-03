import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExhibitionComponent } from './view-exhibition.component';

describe('ViewExhibitionComponent', () => {
  let component: ViewExhibitionComponent;
  let fixture: ComponentFixture<ViewExhibitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewExhibitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewExhibitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
