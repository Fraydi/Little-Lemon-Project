import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import GreekSalad from '../assets/greek salad.jpg';
import Brochette from '../assets/brochette.png';
import LemonDessert from '../assets/lemon dessert.jpg';
import './Highlights.css'; // Import the unique CSS file

function Highlights() {
    return (
        <div className="highlights-container">
            <div className="highlights-header">
                <h1>This week's specials</h1>
                <Button title="Online Menu" navigateTo="/menu" />
            </div>
            <div className="highlights-cards">
                <Card image={GreekSalad} alt_pic="Greek salad" title="Greek Salad" price="$12.99" description="The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."/>
                <Card image={Brochette} alt_pic="brochette" title="Brochette" price="$5.99" description="Our Brochette is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."/>
                <Card image={LemonDessert} alt_pic="lemon dessert" title="Lemon Dessert" price="$5.00" description="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."/>
            </div>
        </div>
    );
}

export default Highlights;
