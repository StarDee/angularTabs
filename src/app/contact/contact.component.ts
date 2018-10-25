import { Component, OnInit } from '@angular/core';
import {map, skip} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DealWithTabService} from '../deal-with-tab.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private dealWithTabService:DealWithTabService) {}
  order: string;
  ngOnInit() {
    if (this.activatedRoute.snapshot.queryParams) {

      this.order = this.activatedRoute.snapshot.queryParams['order'];
      this.order = this.order + '::' + this.activatedRoute.snapshot.queryParams['id'];
    } else {
      this.order = '没传参数';
    }

    /*.pipe(skip(1)).subscribe(
    (params: ParamMap) => {
      this.order = params.get('order');
      console.log(params);
    }
  );*/
  }

}
