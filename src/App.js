// import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

function App() {
  const [arr, setarr] = useState([])
  const [data, setdata] = useState({URL1 :""},{URL2 :""},{URL3 :""})
  
  function handleChange(event){
    setdata({...data,[event.target.name]:event.target.value})
  }

  let {image1,image2,image3}=data;
 

  function handleSubmit(e){e.preventDefault();
    setarr([...arr,{image1,image2,image3}]);
    
  }

  
  return (
    <div className="App">
      <div className="head"><h1>Image Loader</h1></div>
      <form>
        <table>
          <label>Image URL 1</label><br></br>
          <input type="text" name="URL1" placeholder="Enter the Image URL 1" value={data.URL1} onChange={handleChange} /><br></br>
          <label>Image URL 2</label><br></br>
          <input type="text" name="URL2" placeholder="Enter the Image URL 2" value={data.URL2} onChange={handleChange} /><br></br> 
          <label>Image URL 3</label><br></br>
          <input type="text" name="URL3" placeholder="Enter the Image URL 3" value={data.URL3} onChange={handleChange} />
        </table>
          <input className='submit' value="Create" onClick={handleSubmit}/>
      </form>
      <h1>Image List</h1>
      <div className='output'>
        {
          arr.map((element, key)=>{
                return(
                  <div class="row" key={key}>
                    <img src={element.image1} alt="Url1"/>
                    <img src={element.image2} alt="Url2"/>
                    <img src={element.image3} alt="Url3"/>
                  </div>
                );
            }
          )
        }
        </div>
    </div>
  );
}

export default App;
