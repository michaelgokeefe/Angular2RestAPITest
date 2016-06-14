
import { bootstrap } from "@angular/platform-browser-dynamic";
import { ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HTTP_PROVIDERS } from '@angular/http';
import { AppComponent } from "./app.component";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx'; 
import { enableProdMode } from '@angular/core';
import { Title } from '@angular/platform-browser';



//enableProdMode();
bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    Title
]);