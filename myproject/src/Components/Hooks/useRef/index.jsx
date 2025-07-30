import './index.css'
export const UseRef = () =>{
    return(
        <div className="container">
            <h1>useRef Hook Example</h1>
            <form action="#">
                <input type="text" id='username'/>
                <input type="text" id='password'/>
                <button>Submit</button>
            </form>
        </div>
    )
}