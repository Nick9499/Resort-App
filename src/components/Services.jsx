import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: 'Free Cocktail',
                info: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, eum!'
                
            },
            {
                icon: <FaHiking />,
                title: 'Free Hiking',
                info: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, eum!'
                
            },
            {
                icon: <FaShuttleVan />,
                title: 'Free Shuttle',
                info: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, eum!'
                
            },
            {
                icon: <FaBeer />,
                title: 'Strongest Beer',
                info: ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, eum!'
                
            },
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article className="service" key={index}>
                                <span>{item.icon} </span>
                                <h6>{item.title} </h6>
                                <p>{item.info} </p>
                                

                            </article>
                        );
                    })}
                </div>
               
           </section>
        )
    }
}
