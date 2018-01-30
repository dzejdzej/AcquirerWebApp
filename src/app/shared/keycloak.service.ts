import { Injectable } from '@angular/core';
import * as Keycloak from 'keycloak-js';

@Injectable()
export class KeycloakService {

  public keycloak:any = Keycloak('../../keycloak/keycloak.json');

  constructor() { }


  checkAuthorization(){
    window['_keycloak'] = this.keycloak;

    window['_keycloak'].init(
      {onLoad: 'login-required'}
    )
      .success(function (authenticated) {

        if (!authenticated) {
          window.location.reload();
        }

        // refresh login
        setInterval(function () {
          this.keycloak.updateToken(70).success(function (refreshed) {
            if (refreshed) {
              console.log('Token refreshed');
            } else {
              console.log('Token not refreshed, valid for '
                + Math.round(this.keycloak.tokenParsed.exp + this.keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
            }
          }).error(function () {
            console.error('Failed to refresh token');
          });


        }, 60000);

        console.log("Loading...");
      });
  }

}
