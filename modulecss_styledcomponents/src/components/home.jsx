import style from './home.module.css'

const Home = () => {
    console.log(style)
    return ( <>

    <div className={style.main}>

    </div>

    <div className={style.box}></div>


    <div className={style['inner-div']}></div>


    
    </> );
}
 
export default Home;