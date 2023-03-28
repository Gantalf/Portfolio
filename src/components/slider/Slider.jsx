import React from 'react'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel'; //importamos el carousel
import '@brainhubeu/react-carousel/lib/style.css'; //importamos el css que viene instalado en el paquete
import Data from './Data';
import './Slider.css'

const Slider = () => {
  console.log(Data)
  return (
    <div className='carousel-container'>
      <div className='carousel-container__title'>
        <h2>Algunos de mis proyectos</h2>
      </div>
      <Carousel
        plugins={[
          'arrows',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 3,
            }
          },
        ]}
        breakpoints={{
          960: {
            plugins: [
              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 1
                }
              }
            ]
          }
        }}
      >
        {Data}
      </Carousel>
    </div>
  )
}

export default Slider
