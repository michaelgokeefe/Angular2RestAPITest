import { Component }        from '@angular/core';
import { HTTP_PROVIDERS, Response }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';
import { AppService }       from './app.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>Event Insight Test</h1>
    <ul>
      {{item}}
    </ul>
    <ul>
    Input GET method:
    <input #search />
    <button (click)="getPosts(search.value); search.value=''">
      Search
    </button>
    <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
  `,
  providers: [HTTP_PROVIDERS, AppService]
})


export class AppComponent {
  errorMessage: string;
  public item: Response;
  mode = 'Observable';

  constructor (private appService: AppService) { }

  

  getPosts(searchVal: string): void {
    this.appService.getPosts(searchVal) 
                    .subscribe(
                      newItem => this.item = newItem,
                      error => this.errorMessage = <any>error);
  } 
}

