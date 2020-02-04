import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import MauiMap from '../components/mauiMap'
import styled from 'styled-components'

const ContactPage = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <MapContainer>
                <MauiMap/>
            </MapContainer>
        </Layout>
    )
}

export default ContactPage;

const MapContainer = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;
`;