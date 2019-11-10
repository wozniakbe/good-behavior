import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { BehaviorsService } from '../../services/behaviors/behaviors.service';
import { Behavior } from '../../models/behavior.interface';
import { BehaviorType } from '../../models/behavior-type.enum';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  public createBehaviorForm: FormGroup;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public behaviorsService: BehaviorsService,
    private router: Router,
    formBuilder: FormBuilder
  ) {
    this.createBehaviorForm = formBuilder.group({
      behaviorName: ['', Validators.required],
      goodOrBad: ['', Validators.required],
      points: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  async createBehavior() {
    const loading = await this.loadingCtrl.create({});

    const behaviorName: string = this.createBehaviorForm.value.behaviorName;
    const goodOrBad: BehaviorType = this.createBehaviorForm.value.goodOrBad;
    const points: number = this.createBehaviorForm.value.points;

    const behavior: Behavior = {
      id: '',
      name: behaviorName,
      type: goodOrBad,
      points
    };

    this.behaviorsService.createBehavior(behavior).then(() => {
      loading.dismiss().then(() => {
        this.router.navigateByUrl('');
      });
    }, error => {
      console.error(error);
    });

    return await loading.present();
  }

}
