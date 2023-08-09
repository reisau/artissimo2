import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Autoplay} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import imagem1 from "../../assets/imagens/imagem1.jpg"
import imagem2 from "../../assets/imagens/imagem2.jpg"
import imagem3 from "../../assets/imagens/imagem3.jpg"
import "./main.css"

export default class Carrosel extends React.Component {
    render() {
        return (
            <Swiper modules= {[Navigation, Pagination, Autoplay]}
            autoplay={{delay:2000}}
            navigation={true}
            pagionatio={{clickable:true}}
            className="swiper-container"
            >
                <SwiperSlide className="slide-item"> 
                    <img src={imagem1}/>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <img src={imagem2} height="1080px" widht="1080px"/>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                    <img src={imagem3} height="1080px" widht="1080px"/>
                </SwiperSlide>
            </Swiper>
        )
    }
}
