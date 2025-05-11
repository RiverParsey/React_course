import {Component} from 'react';
import './App.css';

const Header = () => {
  return <h2>Hello World!</h2>
}

// const Field = () => { // компонент Field с использованием функции
//   const holder = 'Enter here';
//   const styledField = {
//     width: '300px'
//   };

//   return <input
//           placeholder={holder} 
//           type='text' 
//           style={styledField}/>
// }

class Field extends Component { // тот же компонент Field но с использованием класса а не функции
  render() { // метод render обязателен при использовании класса
    const holder = 'Enter here';
    const styledField = {
      width: '300px'
    };

    return <input
            placeholder={holder} 
            type='text' 
            style={styledField}/>
  }
}
 
function Btn() {
  const text = 'Log in';
  const logged = true;

  return <button>{logged ? 'Enter' : text}</button> // обычные конструкции if else не работают внутри элементов
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Field/>
      <Btn/>
    </div>
  );
}

export {Header}; // если захочется использовать отдельный компонент вне файла
export default App;
