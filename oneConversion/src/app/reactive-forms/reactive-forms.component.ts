import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, NgForm, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // this.checkoutForm = this.formBuilder.group({
    //   email: new FormControl(),
    //   quantity: new FormControl(),
    //   terms: new FormControl()
    // });

    this.checkoutForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      quantity: ['', [Validators.required,
      Validators.max(5),
      Validators.pattern('[1-9][0-9]*|0')]
      ],
      items: this.formBuilder.array([
        this.formBuilder.group({
          itemName: [''],
          itemDesc: [''],
          itemDone: ['', Validators.requiredTrue]
        })
      ]),
      terms: ['', Validators.required]
    });

    // valueChanges - single field
    this.checkoutForm.get('email').valueChanges.subscribe(
      data => {
        console.log(data);
      }
    )

    // valueChanges-entire field
    this.checkoutForm.valueChanges.subscribe(
      data => {
        console.log(data);
      }
    )

    // // statusChanges-single field
    // this.checkoutForm.get('email').statusChanges.subscribe(
    //   data => {
    //     console.log(data);
    //   }
    // )
    // // statusChanges-entire form
    // this.checkoutForm.statusChanges.subscribe(
    //   data => {
    //     console.log(data);
    //   }
    // )
  }

  // get values
  onCheckout() {
    console.log(this.checkoutForm.value);
    // console.log(this.checkoutForm.get('email').value);

    // this.checkoutForm.reset();
  }


  loadData() {
    // Set Values- should set all values
    // this.checkoutForm.setValue({
    //   email: 'hsyesh@gmail.com',
    //   quantity: 67,
    //   terms: true
    // })
    // patch values- can set some of the values
    this.checkoutForm.patchValue({
      email: 'hsyesh@gmail.com',
      quantity: 67

    })
  }
  // getter for items formArray
  get items() {
    return this.checkoutForm.get('items') as FormArray;
  }
  // add new FormArray element dynamically
  addNewItem() {
    const newItem = this.formBuilder.group({
      itemName: [''],
      itemDesc: [''],
      itemDone: []
    });
    this.items.push(newItem);
  }

  // remove formArray elements dynamically
  removeItem(index) {
    this.items.removeAt(index);
  }
}
