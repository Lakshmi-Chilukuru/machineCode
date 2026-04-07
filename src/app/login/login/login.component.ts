import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/service/main.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit{
  public loginForm!:FormGroup
  constructor(private fb:FormBuilder,private service:MainService,private router:Router){}
  ngOnInit(): void {
    this.loginForm= this.fb.group({
      EmailId:['',[Validators.required,Validators.email]],
      Password:['',Validators.required]
    })
  }

  onSubmit(){
    console.log(this.loginForm.value)
    this.service.login(this.loginForm.value).subscribe((res)=>{
      console.log(res.data)
      alert("LoggedIn Successfully!")
      sessionStorage.setItem('user',res.data.token);
      sessionStorage.setItem('role',"BankEmployee");
      this.router.navigate(['/movieTicket'])
      // this.service.loggedIn$.next(true);
    },error=>{
      console.log(error)
    })
    this.loginForm.reset();
  }
  
}
