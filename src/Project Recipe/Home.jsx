import React, { useEffect, useState } from 'react'
import Category from './Category'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const [data,setData]=useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(res=>res.json())
        .then(d=>setData(d.meals))
    },[])
  return (
    <div className='Home'>
        {
            data.map((item)=>{
                return(
                    <div className='Cards' key={item.idMeal} style={{display:'flex',justifyContent:'space-around',alignItems:'center', flexWrap:'wrap', marginTop:'10px', padding:'20px 0'}}>
                        <div className="right">
                            <h1 className="h11">Today's Special</h1>
                            <h1 className="h11" style={{color:'orange'}}>{item.strMeal}</h1>
                            <h1 className="h11">{item.srtArea}</h1>
                        </div>
                        <div className="left">
                            <img onClick={()=>navigate('/meals',{state:{item}})} src={item.strMealThumb} style={{borderRadius:'50%', width:'400px',height:'400px'}} alt="" />
                        </div>
                    </div>
                    
                )
            })
        }
        <Category></Category>
    </div>
  )
}

export default Home
