import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'delete-data-dialog',
  standalone: true,
  templateUrl: './delete-data-dialog.component.html',
  styleUrl: './delete-data-dialog.component.sass',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    FormsModule,

  ],
})
export class DeleteDataDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient
  ) {

  }

  delete() {
    const data = {
      'id': this.data.id,

    };
    const url = `http://localhost:8000/api/delete/${data.id}`
    this.http.post(url, data).subscribe(
      (response: any) => {

        window.location.reload();
      },
      (error: any) => {
        alert('Ocorreu um erro ao atualizar os dados.');
        console.error(error);
      }
    );
    
  }
}
