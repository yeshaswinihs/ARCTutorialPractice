import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.scss']
})
export class TdfComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(ngForm: NgForm) {
    console.log(ngForm.value);
  }
}
