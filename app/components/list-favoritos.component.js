"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Importar Component desde el núcleo de Angular
var core_1 = require('@angular/core');
var service_favorito_1 = require('../services/service.favorito');
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
var ListFavoritosComponent = (function () {
    function ListFavoritosComponent(_favoritoService) {
        this._favoritoService = _favoritoService;
        this.title = "Listado de marcadores: ";
        this.loading = true;
    }
    ListFavoritosComponent.prototype.ngOnInit = function () {
        console.log("ListFavoritosComponent cargado!!");
        this.getFavoritos();
    };
    ListFavoritosComponent.prototype.getFavoritos = function () {
        var _this = this;
        this._favoritoService.getFavoritos().subscribe(function (result) {
            console.log(result);
            _this.favoritos = result.favoritos;
            if (!_this.favoritos) {
                alert("Error en el servidor");
            }
            else {
                _this.loading = false;
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
    };
    ListFavoritosComponent.prototype.onBorrarConfirm = function (id) {
        this.confirmado = id;
    };
    ListFavoritosComponent.prototype.onCancelarConfirm = function (id) {
        this.confirmado = null;
    };
    ListFavoritosComponent.prototype.onBorrarFavorito = function (id) {
        var _this = this;
        this._favoritoService.deleteFavorito(id).subscribe(function (result) {
            if (!result.message) {
                alert("Error en la petición");
            }
            else {
                _this.getFavoritos();
            }
        }, function (error) {
            _this.errorMessage = error;
            if (_this.errorMessage != null) {
                console.log(_this.errorMessage);
                alert("Error en la petición");
            }
        });
    };
    ListFavoritosComponent = __decorate([
        core_1.Component({
            selector: 'list-favoritos',
            //template: '<h1>Hola mundo con Angular 2 !! victorroblesweb.es</h1>'
            templateUrl: 'app/views/list-favoritos.html',
            providers: [service_favorito_1.FavoritoService]
        }), 
        __metadata('design:paramtypes', [service_favorito_1.FavoritoService])
    ], ListFavoritosComponent);
    return ListFavoritosComponent;
}());
exports.ListFavoritosComponent = ListFavoritosComponent;
//# sourceMappingURL=list-favoritos.component.js.map