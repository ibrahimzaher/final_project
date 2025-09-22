import { Component, inject, OnInit, Signal, signal } from '@angular/core';
import { Toolbar } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ToggleSwitch } from 'primeng/toggleswitch';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ThemeService } from '../../../../../services/theme/theme.service';
import { LangService } from '../../../../../services/lang/lang.service';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar-auth',
  imports: [
    Toolbar,
    AvatarModule,
    ButtonModule,
    RouterLink,
    ReactiveFormsModule,
    ToggleSwitch,
    TranslatePipe,
  ],
  templateUrl: './navbar-auth.component.html',
  styleUrl: './navbar-auth.component.css',
})
export class NavbarAuthComponent implements OnInit {
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
