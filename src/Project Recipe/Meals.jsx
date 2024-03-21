import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import ReactPlayer from 'react-player/youtube'
import './Meals.css'

const Meals = () => {
    const location = useLocation()
    const data = location.state.item

    const [datas,setDatas]=useState([])
    useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${data.idMeal}`)
        .then(res=>res.json())
        .then(d=>{
            setDatas(d.meals)
            console.log(d);
        })
    },[])

  return (
    <div className="Meals">
      <section className="spcsec1">
        <div className="right1">
            <img src={data.strMealThumb} width={'85%'} alt="" />
        </div>
        <div className="left1">
            <h1>Origin: {datas.length > 0 && datas[0].strArea}</h1>
            <h1>Category: {datas.length > 0 && datas[0].strCategory}</h1>
            <h1>Name: <span style={{color:'orange'}}>{data.strMeal}</span></h1>
        </div>
        </section>
       <section>
       {
            datas.map((item)=>{
                return(
                    <div className="control" key={item.idMeal}>
                        <aside>
                        <br />
                        <h1>{item.strMeal} - Recipe</h1>
                        <br />
                        <p>{item.strInstructions}</p>
                    </aside>
                    <ReactPlayer url={item.strYoutube} />
                    </div>
                )
            })
        }
       </section>
    </div>
  )
}

export default Meals
