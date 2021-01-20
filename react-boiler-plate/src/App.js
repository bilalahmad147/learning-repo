import './App.css';

function App() {

  var stuff = { name: 'dani', age: 21, shoes: 'nike' }
  var stuff1 = { name: 'dani', age: 21, clothes: { shirt: 'white' } };
  var mergeObj = { ...stuff, ...stuff1 };

  return (
    <div className="App">
      <h3>{mergeObj.name}</h3>
    </div>
  );
}

export default App;
