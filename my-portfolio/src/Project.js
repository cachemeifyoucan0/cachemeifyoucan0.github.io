
import React from 'react';
class Project extends React.Component {
    render() {
      return <div className="Project"> 
                <h1>{this.props.name}</h1>
                    <p>{this.props.date}</p>
                    <h1>This project used the main technology of {this.props.tech}</h1>
                    <h1>The link to the project in more detail is <a href={this.props.link}>here</a></h1>
             </div>;
    }
  }

  export default Project;