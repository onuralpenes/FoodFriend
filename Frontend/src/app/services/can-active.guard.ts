import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(private getUserRoles: UserRolesService, private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLoggedIn) {
      if (this.router.url == "/login") {
        return this.router.parseUrl('/dashboard');
      }
      if (route.data.roles.some(ai => this.getUserRoles.getRoles().includes(ai))) {
        return route.data.roles.some(ai => this.getUserRoles.getRoles().includes(ai));
      }
      else {
        this.authService.logout();
        return this.router.parseUrl('/login');
      }
    }
    else {
      return this.router.parseUrl('/login');
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class UserRolesService {
  userRoles: string[] = [];

  setRoles(Roles: string[]) {
    localStorage.setItem('USER_ROLES', JSON.stringify(Roles));
  }

  getRoles() {
    let roles = JSON.parse(localStorage.getItem('USER_ROLES')!)
    return roles.slice(0);
  }
}