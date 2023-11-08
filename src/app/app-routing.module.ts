import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SetupComponent } from './setup/setup.component';
import { OverlayComponent } from './overlay/overlay.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'setup', component: SetupComponent }, // Đặt tiêu đề cho route này }
  { path: 'register', component: RegisterComponent }, // Đặt tiêu đề cho route này }
  { path: 'overlay', component: OverlayComponent }, // Đặt tiêu đề cho route này }
  { path: '**', component: NotfoundComponent } // Đặt tiêu đề cho route này }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
