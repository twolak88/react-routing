import { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import AsyncComponent from '../../hoc/asyncComponent';
import classes from './Blog.module.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';

const AsyncNewPost = AsyncComponent(() => {
  return import('./NewPost/NewPost');
});

class Blog extends Component {
  state = {
    auth: true
  }

  render() {
    return (
      <div className={classes.Blog}>
        <header>
          <nav>
            <ul>
              <li><NavLink 
                activeClassName={classes.active} 
                activeStyle={{
                  textDecoration: 'underline'
                }} 
                to="/posts/" 
                exact>Posts</NavLink></li>
              <li><NavLink 
                activeClassName={classes.active}
                to={{
                  pathname: '/new-post'/*,
                  hash: '#submit',
                  search: '?quick-submit=true'*/ 
                }}
              >New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <h1>Home</h1>} />
        <Route path="/" render={() => <h1>Home2</h1>} /> */}
        <Switch>
          {
            this.state.auth ? 
            <Route 
              path="/new-post" 
              component={AsyncNewPost}/> : null
          }
          <Route 
            path="/posts" 
            component={Posts}/>
          <Route 
            render={() => <h1>Not found!</h1>}/>
          {/* <Redirect 
            from="/" 
            to="/posts" /> */}
          {/* <Route 
            path="/" 
            component={Posts}/> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;