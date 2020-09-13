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
  subTitle = "Its fun to learn Interpolation";
  epNum = 17;
  placeholderval = "Enter value";
  hrefVal = "http://google.com";
  updatedLink = "http://oracle.com";
  inputValue = "";

  user = {
    name: "sam",
    email: "sam@gmail.com",
    dob: 1 / 12 / 1988,
    salary: 12000.567

  }
  userDemos = [
    {
      firstName: "Jane Doe",
      city: "New York",
      cityCode: "NY"
    },
    {
      firstName: "Jane Doe 3",
      city: "New Jersey",
      cityCode: "NJ"
    },
    {
      firstName: "Jane Doe 4",
      city: "Danbury",
      cityCode: "CT"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onClick(value) {
    alert("show alert" + value);
  }

}
