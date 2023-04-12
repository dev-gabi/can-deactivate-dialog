import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent  {

  @Output('isConfirmed') isConfirmed = new EventEmitter<boolean>();

  onAnswer(isConfirm: boolean)
  {
    this.isConfirmed.emit(isConfirm);
  }

}
