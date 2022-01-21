import React from 'react'
import Footer from '../Component/Footer';
import Navbar from "../Component/Navbar";
import FeatureSec from '../Component/FeatureSec';
import Hero from '../Component/Hero';
import Step from '../Component/Step';
import ContactForm from '../Component/ContactForm';

export default function Home() {
    return (
        <div>
                <Navbar />
                    {/* this is home */}
                <Hero />
                <Step/>
                <FeatureSec />
                    <ContactForm />
                <Footer />    
        </div>
    )
}
