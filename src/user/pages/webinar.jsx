import React from 'react'
import LayoutUser from '../layout'
import BannerWebinar from '../components/Banner/BannerWebinar'
import SectionWebinar from '../layouts/Section/SectionWebinar'

function Webinar() {
    return (
        <LayoutUser>
            <SectionWebinar />
            <BannerWebinar />
        </LayoutUser>
    )
}

export default Webinar
