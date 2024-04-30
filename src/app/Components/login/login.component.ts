import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { User } from '../../Models/user/user.model';
import { UserService } from '../../Services/User/user.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FooterComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  logInForm!: FormGroup;
  isEdit: boolean = false;
  isModalOpen: boolean = true;
  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _router: Router
  ){}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.logInForm = this._fb.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login(){
    this._userService.userLogin(this.logInForm.value).subscribe((res:any) =>{
      if(res){
        // localStorage.setItem("userName", res.userName);
        localStorage.removeItem("userName");
        this.isEdit = true;
        this.isModalOpen = false;
        console.log("jfj", res);
        this._router.navigate(['/blogs']);
      }
    });
  }
}
