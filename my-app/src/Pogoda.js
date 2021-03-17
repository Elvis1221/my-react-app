import React, {useState} from 'react'

import "./App.css"

export const Pogoda = () => {
  const [div, setDiv] = useState(false);


  return (
    <div className="grids">
      <div className="header">header</div>
      <div className="sidebar">Sidebar
        <button onClick={() => setDiv(true)}>Click</button></div>
      <div>{div}</div>
      <div className="content">content
        <div className="mini-content-a">mini-content-a</div>
        <div className="mini-content-b">mini-content-b</div>
      </div>
      <div className="footer">footer</div>
    </div>
  )
};

// Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1',
//   то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.


// const data = [
//   {
//     id: 1,
//     title: "title",
//     items: ["el", "ig", "kir"]
//   },
//   {
//     id: 1,
//     title: "title",
//   },
//   {
//     id: 1,
//     title: "title",
//     items: ["adadada", "issdddg", "kddddir"]
//   }
// ];
//
// const newData = data.map(({ id, title, items }) => {
//   if (items && Array.isArray(items)) {
//     const newItems = items.reduce((acc, item, index) => {
//       acc[index] = item;
//       return acc
//     }, {});
//     return { id, title, items: newItems }
//   }
//   if (items === undefined) {
//     return { id, title }
//   }
// });
// console.log(newData);

// const promise = new Promise((resolve, reject) => {
//
//   setTimeout(() => resolve('wooops'), 2000)})
// console.log(promise)

