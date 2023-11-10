import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDataDialog } from './update-data-dialog.component';

describe('UpdateDataDialogComponent', () => {
  let component: UpdateDataDialog;
  let fixture: ComponentFixture<UpdateDataDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateDataDialog]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UpdateDataDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
