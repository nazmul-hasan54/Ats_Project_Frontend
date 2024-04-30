import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';
import { UserService } from '../../Services/User/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
    FooterComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _router: Router
  ){}
  
  
  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.registrationForm = this._fb.group({
      userName: ['', [Validators.required]],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register(){
    this._userService.userRegistration(this.registrationForm.value).subscribe((res:any) =>{
      if(res){
        this.createForm();
        this._router.navigate(['/login']);
      }
    });
  }
}
