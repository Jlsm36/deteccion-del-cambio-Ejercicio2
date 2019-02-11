import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Launch} from "./store/models/launch";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-filter-presenter',
  templateUrl: './filter-presenter.component.html',
  styles: []
})
export class FilterPresenterComponent implements OnInit {
  @Input() public filteredLaunches: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
