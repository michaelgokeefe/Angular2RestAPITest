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
      User ID: {{item.userId}}  <br>
      ID: {{item.id}} <br>
      Title: {{item.title}} <br>
      Body: {{item.body}}
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
  private item: any = new ModelsTest(0, 0, "dummy", "dummy");
  private mode = 'Observable';

  constructor (private appService: AppService) { }

  

  getPosts(searchVal: string): void {
    this.appService.getPosts(searchVal) 
                    .subscribe(
                      newItem => this.item = ModelsTest.fromJson(newItem.json()),
                      error => this.errorMessage = <any>error);
  } 
}

