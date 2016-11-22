import {Component, View} from 'angular2/core';

@Component({
  selector: 'points'
})

@View({
  templateUrl: 'Templates/Points.html'
})

export class Points {

  constructor() {
    console.info('Points Component Mounted Successfully');

  }

  points = totalPoints();

}

function totalPoints() {
	return 15;
}