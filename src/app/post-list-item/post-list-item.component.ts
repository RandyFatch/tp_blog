import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {
  @Input() postTitle: string;
  @Input() postContent: string;
  loveIts=0;
  created_at= new Date();
  constructor() { }

  ngOnInit() {
  }
onLike(){
  this.loveIts=this.loveIts +1;
}
onDislike(){
  this.loveIts=this.loveIts -1;
}
}
