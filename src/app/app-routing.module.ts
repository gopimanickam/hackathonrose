import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { TeststartComponent } from './teststart/teststart.component';

const routes: Routes = [
  {path:'register',component:RegisterComponent},
{path:"",redirectTo:'register',pathMatch:'full'},
 {path: 'teststart', component: TeststartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
