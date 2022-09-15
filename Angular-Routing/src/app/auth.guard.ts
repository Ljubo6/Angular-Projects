<<<<<<< HEAD

=======
>>>>>>> c5d3590e905b9a0303ef67c85622ca026312636b
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot
} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable({providedIn:"root"})
export class AuthGuard implements CanActivate, CanActivateChild{
  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):Observable<boolean> | Promise<boolean> | boolean{

    return this.authService.isAuthenticated().then( (isAuth: boolean) => {
      if(isAuth){
        return true
      }else{
        return this.router.navigate(['/'],{
          queryParams:{
            auth: false
          }
        })
      }
    })
  }
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route, state)
  }
}
