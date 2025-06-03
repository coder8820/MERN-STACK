 import './EV.css'

export const EventHandling = () => {

    const handleButton = (e) => {
        console.log(e);
        console.log(e.target);
        console.log(e.target.className);
        console.log(e.target.innerText);
        console.log(e.type);
        console.log(e.clientX, e.clientY);
        console.log(e.pageX, e.pageY);
        console.log(e.screenX, e.screenY);
        console.log(e.altKey, e.ctrlKey, e.shiftKey, e.metaKey);
        console.log(e.button); // 0: left, 1: middle, 2: right
    }
    return (
        <>
          <button onClick={handleButton}>Click me</button>
        </>
    )
}