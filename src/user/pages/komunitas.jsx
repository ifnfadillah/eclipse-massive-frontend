import React from 'react'
import LayoutUser from '../layout'
import BannerKomunitas from '../components/Banner/BannerKomunitas'
import SectionKomunitas from '../layouts/Section/SectionKomunitas'

function Komunitas() {
    return (
        <LayoutUser>
            <SectionKomunitas />
            <BannerKomunitas />
        </LayoutUser>
    )
}

export default Komunitas
