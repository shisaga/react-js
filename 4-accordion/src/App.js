import questions from './data';
import './App.css';
import Q_ from './Q_';


function App() {

 
  return (
<>

   <div className='container'>
   <div className='leftsidecol'>
    <h3 style={{padding:"10%"}} >  Questions And  Answers About Login</h3>
   </div>
   <div className='rightsidecol'>
    
<span>{questions.map((que)=>{
      return (<><Q_ ques={que}></Q_></>);
    })}</span>
   </div>
   
   </div>
</>
  )
}

export default App;
