import * as ng from 'angular2/angular2';
import {Tabs} from 'components/tabs';
import {Pane} from 'components/pane';

// TODO: Rado -> Why do we need the default object?
var Component = ng.default.Component;
var Template = ng.default.Template;

@Component({ selector: 'app' })
@Template({ url: '/templates/app.html', directives: [Tabs, Pane] })
export class App {
  constructor() {
  }
}
