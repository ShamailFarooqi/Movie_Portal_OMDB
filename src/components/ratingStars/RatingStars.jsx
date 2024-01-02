import React, { useState } from 'react';
import Star from './Star';
import styles from "./ratingstars.module.css"

const RatingStars = (props) => {
    const [gradeIndex, setGradeIndex] = useState();
    const GRADES = ['Poor', 'Fair', 'Good', 'Very good', 'Excellent'];
    const activeStar = {
        fill: 'yellow'
    };

    const changeGradeIndex = (index) =>{
        props.changeRating((reviewData) => ({...reviewData, ["rating"]:parseInt(index)+1}))
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.result}>{ GRADES[props.value-1] ? GRADES[props.value-1] : 'You didn\'t review yet'}</h1>
            <div className={styles.stars}>
                {
                    GRADES.map((grade, index) => (
                        <Star 
                            index={index} 
                            key={grade} 
                            changeGradeIndex={changeGradeIndex}
                            style={ props.value > index ? activeStar : {}}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default RatingStars;