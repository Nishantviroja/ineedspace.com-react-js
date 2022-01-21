import React from 'react'
import Navbar from "../Component/Navbar";
import Hero from '../Component/Hero';
import ContactForm from '../Component/ContactForm';
import Footer from '../Component/Footer';



export default function Contact() {
    return (
        <div>
            <Navbar />
            <Hero/>
            <ContactForm />
            <Footer />
        </div>
    )
}
