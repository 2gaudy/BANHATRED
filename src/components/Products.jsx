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
            justifyContent: "space-around",
            alignItems: 'center',
            flexDirection: "column"
        },
        product: {
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly"
        },
        product_image: {
           
        },
        product_description: {
            color: "white"
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
                        <img style={ProductsStyling.product_image} src="https://picsum.photos/200"></img>
                        <div style={ProductsStyling.product_container}>
                            <h3 style={ProductsStyling.product_description}>BanHatred Hoodie</h3>
                            <h4 style={ProductsStyling.product_description}>For those colder hate-filled days</h4>
                        </div>
                        
                    </div>
                    <div style={ProductsStyling.product}>
                        <img style={ProductsStyling.product_image} src="https://picsum.photos/200"></img>
                        <div style={ProductsStyling.product_container}>
                            <h3 style={ProductsStyling.product_description}>BanHatred Tshirt</h3>
                            <h4 style={ProductsStyling.product_description}>A lighter way to show them how you feel</h4>
                        </div>
                     </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Products;