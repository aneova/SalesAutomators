import {Component, inject, model, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ModalComponent} from "./modal.component";
import {ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  matDialogRef!: MatDialogRef<ModalComponent>;
  constructor(private matDialog: MatDialog) {}
  title = 'MakeDeal';
  readonly animal = signal('');
  name!: string;
  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '55rem',
      autoFocus: true,
      closeOnNavigation: false,
      data: this.name
    });

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {

        }
      });
  }
}
