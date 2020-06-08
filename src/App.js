import React from 'react';
import './App.css';
import Profile from './components/Profile';

function App() {

  var profiles=[];
  profiles.push({name:'Abdul Mateen', age: 28, address:'Islamabad', image:'Photo01.jpeg'});
  profiles.push({name:'Sibaghatullah', age: 35, address:'Karachi', image:'Photo02.jpeg'});
  profiles.push({name:'Malik Abdul Mohaimin', age: 36, address:'Peshawar', image:'Photo03.jpeg'});

  return (
    <div>
      {profiles.map( x => {
          return(
          <Profile name={x.name} age={x.age} address={x.address} image={x.image}/>
        )}
      )}

      {/*<Profile name="Malik Niaz" age={25} address="F10 Markar Islamabad" image="logo192.png"/>*/}
    </div>
  );
}

export default App;
