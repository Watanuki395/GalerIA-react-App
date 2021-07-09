import React, { Component } from "react";

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Precios</h2>
            <p>
            En galer.IA nos preocupamos por ofrecerte los mejores precios del mercado, por eso te ofrecemos diferentes paquetes, para que elijas el que más se acomode a tu presupuesto.
            </p>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-4">
                    {" "}
                    <i className={d.icon}></i>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <li>{d.text}</li>
                      <li>{d.text2}</li>
                      <li>{d.text3}</li>
                      <li>{d.text4}</li>
                      <li>{d.text5}</li>
                      <li>{d.text6}</li>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
