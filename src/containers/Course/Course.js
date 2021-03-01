import { Component } from 'react';

class Course extends Component {
  state = {
    title: null,
    id: null
  }
  
  componentDidMount() {
    this.resolveTitle();
  }

  componentDidUpdate() {
    this.resolveTitle();
  }

  resolveTitle() {
    if (this.props.match.params.id && (!this.state.title 
      || this.state.id !== +this.props.match.params.id)){
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
          if (param[0] === 'title') {
            this.setState({
              title: param[1],
              id: +this.props.match.params.id
            })
          }
        }
    }
    
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>You selected the Course with ID: {this.state.id}</p>
      </div>
    );
  }
}

export default Course;
