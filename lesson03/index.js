'use strict';

{
  const nameGood = 'булочка'
  const piecesGood = 21
  const category = 'булочные изделия'
  const price = 3

  console.log(`У нас есть ${piecesGood} ${nameGood} из категории "${category}", стоимостью ${price}$.`)
  console.log(`Общая сумма товара: ${piecesGood * price}$.`)
}
{
  const nameGood = 'макароны'
  const piecesGood = 5
  const category = 'макаронные изделия'
  const price = 4

  console.log(`У нас есть ${piecesGood} ${nameGood} из категории "${category}", стоимостью ${price}$.`)
  console.log(`Общая сумма товара: ${piecesGood * price}$.`)
}
//! Lesson 3
{
  const nameGood = prompt('Наименование товара') || 'булочка'
  const piecesGood = +prompt('Количество товара') || 7
  const category = prompt('Категория товара') || 'булочные изделия'
  const price = +prompt('Цена товара') || 6
  console.log('тип количества: ', typeof piecesGood, ', тип цены товара: ', typeof price)
  const sum = piecesGood * price
  console.log(`На складе ${piecesGood} единиц товара "${nameGood}" на сумму ${sum}$.`)
}