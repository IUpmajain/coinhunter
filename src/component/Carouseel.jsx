import React, { useContext, useEffect } from 'react'
import CoinContext from '../context/CoinContext'
import 'react-alice-carousel/lib/alice-carousel.css';
import { coinList } from '../context/CoinAction'
import AliceCarousel from 'react-alice-carousel'
import { Link } from 'react-router-dom'

const Carouseel = () => {

    const { allData, dispatch } = useContext(CoinContext)

    const fetchCarouselData = async () => {
        const data = await coinList();
        dispatch({
            type: "GET_ALLCOIN",
            payload: data,
        })
    }

    useEffect(() => {
        fetchCarouselData()
    }, [])

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 3,
            itemsFit: 'contain'
        },
    }

    return (
        <div
            className="mb-5 p-4 rounded-lg shadow-lg"
            style={{
                background: "radial-gradient(circle at top left, #0f2027, #203a43, #2c5364)",
                backgroundAttachment: "fixed",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <AliceCarousel
                mouseTracking
                infinite
                animationDuration={1500}
                disableDotsControls
                disableButtonsControls
                autoPlay
                responsive={responsive}
                items={allData.map((coin) => (
                    <Link to={`/coin/${coin.id}`} key={coin.id} className="text-decoration-none d-flex flex-column align-items-center">
                        <img
                            src={coin.image}
                            alt={coin.name}
                            height={80}
                            className="m-2"
                        />
                        <h5 className="text-white fw-bold mt-3">{coin.name}</h5>
                    </Link>
                ))}
            />
        </div>
    )
}

export default Carouseel
