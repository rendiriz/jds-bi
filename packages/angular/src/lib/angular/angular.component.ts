import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'jds-bi-angular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularComponent implements OnInit {
  constructor() {
    console.warn('constructor');
  }

  ngOnInit(): void {
    console.warn('ngOnInit');
  }
}
