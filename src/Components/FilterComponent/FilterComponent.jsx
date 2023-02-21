import React from 'react';
import classes from './FilterComponent.module.css'

const FilterComponent = ({filter}) => {
    return ( 
        <div className={classes.filter_block}>
        <button onClick={() => filter('all')} className={classes.filter__btn}>Все</button>
        <button onClick={() => filter(true)} className={classes.filter__btn}>Активые</button>
        <button onClick={() => filter(false)} className={classes.filter__btn}>Выполненые</button>
      </div>
    );
}
 
export default FilterComponent;