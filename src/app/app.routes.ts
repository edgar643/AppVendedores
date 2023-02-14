import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { LoginComponent } from './components/login/login.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { VendedoresComponent } from './components/vendedores/vendedores.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { RuteroComponent} from './components/rutero/rutero.component';
import { ConfiguracionComponent} from './components/configuracion/configuracion.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: PrincipalComponent },
  { path: 'login', component: LoginComponent },
  { path: 'marcas',component: MarcasComponent  },
  { path: 'productos',component:ProductosComponent  },
  { path: 'clientes',component:ClientesComponent},
  { path: 'vendedores',component:VendedoresComponent  },
  { path: 'rutero',component:RuteroComponent},
  { path: 'configuracion',component:ConfiguracionComponent},
  { path: '**', pathMatch: "full", redirectTo: 'login' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
