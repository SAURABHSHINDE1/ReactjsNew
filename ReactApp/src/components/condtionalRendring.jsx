const ConditionalRendring = () => {

    let num = 9

    let result = "fail"

    return ( <>

        <h1>Conditional Rendering</h1>


            <h1>You are {num >= 18 ? "eligibal for vote" : "not eligibal for vote"}</h1>

            <h1>The exam result is : {result == "pass" ? "Passed" : "failed"} </h1>


            <h1 style={{
                color:num > 10 ? "red" : "green"

            }}>Hello DreamsGuider !</h1>
        
    </> );
}
 
export default ConditionalRendring;