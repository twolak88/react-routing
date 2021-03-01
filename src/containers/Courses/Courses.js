import { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Course from '../Course/Course';

import classes from './Courses.module.css';

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: 'Angular - The Complete Guide' },
      { id: 2, title: 'Vue - The Complete Guide' },
      { id: 3, title: 'PWA - The Complete Guide' },
    ],
  };

  render() {
    let courses = this.state.courses.map((course) => {
      return (
        <Link
          to={{
            pathname: '/courses/' + course.id,
            search: '?title=' + course.title
          }}
          key={course.id}>
          <article 
            className={classes.Course} >
            {course.title}
          </article>
        </Link>
      );
    });
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className={classes.Courses}>
          {courses}
        </section>
        <Route 
            path={this.props.match.url + '/:id'} 
            exact 
            component={Course} />
      </div>
    );
  }
}

export default Courses;
