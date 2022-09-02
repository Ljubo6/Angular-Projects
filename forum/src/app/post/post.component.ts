import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {Post} from "../app.component";


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements  OnInit,OnChanges,OnDestroy{

  @Input() post!: Post

  @ContentChild('info',{static: true}) infoRef!: ElementRef

  @Output() onRemove = new EventEmitter<number>()

  constructor() {
    console.log('constructor')
  }
  ngOnChanges(changes: SimpleChanges):void {
    console.log('ngOnChanges: ',changes)
  }

  ngOnInit(): void {
    console.log('ngOnInit')
    // console.log(this.infoRef.nativeElement)
  }
  ngOnDestroy():void {
    console.log('ngOnDestroy')
  }

  removePost() {
    this.onRemove.emit(this.post.id)
  }
}
