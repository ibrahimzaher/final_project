import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastModule } from 'primeng/toast';
import { ThemeService } from './core/services/theme/theme.service';
import { LangService } from './core/services/lang/lang.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxSpinnerModule, ToastModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly theme = inject(ThemeService);
  private readonly lang = inject(LangService);

  protected readonly title = signal('final_project');
  ngOnInit(): void {
    this.theme.initTheme();
    this.lang.init();
  }
}
