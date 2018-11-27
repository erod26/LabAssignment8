import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
    //Path refers to where the page leads. '' is root, contacts is the contact html
    //** refers to a 404 error page, here it leads to login form.  */
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'contacts',
        component: ContactComponent
    },
    {
        path:'**',
        component: LoginComponent
    }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);