import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Behavior } from '../../models/behavior.interface';
import { BehaviorsService } from '../../services/behaviors/behaviors.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-behavior-detail',
  templateUrl: './behavior-detail.page.html',
  styleUrls: ['./behavior-detail.page.scss'],
})
export class BehaviorDetailPage implements OnInit {
  public behavior: Observable<any>;
  private behaviorId;
  constructor(
    private behaviorsService: BehaviorsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.behaviorId = this.route.snapshot.paramMap.get('id');
    this.behaviorsService.getBehavior(this.behaviorId).then(behavior => {
      this.behavior = behavior.valueChanges();
    });
  }
}