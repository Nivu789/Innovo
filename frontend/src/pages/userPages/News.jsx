import React from 'react'
import './news.css'

const News = () => {
  return (
    <div className='news-section'>
        <div className='d-flex justify-content-between news-header align-items-center pt-5'>
            <div>News</div>
            <div>Filter</div>
        </div>
        <div><hr></hr></div>
        
        <div className='news-card-section row pt-5'>
        
            <div className='news-card col-4 d-flex flex-column gap-4'>
                <div className='d-flex justify-content-between'>
                    <span>Project</span>
                    <span>09-09-2024</span>
                </div>
                <div className='card-image'>
                    <img src="./dubai.webp" alt="" />
                </div>
                <div className='card-heading'>
                    <p>Innovo awarded Emaar's prestigious new project “The Peak” in Uptown Cairo</p>
                </div>
                <div><hr></hr></div>
            </div>
            
            <div className='news-card col-4 d-flex flex-column gap-4'>
                <div className='d-flex justify-content-between'>
                    <span>Project</span>
                    <span>09-09-2024</span>
                </div>
                <div className='card-image'>
                    <img src="./dubai.webp" alt="" />
                </div>
                <div className='card-heading'>
                    <p>Innovo awarded Emaar's prestigious new project “The Peak” in Uptown Cairo</p>
                </div>
                <div><hr></hr></div>
            </div>

            <div className='news-card col-4 d-flex flex-column gap-4'>
                <div className='d-flex justify-content-between'>
                    <span>Project</span>
                    <span>09-09-2024</span>
                </div>
                <div className='card-image'>
                    <img src="./dubai.webp" alt="" />
                </div>
                <div className='card-heading'>
                    <p>Innovo awarded Emaar's prestigious new project “The Peak” in Uptown Cairo</p>
                </div>
                <div><hr></hr></div>
            </div>

            <div className='news-card col-4 d-flex flex-column gap-4'>
                <div className='d-flex justify-content-between'>
                    <span>Project</span>
                    <span>09-09-2024</span>
                </div>
                <div className='card-image'>
                    <img src="./dubai.webp" alt="" />
                </div>
                <div className='card-heading'>
                    <p>Innovo awarded Emaar's prestigious new project “The Peak” in Uptown Cairo</p>
                </div>
                <div><hr></hr></div>
            </div>
            
        </div>
    </div>
  )
}

export default News