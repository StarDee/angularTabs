import { Component, OnInit } from '@angular/core';
import {DealWithTabService} from '../deal-with-tab.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private dealWithTabService:DealWithTabService) { }

  ngOnInit() {

  }

}
