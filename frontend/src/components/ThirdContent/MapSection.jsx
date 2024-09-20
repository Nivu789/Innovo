import React, { useEffect, useState } from 'react'
import './mapsection.css'
import { mapData } from './mapData'

const MapSection = () => {
    const [dataIndex, setDataIndex] = useState(0)

    useEffect(() => {
        const setData = setInterval(() => {
            setDataIndex(prevIndex => {
                const newIndex = prevIndex > 2 ? 0 : prevIndex + 1
                return newIndex
            })
        }, 3000);


        return () => clearInterval(setData)
    }, [dataIndex])

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    useEffect(() => {

        const handleMapSize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        window.addEventListener('resize', handleMapSize)

        return () => window.removeEventListener('resize', handleMapSize)

    }, [])

    return (
        <>
            <div className='row map-section'>
                <div className='col-8'>
                    <div className='d-flex flex-column w-100'>
                        <div className='fs-1 heading'>
                            Global Reach
                        </div>
                        <div className='row button-section'>
                            <div className='button-section-1 mt-4 d-lg-flex gap-2 col-7 d-none'>
                                {mapData.map((data, index) => (
                                    <button className={`rounded-pill ps-4 pe-4  border-1 d-flex justify-content-lg-center bg-black align-items-center ${mapData[dataIndex].heading == data.heading ? "border-blue" : "text-white"}`} onClick={() => setDataIndex(index)}>{data.heading}</button>
                                ))}
                                {/* <button className='rounded-pill ps-4 pe-4 bg-black border-white text-white border-1 d-flex justify-content-center align-items-center' onClick={()=>setDataIndex(0)}>Europe</button>
                        <button className='rounded-pill ps-4 pe-4 bg-black border-white text-white border-1 d-flex justify-content-center align-items-center' onClick={()=>setDataIndex(1)}>Asia</button>
                        <button className='rounded-pill ps-4 pe-4 bg-black border-white text-white border-1 d-flex justify-content-center align-items-center' onClick={()=>setDataIndex(2)}>Africa</button>
                        <button className='rounded-pill ps-4 pe-4 bg-black border-white text-white border-1 d-flex justify-content-center align-items-center' onClick={()=>setDataIndex(3)}>North America</button> */}
                            </div>

                            <div className='row button-row d-lg-none'>
                                <div className='col-6 col-md-6 col-lg-3 ps-0 pe-1'><button className='w-100 pt-2 pb-2 rounded-pill bg-black border-white text-white border-1 d-flex justify-content-center align-items-center' onClick={() => setDataIndex(0)}>Europe</button></div>
                                <div className='col-6 col-md-6 col-lg-3 ps-1 pe-0'><button className='w-100 pt-2 pb-2 rounded-pill bg-black border-white text-white border-1 d-flex justify-content-center align-items-center' onClick={() => setDataIndex(1)}>Asia</button></div>
                                <div className='col-6 col-md-6 col-lg-3 ps-0 pe-1 ms-lg-2'><button className='w-100 pt-2 pb-2 rounded-pill bg-black border-white text-white border-1 d-flex justify-content-center align-items-center' onClick={() => setDataIndex(2)}>Africa</button></div>
                                <div className='col-6 col-md-6 col-lg-3 ps-1 pe-0'><button className='w-100 pt-2 pb-2 rounded-pill bg-black border-white text-white border-1 d-flex justify-content-center align-items-center' onClick={() => setDataIndex(3)}>North America</button>   </div>
                            </div>

                            <div className='col-lg-3 mt-lg-4 place-div col-12'>
                                <div className='place row'>
                                    {mapData[dataIndex].countries.map((country) => (
                                        <>

                                            <div className='col-1 d-flex flex-column'>{country}</div>

                                        </>
                                    ))}
                                </div>
                                <div className='text-white'><hr></hr></div>
                            </div>
                        </div>
                        <div className={`image-div w-100 ${isMobile ? "row" : ""}`}>
                            <img src={mapData[dataIndex].map} className='map-image' alt="" />
                        </div>
                    </div>
                </div>

                {isMobile ?

                    <>
                        <div className='row w-100'>
                            <div className='col-lg-4 d-flex mt-lg-3 h-100 w-100'>
                                <div className='info-card h-100 w-100 ps-4 pe-4 pt-4 d-flex flex-column gap-1'>
                                    <div style={{ overflowY: "auto", height: "654px" }}>
                                        <div className='fs-1 border-bottom border-dark pb-3 mb-3'>{mapData[dataIndex].heading}</div>
                                        <div className='d-flex flex-column gap-3'>
                                            {mapData[dataIndex].subheadings.map((subheading) => (
                                                <div className='d-flex flex-column gap-2'>
                                                    <div className='fs-3'>{subheading.item}</div>
                                                    <div style={{ fontSize: '12pt' }}>{subheading.content}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='row w-100' style={{paddingLeft:"40px",paddingRight:"20px",paddingBottom:"40px"}}>
                        <div style={{ marginTop: "40px"}}>
                            <div className='row d-flex justify-content-around pt-4 pb-4 ps-3' style={{ borderRadius: "24px", backgroundColor: '#9ef3ee', height: 'fit-content', boxShadow: "0px 0px 50px 0px rgba(158, 243, 238, .5)" }}>
                                <div className='row w-100'>
                                <div className='d-flex flex-column col-6'>
                                    <div className='fs-2'>100+</div>
                                    <div className='ps-1'>Major clients</div>
                                </div>
                                <div className='d-flex flex-column col-6'>
                                    <div className='fs-2'>15000+</div>
                                    <div className='ps-1'>People</div>
                                </div>
                                </div>
                                <div className='row w-100'>
                                <div className='d-flex flex-column col-6'>
                                    <div className='fs-2'>130+</div>
                                    <div className='ps-1'>Ongoing projects</div>
                                </div>
                                <div className='d-flex flex-column col-6'>
                                    <div className='fs-2'>£1 Billion</div>
                                    <div className='ps-1'>Operating revenue in 2023</div>
                                </div>
                                </div>
                            </div>
                        </div>
                        </div>

                    </>

                    :

                    <>
                        <div className='col-lg-4 d-flex mt-lg-3'>
                            <div className='info-card h-100 w-75 ps-4 pe-4 pt-4 d-flex flex-column gap-1'>
                                <div style={{ overflowY: "auto", height: "654px" }}>
                                    <div className='fs-1 border-bottom border-dark pb-3 mb-3'>{mapData[dataIndex].heading}</div>
                                    <div className='d-flex flex-column gap-3'>
                                        {mapData[dataIndex].subheadings.map((subheading) => (
                                            <div className='d-flex flex-column gap-2'>
                                                <div className='fs-3'>{subheading.item}</div>
                                                <div style={{ fontSize: '12pt' }}>{subheading.content}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{ paddingLeft: "120px", paddingRight: "140px", marginTop: "40px" }}>
                            <div className='col-12 d-flex justify-content-around pt-4 pb-4' style={{ borderRadius: "60px", backgroundColor: '#9ef3ee', height: 'fit-content', boxShadow: "0px 0px 50px 0px rgba(158, 243, 238, .5)" }}>
                                <div className='d-flex flex-column'>
                                    <div className='fs-2'>100+</div>
                                    <div className='ps-1'>Major clients</div>
                                </div>
                                <div className='d-flex flex-column'>
                                    <div className='fs-2'>15000+</div>
                                    <div className='ps-1'>People</div>
                                </div>
                                <div className='d-flex flex-column'>
                                    <div className='fs-2'>130+</div>
                                    <div className='ps-1'>Ongoing projects</div>
                                </div>
                                <div className='d-flex flex-column'>
                                    <div className='fs-2'>£1 Billion</div>
                                    <div className='ps-1'>Operating revenue in 2023</div>
                                </div>
                            </div>
                        </div>
                    </>

                }





            </div>

        </>
    )
}

export default MapSection