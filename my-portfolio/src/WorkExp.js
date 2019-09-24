import React from 'react'

class WorkExp extends React.Component{
    render() {
        return <div > 
                  <h1>{this.props.name}</h1>
                      <p className="name">{this.props.start-date} - {this.props.end-date}</p>
                     <p className="name">Development tools used: {this.props.tech}</p> {/*make into array eventually*/}
                      <p className="name">Description: {this.props.link}</p>
               </div>;
      }
}