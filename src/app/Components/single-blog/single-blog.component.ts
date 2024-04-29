import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SingleBlogService } from '../../Services/single-blog/single-blog.service';
import { BlogServiceService } from '../../Services/blog-service.service';

@Component({
  selector: 'app-single-blog',
  standalone: true,
  imports: [FooterComponent,CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.css'
})
export class SingleBlogComponent implements OnInit {
  blogId: number = 0;
  blogDetails: any;
  bloglist: any[]=[];
  constructor(
    private _blogService: SingleBlogService,
    private _bloggerService: BlogServiceService,
    private _activateRoute: ActivatedRoute,
    private _router: Router
  ){
    this._activateRoute.params.subscribe((res:any) => {
      debugger
      this.blogId = res.id;
      this.getBlogById(this.blogId);
    })
  }

  ngOnInit(): void {
    this.getAllBlogs();
  }

  getBlogById(id:number){
    this._blogService.getBlogById(id).subscribe((res:any) => {
      this.blogDetails = res;
      console.log("Blog Id", this.blogDetails); 
    });
  }

  getAllBlogs(){
    this._bloggerService.getAllBlogs().subscribe((res:any) =>{
      this.bloglist = res;
    });
  }

  openPage(id: number){
    this._router.navigate(['/single-blog', id]);
  }
}
