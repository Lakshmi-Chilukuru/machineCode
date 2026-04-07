import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCurrency]'
})
export class CurrencyDirective {

  constructor(private el:ElementRef) { }

 @HostListener('input', ['$event'])
  onInput(event:any){
    const val = event.target.value;
    const changeData = this.format(val)
    event.target.value = changeData
  }

  @HostListener('focus')
  onFocus(){
    const value=this.el.nativeElement.value;
    this.el.nativeElement.value = this.format(value)
  }
  @HostListener('blur')
  blur(){
    const value = this.el.nativeElement.value;
    this.el.nativeElement.value = this.convertcurrency(value)
  }

  format(value:string){
    return value.replace(/[^0-9.]/g,'')
  }

  convertcurrency(value:string){
    const data = Number(value);
    const chValue = new Intl.NumberFormat('en-US',{
      style:'currency',
     currency:'USD' 
    }).format(data)
    return chValue;
  }
}
