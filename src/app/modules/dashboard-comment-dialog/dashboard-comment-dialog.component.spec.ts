import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCommentDialogComponent } from './dashboard-comment-dialog.component';

describe('DashboardCommentDialogComponent', () => {
  let component: DashboardCommentDialogComponent;
  let fixture: ComponentFixture<DashboardCommentDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCommentDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCommentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
