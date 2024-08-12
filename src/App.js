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
// import React from 'react'
// import Scroll from './Machinecode/Scroll'
// const App = () => {
//   return (
// 	<div>App
// 		<Scroll />
// 	</div>
//   )
// }

// export default App

// import React from 'react'
// import Infinite from './Infinite'
// const App = () => {
//   return (
// 	<div>App

// 		<Infinite />
// 	</div>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import InfineScroll from './Machinecode/InfineScroll'

// const App = () => {

//   return (
// 	<div>App
// 		<InfineScroll />
// 	</div>
//   )
// }

// export default App

// import React from 'react'
// import ProgressApp from './Machinecode/ProgressApp'
// const App = () => {
//   return (
// 	<div>App

// 		<ProgressApp />
// 	</div>
//   )
// }

// export default App

// import React from 'react'
// import Progresso from './Machinecode/Progresso'
// const App = () => {
//   return (
// 	<div>App
// 		< Progresso />
// 	</div>
//   )
// }

// export default App

// import React from 'react';

// import dir from './Machinecode/myData/data';
// import Explorer from './Machinecode/Explorer';

// const App = () => {
//   return (
// 	<div>App
// 		<Explorer dir={dir} />
// 	</div>
//   )
// }

// export default App

// import React from 'react'
// import dirData from  './data/folderData';
// import FolderStructure from './components/FolderStructure';
// const App = () => {
//   return (
// 	<div>App

// 		<FolderStructure  dir={dirData}/>
// 	</div>
//   )
// }

// export default App

// import React from 'react'
// import FetchData from './components/FetchData'

// const App = () => {
//   return (
// 	<div>App

// 		<FetchData />
// 	</div>
//   )
// }

// export default App

// import React from 'react'
// import Dropdown from './Machinecode/Dropdown'
// const App = () => {
//   return (
// 	<div>App
// 		<Dropdown />
// 	</div>
//   )
// }

// export default App

// import React from 'react'
// // import './App.css'

// import './Dip.css'
// const App = () => {
//   return (
// 	<div className='container'>

// 		<div className='item1'>My div1</div>
// 		<div className='item2'>My div2</div>
// 		<div className='item3'>My div3</div>
// 		<div  className='item4' >My div4</div>
// 		{/* <div >My div3</div>
// 		<div>My div4</div>
// 		<div>My div5</div>
// 		<div>My div6</div>
// 		<div>My div7</div>
// 		<div>My div8</div>
// 		<div>My div9</div>
// 		<div>My div10</div> */}
// 		{/* <div>My div</div>
// 		<div>My div</div>
// 		<div>My div</div>
// 		<div>My div</div>
// 		<div>My div</div>
// 		<div>My div</div>
// 		<div>My div</div>
// 		<div>My div</div>
// 		<div>My div20</div>
// 		<div>My div21</div> */}
// 	</div>
//   )
// }

// export default App

// import React from "react";
// import CommentList from "./CommentList";
// import "./comment.css";
// const App = () => {
//   return (
//     <div className="App">
//       App
//       <CommentList />
//     </div>
//   );
// };

// export default App;

// import React from 'react'
// import GridLayout from './layout/GridLayout'
// const App = () => {
//   return (
//     <div>App
//       < GridLayout />
//     </div>
//   )
// }

// export default App

// mui

// import React from 'react';
// import { Grid, Paper, Box, CssBaseline } from '@mui/material';
// import { styled } from '@mui/material/styles';

// const Header = styled(Paper)(({ theme }) => ({
//   backgroundColor: 'red',
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: 'white',
// }));

// const Sidebar1 = styled(Paper)(({ theme }) => ({
//   backgroundColor: 'green',
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: 'white',
//   height: '100%',
// }));

// const Sidebar2 = styled(Paper)(({ theme }) => ({
//   backgroundColor: 'pink',
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: 'white',
//   height: '100%',
// }));

// const Main = styled(Paper)(({ theme }) => ({
//   backgroundColor: 'yellow',
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   height: '100%',
// }));

// const Footer = styled(Paper)(({ theme }) => ({
//   backgroundColor: 'blue',
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: 'white',
// }));

