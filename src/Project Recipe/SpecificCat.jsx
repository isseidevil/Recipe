import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import './Spc.css'

const SpecificCat = () => {
    const location = useLocation()
    const data = location.state.item
    const navigate = useNavigate()

    const [datas,setDatas]=useState([])
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${data.strCategory}`)
        .then(res=>res.json())
        .then(d=>{
            setDatas(d.meals)
        })
    },[])

  return (
    <div className="spc">
        <section className="spcsec">
        <div className="right">
            <img src={data.strCategoryThumb} width={'100%'} alt="" />
        </div>
        <div className="left">
            <h1>{data.strCategory}</h1>
            <p>{data.strCategoryDescription}</p>
        </div>
        </section>
        <br />
        <br />
        <section className="sec2">
            {
            datas.map((item)=>{
                return(
                    <div className="secdiv" key={item.idMeal}>
                        <img onClick={()=>navigate('/meals',{state:{item}})} src={item.strMealThumb} width={'200px'} height={'200px'} alt="" />
                        <p>{item.strMeal}</p>
                    </div>
                )
                
            })}
            
        </section>
        
              
    </div>
  )
}

export default SpecificCat
