import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userForm: FormGroup;
  userData: any = {};
  constructor(
    public dialogRef: MatDialogRef<ProfileComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.userForm = this.formBuilder.group({
      firstName: ['',  Validators.required],
      lastName: ['',  Validators.required],
      email: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'));
    console.log(this.userData);
    this.userForm.setValue({
      firstName: this.userData[0].firstName,
      lastName: this.userData[0].lastName,
      email: this.userData[0].email,
    });
  }

  postSubmit() {

    this.dialogRef.close(this.userForm.value);
  }

}
