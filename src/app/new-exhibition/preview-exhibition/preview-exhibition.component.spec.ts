import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewExhibitionComponent } from './preview-exhibition.component';

describe('PreviewExhibitionComponent', () => {
  let component: PreviewExhibitionComponent;
  let fixture: ComponentFixture<PreviewExhibitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviewExhibitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviewExhibitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
