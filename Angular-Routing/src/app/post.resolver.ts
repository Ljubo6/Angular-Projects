<<<<<<< HEAD

=======
>>>>>>> c5d3590e905b9a0303ef67c85622ca026312636b
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {delay, Observable, of} from "rxjs";
import {Post, PostsService} from "./posts.service";
import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class PostResolver implements Resolve<Post> {
  constructor(private postService: PostsService) {

  }
<<<<<<< HEAD
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {

    return of (this.postService.getById(Number(route.params['id'])))
      .pipe(delay(1500))

  }
=======
    resolve(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): any {

        return of (this.postService.getById(Number(route.params['id'])))
          .pipe(delay(1500))

    }
>>>>>>> c5d3590e905b9a0303ef67c85622ca026312636b

}
