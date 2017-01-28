// Importar Component desde el núcleo de Angular
import {Component, OnInit} from '@angular/core';
import {FavoritoService} from '../services/service.favorito';
import {Favorito} from '../models/favorito';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'list-favoritos',
    //template: '<h1>Hola mundo con Angular 2 !! victorroblesweb.es</h1>'
    templateUrl: 'app/views/list-favoritos.html',
    providers: [FavoritoService]
})
 
export class ListFavoritosComponent implements OnInit { 
	public title: string;
	public loading: boolean;

	public errorMessage;
	public favoritos:Favorito[];

	public confirmado;

	constructor(
		private _favoritoService: FavoritoService
		){
		this.title = "Listado de marcadores: ";
		this.loading = true;
	}

	ngOnInit(){
		console.log("ListFavoritosComponent cargado!!");
		this.getFavoritos();
	}

	getFavoritos(){
		this._favoritoService.getFavoritos().subscribe(
			result => {
				console.log(result);
				this.favoritos=result.favoritos;
				if(!this.favoritos){
					alert("Error en el servidor");
				}else{
					this.loading=false;
				}

			},
			error => {
				this.errorMessage = <any> error;
				if(this.errorMessage != null){
					console.log(this.errorMessage);
					alert("Error en la petición")
				}	
			}	




			);
	}


	onBorrarConfirm(id){
		this.confirmado=id;
	}

	onCancelarConfirm(id){
		this.confirmado=null;
	}
	onBorrarFavorito(id){
		this._favoritoService.deleteFavorito(id).subscribe(
			result =>{
				if(!result.message){
					alert("Error en la petición");
				}
				else{
					this.getFavoritos();
				}

			},
			error=>{
				this.errorMessage = <any> error;
				if(this.errorMessage != null){
					console.log(this.errorMessage);
					alert("Error en la petición")
				}

			}


			);
	}

}

