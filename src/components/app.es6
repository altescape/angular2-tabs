import {Component, Template} from 'angular2/angular2';
import {Tabs} from 'components/tabs';
import {Pane} from 'components/pane';

@Template({ url: '/templates/app.html', directives: [Tabs, Pane] })
@Component({
  selector: 'app'
})
export class App {
  constructor() {
  }
}
