import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private api: ApiService) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return new Observable<boolean>(obs => {
      this.api.get_current_user().subscribe(res => {
        obs.next(true);
      }, err => {
        console.log(err);
        localStorage.removeItem('token');
        this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
        obs.next(false);
      });
    });
  }
}
