import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products: Iproducts[] =[
    {id: 1, name: 'As vantagens de ser invisivel', price: 30.0, description: 'Stephen Chbosky', image: '../livro1.png'},
    {id: 2, name: 'Vermelho Branco e Sangue Azul', price: 35.5, description: 'Casey McQuiston', image: '../livro2.png'},
    {id: 3, name: 'Os 7 maridos de Evelyn Hugo', price: 25.0, description: 'Taylro Jenkins Reid', image: '../livro3.png'},
    {id: 4, name: 'Um milhão de finais felizes', price: 20.0, description: 'Vitor Martins', image: '../livro4.png'},
    {id: 5, name: 'Quinze dias', price: 23.5, description: 'Vitor Martins', image: '../livro5.png'},
    {id: 6, name: 'Os dois morrem no final', price: 40.0, description: 'Adam Silveira', image: '../livro6.png'},
    {id: 7, name: 'Enquanto eu não te encontro', price: 37.0, description: 'Pedro Rhuas', image: '../livro7.png'},
    {id: 8, name: 'HeartStopper', price: 27.5, description: 'Alice Oseman', image: '../livro8.png'},
    {id: 9, name: 'Fica entre nós', price: 24.0, description: 'Sophie Gonzales', image: '../livro9.png'},
    {id: 10, name: 'Me chame pelo seu nome', price: 36.0, description: 'Andre Aciman', image: '../livro10.png'}
  ];
  getProducts(): Iproducts[]{
    return this.products;
  }
}