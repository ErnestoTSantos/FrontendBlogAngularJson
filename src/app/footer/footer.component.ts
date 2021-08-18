import { Component, OnInit } from '@angular/core';
import { faInstagram, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faInstagram = faInstagram
  faFacebook = faFacebook
  faLinkedin = faLinkedin

  constructor() { }

  ngOnInit(): void {
  }

}
