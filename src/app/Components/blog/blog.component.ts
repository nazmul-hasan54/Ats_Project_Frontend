import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { BlogServiceService } from '../../Services/blog-service.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FooterComponent, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  blogList: any[] = [];
  constructor(
    private _blogService: BlogServiceService,
    private _router: Router
  ){}

  ngOnInit(): void {
    this.getAllBlogs();
  }
  getAllBlogs(){
    this._blogService.getAllBlogs().subscribe((res:any) => {
      this.blogList = res;
      console.log("Blog list", this.blogList);
    });
  }

  openBlog(id: number){
    this._router.navigate(['/single-blog', id])
  }
}
