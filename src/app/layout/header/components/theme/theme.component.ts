import { Component, OnInit, Injectable, Inject, Output } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

type ThemeType = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J';

@Component({
  selector: 'header-theme',
  template: `
    <strong>切换主题</strong>
    <div class="theme-icons">
      <label *ngFor="let item of themes" (click)="changeTheme(item.type)" [style.background]="item.bg">
        <i class="anticon anticon-check" *ngIf="item.type == defaultTheme"></i>
        <div class="areas">
          <span class="nav" [style.background]="item.nav"></span>
          <span class="con" [style.background]="item.con"></span>
        </div>
      </label>
    </div>
  `,
  styleUrls: ['./theme.component.scss']
})

@Injectable()
export class HeaderThemeComponent implements OnInit {

  private defaultTheme

  private themes: { type: ThemeType, bg: string, nav: string, con: string }[] = [
    { type: 'A', bg: '#108ee9', nav: '#fff', con: '#f5f7fa' },
    { type: 'B', bg: '#00a2ae', nav: '#fff', con: '#f5f7fa' },
    { type: 'C', bg: '#00a854', nav: '#fff', con: '#f5f7fa' },
    { type: 'D', bg: '#f04134', nav: '#fff', con: '#f5f7fa' },
    { type: 'E', bg: '#373d41', nav: '#fff', con: '#f5f7fa' }
  ]

  // 切换主题
  public changeTheme(theme) {
    // const bodyEl = this.doc.querySelector('body');
    this.setTheme(theme)
  }

  // 设置主题
  public setTheme(name: ThemeType) {
    if (name === this.defaultTheme) {
      // return;
    }
    const bodyEl = this.doc.querySelector('body');
    const removeArr = [];
    for (let i = 0; i < bodyEl.classList.length; i++) {
      if (bodyEl.classList[i].startsWith('theme-')) {
        removeArr.push(bodyEl.classList[i]);
      }
    }
    bodyEl.classList.remove(...removeArr);
    bodyEl.classList.add(`theme-${name.toLowerCase()}`);
    this.defaultTheme = name;
    this.layoutService.setLayout('theme', name)
  }
  constructor(
    @Inject(DOCUMENT) private doc: any,
    @Inject('layoutService') private layoutService,
  ) {}

  ngOnInit() {
    this.defaultTheme = this.layoutService.layout.theme
    this.setTheme(this.defaultTheme)
  }
}
