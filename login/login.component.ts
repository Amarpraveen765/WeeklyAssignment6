import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder,FormArray } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy{
  user: User = new User();
  users: any;
  number=100;
  amar:any;
  deleteMessage: any;
  prompt:any;
  constructor(private loginService: LoginService) { }
  
  
  ngOnDestroy(): void {
    console.log("I am destroyer");
  }

  //both the methods which are there in form must be defined here
  formuse = new FormGroup({
    //here we will develop the logic initilize the variables which are comming from the form
    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.pattern('(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$')]), //Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8,15}$')
  });
  get f(){
    return this.formuse.controls
  }
  

  submit() {
    // here logic will be added
    // here the project will be there to develop your application to call API
    console.log(this.formuse.value)
    //below statement is used to get the data
    //this.getUserListData()
    //here we are going to create an object of entity and we will call the API hit for the post operation
    this.user.username=this.f['username'].value;
    this.user.password=this.f['password'].value;
    //now we call the post operaation
    this.postdata();

  }
  //this is used to delete a specific data WTR to
  deletedata(id: number){
    this.ngOnDestroy();

      this.loginService.deleteData(id)
  
        .subscribe(data => {
  
            console.log(data);
  
            this.deleteMessage=true;
  
            this.loginService.getUserValidation().subscribe(data =>{
  
              this.users =data
  
              })
              
  
          },
  
          error => console.log(error));
  

  }
  //this is used to creat the data
  postdata() {                                   //Calls the REST API throgh the services

    this.loginService.createData(this.user)

      .subscribe(data => console.log(data), error => console.log(error));


  }
  //this method will pull or get all the records from backend
  getAllData(){
     this.prompt="All Users Data"
     this.amar="."
     this.loginService.getUserValidation().subscribe((data: any) => {
       this.users = data;
    })
     
  }
  ngOnInit(): void {
  }

  getUserListData(this: any) {
    console.log("hi this is AMAR");
    this.loginService.getUserValidation().subscribe((data: any) => {
      this.users = data;  // we are pulled data from backend to the UI inside TS file and taken on HTML file.
      console.log(this.user);
      // this.dtTrigger.next();

    })
  }
  get username():any{

    return this.formuse.get('username');

  }
  get password():any{
    return this.formuse.get("password")
  }
  
}

