import React, { useEffect, useRef, useState } from 'react'
import './news.css'
import { useFetchNewsData } from '../../hooks/adminhooks/usefetchNewsData'
import UserNewsCard from '../../components/userComponents/UserNewsCard'
import { useFetchCategory } from '../../hooks/userhooks/useFetchCategory'

const News = () => {
    const {newsData,loading} = useFetchNewsData()
    const [newsDataFetched,setNewsDataFetched] = useState([])

    const {categoryData} = useFetchCategory()

    const categorySelect = useRef()

    useEffect(()=>{
        setNewsDataFetched(newsData)
    },[newsData])

    const handleFilter = () =>{
        const selectedCategory = categorySelect.current.value;

        console.log(selectedCategory)

        setNewsDataFetched(() => {
           
            if (!selectedCategory || selectedCategory=="All") {
                return newsData; 
            }
            
    
            const updatedNewsData = newsData.filter((item) => {
                return item.category === selectedCategory;
            });
    
            return updatedNewsData;
        });

    }

  return (
    <div className='news-section'>
        <div className='d-flex justify-content-between news-header align-items-center pt-5'>
            <div>News</div>
            <div className='w-25 filter-div'>
                <select className='w-100' onChange={handleFilter} ref={categorySelect}>
                    <option value="All">All</option>
                    {categoryData.map((item)=>(
                        <option value={item.categoryName}>{item.categoryName}</option>
                    ))}
                </select>
            </div>
        </div>
        <div><hr></hr></div>
        
        <div className='news-card-section row pt-5'>
        
            {loading ? 
            
        <div>Loading...</div>
                
        :
                newsDataFetched.map((item)=>(
                    <UserNewsCard data={item} key={item._id}/>
                ))
    }
            
        </div>
    </div>
  )
}

export default News