import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Delicious Products!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/straw.jpg'
              text='Taste the Strawberry Flavour'
              label='Drinks'
              path='/products'
            />
            <CardItem
              src='images/cheese.webp'
              text='Best Cheese from New Zealand'
              label='Foods'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/powder.webp'
              text='Clean and Best Powder to Make your Milk'
              label='Ingredients'
              path='/products'
            />
            <CardItem
              src='images/butter.jpg'
              text='Experience Foods with bit of Butter'
              label='Ingredients'
              path='/products'
            />
            <CardItem
              src='images/youget.webp'
              text='Is there a Best Way to Start a Day? Eat the Tastiest Youghet Ever'
              label='Adrenaline'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
