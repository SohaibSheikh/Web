import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free Cocktails",
        info:
          "This easy passion fruit cocktail is bursting with zingy flavours and is perfect for celebrating with friends. Top with prosecco for a special tipple"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info:
          "challenging, beautiful climbs and descents every day—but never above where the air gets cold or overly thin"
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle",
        info:
          "The benefit to staying at our resort is that you can take a shuttle, or a regular bus that travels back and forth, to the Resort."
      },
      
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}