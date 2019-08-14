import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login/login.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {DialogsService} from "../dialog-service/dialogs.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  rows = [];
  user: any = {};
  constructor( public loginService: LoginService,
               private router: Router,
               public toastr: ToastrService ,
               public dialogsService: DialogsService) {

  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userData'));
    this.users();
  }

  users() {
    this.loginService.users().subscribe((res) => {
      if (res && res.error) {
        this.toastr.error('something went wrong');
      } else {
         this.rows = res;
      }
    }, err => {
      console.log('err', err);
    });
  }

  editProfile() {
    this.dialogsService.editUser().subscribe(res => {
      if (res) {
        const userData = JSON.parse(localStorage.getItem('userData'));
        this.loginService.editUser(res, userData[0]._id).subscribe((user) => {
          console.log(user);
        }, err => {
          console.log('err', err);
        });
      }
    });
  }

  confirmDelete(id, index) {
    this.loginService.userDelete(id).subscribe((res) => {
      if (res && res.error) {
        this.toastr.error('something went wrong');
      } else {
        this.toastr.success('delete successfully');
        delete this.rows[index];
        this.rows = [...this.rows];
      }
    }, err => {
      console.log('err', err);
    });
  }

  logout() {
    localStorage.removeItem('userData');
    this.router.navigate(['/login']);
  }
}
