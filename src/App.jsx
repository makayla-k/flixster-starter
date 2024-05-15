import { useState } from 'react'
import './App.css'
import SearchComponent from './Components/SearchComponent';
import SortComponent from './Components/Sort';

// without starter code npm create vite@latest my-vite-app --template react, with starter code it is already instantiated
// npm install same layer as project

const App = () => {
    return (
      <>
        <header className='App-header'>
          <div className='title'>
            <img src="/movie.png"></img>
            <h1>Flixster</h1>
            <img src="/movie.png"></img>
          </div>
          <div className='filters'>
            <SearchComponent />
            <SortComponent />
          </div>
        </header>
      </>
  );    
}

export default App


// function App() {
//   // Logic and state hooks will be placed here

//   return (
//     <div className="App">

//       {/* Child components will be rendered here */}
  
//     </div>
//   );
// }

// export default App;