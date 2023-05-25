import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import GreetClass from './components/GreetClass';
import StateClass from './components/StateClass';

function App() {
  return (
    <div className="App">
      {/* <Greet name="Basira" heroName="SuperGirl"/>
      <Greet name="Anifa" heroName="WonderWoman"/>
      <Greet name="Olowogbogboro" heroName="GracedMadam"/> */}

      {/* <GreetClass label="The Label"/> */}

      <StateClass />
    </div>
  );
}

export default App;
