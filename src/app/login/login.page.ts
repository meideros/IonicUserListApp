import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  UserData: any;
  userByInput: string;
  error: string;
  passwordByInput: string;
  find;
  constructor(private apiService: ApiService, private nvc: NavController) {
    this.UserData = [];
  }

  ngOnInit() {
    this.nvc.navigateRoot('login');
  }
  getAllUser() {
    this.apiService.getUser().subscribe(response => {
      this.UserData = response;
      for (const studentsDataKey in this.UserData) {
        // tslint:disable-next-line:max-line-length
        if (this.UserData[studentsDataKey].login.username === this.userByInput && this.UserData[studentsDataKey].login.password === this.passwordByInput) {
          this.find = true;
          break;
        } else {
          this.find = false;
        }
      }
      if (!this.find) {
        this.error = 'Données incorrect';
      } else {
        this.nvc.navigateRoot('user-list');
      }
    });
  }
}
