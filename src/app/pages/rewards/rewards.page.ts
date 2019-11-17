import { Component, OnInit } from '@angular/core';
import { Reward } from '../../models/reward.interface';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { RewardsService } from '../../services/rewards/rewards.service';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.page.html',
  styleUrls: ['./rewards.page.scss'],
})
export class RewardsPage implements OnInit {
  public rewardsList;

  constructor(
    private rewardsService: RewardsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.rewardsService.getRewardsList().then(rewardsList => {
      this.rewardsList = rewardsList.valueChanges();
    });
  }

}
