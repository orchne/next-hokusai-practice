import axios from "axios"
import Head from "next/head"
import Image from 'next/image'

const BioPage = (props) => {
    return (
        <div className="row">
            <Head>
                <meta name="description" content="biography of hokusai"/>
            </Head>
            <div className="col-lg-8">
                <article>
                    <div className="mb-4">
                        <h1 className="fw-bolder mb-1">Hokusai Bio</h1>
                    </div>
                    <section className="mb-5">
                        {props.data.map((item,i) => {
                             return (
                             <p key={i} className='fs-5 mb-4'>
                                {item}
                            </p>
                             )
                        })}
                    </section>
                </article>
            </div>
            <div className="col-lg-4">
                <div className="card mb-4">
                    <Image
                        src={'/images/bio/bio.jpg'}
                        layout='responsive'
                        width='720'
                        height='1024'
                    />
                </div>
            </div>
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await axios.get('https://baconipsum.com/api/?type=all-meat&paras=5')

    if (!res.data){
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            data: res.data
        },
        revalidate: 21600
    }
}

export default BioPage