import React from 'react'
import './category-items.styles.scss'

const CategoryItem = ({category}) => {
  return (
    <div className='category-container rounded-lg'>
        <div 
            className='background-image'
            style={{ backgroundImage: `url(${category.imageUrl})` }} />
        <div className='category-body-container'>
          <h2 className='font-bold text-4xl'>{category.title}</h2>
          <p>Compra ora</p>
        </div>
      </div>
  )
}

export default CategoryItem