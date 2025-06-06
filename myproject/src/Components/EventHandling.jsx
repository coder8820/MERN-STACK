 import './EV.css'

export const EventHandling = () => {

    const handleButton = (e) => { // fate arrow function
        console.log(e);
        console.log(e.target);
        console.log(e.target.className);
        alert("Button clicked!");
    }
    const handleWelcome = (name,hack) =>{
        alert("Welcome to the Event Handling Example!");
        console.log(`${name} says hello! to ${hack}`);
        
    }
    // const name = "Coder";
    return (
        <>
         {/* function component with named function  */}
          <button onClick={handleButton}>Click me</button>
            {/* function component with arrow function  */}
          <button onClick={(e)=> handleButton(e)}>Click me 2</button>
          <button onClick={(event)=> console.log(event)}>Inline function</button>
          <button onClick={()=> handleWelcome('Coder',"Hacker")}>welcome</button>

        </>
    )
}