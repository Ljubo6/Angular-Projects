import {Component, OnInit} from '@angular/core';

export interface Post{
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  posts: Post[] = [
    {title:'I want to learn Angular components',text:'I am still learning components',id:1},
    {title: 'Next block',text: 'It will be about directives and more about pipes',id: 2}
  ]
  ngOnInit() {
    setTimeout(() => {
      console.log('Timeout')
      this.posts[0] = {
        title: 'changed',
        text: 'changed 2',
        id: 33
      }
    },5000)
  }

  updatePosts(post: Post) {
    this.posts.unshift(post)
    console.log('Post: ',post)
  }

  removePost(id: number) {
    console.log('id to remove: ',id)
    this.posts = this.posts.filter(p => p.id !== id)
  }
}
