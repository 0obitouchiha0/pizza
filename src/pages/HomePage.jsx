import React, {useEffect} from 'react';
import Categories from '../components/Categories';
import PizzasContainer from '../components/PizzasContainer';
import Sort from '../components/Sort';
import { getPizzas } from '../redux/reducers/pizzas';
import { setCategoryAC, setSortAC} from '../redux/reducers/filter';
import {useDispatch, useSelector} from 'react-redux';
import Loader from '../components/Loader';

const categories = ['Мясные', 'Вегетарианские', 'Гриль', 'Острые', 'Закрытые'];
const sorts = [
  {name: 'популярности', kind: 'rating'}, 
  {name: 'цене', kind: 'price'}, 
  {name: 'названию', kind: 'name'}
];

function HomePage() {

  const dispatch = useDispatch();
  const {category, sort} = useSelector(({filter}) => filter);
  const {items, isLoaded } = useSelector(({pizzas}) => pizzas);

  useEffect(() => {
    dispatch(getPizzas({category, sort}))
  }, [category, sort])

  const setCategory = (category) => {
    dispatch(setCategoryAC(category))
  }

  const setSort = (sort) => {
    dispatch(setSortAC(sort))
  }

  const arrayOfLoaders = [];
  for(let i = 0; i < 10; i++) {
    arrayOfLoaders.push(<Loader key={i}/>)
  }

  return (
    <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories 
              categories={categories}
              activeCategory={category}
              setActiveCategory={setCategory}
            />
            <Sort 
              sorts={sorts}
              activeSort={sort}
              setActiveSort={setSort}
            />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          {isLoaded
            ? <PizzasContainer pizzas={items} dispatch={dispatch} />
            : <div className="content__items">{arrayOfLoaders}</div>
          }
        </div>
      </div>
  )
}

export default HomePage
