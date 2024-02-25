import Block from '../components/Block';
import Circle from '../components/Circle';
import Line from '../components/Line';
import '../styles/app.scss';
import Animate from "../components/Animate";

function App() {
  return (
    <div className="App">
        <Line/>
        <Circle/>
        <Block />
        <Animate />
    </div>
  );
}

export default App;
