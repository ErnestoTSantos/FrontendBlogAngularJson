import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { post } from '../model/Post'
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  faGithub = faGithub

  listPost!: post[];

  filteredPost: post[] = [];

  _posts: post[] = [];

  post: post = new post;

  _filterBy!: string;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.findPosts()
  }

  findPosts(){
    this.retriveAll()
  }

  retriveAll(): void{
    this.postService.retriveAll().subscribe({
      next: posts => {
        // Retorna o courses
        this._posts = posts;
        // Continua filtrando os cursos
        this.filteredPost = this._posts;
      },
      // "Trata os erros"
      error: err => console.log('Error', err)
    });
  }

  saveMessage(){
    this.postService.save(this.post).subscribe({
      next: post => console.log('Saved with success', post),
      error: err => console.log('Error', err)
    });
    location.assign('/feed')
  }

  set filter(value: string){
    this._filterBy = value;

    this.filteredPost = this._posts.filter((post: post) => post.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1)
  }

}
