/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';

import { db } from "../firebase.config"
import Spinner from "./Spinner";

function Slider() {
    const [loading, setLoading] = useState(true)
    const [listings, setListings] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        const fetchListings = async () => {
            const listingsRef = collection(db, 'listings')
            const q = query(listingsRef, orderBy('timestamp', 'desc'), limit(5))
            const querySnap = await getDocs(q)

            let listings = []

            querySnap.forEach((doc) => {
                return listings.push({
                    id: doc.id,
                    data: doc.data()
                })
            })

            setListings(listings)
            setLoading(false)
        }

        fetchListings()
    }, [])

    return (
        <div>
            Slider
        </div>
    )
}

export default Slider
