import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  description = "This is description";
  disableEmail = true;
  email = 'test@gmail.com';
  paraWidth=null;

  warningflag = false;

  colors =["White","Green","Red"];
 items = [
   {name:"Wheat",price:{total:10,tax:3} },
   {name:"Rice" ,price:{total:10,tax:3} },
   {name:"Suger" ,price:{total:10,tax:3} },
   {name:"Salt",price:{total:10,tax:3}  },
   {name:"Tea" ,price:{total:10,tax:3} },
   {name:"Milk",price:{total:10,tax:3}  }
 ];
toogleWarning() {
this.warningflag = !this.warningflag;
}
  alertMe(pr:any,test:MouseEvent,t2:MouseEvent) {
    console.log(pr);
    console.log(event);
    console.log(t2);
    window.alert("Hi you clicked me");
  }
 
 toogle() {
   this.disableEmail = !this.disableEmail;
 }


}
