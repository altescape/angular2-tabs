import {Component, Template, Parent} from 'angular2/angular2';
import {Tabs} from 'components/tabs';

@Template({ url: '/templates/pane.html' })
@Component({
  selector: 'pane',
  directives: [Tabs],
   bind: {
    title: 'title',
    info: 'info',
    visible: 'visible'
  }
})
export class Pane {
  constructor(@Parent() tabs: Tabs) {
    tabs.addPane(this);
  }
}
