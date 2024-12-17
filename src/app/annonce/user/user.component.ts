import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  id:any;
  user:any;
 
   constructor(private authenService: AuthentificationService , router: Router) {
   }
   ngOnInit(): void {
    this.getUserById();
   }
   getUserById(){
     this.authenService.getUserById(this.id).subscribe(data => {
       console.log(data);
       this.user=data;
   }
 
     )
 }
}
