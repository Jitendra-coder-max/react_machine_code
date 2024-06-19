// // App.js
// import React from 'react';
// import { Provider } from 'react-redux';
// import store from './store';
// import Counter from './Counter';
// import TextInput from './TextInput';
// import Form from './components/Form';

// function App() {
//   return (
//     <Provider store={store}>
//       <Counter />
//       <TextInput />
//       <Form />
//     </Provider>
//   );
// }

// export default App;


// import React ,{Suspense,lazy}from 'react';



// const App = () => {



//   const Component1 = lazy(() => import('./Machinecode/Component1'));

//   const Component2 = lazy(() => import('./Machinecode/Component2'))


//   return(
//     <div> My data

//       <Suspense  fallback={<p>...Loading</p>}>
//         <Component1/>
//         <Component2 />
//       </Suspense>
//     </div>
//   )
// }


// export default App;




// import React  from 'react';
// import {BrowserRouter as Router, Routes ,Route, } from 'react-router-dom';

// import Home from './Nav/Home';

// import About from './Nav/About'
// import Header from './Nav/Header'
// import Contact from './Nav/Contact';
// import Message from './Nav/Message';
// const App = () => {
//   console.log('router')

//   return(
// <div>Router
//   <Router>
//     <Header/>
//     <Routes>
//       <Route   path='home'   element={ <Home/>}/>
//       <Route  path ='about'   element={ <About />}  />
      
//       <Route  path = 'contact'  element={<Contact/>}/>
//       <Route path ='message'   element={<Message/>}/>

//     </Routes>
//   </Router>
// </div>

//   )
// }


// export default App;


// import React from 'react'
// import Parent from './Context/Parent'
// import {UserProvider} from './Context/UserContext'
// const App = () => {
//   return (
//     <div>App
      
//       <UserProvider>
//       <Parent />
//       </UserProvider>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import {UserProvider} from './Context/UserContext'
// import Parent from './Context/Parent'
// const App = () => {
//   return (
//     <div>App

//       <UserProvider>
//         <Parent />
//       </UserProvider>
//     </div>
//   )
// }

// export default App

// import { useEffect, useState } from "react";
// import React,{useState,useEffect} from 'react'
// function App() {
//   const [count, setCount] = useState(0);
//  useEffect(() => {
// 	console.log("Component rendered successfully");
//   },[]);
//    return (
// 	<div>
//   	<button onClick={() => setCount(count + 1)}>  Click me</button>
//   	<p>You clicked {count} times</p>
// 	</div>
//   );
// }

// export default App;


// import React from 'react'
// import Star from './Machinecode/Star'
// const App = () => {
//   return (
// 	<div>App
// 		<Star />
// 	</div>
//   )
// }

// export default App


// import React from 'react'
// import Search from './Machinecode/Search';

// const App = () => {
	
//   return (
// 	<div>App
// 		<Search />
// 	</div>
//   )
// }

// export default App

// import React from 'react'
// import Carousel from './Machinecode/Carousel'
// const App = () => {
//   return (
// 	<div>App
// 		<Carousel />
// 	</div>
//   )
// }

// export default App


// import React from 'react';
// import StopWatch from './Machinecode/StopWatch';

// const App = () => {
//   return (
// 	<div>App

// 		<StopWatch />
// 	</div>
//   )
// }

// export default App

// import React from 'react'
// import dir from './Machinecode/data/folderData'
// import Folder from './Machinecode/Folder'
// const App = () => {
//   return (
// 	<div>App
// 		<Folder dir ={dir} />
// 	</div>
//   )
// }

// export default App
import React from 'react'
import Scroll from './Machinecode/Scroll'
const App = () => {
  return (
	<div>App
		<Scroll />
	</div>
  )
}

export default App