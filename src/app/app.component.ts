import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private metaService: Meta,
    private titleService: Title
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }



  getSEOData() {
  
            // Twitter
            this.metaService.updateTag({ property: 'twitter:card', content: 'summary_large_image' });
            this.metaService.updateTag({ property: 'twitter:title', content: 'NEW ARTICLE OUT NOW' });
            this.metaService.updateTag({ property: 'twitter:url', content: "https://tense-pig-garters.cyclic.app/" });
            this.metaService.updateTag({ property: 'twitter:description', content: 'Check out this cool article' });
            this.metaService.updateTag({ property: 'twitter:image', content: 'https://web.stockedge.com/assets/img/light/icon.png' });
        
            // Facebook
            this.metaService.updateTag({ property: 'og:url', content: '/second' });
            this.metaService.updateTag({ property: 'og:type', content: 'website' });
            this.metaService.updateTag({ property: 'og:description', content: 'My Ionic SSR Page' });
            this.metaService.updateTag({ property: 'og:title', content: 'My SSR Title!' });
            this.metaService.updateTag({ property: 'og:image', content: 'https://web.stockedge.com/assets/img/light/icon.png' });

            //SEO
            this.metaService.updateTag({ name: "title", content: 'StockEdge Title' });
            this.metaService.updateTag({ name: "description", content: "Stockedge Desc" });
            this.metaService.updateTag({ name: "keywords", content: 'stockedge' });
            this.titleService.setTitle('Stockedge')


            
      }
  

}
