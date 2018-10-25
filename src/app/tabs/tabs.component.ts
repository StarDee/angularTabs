import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {DealWithTabService, Tab} from '../deal-with-tab.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit, OnDestroy {

  showedTabs = [];
  constructor(private router:Router,private dealWithTabService:DealWithTabService) { }

  ngOnInit() {
    ngEvents.on('getTabList',(tabList)=>{
      this.getTabList(tabList)
    });
  }

  getTabList(tabList) {
    this.showedTabs = tabList;
  }

  deleteTabCache(tab) {
    this.dealWithTabService.deleteTabCache(tab);
  }

  ngOnDestroy() {
    ngEvents.off('getTabList');
  }

  jump(tab:Tab){
    this.router.navigate([tab.module],{queryParams:tab.queryParams});
  }
}
