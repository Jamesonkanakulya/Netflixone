import React,{useState,useEffect} from 'react'

function Nav() {
    const [show,setshow] = useState(false)
    useEffect(() =>{
        window.addEventListener('scroll', () => {
            const top = window.scrollY > 100
            if (top) {
                setshow(true)
                
            }
            else setshow(false)
       

            });

            // return  () =>{
            //     window.addEventListener('scroll');
            // }
            
    },[show])


    return (
        <div className={`nav_bar ${show && "nav_black"}`}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png"
             alt="Netflix logo" />
            <img src="https://pbs.twimg.com/media/DlKNEufWsAAgr2E?format=jpg&name=small"
             alt="Netflix smily face" />
            
        </div>
    )
}

export default Nav
