import React, {useState} from 'react'

function Categories({categories, activeCategory, setActiveCategory}) {
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => setActiveCategory(null)}
        >Все</li>
        {categories.map((category, i) => 
          <li 
            className={activeCategory === i ? 'active' : ''} key={category}
            onClick={() => setActiveCategory(i)}
          >{category}</li>
        )}
      </ul>
    </div>
  )
}

export default Categories
