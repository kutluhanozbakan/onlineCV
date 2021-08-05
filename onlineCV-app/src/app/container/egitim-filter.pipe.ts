import { Pipe, PipeTransform } from '@angular/core';
import { egitimBilgileri } from './container';

@Pipe({
  name: 'egitimFilter'
})
export class EgitimFilterPipe implements PipeTransform {

  transform(value: egitimBilgileri[],filterText?: string): egitimBilgileri[] {
    
    filterText = filterText?.toLocaleLowerCase() //küçük harfe çevirildi

    return filterText?value.filter((p:egitimBilgileri)=>p.adi.toLocaleLowerCase().indexOf(filterText!)!==-1):value;
    
  }

}
