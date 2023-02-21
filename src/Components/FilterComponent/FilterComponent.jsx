import React from 'react';
import classes from './FilterComponent.module.css'

const FilterComponent = ({filter}) => {

    //Для кнопок можно создать отдельный масси в данными и поместить сюда через map
    // const btns = [
    //  {title: 'Все', filter: 'all'}, 
    //  {title: 'Активные', filter: true}, 
    //  {title: 'Выполненные', filter: false}
    // ]

    return ( 
        <div className={classes.filter_block}>
        <button onClick={() => filter('all')} className={classes.filter__btn}>Все</button>
        <button onClick={() => filter(true)} className={classes.filter__btn}>Активые</button>
        <button onClick={() => filter(false)} className={classes.filter__btn}>Выполненые</button>
      </div>
    );
}
 
export default FilterComponent;