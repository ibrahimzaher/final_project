import { Component, inject, OnInit, Signal, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DrawerModule, Drawer } from 'primeng/drawer';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { TranslatePipe } from '@ngx-translate/core';
import { NavbarAuthComponent } from '../../auth/auth-layout/components/navbar-auth/navbar-auth.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { LangService } from '../../../services/lang/lang.service';
import { ThemeService } from '../../../services/theme/theme.service';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { Toolbar } from 'primeng/toolbar';

@Component({
  selector: 'app-dashboard-layout',
  imports: [
    RouterOutlet,
    DrawerModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    StyleClassModule,
    TranslatePipe,
    RouterLink,
    RouterLinkActive,
    ToggleSwitch,
    ReactiveFormsModule,
    Toolbar,
  ],
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css'],
})
export class DashboardLayoutComponent implements OnInit {
  @ViewChild('drawerRef') drawerRef!: Drawer;

  closeCallback(e: any): void {
    this.drawerRef.close(e);
  }

  visible: boolean = false;
  ngOnInit(): void {
    this.toggle = new FormControl(this.theme.isDark);
  }
  private readonly theme = inject(ThemeService);
  private readonly lang = inject(LangService);
  language: Signal<string> = this.lang.lang;
  toggle!: FormControl;

  changeTheme() {
    this.theme.toggleTheme();
    console.log(this.toggle.value);
  }
  changeLang() {
    this.lang.changeLang(this.language() == 'en' ? 'ar' : 'en');
  }
}
