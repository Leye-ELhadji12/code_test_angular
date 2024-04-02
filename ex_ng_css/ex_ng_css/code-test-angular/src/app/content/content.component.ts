import { Component } from '@angular/core';
import {MyServiceService} from "../my-service.service";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.sass'
})
export class ContentComponent {
  selectedFootballer = this.myService.selectedFootballer;

  constructor(private myService: MyServiceService) {}
}
