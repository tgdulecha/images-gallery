import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Search from './components/Search';
import { useState } from 'react'
const App= ()=> {
  const [word, setWord] = useState('')
  const handleSearchSubmit = (e)=>{
    e.preventDefault();
    console.log(word);
  }
  console.log(process.env);
  return (
    <div className="App">
      <Header title = "Image Gallery"/>
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
