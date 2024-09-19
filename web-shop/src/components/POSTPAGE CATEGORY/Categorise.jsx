import React, { useEffect, useState } from 'react'
import './Categorize.css'
import { useDispatch } from 'react-redux'
import { landingPageTogggle, landingPageTogggle2 } from '../../redux/action/action'
const Categorise = () => {

  const dispatch = useDispatch()







  const [data, setdata] = useState([])
  const fetchCategories  = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products/categories')
      const result = await response.json()
        setdata(result)
    } catch (error) {
      console.log('Error fetching categories:', error)
    }
  }
  useEffect(() => {
    fetchCategories ()
  }, [])





  // const [seturl] = useState()
  const setinurl = (category) => {
    const categoryURL = `https://dummyjson.com/products/category/${category.slug}`
    dispatch(landingPageTogggle(categoryURL));
    dispatch(landingPageTogggle2());
    // console.log(categoryURL)

    
  }
  return (
    <>


      <h2>Trending Categories</h2>

      <div className="category-display flex items-center">
        <div className="category-wrapper">
          {
            data.map((category, index) => (
              <div className="cat" key={index}>
                <p value={category.url} onClick={() => setinurl(category)}>{category.name} </p>
              </div>
            ))
          }

        </div>
        
      </div>








    </>
  )
}

export default Categorise
