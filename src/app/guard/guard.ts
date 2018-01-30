import {CanActivate} from "@angular/router";
import * as Keycloak from 'keycloak-js';
import {Injectable} from "@angular/core";

import "rxjs/Rx";
import {Observable} from "rxjs";
import {KeycloakService} from "../shared/keycloak.service";

@Injectable()
export class KeycloakGuard implements CanActivate{

  constructor(){

  }

  canActivate(){
    // let keycloak = Keycloak('../../keycloak/keycloak.json');
    // window['_keycloak'] = keycloak;
    //
    // return window['_keycloak'].init(
    //   {onLoad: 'login-required'}
    // )
    //   .map(function (authenticated) {
    //
    //     if (!authenticated) {
    //       window.location.reload();
    //     }
    //
    //     // refresh login
    //     setInterval(function () {
    //
    //       keycloak.updateToken(70).success(function (refreshed) {
    //         if (refreshed) {
    //           console.log('Token refreshed');
    //         } else {
    //           console.log('Token not refreshed, valid for '
    //             + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
    //         }
    //       }).error(function () {
    //         console.error('Failed to refresh token');
    //       });
    //
    //     }, 60000);
    //
    //     console.log("Loading...");
    //     return true;
    //
    //   });
    return false;
  }



}
