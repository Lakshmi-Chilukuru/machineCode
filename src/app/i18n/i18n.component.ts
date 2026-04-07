import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Count } from './data';
import { add,  reduce, reset } from './ngrx.actions';
import {cP2} from './component2'
import { selectCartCount, selectCartItems, selectProducts, selectTotalPrice } from './product/product.selector';
import { loadProducts } from './product/product.action';
import { Product } from './product/product.reducer';
import { addToCart, removeFromCart } from './product/cart.actions';
import { loan } from './loan/loan.reducer';
import { selectAllloans, selectApprovedLoans, selectPendingLoans, selectTotalLoans } from './loan/loan.selector';
import { approveLoan, rejectLoan } from './loan/loan.actions';

@Component({
  selector: 'app-i18n',
  templateUrl: './i18n.component.html',
  styleUrls: ['./i18n.component.less'],
})
export class I18nComponent implements OnInit{
  count = 0;
  public buttons = [
    { id: 1, displayCount: 0 },
    { id: 2, displayCount: 0 },
    { id: 3, displayCount: 0 },
    { id: 4, displayCount: 0 },
    { id: 5, displayCount: 0 },
  ];
  public count$ !:Observable<number>;
  public product$ = this.store.select(selectProducts)
  public cart$ = this.store.select(selectCartItems)
  public cartLength$ = this.store.select(selectCartCount)
  public cartPrice$ = this.store.select(selectTotalPrice)
  loans$!: Observable<loan[]>;
  pendingLoans$!: Observable<loan[]>;
  approvedLoans$!: Observable<loan[]>;
  totalLoans$!: Observable<number>;

  constructor(private store:Store<{count:number}>){
    this.count$ = this.store.pipe(select('count'))
    this.store.dispatch(loadProducts())
  }
  ngOnInit(): void {  
      this.loans$ = this.store.select(selectAllloans);
    this.pendingLoans$ = this.store.select(selectPendingLoans);
    this.approvedLoans$ = this.store.select(selectApprovedLoans);
    this.totalLoans$ = this.store.select(selectTotalLoans);
  }
  approve(id: number) {
    this.store.dispatch(approveLoan({ id }));
  }

  // 🔹 Reject
  reject(id: number) {
    this.store.dispatch(rejectLoan({ id }));
  }
  
  addtoCart(product:Product){
    this.store.dispatch(addToCart({cart:product}))
  }
  removeFromCart(product:Product){
    this.store.dispatch(removeFromCart({id:product.id}))
  }
  

  showupdatedCount(index:number){
    this.count++;
    this.buttons[index].displayCount =this.count;
  } 

  increaseCount(){
    this.store.dispatch(add())
  }

  decrease(){
    this.store.dispatch(reduce())
  }
  reset(){
    this.store.dispatch(reset())
  }

 
}
