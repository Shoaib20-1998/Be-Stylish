import React from 'react'
import CaptionCarousel from './Chakracomp/Carousel.jsx'
import styles from './Css/middle.module.css'
import Sale from './Middlecomponent/Sale.jsx';
import sale1 from './Landingimg/Topslider/sale1.gif'
import sale2 from './Landingimg/Topslider/sale2.gif'
import Ourbenifits from './Middlecomponent/Ourbenifits.jsx';
import our1 from './Landingimg/Ourbenifit/our1.jpg'
import our2 from './Landingimg/Ourbenifit/our2.jpg'
import our3 from './Landingimg/Ourbenifit/our3.jpg'
import Headingone from './Middlecomponent/Heading.jsx';
import Boximg from './Middlecomponent/Boximg.jsx';
import unm1 from './Landingimg/Unmoffer/unm1.jpg'
import unm2 from './Landingimg/Unmoffer/unm2.jpg'
import unm3 from './Landingimg/Unmoffer/unm3.jpg'
import unm4 from './Landingimg/Unmoffer/unm4.jpg'
import Fullonebox from './Middlecomponent/Fullonebox.jsx';
import hot from './Landingimg/Extrasingle/hot.jpg'
import feb1 from './Landingimg/Febsale/feb1.jpg'
import feb2 from './Landingimg/Febsale/feb2.jpg'
import feb3 from './Landingimg/Febsale/feb3.jpg'
import feb4 from './Landingimg/Febsale/feb4.jpg'
import shoes from './Landingimg/Extrasingle/shoes.gif'
import flash1 from './Landingimg/Flashsale/flash1.jpg'
import flash2 from './Landingimg/Flashsale/flash2.jpg'
import flash3 from './Landingimg/Flashsale/flash3.jpg'
import flash4 from './Landingimg/Flashsale/flash4.jpg'
import watch from './Landingimg/Extrasingle/watch.gif'
import trend1 from './Landingimg/Trandingoffer/trend1.jpg'
import trend2 from './Landingimg/Trandingoffer/trend2.jpg'
import trend3 from './Landingimg/Trandingoffer/trend3.jpg'
import trend4 from './Landingimg/Trandingoffer/trend4.jpg'
import trend5 from './Landingimg/Trandingoffer/trend5.jpg'
import trend6 from './Landingimg/Trandingoffer/trend6.jpg'
import trend7 from './Landingimg/Trandingoffer/trend7.jpg'
import trend8 from './Landingimg/Trandingoffer/trend8.jpg'
import sea1 from './Landingimg/Seasonhotdeal/sea1.jpg'
import sea2 from './Landingimg/Seasonhotdeal/sea2.jpg'
import sea3 from './Landingimg/Seasonhotdeal/sea3.jpg'
import sea4 from './Landingimg/Seasonhotdeal/sea4.jpg'
import sea5 from './Landingimg/Seasonhotdeal/sea5.jpg'
import sea6 from './Landingimg/Seasonhotdeal/sea6.jpg'
import sea7 from './Landingimg/Seasonhotdeal/sea7.jpg'
import sea8 from './Landingimg/Seasonhotdeal/sea8.jpg'
import tp1 from './Landingimg/tp/tp1.jpg'
import tp2 from './Landingimg/tp/tp2.jpg'
import tp3 from './Landingimg/tp/tp3.jpg'
import tp4 from './Landingimg/tp/tp4.jpg'
import bb1 from './Landingimg/Bigbrandbigdis/bb1.jpg'
import bb2 from './Landingimg/Bigbrandbigdis/bb2.jpg'
import bb3 from './Landingimg/Bigbrandbigdis/bb3.jpg'
import bb4 from './Landingimg/Bigbrandbigdis/bb4.jpg'
import bb5 from './Landingimg/Bigbrandbigdis/bb5.jpg'
import bb6 from './Landingimg/Bigbrandbigdis/bb6.jpg'
import bb7 from './Landingimg/Bigbrandbigdis/bb7.jpg'
import bb8 from './Landingimg/Bigbrandbigdis/bb8.jpg'
import bb9 from './Landingimg/Bigbrandbigdis/bb9.jpg'
import bb10 from './Landingimg/Bigbrandbigdis/bb10.jpg'
import bb11 from './Landingimg/Bigbrandbigdis/bb11.jpg'
import bb12 from './Landingimg/Bigbrandbigdis/bb12.jpg'
import val from './Landingimg/Extrasingle/val.jpg'
import bl1 from './Landingimg/Brandwelove/bl1.jpg'
import bl2 from './Landingimg/Brandwelove/bl2.jpg'
import bl3 from './Landingimg/Brandwelove/bl3.jpg'
import bl4 from './Landingimg/Brandwelove/bl4.jpg'
import bl5 from './Landingimg/Brandwelove/bl5.jpg'
import bl6 from './Landingimg/Brandwelove/bl6.jpg'
import bl7 from './Landingimg/Brandwelove/bl7.jpg'
import bl8 from './Landingimg/Brandwelove/bl8.jpg'
import bl9 from './Landingimg/Brandwelove/bl9.jpg'
import bl10 from './Landingimg/Brandwelove/bl10.jpg'
import bl11 from './Landingimg/Brandwelove/bl11.jpg'
import bl12 from './Landingimg/Brandwelove/bl12.jpg'
import ns1 from './Landingimg/Newstylesforu/ns1.jpg'
import ns2 from './Landingimg/Newstylesforu/ns2.jpg'
import ns3 from './Landingimg/Newstylesforu/ns3.jpg'
import ns4 from './Landingimg/Newstylesforu/ns4.jpg'
import ns5 from './Landingimg/Newstylesforu/ns5.jpg'
import ns6 from './Landingimg/Newstylesforu/ns6.jpg'
import ns7 from './Landingimg/Newstylesforu/ns7.jpg'
import ns8 from './Landingimg/Newstylesforu/ns8.jpg'
function Middle() {
  return (
    <>
    <div id={styles.Mainmiddle} >
      <div className={styles.submiddle}>
        <CaptionCarousel />
        <Sale img={sale1} name={"40% off"} />
        <Sale img={sale2} name={"60% off"} />
        <Headingone text={"Our Benefits"} />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Ourbenifits img={our1} name={our1} />
          <Ourbenifits img={our2} name={our1} />
          <Ourbenifits img={our3} name={our1} />
        </div>
        <Headingone text={"Unmissable Offers"} />
        <div className={styles.box} style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Boximg image={unm1} />
          <Boximg image={unm2} />
          <Boximg image={unm3} />
          <Boximg image={unm4} />
        </div>
        <Headingone text={"Hot Right Now"} />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Fullonebox image={hot} />
        </div>
        <Headingone text={"Feb Specials"} />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Boximg image={feb1} />
          <Boximg image={feb2} />
          <Boximg image={feb3} />
          <Boximg image={feb4} />
        </div>
        <Headingone text={"Shoes & bags"} />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Fullonebox image={shoes} />
        </div>
        <Headingone text={"FlASH SALE-12 Hours Only"} />
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Boximg image={flash1} />
          <Boximg image={flash2} />
          <Boximg image={flash3} />
          <Boximg image={flash4} />
        </div>
        <div style={{ marginTop:"30px", display: "flex", justifyContent: "space-evenly" }}>
          <Fullonebox image={watch} />
        </div>
        <Headingone text={"Trending Offers"} />
        <div style={{ display: "grid", gridTemplateColumns:"repeat(4,1fr)", gap:"20px" }}>
          <Boximg image={trend1} />
          <Boximg image={trend2} />
          <Boximg image={trend3} />
          <Boximg image={trend4} />
          <Boximg image={trend5} />
          <Boximg image={trend6} />
          <Boximg image={trend7} />
          <Boximg image={trend8} />
        </div>
        <Headingone text={"Season Hottest Deals"} />
        <div style={{ display: "grid", gridTemplateColumns:"repeat(4,1fr)", gap:"20px" }}>
          <Boximg image={sea1} />
          <Boximg image={sea2} />
          <Boximg image={sea3} />
          <Boximg image={sea4} />
          <Boximg image={sea5} />
          <Boximg image={sea6} />
          <Boximg image={sea7} />
          <Boximg image={sea8} />
        </div>
        <Headingone text={"Top Deals"} />

        <div style={{ display: "grid", gridTemplateColumns:"repeat(2,1fr)", gap:"50px" }}>
          <Boximg image={tp1} />
          <Boximg image={tp2} />
          <Boximg image={tp3} />
          <Boximg image={tp4} />
        </div>
        <Headingone text={"Big Brand Big discount"} />

        <div style={{ display: "grid", gridTemplateColumns:"repeat(6,1fr)", gap:"20px" }}>
          <Boximg image={bb1} />
          <Boximg image={bb2} />
          <Boximg image={bb3} />
          <Boximg image={bb4} />
          <Boximg image={bb5} />
          <Boximg image={bb6} />
          <Boximg image={bb7} />
          <Boximg image={bb8} />
          <Boximg image={bb9} />
          <Boximg image={bb10} />
          <Boximg image={bb11} />
          <Boximg image={bb12} />
        </div>
        <Sale img={val} name={"valentines day sale"} />
        <Headingone text={"Big We Love"} />
        <div style={{ display: "grid", gridTemplateColumns:"repeat(6,1fr)", gap:"20px" }}>
          <Boximg image={bl1} />
          <Boximg image={bl2} />
          <Boximg image={bl3} />
          <Boximg image={bl4} />
          <Boximg image={bl5} />
          <Boximg image={bl6} />
          <Boximg image={bl7} />
          <Boximg image={bl8} />
          <Boximg image={bl9} />
          <Boximg image={bl10} />
          <Boximg image={bl11} />
          <Boximg image={bl12} />
        </div>
        <Headingone text={"New Styles For You"} />

        <div style={{ marginBottom:"30px", display: "grid", gridTemplateColumns:"repeat(4,1fr)", gap:"20px" }}>
          <Boximg image={ns1} />
          <Boximg image={ns2} />
          <Boximg image={ns3} />
          <Boximg image={ns4} />
          <Boximg image={ns5} />
          <Boximg image={ns6} />
          <Boximg image={ns7} />
          <Boximg image={ns8} />
        </div>

      </div>
    </div>
    
    </>
  )
}

export default Middle;