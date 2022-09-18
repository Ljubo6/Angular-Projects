import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { PostsService } from './posts.service';
import {HttpClientModule} from "@angular/common/http";
import {of} from "rxjs";

describe('PostsComponent', () => {
  let component: PostsComponent;
  let service: PostsService
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(() => {
      TestBed.configureTestingModule({
        declarations:[PostsComponent],
        providers:[PostsService],
        imports:[HttpClientModule]
      })

      fixture = TestBed.createComponent(PostsComponent)
      component = fixture.componentInstance
      //service = fixture.debugElement.injector.get(PostsService)
      service = TestBed.get(PostsService)
      })
  it('shpuld fetch posts on ngOnInit',() => {
    const posts = [1,2,3]

    spyOn(service,'fetch').and.returnValue(of(posts))

    fixture.detectChanges()
    expect(component.posts).toEqual(posts)
  })
})
