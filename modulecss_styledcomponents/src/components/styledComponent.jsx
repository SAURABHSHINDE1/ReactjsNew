import styled from 'styled-components'

const StyledComp = () => {

    const Button =styled.button`
        padding:10px 40px;
        border:none;
        background-color:orange;
        border-radius:10px;
        color:#fff
    `

    const Div = styled.div`
        height:300px;
        width:300px;
        background-color:teal;
        display:flex;
        flex-direction:column;
        padding-left:20px;
        overflow:hidden
    `

    return ( <>

    <Button> click me</Button>
    <br /><br />
    <Button>Test </Button>
    <br /><br />
    <Button>Add Task</Button>
    <br /><br />

    <Div>
        
            <h1>Helloo</h1>

            <h2>Hello DreamsGuider</h2>
    </Div>

    <br />


     <Div>
        
           <img src="https://plus.unsplash.com/premium_photo-1772104634910-aead4f9da8a4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" alt="" />
    </Div>
    </> );
}
 
export default StyledComp;