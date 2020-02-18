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
  isConnected;
  constructor(private apiService: ApiService, private nvc: NavController) {
    this.UserData = [];
  }

  ngOnInit() {
    
  }
  getAllUser() {
    this.apiService.getUser().subscribe(response => {
      this.UserData = response;
      for (const key in this.UserData) {
        // tslint:disable-next-line:max-line-length
        if (this.UserData[key].login.username === this.userByInput &&
           this.UserData[key].login.password === this.passwordByInput) {
          this.isConnected = true;
          break;
        } else {
          this.isConnected = false;
        }
      }
      if (!this.isConnected) {
        this.error = 'Données incorrect';
      } else {
        this.nvc.navigateRoot('user-list');
      }
    });
  }
}
