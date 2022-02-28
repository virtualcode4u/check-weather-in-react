import React from 'react'

const ShowWeather = ({text}) => {
  return (
    <div className='container my-5'>
        <div className='row mb-2'>
            <div className='col-md-3'>
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='cart-title'>Description</h5>
                        <p className='card-text'>{text.description}</p>
                    </div>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='cart-title'>Temperature</h5>
                        <p className='card-text'>{text.temp}</p>
                    </div>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='cart-title'>Temperature Min</h5>
                        <p className='card-text'>{text.temp_min}</p>
                    </div>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='cart-title'>Temperature Min</h5>
                        <p className='card-text'>{text.temp_max}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='row mb-2'>
            <div className='col-md-3'>
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='cart-title'>Humidity</h5>
                        <p className='card-text'>{text.humidity}</p>
                    </div>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='cart-title'>Sunrise</h5>
                        <p className='card-text'>{text.sunrise}</p>
                    </div>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='cart-title'>Sunset</h5>
                        <p className='card-text'>{text.sunset}</p>
                    </div>
                </div>
            </div>
            <div className='col-md-3'>
                <div className='card'>
                    <div className='card-body'>
                        <h5 className='cart-title'>Country</h5>
                        <p className='card-text'>{text.country}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ShowWeather