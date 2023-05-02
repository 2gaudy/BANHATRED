import React from "react";
import Navbar from "./Navbar";


function Products(){
    
    const ProductsStyling = {
        body:{
            width: '100%',
            height: "100%",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "black"
        },
        container:{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
        },

        items: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: 'center',
            flexDirection: "row"
        },
        product: {
            width: "10%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "center"
        },
        product_image: {
           
        },
        product_description: {
            color: "white",
            textAlign: "center"
        },
        product_container:{
            display: "flex",
            flexDirection: "column"
        }
    }

    return(
        <div style={ProductsStyling.body}>
            <Navbar/>
            <div style={ProductsStyling.container}>
                <div style={ProductsStyling.items}>
                    <div style={ProductsStyling.product}>
                        <a href="/showcase">
                            <img style={ProductsStyling.product_image} src="https://picsum.photos/200"></img>
                            <div style={ProductsStyling.product_container}>
                                <h3 style={ProductsStyling.product_description}>BANHATRED Hoodie - $200</h3>
                                <h4 style={ProductsStyling.product_description}>For those colder hate-filled days</h4>
                            </div>

                        </a>
                        
                    </div>
                    <div style={ProductsStyling.product}>
                        <a href="/showcase">
                            <img style={ProductsStyling.product_image} src="https://picsum.photos/200"></img>
                            <div style={ProductsStyling.product_container}>
                                <h3 style={ProductsStyling.product_description}>BANHATRED T-Shirt - $200</h3>
                                <h4 style={ProductsStyling.product_description}>A lighter way to show them how you feel</h4>
                        </div>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Products;