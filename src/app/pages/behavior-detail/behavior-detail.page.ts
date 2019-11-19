import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Behavior } from '../../models/behavior.interface';
import { BehaviorsService } from '../../services/behaviors/behaviors.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-behavior-detail',
  templateUrl: './behavior-detail.page.html',
  styleUrls: ['./behavior-detail.page.scss'],
})
export class BehaviorDetailPage implements OnInit {
  public behavior: Observable<any>;
  private behaviorId;
  private isEditMode: boolean;
  public editBehaviorForm: FormGroup;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public behaviorsService: BehaviorsService,
    private router: Router,
    formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.editBehaviorForm = formBuilder.group({
      behaviorName: ['', Validators.required],
      points: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.behaviorId = this.route.snapshot.paramMap.get('id');
    this.behaviorsService.getBehavior(this.behaviorId).then(behavior => {
      this.behavior = behavior.valueChanges();
    });
  }

  toggleEditMode () {
    this.isEditMode = !this.isEditMode;
  }

  async editBehavior() {
    const loading = await this.loadingCtrl.create({});

    const behaviorName: string = this.editBehaviorForm.value.behaviorName;
    const points: number = this.editBehaviorForm.value.points;

    const behavior: Behavior = {
      id: this.behaviorId,
      name: behaviorName,
      points
    };

    this.behaviorsService.updateBehavior(behavior.id, behavior).then(() => {
      loading.dismiss().then(() => {
        this.isEditMode = false;
      });
    }, error => {
      console.error(error);
    });

    return await loading.present();
  }
}