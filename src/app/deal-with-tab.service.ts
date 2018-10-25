import { Injectable } from '@angular/core';
import { SimpleReuseStrategy } from './SimpleReuseStrategy';
import {
  ActivatedRoute,
  ActivationEnd,
  NavigationEnd,
  Router
} from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router/src/router_state';
import { filter, map } from 'rxjs/operators';

export class Tab {
  title: string;
  module: string;
  url: string;
  isSelect: boolean;
  queryParams: any;
}

@Injectable()
export class DealWithTabService {
  tabList: Array<Tab> = [];

  constructor(public router: Router, private activatedRoute: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof ActivationEnd))
      .subscribe((event: ActivationEnd) => {
        const snapshot = event.snapshot;
        if (snapshot['_routerState'].url) {
          const key = snapshot['_routerState'].url.replace(/\/|\?|&|=/g, '_');

          const title = snapshot.routeConfig.data.title;
          const exitMenu = this.tabList.find(info => info.url === key);
          if (exitMenu) {
            this.tabList.forEach(p => (p.isSelect = p.url === key));
            return;
          }
          this.getTab(
            snapshot.routeConfig,
            snapshot.queryParams,
            snapshot['_routerState'].url,
            title
          );
        }
      });
  }

  public getTab(routeConfig, queryParams, url, title) {
    const isShow = routeConfig.data && routeConfig.data.useCache;
    if (!isShow) {
      return;
    }

    const key = url.replace(/\/|\?|&|=/g, '_');

    const exitMenu = this.tabList.find(info => {
      info.isSelect = false;
      return info.url === key;
    });
    if (exitMenu) {
      // 如果存在不添加，当前表示选中
      this.tabList.forEach(p => (p.isSelect = p.url === key));
      return;
    }
    const title1 =
      queryParams && queryParams.title ? '[' + queryParams.title + ']' : '';
    const tab = {
      title: title + title1,
      module: routeConfig.data.module,
      queryParams: queryParams,
      url: key,
      isSelect: true
    };
    this.tabList.push(tab);
    console.log(this.tabList);
    ngEvents.trigger('getTabList', this.tabList);
  }

  public deleteTabCache(tab: Tab) {
    // 当前关闭的是第几个路由
    const index = this.tabList.findIndex(p => p.url === tab.url);
    // 如果只有一个不可以关闭
    if (this.tabList.length === 1) {
      return;
    }
    if (tab.isSelect) {
      // 显示上一个选中
      let menu = this.tabList[index - 1];
      if (!menu) {
        // 如果上一个没有下一个选中
        menu = this.tabList[index + 1];
      }
      // console.log(menu);
      // console.log(this.menuList);
      this.tabList.forEach(p => (p.isSelect = p.url === menu.url));

      // 显示当前路由信息
      this.router.navigate([menu.module], { queryParams: menu.queryParams });
    }

    // 删除复用
    this.tabList = this.tabList.filter(p => p.url !== tab.url);
    SimpleReuseStrategy.deleteRouteSnapshot(tab.url);
    ngEvents.trigger('getTabList', this.tabList);
  }
}
