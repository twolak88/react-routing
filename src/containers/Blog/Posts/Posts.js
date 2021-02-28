import { Component } from 'react';
import classes from './Posts.module.css';
import Post from '../../../components/Post/Post';
// import axios from 'axios';
import axios from '../../../axios';

class Posts extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
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
    this.setState({
      selectedPostId: id
    });
  }

  render() {
    let posts;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return <Post 
                key={post.id} 
                title={post.title}
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id)}/>
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