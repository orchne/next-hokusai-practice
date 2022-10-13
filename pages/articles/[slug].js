import { getJsonData } from '../../utils/tools'
import Image from 'next/image'

const ArticlePage = ({data}) => {
    return (
        <>
            <Image
                src={`/images/arts/${data.img}`}
                layout = 'responsive'
                height = '1080'
                width = '1920'
            />

            <div className='article_container'>
                <h1>{data.name}</h1>
                <div dangerouslySetInnerHTML={{__html: data.content}}></div>
            </div>
        </>
    )
}

export const getStaticProps = async({params}) =>{
    const data = await getJsonData();
    const articles = data.articles;

    let articleData = articles.find( article => article.slug === params.slug)

    return {
        props:{
            data:articleData
        }
    }
}

export const getStaticPaths = async() => {
    const data = await getJsonData();
    const paths = data.articles.map((article)=>(
        {
            params:{slug:article.slug}
        }
    ))

    return { paths, fallback:false}
}

export default ArticlePage