import React from 'react'
import moment from 'moment'

const RecentNewsCard = ({data}) => {
    return (
        <div className='recent-news-card pt-3'>
            <div className='heading'>{data.heading}</div>
            <div className='d-flex justify-content-between category-date pt-4'>
                <div>{data.category}</div>
                <div>{moment(data.date).format("DD-MM-yy")}</div>
            </div>
            <div className='pt-2'>
                <button className='right-button'><i class="bi bi-arrow-right"></i></button>
            </div>
            <div className='pt-3'>
                <hr></hr>
            </div>
        </div>
    )
}

export default RecentNewsCard