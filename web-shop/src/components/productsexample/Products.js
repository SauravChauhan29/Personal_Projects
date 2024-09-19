import React, { useEffect, useState } from 'react';
import './product.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, readMoreDetails} from '../../redux/action/action';


const Products = () => {
const details = useSelector((state)=> state.toggler.details)
// console.log(details)
  const [dataSet, setDataset] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All Category');
 
const [sortType,setsortType]=useState("Sort by")
// const [sortProduct,setsortProduct]=useState([])

const dispatch = useDispatch()

  const productLink = 'https://dummyjson.com/products';
  const categoriesURL = 'https://dummyjson.com/products/category-list';

  const fetchAPI = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setDataset(data.products);
    } catch {
      alert('Failed to fetch products');
    }
  };

  const fetchCategory = async () => {
    try {
      const res = await fetch(categoriesURL);
      const dataset = await res.json();
      setCategories(dataset);

    } catch {
      alert('Failed to fetch categories');
    }
  };
  // console.log(categories);


  useEffect(() => {
    // fetchAPI(productLink);
    fetchAPI(details ? details: productLink);
    fetchCategory();
    // console.log(dataSet);
    
  }, [details]);

  const addToCarts =(items)=>{
    dispatch(addToCart(items))
  }
  const readmoredetails =(item)=> {
    dispatch(readMoreDetails(item))
    console.log(item)
  }
  
 


  
  const handleCategoryChange = (e) => {
    const categorytype = e.target.value;
    setSelectedCategory(categorytype);
    const url = categorytype === 'All Category'
      ? productLink : `${productLink}/category/${categorytype}`;
    fetchAPI(url);
//
    
  };
  // Handle sorting by old spreding data 
  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    setsortType(sortValue);
    
    let sortedData = [...dataSet];
    if (sortValue === 'High to Low') {
      sortedData.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'Low to High') {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'A-Z') {
      sortedData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortValue === 'Z-A') {
      sortedData.sort((a, b) => b.title.localeCompare(a.title));
    }
    setDataset(sortedData);
  };
 

  return (
    <div className='wrapper mx-2.5'>
      <select value={selectedCategory} onChange={handleCategoryChange} className='categoryselection text-center'>
        <option value='All Category' className='subcategoryselection'>All Category</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
      <select value={sortType} onChange={handleSortChange} className='categoryselection'>
        <option value='Sort by' className='subcategoryselection'>Sort by</option>
        <option value='High to Low' className='subcategoryselection'>High to Low</option>
        <option value='Low to High' className='subcategoryselection'>Low to High</option>
        <option value='A-Z' className='subcategoryselection'>A-Z</option>
        <option value='Z-A' className='subcategoryselection'>Z-A</option>
        
      </select>
      <div className="cardcontainer flex justify-evenly flex-wrap mx-2.5">
        {dataSet.map((item) => (
          <div className="cardwrapper m-1 " key={item.id} >
            <div className="upperdiv">
              {/* <img src={item.image} alt={item.title} /> */}
              <img src={item.thumbnail} alt={item.title}  loading='lazy'/>
            </div>
            <div className="lowerdiv">
              <p className="producttitle">{item.title}</p>
              <p className="priceboard">${item.price}</p>
              <div className="buttondiv">
                <button className="addtocart" onClick={() => addToCarts(item)}  > <i className="fa-solid fa-cart-plus" style={{ paddingRight: "10px" }}></i >Add To Cart</button>
                <button className="readmore" title='Know More' onClick={() => { readmoredetails(item) }}

                ><i className="fa-solid fa-ellipsis-vertical"></i></button>
        
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
