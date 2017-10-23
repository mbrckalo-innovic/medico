import { ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('DropdownLink') dropdownLink: ElementRef;

  constructor() {}

  ngOnInit() {
    jQuery(this.dropdownLink.nativeElement).dropdown();
  }
}
