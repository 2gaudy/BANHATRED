import React from "react"
import Spline from '@splinetool/react-spline';


const LandingStyle = {
    container: {
        width: "100%",
        height: "100%"
    }
}


function Landing(){

    return(
        <div style={LandingStyle.container} >
            <Spline scene="https://prod.spline.design/7sp4OekXuA3EqS9x/scene.splinecode" />
        </div>
    )

}

export default Landing;