// import React from 'react'
// import {useState} from "react"
// import imagem1 from "../../../assets/imagens/imagem1.jpg"
// import imagem2 from "../../../assets/imagens/imagem2.jpg"

// export default function Carrossel(){
//     const [Carrosel, SetCarrosel] = useState(imagem1)

//     return(
//         <>
//         <img src={Carrosel} alt=""></img>
//         <button onClick={()=> SetCarrosel(imagem2)}> </button>
//         </>
//     )
// }

// import {Swiper, SwiperSlide} from 'swiper/react'
// import {Navigation, Pagination, Autoplay} from 'swiper/modules'
// import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import "./main.css"


// export default class Carrosel extends React.Component {
//     render() {
//         return (
//             <Swiper modules= {[Navigation, Pagination, Autoplay]}
//             autoplay={{delay:2000}}
//             navigation={true}
//             pagionatio={{clickable:true}}
//             className="swiper-container"
//             >
//                 <SwiperSlide className="slide-item"> 
//                     <img src={imagem1}/>
//                 </SwiperSlide>
//                 <SwiperSlide className="slide-item">
//                     <img src={imagem2} height="1080px" widht="1080px"/>
//                 </SwiperSlide>
//                 <SwiperSlide className="slide-item">
//                     <img src={imagem3} height="1080px" widht="1080px"/>
//                 </SwiperSlide>
//             </Swiper>
//         )
//     }
// }
