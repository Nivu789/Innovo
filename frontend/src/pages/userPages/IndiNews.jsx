import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchIndiNewsData } from '../../hooks/adminhooks/useFetchIndiNewsData'
import './indinews.css'
import moment from 'moment'
import parse from 'html-react-parser'
import { useFetchRecentNews } from '../../hooks/userhooks/useFetchRecentNews'
import RecentNewsCard from '../../components/userComponents/RecentNewsCard'

const IndiNews = () => {

    const {newsId} = useParams()

    const {newsData} = useFetchIndiNewsData(newsId)

    const {recentNewsData} = useFetchRecentNews()

  return (
    <div className='indi-news-section'>
        <div className='indi-news-heading'>
            {newsData.heading}
            <hr></hr>
        </div>

        <div className='row'>
            
            <div className='col-9 d-flex flex-column gap-4' style={{paddingRight:"60px"}}>
                <div className='news-indi-image-div'>
                    <img src={`${import.meta.env.VITE_BASE_URL}/${newsData.image}`} alt="" />
                </div>

                <div className='d-flex justify-content-between link-date-section'>
                    <div className='row category-link-section'>
                        <div className='col'>{newsData.category}</div>
                        <div className='col d-flex gap-4'>
                            <i class="fa fa-share-alt"></i>
                            <i class="bi bi-linkedin"></i>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center' style={{color:"slategray"}}>
                        {moment(newsData.date).format("DD-MM-yy")}
                    </div>
                </div>

                <div className='content-section'>
                    {parse(`${newsData.content}`)}
                </div>

            </div>

            <div className='col-3'>
                <div className='recent-news-heading'>
                    Recent News
                </div>
                <div className='recent-news-section pt-3'>
                    
                    {
                    recentNewsData.map((item)=>(
                        <RecentNewsCard data={item}/>
                    ))}
                    
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default IndiNews