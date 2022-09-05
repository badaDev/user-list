import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-source-code',
  templateUrl: './source-code.component.html',
  styleUrls: ['./source-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SourceCodeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      window.location.href = "https://github.com/badaDev/user-list";
  }

}
