import './App.css';

function WhoAmI (props) {
  return (
    <div>

      <h1>My name is {props.name}, surname - {props.surname}</h1>
      <a href={props.link}>My profile</a>
      {/* первый вариант */}

      <h1>My name is {props.name.firstName}, surname - {props.surname}</h1>
      <a href={props.link}>My profile</a>
      {/* второй вариант обьект */}

      <h1>My name is {props.name()}, surname - {props.surname}</h1>
      <a href={props.link}>My profile</a>
      {/* третий вариант функция */}

    </div>
  );
}

function App() {
  return (
    <div className="App">

      <WhoAmI name="John" surname="Smith" link="facebook.com"/>
      <WhoAmI name="Alex" surname="Shepard" link="vk.com"/>
      {/* первый вариант передачи */}

      <WhoAmI name={{firstName: "John"}} surname="Smith" link="facebook.com"/>
      <WhoAmI name={{firstName: "Alex"}} surname="Shepard" link="vk.com"/>
      {/* второй вариант передачи */}

      <WhoAmI name={() => {return 'John'}} surname="Smith" link="facebook.com"/>
      <WhoAmI name={() => {return 'John'}} surname="Shepard" link="vk.com"/>
      {/* третий вариант передачи */}

    </div>
  );
}

export default App;
