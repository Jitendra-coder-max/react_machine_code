import React, { useEffect, useState } from 'react'

const  items = [

            {id:1,
                imageUrl:'https://images.pexels.com/photos/14286166/pexels-photo-14286166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                title: 'this is home 1',
                description:' awesome home 1'
            },
            {id:2,
                imageUrl:'https://images.pexels.com/photos/13455799/pexels-photo-13455799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                title: 'this is home 2',
                description:' awesome home 2'
            },
            {id:3,
                imageUrl:'https://images.pexels.com/photos/15582923/pexels-photo-15582923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                title: 'this is home 3',
                description:' awesome home 3'
            }
        ]



const Carousel = () => {

    const [currentItem, setCurrentItem] = useState(0);


    const PrevItem =()=>{

        if(currentItem ===0){

            setCurrentItem(items.length)
        }

        setCurrentItem(prev => prev-1)
    }

    const NextItem = () => {

if(currentItem===items.length-1){


       setCurrentItem(0)

    }

    setCurrentItem( prev=> prev+1)

    }

    useEffect(() =>{


        const timer = setInterval(()=> {

            NextItem()
        },1000)

        return ()=> clearInterval(timer)

    },[currentItem])
  return (
    <div>
        <div style={{display:'flex', justifyContent:'center'}}>s
            <img  src={items[currentItem].imageUrl} alt={items[currentItem].title}/>
            </div>
            <button style={{ marginLeft:700, fontSize:50}}  onClick={ PrevItem}>prev</button>
            <button    style={{ marginLeft:10 ,marginTop:10, fontSize:50}}onClick={ NextItem}>next</button>
    </div>
  )
}

export default Carousel