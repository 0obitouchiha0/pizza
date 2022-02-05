import React from 'react';
import PizzaBlock from './PizzaBlock';
import { addNewPizza } from '../redux/reducers/cart';

const types = ['тонкое', 'традиционное'];
const sizes = [26, 30, 40];

function PizzasContainer({pizzas, dispatch}) {
  const addPizza = (item) => {
    dispatch(addNewPizza(item))
  }

  return (
    <div className="content__items">
      {pizzas.map(pizza => (
        <PizzaBlock
          key={pizza.id}
          pizza={pizza} 
          types={types} 
          sizes={sizes}
          onAddPizza={addPizza}
        />
      ))}
    </div>
  )
}

export default PizzasContainer;
