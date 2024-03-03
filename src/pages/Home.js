import { FaStoreAlt } from 'react-icons/fa'
import Banner from '../component/Banner'
import Hero from '../component/Hero'
import { Link } from 'react-router-dom'


export default function Home() {
    return (
        <>
            <Hero hero="hero">
                <Banner info="we offer wide variety of utilities"
                    title="XYZdeals.com">
                    <Link to="/store"
                        className='btn_primary'>
                        <i><FaStoreAlt/></i>store
                    </Link>
                </Banner>
            </Hero>

        </>
    )
}