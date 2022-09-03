import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
export interface Post {
  title: string,
  text: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  p: Promise<string> = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('Promise resolved')
    },4000)
  })
  date$: Observable<Date> = new Observable(obs => {
    setInterval(() => {
      obs.next(new Date())
    },1000)
  })
  date!: Date

  search = ''
  searchField = 'title'
  posts: Post[] = [
    {title:'Beer',text:'The best drink in the world'},
    {title:'Bread',text:'The best food in the world'},
    {title:'Javascript',text:'The best language in the world'}
  ]

  addPost() {
    this.posts.unshift({
      title: 'Angular',
      text:'Lyubomir course'
    })
  }
  ngOnInit() {
    this.date$.subscribe(date => {
      this.date = date
    })
  }
}
