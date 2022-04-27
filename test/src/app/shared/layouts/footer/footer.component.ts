import { Component } from '@angular/core';

const T_ME: any[] = [
  {
    link: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
    src:
    // tslint:disable-next-line:max-line-length
      'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg',
    alt: 'Google',
  },
  {
    link: 'https://en.wikipedia.org/wiki/Bing_Mobile#/media/File:Bing_logo_(2016).svg',
    src:
    // tslint:disable-next-line:max-line-length
      'https://en.wikipedia.org/wiki/Bing_Mobile#/media/File:Bing_logo_(2016).svg',
    alt: 'Bing',
  },
];

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  public tMe: any[] = T_ME;
}
