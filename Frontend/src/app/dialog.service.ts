import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  private isOpen = false;

  openDialog() {
    this.isOpen = true;
  }

  closeDialog() {
    this.isOpen = false;
  }

  isDialogOpen() {
    return this.isOpen;
  }
}
