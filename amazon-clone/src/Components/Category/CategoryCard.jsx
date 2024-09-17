import React from 'react'
import classes from './Category.module.css'

function CategoryCard({data}){
  return (
    <div class={classes.category}>
<a href="">
    <span>
        <h2>{data?.title}</h2>
    </span>
    <img src={data?.imgLink} alt="" />
    <p>Shop Now</p>

</a>

    </div>
  )
}

export default CategoryCard