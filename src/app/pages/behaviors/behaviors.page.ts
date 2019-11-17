import { Component, OnInit } from '@angular/core';
import { Behavior } from '../../models/behavior.interface';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorsService } from '../../services/behaviors/behaviors.service';

import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-behaviors',
  templateUrl: './behaviors.page.html',
  styleUrls: ['./behaviors.page.scss'],
})
export class BehaviorsPage implements OnInit {
public behaviorsList;

  constructor(
    private behaviorsService: BehaviorsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.behaviorsService.getBehaviorsList().then(behaviorsList => {
      this.behaviorsList = behaviorsList.valueChanges();
    });
  }

}
