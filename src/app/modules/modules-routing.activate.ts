import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { CanActivate } from "@angular/router";

@Injectable()
export class ModulesRoutingActivate implements CanActivate {
  constructor(
    private router: Router
  ) { }

  canActivate() {
    if (localStorage.getItem("email") == "" || localStorage.getItem("email") == null) {
      this.router.navigate(["/security/login"]);
      return false;
    } else {
      return true;
    }
  }
}