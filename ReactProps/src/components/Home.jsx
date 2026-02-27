import About from "./About";

const Home = ({name , sage }) => {



    return ( <>

        <h1>This is Home Page </h1>

        <h1>Name : {name}</h1>
        <h2>Age : {sage}</h2>

          <About name={name} />

    </> );
}
 
export default Home;