import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DealWithTabService} from '../deal-with-tab.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit{

  constructor(private activatedRoute: ActivatedRoute,private dealWithTabService:DealWithTabService) { }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }
}
