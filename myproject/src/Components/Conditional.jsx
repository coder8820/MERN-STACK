export function  Condition(){
    const age = 23;
    const students = [1]

    return(
        <div>
            <h1>Conditional statements</h1>
            <h3>{age >= 18 ? "you can vote": 'Not allowed'}</h3>
            {/* <h3>{students.length && "No student found"}</h3> */}
            <h3>{students.length === 0 && "No student found"}</h3>
            <h2>Number of students: {students.length}</h2>
        </div>
    )
}