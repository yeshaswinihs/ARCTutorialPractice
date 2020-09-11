import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  showValue: boolean = false;
  switchValue = 2;
  users = [
    { name: "Ram", email: "ra@gmail.com" },
    { name: "sam", email: "sa@gmail.com" }
  ];
  colorval = 'green';
  bgcolor = "red";
  clsName = "one";
  clsName1 = "one";
  clsName2 = "two";
  subTitle="Its fun to learn Interpolation";
  epNum=17;
  placeholderval="Enter value";

  constructor() { }

  ngOnInit(): void {
  }

}
