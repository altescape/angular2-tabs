import * as ng from 'angular2/angular2';
import {Tabs} from 'components/tabs';
import {Pane} from 'components/pane';

@ng.Component({ selector: 'app' })
@ng.Template({ url: '/templates/app.html', directives: [Tabs, Pane] })
export class App {
  constructor() {
  }
}
