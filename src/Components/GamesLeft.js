import {Component, View} from 'angular2/core';

@Component({
  selector: 'gamesleft'
})

@View({
  templateUrl: 'templates/GamesLeft.html'
})

export class GamesLeft {

  constructor() {
    console.info('GamesLeft Component Mounted Successfully');
  }

  gamesRemaining = totalGamesLeft();

}


function totalGamesLeft() {
	return 30;
}
