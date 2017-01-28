import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListFavoritosComponent } from './components/list-favoritos.component';
import { FavoritoDetailComponent } from './components/favorito-detail.component';
import { FavoritoAddComponent } from './components/favorito-add.component';
import { FavoritoEditComponent } from './components/favorito-edit.component';

const appRoutes: Routes = [

	{path: '', component: ListFavoritosComponent},
	{path: 'marcador/:id', component: FavoritoDetailComponent},
	{path: 'crear-marcador', component: FavoritoAddComponent},
	{path: 'editar-marcador/:id', component: FavoritoEditComponent},
	{path: '**', component: ListFavoritosComponent}

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);