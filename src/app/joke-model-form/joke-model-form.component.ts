import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms'

import {Joke} from '../joke';

@Component({
  selector: 'app-joke-model-form',
  templateUrl: './joke-model-form.component.html',
  styleUrls: ['./joke-model-form.component.css']
})
export class JokeModelFormComponent implements OnInit {
  @Output() jokeCreated = new EventEmitter<Joke>();

  myform: FormGroup;
  setup: FormControl;
  punchline: FormControl;

  ngOnInit() {
    this.createFormControls();
    this.createForm();
    // this.myform = new FormGroup({  
    //   setup: new FormControl('', Validators.required),
    //   punchline: new FormControl('', Validators.required)
    // })
  }

  createFormControls() {
    this.setup = new FormControl('', Validators.required);
    this.punchline = new FormControl('', Validators.required);
  }

  createForm(){
    this.myform = new FormGroup({
      setup: this.setup,
      punchline: this.punchline
    })
  }

  createJoke(setup: string, punchline: string) {
    console.log(setup + ' ' + punchline);
    this.jokeCreated.emit(new Joke(setup, punchline));
    this.myform.reset();
  }

  // onSubmit() {
  //   if (this.myform.valid) {
  //     console.log(this.setup.value);
  //     this.jokeCreated.emit(new Joke(this.setup.value, this.punchline.value));
  //     this.myform.reset();
  //   }    
  // }
}
