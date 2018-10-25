import { Component } from '@angular/core';
import { SimpleReuseStrategy } from './SimpleReuseStrategy';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTab';
  // 路由列表
  menuList: Array<{
    title: string;
    module: string;
    power: string;
    isSelect: boolean;
    queryParams: any;
  }> = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title
  ) {}

  gotoContact1(value: number) {
    this.router.navigate(['/contact'], {
      queryParams: { order: 'popular11', id: value, title: '型号' + value }
    });
  }
}
