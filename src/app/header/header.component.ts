import { Component, OnInit } from '@angular/core';
import { TitleService } from '../title.service';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  lang!: string; // Biến string trong lớp MyClass\
  data_navbar: any = [];
  constructor(public titleService: TitleService, public translate: TranslateService, private http: HttpClient, private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {

    this.lang = localStorage.getItem('language') || 'vi';
    this.translate.setDefaultLang(this.lang); // Ngôn ngữ mặc định (English)
    this.translate.use(this.lang); // Ngôn ngữ sử dụng ban đầu
    // load cái danh sách về
    this.http.get('assets/navbar.json').subscribe((response: any) => {
      this.data_navbar = response;
      this.data_navbar.menuItems.forEach((element: any) => {
        element.icons = this.sanitizer.bypassSecurityTrustHtml(element.icons);
      });
    });
  }
  toggleDarkMode(): void {
    const isDarkmode = this.titleService.isDarkMode();
    this.titleService.toggleDarkMode();
  }
  changeLanguage(event: Event): void {
    const laguage = (event.target as HTMLSelectElement).value;
    localStorage.setItem('language', laguage);
    window.location.reload();
  }
}
