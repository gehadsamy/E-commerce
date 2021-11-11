import { Action } from '@ngrx/store';
// import { ProductCardComponent } from 'src/app/products/productcard';

export const ADD_WISH = 'ADD_WISH'

export class ADDWISHLIST implements Action {
    readonly type = ADD_WISH;

    constructor(public payload: object){}
}

export const REMOVE_WISH = 'REMOVE_WISH'

export class REMOVEWISHLIST implements Action {
    readonly type = REMOVE_WISH;

    constructor(public payload: Array<object>){}
}

export type WishingItem = ADDWISHLIST |REMOVEWISHLIST;