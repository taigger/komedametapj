import React,{useState} from 'react';
import './main.css';




function Main(){

    const [ImageMouseOver,setImageMouseOver] = useState(false)

    return(
        <div className="main">
            <div className="posts">
                <div>   
                    <img 
                    src="https://drive.google.com/uc?id=1B2QjGQYfwW33rfOUpaWny7vQotD7iCxl"
                    onMouseEnter={()=> setImageMouseOver(true)}
                    onMouseLeave={()=> setImageMouseOver(false)}
                    />
                    { ImageMouseOver && (
                        <div>
                         "it is fine"
                        </div>
                        )}
                </div>
            </div>
        </div>
      
    )

}

export default Main;