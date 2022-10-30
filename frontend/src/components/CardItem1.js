import React from 'react';
import { Link } from 'react-router-dom';

function CardItem1(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='image'
              src={props.src}
            />
            <div class="overlay">
          <div class="plus_icon"></div>
           </div>
          </figure>
          <div className='cards__item__info'>
            <h3 className='cards__item__text'>{props.text}</h3>
            <p className='cards__item__informaci'>{props.informaci}  <i class="fa-solid fa-angle-right"/></p>
            <p className='cards__item__text1'>{props.text1}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem1;
