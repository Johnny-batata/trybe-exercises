
import './App.css';

 const list = ['batata', 'arroz', 'feijão', 'macarrão', 'pipoca']


const App = () => 
    <ul> { list.map((item) => <li> {item} </li>) } </ul> 
    
      


export default App;
