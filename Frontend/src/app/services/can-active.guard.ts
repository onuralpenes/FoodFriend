import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(private getUserRoles: UserRolesService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return route.data.roles.some(ai => this.getUserRoles.getRoles().includes(ai));
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