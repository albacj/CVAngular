import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  //styleUrls: ['./app.component.css'],
})

export class BodyComponent {

	mostrar:boolean = false;

	frase:any = {
		mensaje: "Un gran poder requiere una gran responsabilidad.",
		autor: "Ben Paker."
	}

	aptitudes:string[] = ["HTML5", "CSS3", "JavaScript", "Angular", "Bootstrap"];
  
}