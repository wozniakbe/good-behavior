import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Reward } from '../../models/reward.interface';
import { RewardsService } from '../../services/rewards/rewards.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-reward-detail',
  templateUrl: './reward-detail.page.html',
  styleUrls: ['./reward-detail.page.scss'],
})
export class RewardDetailPage implements OnInit {
  public reward: Observable<any>;
  private rewardId;
  private isEditMode: boolean;
  public editRewardForm: FormGroup;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public rewardsService: RewardsService,
    private router: Router,
    formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.editRewardForm = formBuilder.group({
      rewardName: ['', Validators.required],
      points: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.rewardId = this.route.snapshot.paramMap.get('id');
    this.rewardsService.getReward(this.rewardId).then(reward => {
      this.reward = reward.valueChanges();
    });
  }

  toggleEditMode () {
    this.isEditMode = !this.isEditMode;
  }

  async editReward() {
    const loading = await this.loadingCtrl.create({});

    const rewardName: string = this.editRewardForm.value.rewardName;
    const points: number = this.editRewardForm.value.points;

    const reward: Reward = {
      id: this.rewardId,
      name: rewardName,
      points
    };

    this.rewardsService.updateReward(reward.id, reward).then(() => {
      loading.dismiss().then(() => {
        this.isEditMode = false;
      });
    }, error => {
      console.error(error);
    });

    return await loading.present();
  }
}