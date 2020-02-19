
import React from 'react';
class Project extends React.Component {
    render() {
      return <div > 
                <h1>{this.props.name}</h1>
                    <p className="date">{this.props.date}</p>
                    <p className="dev">This project used the main technology of {this.props.tech}</p>
                    <p className="name">The link to the project in more detail is <a href={this.props.link}>here</a></p>
             </div>;
    }
  }

  export default Project;