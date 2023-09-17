import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
 signupUsers: any[]=[];
 signupObj:any={
  userName:'',
  email:'',
  password:''
 };
 loginObj: any ={
  userName:'',
  password:''
 };
 constructor(private router:Router){}
 ngOnInit(): void{
  const localData =localStorage.getItem('signupUsers')
  if(localData !=null){
    this.signupUsers=JSON.parse(localData);
  }
 }

 onSignUp(){
  this.signupUsers.push(this.signupObj);
  localStorage.setItem('signupUsers',JSON.stringify(this.signupUsers));
  this.signupObj={
    userName:'',
    email:'',
    password:'',
    phonenumber:'',
    gender:''
   };
 }
 onLogin() {
  this.router.navigate(['/teststart']);
  debugger; // This will pause the execution for debugging purposes

  const isUserExist = this.signupUsers.find(
    (user) =>
      user.userName === this.loginObj.userName && user.password === this.loginObj.password
  );

  if (isUserExist) {
    alert('User Login Successfully');
  } else {
    alert('Wrong credentials');
  }
}
}