// const FullHeightGrid = styled(Grid)({
//   height: '100%',
// });

// const FullScreenContainer = styled(Box)({
//   width: '100vw',
//   height: '100vh',
//   overflow: 'hidden',
// });

// function App() {
//   return (
//     <FullScreenContainer>
//       <CssBaseline />
//       <FullHeightGrid container spacing={2} direction="column">
//         <Grid item >
//           <Header>Header</Header>
//         </Grid>
//         <FullHeightGrid item container spacing={2} style={{ flex: 1 }}>
//           <Grid item xs={12} md={3}>
//             <Sidebar1>Sidebar 1</Sidebar1>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Main>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Expedita modi
//               repellat laboriosam nam id voluptatibus ab quae, quaerat accusamus
//               voluptatum, cumque hic, repudiandae laudantium amet exercitationem
//               numquam. Quaerat obcaecati deleniti quae ut repellendus praesentium
//               modi illum corporis incidunt, nobis molestias inventore fugit
//               voluptatibus tempora rem necessitatibus ipsam. Odio aperiam deserunt
//               quia, enim voluptatem doloremque nobis exercitationem eum, quis,
//               voluptate ullam minus quidem eos consectetur itaque! Soluta non
//               similique quod quae odit? Possimus mollitia nemo itaque perferendis
//               perspiciatis voluptates nostrum consequuntur saepe, aliquid,
//               repellendus eligendi cumque explicabo adipisci aperiam velit earum
//               repellat autem sequi? Asperiores soluta, tempore dolor suscipit enim
//               possimus!
//             </Main>
//           </Grid>
//           <Grid item xs={12} md={3}>
//             <Sidebar2>Sidebar 2</Sidebar2>
//           </Grid>
//         </FullHeightGrid>
//         <Grid item  xs={12} md={12}>
//           <Footer>Footer</Footer>
//         </Grid>
//       </FullHeightGrid>
//     </FullScreenContainer>
//   );
// }

// export default App;

// import React from 'react';
// import { Grid, Paper, Box, CssBaseline } from '@mui/material';
// import { styled } from '@mui/material/styles';

// const Header = styled(Paper)(({ theme }) => ({
//   backgroundColor: 'red',
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: 'white',
// }));

// const Sidebar1 = styled(Paper)(({ theme }) => ({
//   backgroundColor: 'green',
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: 'white',
//   height: '100%',
// }));

// const Sidebar2 = styled(Paper)(({ theme }) => ({
//   backgroundColor: 'pink',
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: 'white',
//   height: '100%',
// }));

// const Main = styled(Paper)(({ theme }) => ({
//   backgroundColor: 'yellow',
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   height: '100%',
// }));

// const Footer = styled(Paper)(({ theme }) => ({
//   backgroundColor: 'blue',
//   padding: theme.spacing(2),
//   textAlign: 'center',
//   color: 'white',
// }));

// const FullHeightGrid = styled(Grid)({
//   height: '100%',
// });

// const FullScreenContainer = styled(Box)({
//   width: '100vw',
//   height: '100vh',
//   overflow: 'hidden',
//   display: 'flex',
//   flexDirection: 'column',
// });

// function App() {
//   return (
//     <FullScreenContainer>
//       <CssBaseline />
//       <Grid container direction="column" spacing={2} style={{ flex: 1 }}>
//         <Grid item>
//           <Header>Header</Header>
//         </Grid>
//         <FullHeightGrid item container spacing={2} style={{ flex: 1 }}>
//           <Grid item xs={12} md={3}>
//             <Sidebar1>Sidebar 1</Sidebar1>
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <Main>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Expedita modi
//               repellat laboriosam nam id voluptatibus ab quae, quaerat accusamus
//               voluptatum, cumque hic, repudiandae laudantium amet exercitationem
//               numquam. Quaerat obcaecati deleniti quae ut repellendus praesentium
//               modi illum corporis incidunt, nobis molestias inventore fugit
//               voluptatibus tempora rem necessitatibus ipsam. Odio aperiam deserunt
//               quia, enim voluptatem doloremque nobis exercitationem eum, quis,
//               voluptate ullam minus quidem eos consectetur itaque! Soluta non
//               similique quod quae odit? Possimus mollitia nemo itaque perferendis
//               perspiciatis voluptates nostrum consequuntur saepe, aliquid,
//               repellendus eligendi cumque explicabo adipisci aperiam velit earum
//               repellat autem sequi? Asperiores soluta, tempore dolor suscipit enim
//               possimus!
//             </Main>
//           </Grid>
//           <Grid item xs={12} md={3}>
//             <Sidebar2>Sidebar 2</Sidebar2>
//           </Grid>
//         </FullHeightGrid>
//         <Grid item >
//           <Footer>Footer</Footer>
//         </Grid>
//       </Grid>
//     </FullScreenContainer>
//   );
// }

