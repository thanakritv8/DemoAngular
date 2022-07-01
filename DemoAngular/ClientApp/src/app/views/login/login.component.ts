import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  returnUrl: string;
  username: any;
  password: any;

  msgError: any;
  public loading = false;
  okAlertButtonOptions: any;
  popupAlertVisible: any;
  titleAlert: any;
  msg: any;
  constructor(private router: Router, private api: ApiService, private route: ActivatedRoute) { }

  get_current_user() {
    this.api.get_current_user().subscribe((res: any) => {
      this.router.navigateByUrl(this.returnUrl);
    }, (err: any) => {

    });
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    const that = this;
    this.okAlertButtonOptions = {
      text: "ตกลง",
      onClick: function () {
        that.popupAlertVisible = false;
      }
    };

    this.get_current_user();
  }

  onLogin() {
    console.log(this.api.return);
    this.loading = true;
    const data = {
      username: this.username,
      password: this.password,
    };

    this.api.login(data).subscribe(res => {
      console.log(res);
      this.loading = false;
      var result: any = res;
      localStorage.setItem('token', result.token);
      this.router.navigateByUrl(this.returnUrl);
    }, err => {
      this.titleAlert = "Information"
      this.popupAlertVisible = true;
      this.msg = "username or password incorrect";
      this.loading = false;
      console.log(err);
    });
  }

}
