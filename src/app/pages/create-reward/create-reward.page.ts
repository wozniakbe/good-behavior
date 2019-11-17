import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { RewardsService } from '../../services/rewards/rewards.service';
import { Reward } from '../../models/reward.interface';

@Component({
  selector: 'app-create-reward',
  templateUrl: './create-reward.page.html',
  styleUrls: ['./create-reward.page.scss'],
})
export class CreateRewardPage implements OnInit {

  public createRewardForm: FormGroup;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public rewardsService: RewardsService,
    private router: Router,
    formBuilder: FormBuilder
  ) {
    this.createRewardForm = formBuilder.group({
      rewardName: ['', Validators.required],
      points: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  async createReward() {
    const loading = await this.loadingCtrl.create({});

    const rewardName: string = this.createRewardForm.value.rewardName;
    const points: number = this.createRewardForm.value.points;

    const reward: Reward = {
      id: '',
      name: rewardName,
      points
    };

    this.rewardsService.createReward(reward).then(() => {
      loading.dismiss().then(() => {
        this.router.navigateByUrl('/rewards');
      });
    }, error => {
      console.error(error);
    });

    return await loading.present();
  }

}
