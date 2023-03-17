import './App.css';

function App() {
  const handleRunTraining = (e) => {
    e.preventDefault();
    console.log('Run training');
  }
  return (
    <div className="App">
        <button onClick={handleRunTraining}>Run Training</button>
    </div>
  );
}

export default App;
