import React, {useState} from 'react'

export default function About(props) {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        border:"1px solid black"
    })
    const [btnText, setbtnText] = useState("Dark Mode")


    const darkLight = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border:"0.5px solid white"
            })
            document.body.style.backgroundColor ="black"
            setbtnText("Light Mode")
            var element = document.getElementById("btn-dark");
            element.classList.remove("btn-dark");
            element.classList.add("btn-light");
            var element = document.getElementById("navbar");
            element.classList.add("navbar-dark","bg-dark");
            element.classList.remove("navbar-light","bg-light");
            document.title = "TextUtils - DarkMode"
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
                border:"0.5px solid black"
            
            })
            setbtnText("Dark Mode")
            document.body.style.backgroundColor ="white"
            var element = document.getElementById("btn-dark");
            element.classList.remove("btn-light");
            element.classList.add("btn-dark");
            
            var element = document.getElementById("navbar");
            element.classList.remove("navbar-dark","bg-dark");
            element.classList.add("navbar-dark","bg-primary");
            document.title = "TextUtils - LightMode"
        }
    }



return (
    <div className="container" >
        <h1>{props.title}</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div class="accordion-item" style={myStyle}>
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                        Accordion Item #1
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div class="accordion-item" style={myStyle}>
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                        Accordion Item #2
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
            <div class="accordion-item" style={myStyle}>
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                        Accordion Item #3
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <button type="button" id="btn-dark" class="btn btn-dark my-4" onClick={darkLight}>{btnText}</button>
        </div>
    </div>
)
}
