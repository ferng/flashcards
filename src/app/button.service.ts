import { Injectable } from '@angular/core';

import { Button } from './button';

@Injectable({
  providedIn: 'root'
})

export class ButtonService {
  constructor() { }

  faceOrder: Button[] = [
    { id: 1, index: 'questions', description: 'Questions First' },
    { id: 2, index: 'answers', description: 'Answers First' },
    { id: 3, index: 'both', description: 'To be confused, do both'}
  ];

  cardOrder: Button[] = [
    { id: 1, index: 'ordered', description: 'Ordered'},
    { id: 2, index: 'random', description: 'Random'}
  ];

//   let buttonTypes: ButtonTypesArray = {};
//   buttonTypes['face'] = faceOrder;
//   buttonTypes['card'] = cardOrder;

  getButtons(butType) {
    return this.faceOrder;
  }


}
interface ButtonTypesArray {
  [id: string]: Button[];
}

