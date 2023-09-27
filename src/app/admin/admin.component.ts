import { Component } from '@angular/core';
import { AuthentificationService } from '../services/authentification.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  backroundEnv=environment.navColors
constructor(public auth :AuthentificationService,private router : Router){}
onclick(){
  this.auth.onclick().subscribe({
next :()=>{
this.router.navigate([''])
}
  }
  )
}
}
