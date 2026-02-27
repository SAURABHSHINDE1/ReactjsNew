const ConditionalRendring = () => {

    let age = 17

    let rattings  = 3.6

    return ( <>

        <h1>Conditional Rendering</h1>


        <h1>You are {age >= 18 ? "Eligibal for vote " : " not Eligibal for vote"}</h1>


        <h1 style={{
            color: rattings >3.5 ? "green" : "red"
        }}>Rating : {rattings}*</h1>

        
    </> );
}
 
export default ConditionalRendring;