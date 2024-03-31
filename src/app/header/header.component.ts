import {Component, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() headerImgSource: string = "../assets/img/dog-logo.png";
  @Input() headerAltText: string = "A logo of a dog looking to the side";

}
