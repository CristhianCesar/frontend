import { ClienteComponent } from './cliente/cliente.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    { path: 'clientes', component: ClienteComponent }
];

export const Routing = RouterModule.forRoot( appRoutes );