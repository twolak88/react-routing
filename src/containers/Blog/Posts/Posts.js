import { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './Posts.module.css';
import Post from '../../../components/Post/Post';
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

  render() {
    let posts;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Link to={'/' + post.id}
            key={post.id}>
            <Post 
              title={post.title}
              author={post.author}/>
          </Link>);
      });
    } else {
      posts = <p style={{textAlign: 'center', color: 'red'}}>Something went wrong</p>
    }
    return (
      <section className={classes.Posts}>
          {posts}
        </section>
    );
  }
}

export default Posts;