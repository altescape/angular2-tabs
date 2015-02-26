import {Component, Template} from 'angular2/angular2';
import {Tabs} from 'components/tabs';
import {Pane} from 'components/pane';

@Component({
  selector: 'app'
})
@Template({
  url: '/templates/app.html',
  directives: [Tabs, Pane]
})
export class App {
  constructor() {
  }
}
