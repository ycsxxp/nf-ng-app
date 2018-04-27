import { Injectable, EventEmitter } from '@angular/core'

const KEY = 'layout';

type ThemeType = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J';

export interface Layout {
  /** 是否折叠右边菜单 */
  collapsed: boolean;
  /** 当前主题 */
  theme: ThemeType;
  /** 语言环境 */
  lang: string;
}

@Injectable()
export class LayoutService {
  isCollapsed$: EventEmitter<boolean> = new EventEmitter<boolean>()

  private _layout: Layout = null;
  // 从localStorage中获取
  private get(key: string) {
    return JSON.parse(localStorage.getItem(key) || 'null') || null
  }
  // 在localStorage中设置
  private set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  get layout(): Layout {
    if (!this._layout) {
      this._layout = Object.assign(<Layout>{
        collapsed: false,
        theme: 'A',
        lang: null
      }, this.get(KEY))
      this.set(KEY, this._layout)
    }
    return this._layout
  }

  private setLayout(name: string, value: any) {
    if (typeof this.layout[name] !== 'undefined') {
      this.layout[name] = value
      this.set(KEY, this._layout)
      return true
    }
    return false
  }
  constructor() {}
}