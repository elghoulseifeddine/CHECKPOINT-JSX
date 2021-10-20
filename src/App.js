
import './App.css';
import imgtwo from './imgtwo.jpg';

function App() {
  return (
    <div className="all">
    
         <div className= "position" style={{border:"solid 1px black", maxWidth:"100vw"}}>

<h1 className="title red">WIIW-MAN</h1>

<br/>

<img src={imgtwo} alt="img"/>

<br/>

<img src="./imgone.jpg" alt="img"/>

</div>

<video width="320" height="240" controls>

<source src="https://www.youtube.com/watch?v=uNfzsrrLrsY&ab_channel=DALYTALIANI" type="video/mp4"/>

</video>

    </div>
    
  );
}

export default App;
