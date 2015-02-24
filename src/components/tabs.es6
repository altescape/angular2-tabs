import * as ng from 'angular2/angular2';

// TODO: Why do we need the default object?
var Component = ng.default.Component;
var Template = ng.default.Template;
var Foreach = ng.default.Foreach;

@Template({ url: '/templates/tabs.html', directives: [Foreach] })
@Component({ selector: 'tabs' })
export class Tabs {
  constructor() {

  }
  addPane(pane) {
    this.panes.push(pane);
  }
}
