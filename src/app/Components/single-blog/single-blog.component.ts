import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { SingleBlogService } from '../../Services/single-blog/single-blog.service';
import { BlogServiceService } from '../../Services/blog-service.service';
import { CategoryService } from '../../Services/category/category.service';
import { Category } from '../../Models/Category/category.model';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-single-blog',
  standalone: true,
  imports: [
    FooterComponent,
    CommonModule, 
    RouterLink, 
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
    DatePipe
  ],
  templateUrl: './single-blog.component.html',
  styleUrl: './single-blog.component.css'
})
export class SingleBlogComponent implements OnInit {

  blogId: number = 0;
  blogDetails: any;
  bloglist: any[]=[];
  categoryList: Category[] = [];
  blogForm!: FormGroup;
  blogPostForm!: FormGroup;
  userName: string |null = localStorage.getItem("userName");
  constructor(
    private _blogService: SingleBlogService,
    private _bloggerService: BlogServiceService,
    private _categoryService: CategoryService,
    private _activateRoute: ActivatedRoute,
    private _router: Router,
    private _fb: FormBuilder,
    private _datePipe: DatePipe
  ){
    this._activateRoute.params.subscribe((res:any) => {
      this.blogId = res.id;
      this.getBlogById(this.blogId);
    })
  }
  

  ngOnInit(): void {
    this.createForm();
    this.createBlogPostForm();
    this.getAllBlogs();
    this.getAllCategory();
  }

  createForm(){
    this.blogForm = this._fb.group({
      title: ['', [Validators.required]],
      description: [''],
      categoryId: ['', [Validators.required]],
      blogImage: [''],
      createDate: ['']
    });
  }

  createBlogPostForm(){
    this.blogPostForm = this._fb.group({
      title: ['', [Validators.required]],
      description: [''],
      categoryId: ['', [Validators.required]],
      blogImage: [''],
      createDate: ['']
    });
  }

  
  getBlogById(id:number){
    
    this._blogService.getBlogById(id).subscribe((res:any) => {
      this.blogDetails = res;
      this.blogForm.patchValue({
        title: this.blogDetails.blogTitle,
        description: this.blogDetails.blogDescription,
        categoryId: this.blogDetails.categoryId,
        blogImage: this.blogDetails.blogImage,
        createDate: this.blogDetails.createdDate
      });
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

  getAllCategory(){
    this._categoryService.getAllCategory().subscribe((res:any) =>{
      this.categoryList = res;
      console.log("ffhf", this.categoryList);
    });
  }

  updateBlog(){}

  saveBlog(){
    this._blogService.addBlogPost(this.blogPostForm.value).subscribe((res:any) =>{
      if(res){
        this._router.navigate(['/blogs'])
      }
      else{
        
      }
    });
  }
}
