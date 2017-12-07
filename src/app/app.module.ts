import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OpaqueToken } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { JokeFormComponent } from './joke-form/joke-form.component';
import { CardHoverDirective } from './card-hover.directive';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { CleanPipe } from './clean.pipe';
import { JokeModelFormComponent } from './joke-model-form/joke-model-form.component';
import { JokeService } from './joke.service'


const MAX_JOKES_TOKEN = new OpaqueToken("Max Jokes");

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent,
    CardHoverDirective,
    AsyncPipeComponent,
    CleanPipe,
    JokeModelFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    JokeService,
    { provide: MAX_JOKES_TOKEN, useValue: 3}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
