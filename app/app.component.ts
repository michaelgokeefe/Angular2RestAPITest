import { Component }        from '@angular/core';
import { HTTP_PROVIDERS, Response }  from '@angular/http';
import { Observable }       from 'rxjs/Observable';
import { Subject }          from 'rxjs/Subject';
import { AppService }       from './app.service';
import { ModelsTest }       from './models.test'

@Component({
  selector: 'my-app',
  template: `
    <h1>Event Insight Test</h1>
    <ul>
      <li *ngFor="let item of items">
        User ID: {{item.userId}}  <br>
        ID: {{item.id}}           <br>
        Title: {{item.title}}     <br>
        Body: {{item.body}}       <br>
      </li>
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
  private errorMessage: string;
  private items: any[];
  private mode = 'Observable';

  constructor (private appService: AppService) { }

  getPosts(searchVal: string): void {
    var that = this;
    this.appService.getPosts(searchVal) 
                    .subscribe(
                      newItems => {
                        if (newItems.constructor === Array) {
                          that.items = newItems;
                        } else {
                          that.items = [];
                          that.items.push(newItems);
                        }
                      },
                      error => this.errorMessage = <any>error);
  } 
}

