import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable()
export class CanActiveGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router, private roleService: UserRolesService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentUser = this.authService.CurrentUserId;
    if (currentUser != null) {
      if (route.data.roles && route.data.roles.indexOf(this.roleService.getRoles) === -1) {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
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