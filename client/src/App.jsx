import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
//import Gallery from './components/gallery';
//import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';
//import MessengerCustomerChat from 'react-messenger-customer-chat';

export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      <div>
        <Navigation />
        <Header data={this.state.landingPageData.Header} />
        <Features data={this.state.landingPageData.Features} />
        <About data={this.state.landingPageData.About} />
        <Services data={this.state.landingPageData.Services} />
        <Team data={this.state.landingPageData.Team} />
        <Contact data={this.state.landingPageData.Contact} />
       
      </div>
    )
  }
}

export default App;




/*
 <Gallery />
<Testimonials data={this.state.landingPageData.Testimonials} />
 <MessengerCustomerChat pageId="106439871455703"appId="374538900045410"logged_in_greeting="Hola! ¿en que puedo ayudarte?"language="es_LA"logged_out_greeting="Inicia sesión para chatear con nosotros"version="10.0"/>

*/