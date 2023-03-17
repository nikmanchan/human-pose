import './App.css';
import * as tf from '@tensorflow/tfjs';

function App() {
  const handleRunTraining = (e) => {
    e.preventDefault();
    console.log('Run training');
    tf.tensor([1, 2, 3, 4], [2, 2]).print();
  }
  return (
    <div className="App">
        <button onClick={handleRunTraining}>Run Training</button>
    </div>
  );
}

export default App;
