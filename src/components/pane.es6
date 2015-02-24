import * as ng from 'angular2/angular2';
import {Tabs} from 'components/tabs';

@ng.Component({ selector: 'pane', directives: [Tabs] })
@ng.Template({ url: '/templates/pane.html' })
export class Pane {
  constructor(@ng.Parent() tabs: Tabs) {

  }
}
