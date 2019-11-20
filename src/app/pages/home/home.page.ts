import { Component, OnInit } from '@angular/core';

import { features } from '../../helpers/feature-toggle';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public premadeBehaviorsPageEnabled: boolean;
  public doBehaviorsPageEnabled: boolean;

  constructor() { }

  ngOnInit() {
    this.premadeBehaviorsPageEnabled = features.premadeBehaviorsPageEnabled;
    this.doBehaviorsPageEnabled = features.doBehaviorsPageEnabled;
  }

}
