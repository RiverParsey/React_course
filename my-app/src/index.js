import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const text = 'Hello World!';

// при создании многострочного элемента всегда использовать круглые скобки
// всегда использовать элемент обертку
// не забывать про разные стили написания некоторых атрибутов элементов, также все они пишутся в формате cammelCase
// всегда закрывать самозакрывающиеся теги в конце

// можно вставлять все что угодно внутри фигурных скобок кроме обьектов

const elem = (
  <div>
    <h2 className='text'>Text : {text}</h2>
    <input type="text"/>
    <label htmlFor=""></label>
    <button tabIndex={0}>click me</button>
  </div>
);



// const elem = <h2>Hello World!</h2>; // создание элемента с использованием JSX

// const elem = React.createElement('h2', {className: 'greetings'}, 'Hello World!'); // создание элемента с использованием React

// const element = {
//   type: 'h2',
//   props: {
//     className: 'greetings',
//     children: 'Hello World!'
//   }
// }; // примерно такую структуру отдаст создание элемента если использовать React

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
);
