import { Component } from '@angular/core';
import {MyServiceService} from "../my-service.service";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass'
})
export class HeaderComponent {
  logoPath = '../../assets/img_1.png'
  footballers = this.myService.footballers;
  selectedFootballer = this.myService.selectedFootballer;

  constructor(private myService: MyServiceService) {}

  onFootballerSelected(footballer: any) {
    this.myService.selectedFootballer.set(footballer);
  }
}
