import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollAnimateDirective} from '../../shared/directives/scroll-animate.diretive'
@Component({
  selector: 'app-como',
   standalone: true,
  imports: [RouterLink, ScrollAnimateDirective],
  templateUrl: './como.component.html',
  styleUrl: './como.component.css'
})
export class ComoComponent {

}
