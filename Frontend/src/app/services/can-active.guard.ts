import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService implements CanActivate {

  constructor(private getUserRoles: UserRolesService, private authService: AuthService, private router: Router, private messageService: MessageService) { }

  canActivate(route: ActivatedRouteSnapshot) {
    if (this.authService.isLoggedIn) {
      if (route.data.roles.some(ai => this.getUserRoles.getRoles().includes(ai))) {
        return route.data.roles.some(ai => this.getUserRoles.getRoles().includes(ai));
      }
      else {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'You were logged out because you tried to enter where you are not authorized.' });
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