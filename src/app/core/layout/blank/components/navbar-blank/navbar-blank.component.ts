import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, ɵInternalFormsSharedModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Menubar } from 'primeng/menubar';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { LangService } from './../../../../services/lang/lang.service';
import { ThemeService } from './../../../../services/theme/theme.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar-blank',
  imports: [
    Menubar,
    BadgeModule,
    AvatarModule,
    InputTextModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    TranslatePipe,
    ButtonModule,
    ToggleSwitch,
    ɵInternalFormsSharedModule,
    TranslatePipe,
  ],
  templateUrl: './navbar-blank.component.html',
  styleUrl: './navbar-blank.component.css',
})
export class NavbarBlankComponent implements OnInit {
  items: MenuItem[] | undefined;
  ngOnInit(): void {
    this.items = [
      {
        label: 'nav.home',
        icon: 'pi pi-home',
        routerLink: '/home',
      },
      {
        label: 'nav.products',
        icon: 'pi pi-tags',
        routerLink: '/products',
      },
      {
        label: 'nav.categories',
        icon: 'pi pi-th-large',
        routerLink: '/categories',
      },
      {
        label: 'nav.orders',
        icon: 'pi pi-shopping-bag',
        routerLink: '/orders',
      },
      {
        label: 'nav.wishlist',
        icon: 'pi pi-heart',
        routerLink: '/wishlist',
        badge: '5',
      },
      {
        label: 'nav.cart',
        icon: 'pi pi-shopping-cart',
        routerLink: '/cart',
        badge: '5',
      },
    ];
  }
  private readonly themeService = inject(ThemeService);
  private readonly langService = inject(LangService);
  theme: FormControl = new FormControl(this.themeService.isDark);
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  lang = this.langService.lang;
  changeLang() {
    this.langService.changeLang(this.lang() === 'en' ? 'ar' : 'en');
  }
}
