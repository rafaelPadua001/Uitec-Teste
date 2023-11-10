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

/** @title Simple form field */
@Component({
  selector: 'update-data-dialog.component',
  templateUrl: './update-data-dialog.component.html',
  styleUrls: ['./update-data-dialog.component.css'],
  standalone: true,
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

export class UpdateDataDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient
  ) {

  }

  validate() {
    if (!this.data.name || this.data.name.trim() === '') {
      alert('O campo Nome é obrigatório.');
      return;
    }

    if (!this.data.price || isNaN(Number(this.data.price))) {
      alert('O campo Preço deve ser um número válido.');
      return;
    }

    if (!this.data.dueDate || !(this.data.dueDate instanceof Date)) {
      alert('O campo Data de Vencimento é obrigatório e deve ser uma data válida.');
      return;
    }

    if (!this.data.quantity || isNaN(Number(this.data.quantity))) {
      alert('O campo Quantidade deve ser um número válido.');
      return;
    }

    if (this.data.perishable === undefined || typeof this.data.perishable !== 'boolean') {
      alert('O campo Perishable é obrigatório e deve ser um valor booleano (true ou false).');
      return;
    }
    const data = {
      'id': this.data.id,
      'nome_do_produto': this.data.name,
      'valor_do_produto': this.data.price,
      'data_de_vencimento': this.data.dueDate,
      'quantidade_em_estoque': this.data.quantity,
      'produto_perecivel': this.data.perishable,
    };

    this.save(data);
  }
  save(data: any): void {
    const url = `http://localhost:8000/api/update/${data.id}`;
    this.sendRequest(url, data);
  }
  private sendRequest(url: string, data: any) {
    this.http.post(url, data).subscribe(
      (response: any) => {
        window.location.reload();
      },
      (error: any) => {
        alert('Ocorreu um erro ao atualizar os dados.');
        //console.error(error);
      }
    );
  }
}



