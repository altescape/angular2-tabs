import {Component, Template, Parent} from 'angular2/angular2';
import {Tabs} from 'components/tabs';

@Component({
  selector: 'pane',
  directives: [Tabs],
   bind: {
    title: 'title',
    info: 'info',
    visible: 'visible'
  }
})
@Template({ url: '/templates/pane.html' })
export class Pane {
  constructor(@Parent() tabs: Tabs) {
    tabs.addPane(this);
  }
}
