import * as ng from 'angular2/angular2';
import {Tabs} from 'components/tabs';

// TODO: Why do we need the default object?
var Component = ng.default.Component;
var Template = ng.default.Template;

@Component({ selector: 'pane', directives: [Tabs] })
@Template({ url: '/templates/pane.html' })
export class Pane {
  //TODO: Rado -> injecting Tabs breaks everything.
  constructor(tabs: Tabs) {

  }
}
