import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App/>
  </StrictMode>
);

// React strict mode по функционалу похож на JS use strict
// можно подключить глобально и в виде деструктуризации

// компонент нужен для обнаружения проблем в приложении
// активирует доп проверки
// можно использовать глобально и для отдельных компонентов
