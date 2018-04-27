import { Component, OnInit, Inject, ViewChild, Renderer2 } from '@angular/core';
// import { LayoutService } from '../layout.service'
import { Menu } from './menus.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  // 定义左边菜单
  private menus: Menu[]
  // 菜单的折叠
  private isCollapsed = false;

  @ViewChild('sidebar') private sidebar
  constructor(
    @Inject('layoutService') private layoutService,
    @Inject('menusService') private menusService,
    private renderer: Renderer2
  ) { }

  // 调用api获取菜单
  private getMenus(): void {
    this.menusService
      .getMenus()
      .then(menus => {
        this.menus = menus;
        // this.setBreadcrumb()
        // this.setIsOpen()
        // this.getSubMenu(this.breadcrumbArr[0] ? this.breadcrumbArr[0] : menus[0].text)
      });
  }
  // 页面展开调用函数
  public toggleOpen(value) {
    for (let item of this.menus) {
      if (value.text !== item.text) {
        item._open = false
      } else {
        item._open = !item._open
      }
    }
  }
  // 去掉所有的hover
  public deleteAllHover() {
    for (let item of this.menus) {
      if (item.child) {
        for (let c of item.child) {
          c._hover = false
        }
      }
    }
  }
  // hover时调用
  public toggleHover(parent, child) {
    this.deleteAllHover()
    for (let item of this.menus) {
      if (parent.text === item.text) {
        for (let c of item.child) {
          if (c.text === child.text) {
            c._hover = true
          }
        }
      }
    }
  }
  /**
   * addToFavorite 添加为常用模块
   */
  public addToFavorite(parent, child) {
    for (let item of this.menus) {
      if (parent.text === item.text) {
        for (let c of item.child) {
          if (c.text === child.text) {
            c.isFavorite = true
            this.menus[0].child.push(c)
          }
        }
      }
    }
    // 更新菜单
    this.menusService.setMenus(this.menus)
  }
  /**
   * removeFavorite 移除常用模块
   */
  public removeFavorite(child) {
    for (let item of this.menus) {
      // 常用模块菜单
      if (item.favorite) {
        for (let i = 0; i < item.child.length; i++) {
          if (item.child[i].text === child.text) {
            item.child.splice(i, 1)
          }
        }
      } else {
        for (let c of item.child) {
          if (c.text === child.text) {
            c.isFavorite = false
          }
        }
      }
    }
    // 更新菜单
    this.menusService.setMenus(this.menus)
  }

  ngOnInit() {
    this.getMenus()
  }

}
