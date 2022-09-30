import React from 'react';

import Review from './Review';
import {FaGithubSquare} from  'react-icons/fa';
function App() {
  return (<>
   <main>
    <section className='conatiner'>
      <div className='title'>
        <h2>our reviews<FaGithubSquare className='icon'></FaGithubSquare></h2>
        <div className='underline'></div>
      </div>
      <Review></Review> 
    </section>
   </main>
  </>);
}

export default App;
