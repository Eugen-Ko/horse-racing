import './App.css';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3002');

socket.emit('start');

const connect = () => {
  socket.on('ticker', (round) => { console.log(round) });
}


function App() {
  return (
    <button onClick={() => connect()}>Start</button>
  );
}

export default App;
