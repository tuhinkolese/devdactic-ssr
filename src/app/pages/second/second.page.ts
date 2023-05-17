import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) {
    this.addDefaultTags()
   }

  ngOnInit() {

    this.titleService.setTitle('Devdactic SSR');
    this.metaService.updateTag({ name: 'description', content: 'The SSR Page' });
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


  }


  addDefaultTags() {
    this.metaService.addTags([
      // Twitter
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@mystockedge" },
      { name: "twitter:title", content:'The SSR Page' },
      { name: "twitter:description", content: 'The SSR Page' },
      { name: "twitter:url", content: 'https://web.stockedge.com/assets/img/light/icon.png' }, // URL_SE
      { name: "twitter:creator", content: "@mystockedge" },

      { property: "fb:app_id", content: "123456" }, // 2) taken from FB page of mystockedge 1) app id taken from config.xml
      { property: "og:title", content: "this.defaultSeoTitle" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: 'https://web.stockedge.com/assets/img/light/icon.png' }, // URL_SE
      { property: "og:description", content: "this.defaultSeoDesc" },
      //SEO 
      { name: "description", content: "this.defaultSeoDesc" },
      { name: "title", content: "this.defaultSeoTitle" },
      { name: "keywords", content: "stockedge" }
    ]);


  }

}
