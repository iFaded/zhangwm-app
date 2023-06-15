import './App.css';
import { Button } from 'antd';
function App() {
  const vue2Click = () =>{
    window.location.replace('/app-vue2')
  }
  
  const reactClick = () =>{
    window.location.replace('/app-react')
  }

  return (
    <div className="App">
      <div className="App-left">
        <div className="left-button"><Button type="primary" onClick={vue2Click}>vue2</Button></div>
        {/* <div className="left-button"><Button type="primary">vue3</Button></div> */}
        <div className="left-button"><Button type="primary" onClick={reactClick}>react</Button></div>
      </div>
      <div className="App-right">
        <div id="container"></div>
      </div>
    </div>
  );
}

export default App;
