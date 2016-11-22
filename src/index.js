import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {GamesLeft} from 'Components/GamesLeft';
import {Points} from 'Components/Points';

@Component({
  selector: 'main'
})

@View({
  directives: [GamesLeft, Points],
  templateUrl: 'templates/datarow.html'
})

class Main {

}

bootstrap(Main);
