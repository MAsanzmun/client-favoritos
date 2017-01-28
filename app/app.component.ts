// Importar Component desde el núcleo de Angular
import {Component} from '@angular/core';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'my-app',
    //template: '<h1>Hola mundo con Angular 2 !! victorroblesweb.es</h1>'
    templateUrl: 'app/views/home.html'
})
 
// Clase del componente donde irán los datos y funcionalidades
export class AppComponent { 
	public title: String;
	public description: String;

	constructor(){
		this.title = "APP FAVORITOS";
		this.description = "Esta es la descripción de la App para la gestión de favoritos en modo ofline.";
	}

}