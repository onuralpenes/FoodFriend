import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(private getUserRoles: UserRolesService, private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return true;
    if (this.authService.isLoggedIn) {
      if (this.router.url == "/login") {
        this.router.navigateByUrl('/dashboard');
        return false;
      }
      if (route.data.roles.some(ai => this.getUserRoles.getRoles().includes(ai))) {
        return route.data.roles.some(ai => this.getUserRoles.getRoles().includes(ai));
      }
      else {
        this.authService.logout();
        this.router.navigateByUrl('/login');
        return false;
      }
    }
    else {
      this.router.navigateByUrl('/login');
      return false;
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
    return "Patient";
    return roles.slice(0);
  }
}