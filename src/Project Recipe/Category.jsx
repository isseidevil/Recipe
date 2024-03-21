import React, { useEffect, useState } from 'react'
import './Category.css'
import { useNavigate } from 'react-router-dom'

const Category = () => {
    const [cat,setCat]=useState([])
    const navigate = useNavigate()


    useEffect(()=>{
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then(res=>res.json())
        .then(d=>setCat(d.categories))
    },[])
  return (
    <div className='Category'>
        <h1>Categories:</h1>
        <section className='sec'>
            {
                cat.map((item)=>{
                    return(
                        <div className='cards' key={item.idCategory}>
                            <img onClick={()=>navigate('/specificCat',{state:{item}})} src={item.strCategoryThumb} height={'150px'} width={'150px'} style={{borderRadius:'50%'}} alt="" />
                        </div>
                    )
                })
            }
        </section>
    
    </div>
  )
}

export default Category
