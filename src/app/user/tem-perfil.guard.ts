import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";

@Injectable({providedIn: 'root'})
export class TemPerfilGuard implements CanActivate {
  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.checkLoggedIn(state.url);
  }

  checkLoggedIn(url: string): boolean {
    if ( localStorage.getItem('perfil') !== null ) {
      return true;
    }

    // Guarda a url para redirecioar no login...
    this.authService.redirectUrl = url;
    alert('Você ainda não tem o perfil de investidor! Responda ao seu perfil.');
    this.router.navigate(['/shell/perfil']);
    return false;
  }
}
