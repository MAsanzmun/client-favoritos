"use strict";
var router_1 = require('@angular/router');
var list_favoritos_component_1 = require('./components/list-favoritos.component');
var favorito_detail_component_1 = require('./components/favorito-detail.component');
var favorito_add_component_1 = require('./components/favorito-add.component');
var favorito_edit_component_1 = require('./components/favorito-edit.component');
var appRoutes = [
    { path: '', component: list_favoritos_component_1.ListFavoritosComponent },
    { path: 'marcador/:id', component: favorito_detail_component_1.FavoritoDetailComponent },
    { path: 'crear-marcador', component: favorito_add_component_1.FavoritoAddComponent },
    { path: 'editar-marcador/:id', component: favorito_edit_component_1.FavoritoEditComponent },
    { path: '**', component: list_favoritos_component_1.ListFavoritosComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map