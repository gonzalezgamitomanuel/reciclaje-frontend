import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultConsultas = [];
    for(const consulta of value){
      if(consulta.position.indexOf(arg) > -1){
         resultConsultas.push(consulta);
      };
    };
    return resultConsultas;
  }

}
