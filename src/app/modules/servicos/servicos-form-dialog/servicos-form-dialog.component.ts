import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-servicos-form-dialog',
  templateUrl: './servicos-form-dialog.component.html',
  styleUrls: ['./servicos-form-dialog.component.css']
})
export class ServicosFormDialogComponent implements OnInit {

  public formServico = this.formBuilder.group({

  });

  constructor(
    public dialogRef: MatDialogRef<ServicosFormDialogComponent>,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}