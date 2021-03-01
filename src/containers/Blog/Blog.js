import React, { Component, Suspense } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import AsyncComponent from '../../hoc/asyncComponent';
import classes from './Blog.module.css';
import Posts from './Posts/Posts';
import Welcome from './Welcome/Welcome';
// import NewPost from './NewPost/NewPost';

// const AsyncNewPost = AsyncComponent(() => {
//   return import('./NewPost/NewPost');
// });

const AsyncNewPost = React.lazy(() => import('./NewPost/NewPost'));

class Blog extends Component {
  state = {
    auth: true,
    // show: false
  }

  // modeHandler = () => {
  //   this.setState(prevState => {
  //     return {
  //       show: !prevState.show
  //     };
  //   })
  // }

  render() {
    return (
      // <React.Fragment>
      //   <button onClick={this.modeHandler}>Toggle mode</button>
      //   {this.state.show ? <Suspense fallback={<div>Loading...</div>}>
      //             <AsyncNewPost/>
      //           </Suspense> : null}
      // </React.Fragment>

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
          <Route 
            path='/welcome'
            component={Welcome}/>
          {
            this.state.auth ? 
            <Route 
              path="/new-post" 
              render={() => <Suspense fallback={<div>Loading...</div>}>
                <AsyncNewPost/>
              </Suspense>}/> : null
          }
          <Route 
            path="/posts" 
            component={Posts}/>
          {/* <Route 
            render={() => <h1>Not found!</h1>}/> */}
          <Redirect 
            from="/" 
            to="/welcome" />
          {/* <Route 
            path="/" 
            component={Posts}/> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;