import Masonry from 'react-masonry-css'
import CardItem from '../ui/Card';

const Articles = (props) => {
    const breakpointColumnsObj = {
        default: 4,
        768: 2,
        500: 1
      };
  return (
    <>
        <Masonry 
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
            {props.data.map(item => {
                return (
                    <CardItem key={item.id} article={item}/>
                )
            })}
        </Masonry>
    </>
  )
}

export default Articles