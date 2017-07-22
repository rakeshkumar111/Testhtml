import {Component} from '@angular/core';

@Component({
selector:"app-second",
template:`
<div>{{description}}</div>
`
})

export class SecondComponent {
description = "From second component";
}