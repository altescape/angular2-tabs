import {Template, Component, Foreach} from 'angular2/angular2';

@Template({ url: '/templates/tabs.html', directives: [Foreach] })
@Component({ selector: 'tabs' })
export class Tabs {
  constructor() {
    this.panes = [];
  }
  addPane(pane) {
    this.panes.push(pane);
  }
  setVisiblePane(pane) {
    pane.visible = true;
    this.panes.forEach((p) => {
      if(p !== pane) {
        p.visible = false;
      }
    });
  }
}
