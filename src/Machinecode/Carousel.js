

// import React, { useEffect, useState } from 'react';


// const Carousel = () => {

//    const  items = [

//         {id:1,
//             imageUrl:'https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//             title: 'this is home 1',
//             description:' awesome home 1'
//         },
//         {id:2,
//             imageUrl:'https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//             title: 'this is home 2',
//             description:' awesome home 2'
//         },
//         {id:2,
//             imageUrl:'https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
//             title: 'this is home 3',
//             description:' awesome home 3'
//         }
//     ]


//     const [currentItem, setCurrentItem] = useState(0);

//     const nextItem = () =>{
//         if(currentItem === items.length-1){ // 3 //0/1/2/3
//             setCurrentItem(0)
//         }
//         else{
//         setCurrentItem((currentItem) => currentItem+1)
//         }

//     }


//     const prevItem = () => {

// if(currentItem === 0){
//     setCurrentItem(items.length)
// }
//         setCurrentItem((currentItem) =>currentItem-1)
// }

// useEffect(() => {

//   const timer =  setInterval(() => {

//         nextItem()
//     },1000)

//     return () => clearInterval(timer)

// },[currentItem])


//   return (
//     <div>Carousel

//         <img  src={items[currentItem].imageUrl}   alt={items[currentItem].title} height={200} width={200}/>
//         <h1>{items[currentItem].title}</h1>


// <button onClick={prevItem} >PrevItem</button> <span></span>
// <button  onClick={nextItem}> NextItem</button>
//     </div>
//   )
// }

// export default Carousel



import React, { useEffect, useState } from 'react'

const Carousel = () => {


    const Items = [
        {id: 1,
            imageUrl: 'https://icon-library.com/images/url-icon-png/url-icon-png-13.jpg',
            title: 'This is home Text',
            description: 'This is description about home text'
        },
        {id: 2,
            imageUrl: 'https://pngimg.com/uploads/house/house_PNG63.png',
            title: 'This is home Text 2',
            description: 'This is description about home text 2'
        },
        {id: 3,
            imageUrl: 'https://pngimg.com/uploads/house/house_PNG2.png',
            title: 'This is home Text 3',
            description: 'This is description about home text 3'
        },
        
    ]


    const [currentTime,setCurrentTime] = useState(0);


const nextItem = () => {

    if(currentTime === Items.length-1){
        setCurrentTime(0)
    }

    else{

    

    setCurrentTime( currentTime => currentTime+1)}

}

const prevItem = () =>{

    if(currentTime===0){
        setCurrentTime(Items.length)
    }

    setCurrentTime(currentTime => currentTime -1)
}


useEffect(() => {

    const timer = setInterval(() =>{
        nextItem()
     },1000)

     return () => clearInterval(timer)
},[currentTime])
  return (
    <div>Carousel

        <img src={ Items[currentTime].imageUrl} alt={Items[currentTime].title}   height={500} width={1200}/>
        <h1>{Items[currentTime].title}</h1>
        <button onClick={prevItem}>PrevItem</button>
        <button onClick={nextItem}>nextItem</button>
       
    </div>
  )
}

export default Carousel


