import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from 'src/app/components/home/home.component';
import { ContactoComponent } from 'src/app/components/contacto/contacto.component';
import { DetalleProductoComponent } from 'src/app/components/detalle-producto/detalle-producto.component';
import { SomosComponent } from 'src/app/components/somos/somos.component';
import { ListProductosComponent } from 'src/app/components/admin/list-productos/list-productos.component';
import { LoginComponent} from 'src/app/components/user/login/login.component';
import { RegisterComponent } from 'src/app/components/user/register/register.component';
import { ProfileComponent } from 'src/app/components/user/profile/profile.component';
import { Page404Component } from 'src/app/components/page404/page404.component';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'productoInterface/:id', component: DetalleProductoComponent},
  //Corregir aquí
  {path:'cart', loadChildren:'./pages/cart/cart-page.module#CarritotPageModule'},
  {path: 'somos', component:SomosComponent},
  {path: 'admin/list-productos', component: ListProductosComponent},
  {path: 'user/login', component: LoginComponent},
  {path: 'user/register', component: RegisterComponent},
  {path: 'user/profile', component: ProfileComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
