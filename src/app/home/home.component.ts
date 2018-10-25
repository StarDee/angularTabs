import { Component, OnInit } from '@angular/core';
import {DealWithTabService} from '../deal-with-tab.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private dealWithTabService:DealWithTabService) { }

  ngOnInit() {

  }

}
