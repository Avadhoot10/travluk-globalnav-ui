import { Component, OnInit } from '@angular/core';
import { NavInfoService } from '../shared/nav-info.service';
import { TopMenu } from './TopMenu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  topMenu:TopMenu[]=[];  //this varible conatain list of top menus 
 
  constructor(private navInfoService:NavInfoService) {  }
  
  ngOnInit(): void {
    this.getNavMenuInfoFromDB();
  }

   // Geting navigation Menu list from DB and assigning it's responce to TopMenu variable 
  getNavMenuInfoFromDB(){
    this.navInfoService.getNavInfo().subscribe((res)=>{
      this.topMenu=Object.values(res);
    })
  }
}
