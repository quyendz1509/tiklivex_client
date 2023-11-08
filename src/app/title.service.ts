import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  darkMode: string | null = localStorage.getItem('darkMode');
  constructor() {
    if (this.darkMode === null) {
      this.darkMode = 'false';
      // Lưu giá trị mặc định vào Local Storage
      localStorage.setItem('darkMode', this.darkMode);
    } else {
      this.applyDarkMode();
    }
  }

  public applyDarkMode(): void {

    if (this.darkMode == 'true') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
  toggleDarkMode(): void {
    // Chuyển đổi giá trị của `darkMode` giữa 'true' và 'false'
    this.darkMode = this.darkMode === 'true' ? 'false' : 'true';
    localStorage.setItem('darkMode', this.darkMode);
    this.applyDarkMode();

  }

  isDarkMode(): boolean {
    return this.darkMode === 'true';
  }
}
