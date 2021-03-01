import { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import classes from './Posts.module.css';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';
// import axios from 'axios';
import axios from '../../../axios';

class Posts extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    // console.log(this.props);
    axios.get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => {
          return {
            ...post,
            author: 'Iwnoka'
          }
        })
        this.setState({
          posts: updatedPosts
        });
      })
      .catch(error => {
        console.log(error);
        // this.setState({
        //   error: true
        // })
      });;
  }

  postSelectedHandler = (id) => {
    this.props.history.push({
      pathname: '/posts/' + id
    });
    // this.props.history.push('/' + id);
  }

  render() {
    let posts;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          //<Link to={'/posts/' + post.id}
          //  key={post.id}>
          <Post 
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}/>);
          //</Link>);
      });
    } else {
      posts = <p style={{textAlign: 'center', color: 'red'}}>Something went wrong</p>
    }
    return (
      <div>
        <section className={classes.Posts}>
          {posts}
        </section>
        <Route 
            path={this.props.match.url + '/:id'} 
            exact 
            component={FullPost} />
      </div>
    );
  }
}

export default Posts;