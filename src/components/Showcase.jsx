import React from "react";
import Navbar from "./Navbar";
import Spline from '@splinetool/react-spline';


function Showcase(){

    const ShowcaseStyling = {
        body:{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "black"
        },
        container: {
            display: "flex",
            justifyContent: "space-evenly",
            width: "60%",
            height: "100%",
            margin: "3%",
            flexDirection: "row",
            alignItems: "center"
        },
        item: {
            display: "flex",
            width: "40%",
            height: "70%",
            
        },
        item_text_1: {
            color: "white", 
        },
        item_text_2:{
            textAlign: "center",
            color: "white"
        },
        item_description: {
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: 10
        }
    }

    return(
        <div style={ShowcaseStyling.body}>
            <Navbar/>
            <div style={ShowcaseStyling.container}>
                <div style={ShowcaseStyling.item}>
                    <Spline scene="https://prod.spline.design/dt2HCML6cizZ6S8f/scene.splinecode" />
                </div>
                <div style={ShowcaseStyling.item_description}>
                    <h1 style={ShowcaseStyling.item_text_1}>BANHATRED HOODIE</h1>
                    <h3 style={ShowcaseStyling.item_text_2}>$200.00</h3>
                    <h4 style={ShowcaseStyling.item_text_2}>- 23OZ FLEECE</h4>
                    <h4 style={ShowcaseStyling.item_text_2}>- FABRIC MILLED IN THE USA</h4>
                    <h4 style={ShowcaseStyling.item_text_2}>- PUFF PRINT / DISCHARGE PRINT COMBINATION</h4>
                    <h4 style={ShowcaseStyling.item_text_2}>- OG BANHATRED TEXT ON FRONT</h4>
                    <h4 style={ShowcaseStyling.item_text_2}>- MADE IN THE USA</h4>
                    <button>ADD TO CART</button>
                </div>
            </div>
            
        </div>
    );
}

export default Showcase;