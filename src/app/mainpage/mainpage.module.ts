import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FadersComponent } from './faders/faders.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChannelsComponent } from './channels/channels.component';
import { ControlPadComponent } from './control-pad/control-pad.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ChannelComponent } from './channels/channel/channel.component';
import { FaderComponent } from './faders/fader/fader.component';

const mainpageRoutes: Routes = [
  {path:'mainpage', component: MainpageComponent}
]

@NgModule({
  declarations: [
    MainpageComponent,
    NavbarComponent,
    ChannelsComponent,
    FadersComponent,
    ControlPadComponent,
    ChannelComponent,
    FaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(mainpageRoutes)
  ]
})
export class MainpageModule { }