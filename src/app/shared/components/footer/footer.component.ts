import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  links = [
    'About Us',
    'Terms of Use',
    'Privacy Policy',
    'COVID',
    'Responsible Gaming',
    'Contact Us',
    'Manage Cookies',
    'Copyright Information',
    'Blog',
  ];
  images = [
    'visa.png',
    'mastercard.png',
    'ae.png',
    'paypal.png',
    'skrill.png',
    'apay.svg',
    'gpay.png',
  ];

  constructor() {}

  ngOnInit(): void {}
}
