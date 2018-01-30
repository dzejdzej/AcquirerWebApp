import { Component, OnInit } from '@angular/core';
import {KeycloakService} from "../../shared/keycloak.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private keycloakService:KeycloakService) { }

  ngOnInit() {
    //this.keycloakService.checkAuthorization();
  }

}
