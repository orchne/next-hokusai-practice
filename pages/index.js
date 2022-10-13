import { getJsonData } from "../utils/tools"
import Carousel from '../components/ui/Carousel'
import Articles from "../components/Home/Articles"

const Home = (props) => {
  return (
    <>
      <Carousel data={props.data.carrousel}></Carousel>
      <Articles data={props.data.articles}></Articles>
    </>
  )
}

export const getStaticProps = async() =>{
  const data = await getJsonData()

  return {
    props:{
      data: data
    }
  }
}

export default Home