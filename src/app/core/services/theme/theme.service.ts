import { inject, Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly _isDark: WritableSignal<boolean> = signal(false);
  readonly isDark = this._isDark.asReadonly();
  initTheme() {
    const isDarkNow = document.documentElement.classList.toggle(
      'dark',
      localStorage.getItem('theme') === 'dark' ||
        (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
    this._isDark.set(isDarkNow);
  }

  setDarkMode() {
    this._isDark.set(true);
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
  setLightMode() {
    this._isDark.set(false);
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
  toggleTheme() {
    this._isDark.set(!this._isDark());
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }
}