// export default App;

// import React from 'react'
// import dir from './datam/data';
// import Folderr from './datam/Folderr';
// const App = () => {
//   return (
//     <div>App

//       <Folderr  dir={dir}/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Pagination from './Machinecode/Pagination'
// const App = () => {
//   return (
//     <div>App
//       <Pagination />
//     </div>
//   )
// }

// export default App

// import React from "react";

// import Accord from "./components/Accord";

// const datas = [
//   {
//     id: 1,
//     title: "Section 1",
//     content: " Loren ipsum data is awesome in beautiful you should like it",
//   },
//   {
//     id: 2,
//     title: "Section 2",
//     content:
//       " Lorem ipsum data is not awesome  Loren ipsum data is awesome in beautiful you should like it hhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhh hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhLoren ipsum data is awesome in beautiful you should like it",
//   },

//   {

//     id:3,
//     title: 'section 2',
//     content: ' Lorem ipsum data is rreallly good . it is a really good paragraph to read'
//   }
// ];

// const App = () => {
//   return (
//     <div>
//       App
//       {
//         datas.map(({title, content,id}) =>(
//           <Accord  key={id}  title={title}  content={content}/>
//         ))
//       }
    
//     </div>
//   );
// };

// export default App;


// import React from 'react';

// import Drop from './components/Drop';

// const App = () => {
//   return (
//     <div>App
//       <Drop />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Calculator from './components/Calculator'
// const App = () => {
//   return (
//     <div>App
//       <Calculator />
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Pagin from './components/Pagin'
// const App = () => {
//   return (
//     <div>App
//       <Pagin/>
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Pagination from './repeat10/Pagination'
// const App = () => {
//   return (
//     <div>App

// <Pagination/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Folder from './repeat10/Folder'
// import dir from './repeat10/data';


// const App = () => {

//   console.log(dir)
//   return (
//     <div>App
//       <Folder  dir={dir} />
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Carousel from './repeat10/Carousel'
// const App = () => {
//   return (
//     <div>App
//       <Carousel />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Infine from './repeat10/Infine'
// const App = () => {
//   return (
//     <div>App

//       <Infine/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import ProgressBar from './repeat10/ProgressBar'
// const App = () => {
//   return (
//     <div>App

//       <ProgressBar />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import StarRat from './repeat10/StarRat'
// const App = () => {
//   return (
//     <div>App

//       <StarRat />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Timer from './repeat10/Timer'
// const App = () => {
//   return (
//     <div>App

//       <Timer/>
//     </div>
//   )
// }

// export default App

// import React, { useState } from 'react'
// import StopWatch from './repeat10/StopWatch'



// const App = () => {
//   return (
//     <div>App
//       <StopWatch/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Search from './repeat10/Search'
// const App = () => {
//   return (
//     <div>App

//       <Search />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Fetch from './repeat10/Fetch'
// const App = () => {
//   return (
//     <div>App
//       <Fetch />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Fetching from './repeat10/Fetching'
// const App = () => {
//   return (
//     <div>App
//       <Fetching/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import Todo from './repeat10/Todo'
// const App = () => {
//   return (
//     <div>App

//       <Todo/>
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Box from './repeat10/Box'
// const App = () => {
//   return (
//     <div>App

//       <Box/>
//     </div>
//   )
// }

// export default App


import React from 'react'
import Tree from './Component/Tree'
import dir from './Component/data'
const App = () => {
  return (
    <div>App

      <Tree  dir={dir}/>
    </div>
  )
}

export default App