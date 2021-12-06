import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable()
export class CanActiveGuard implements CanActivate {
    constructor(private authService: AuthService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let logged = this.authService.isLoggedIn;
        if (logged) {
            return true;
        }
        else return false;
    }
}

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(private getUserRoles: UserRolesService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    return route.data.roles.some( ai => this.getUserRoles.getRoles().includes(ai) );
  }

}

@Injectable({
  providedIn: 'root'
})
export class UserRolesService {
  userRoles: string[] = [];

  setRoles(Roles: string[]){
    this.userRoles = Roles.slice(0);
  }

  getRoles(){
    return this.userRoles;
  }
}