import React from 'react'

class WorkExp extends React.Component{
    render() {
        return <div > 
                  <h1>{this.props.name}</h1>
                      <p className="date">{this.props.startDate} - {this.props.endDate}</p>
                     <p className="dev">Development tools used: {this.props.tech}</p> {/*make into array eventually*/}
                      <p className="name">Description: {this.props.descrip}</p>
               </div>;
      }
}

export default WorkExp;