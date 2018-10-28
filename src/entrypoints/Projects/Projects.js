import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import classNames from 'classnames/bind';
import { Redirect } from 'react-router-dom';
import { NOT_FOUND_ROUTE } from 'router/routes';

import { fetchProjects } from 'store/projects/actions';
import Project from 'components/Lists/Project';
import styles from './Projects.scss';

const s = classNames.bind(styles);

class Projects extends Component {
  componentWillMount() {
    const { projects } = this.props;

    if (!projects.projectsFulfilled) {
      this.props.fetchProjects();
    }
  }

  getMarkup() {
    const { projects } = this.props;

    if (projects.projectsFulfilled && projects.data.length > 0) {
      return (
        <ul className={s({ list: true })}>
          {projects.data.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </ul>
      );
    } else if (projects.projectsRejected) {
      return <p>Error!</p>;
    }
    return <p>Laddar data!</p>;
  }

  render() {
    const { projects } = this.props;

    if (projects.pageNotFound && !projects.projectsFetching) {
      return <Redirect to={NOT_FOUND_ROUTE.path} />;
    }

    return (
      <DocumentTitle title={'Projekt'}>
        <main className={s({ container: true })}>
          <h4>Alla projekt</h4>
          {this.getMarkup()}
        </main>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => {
    dispatch(fetchProjects({ isServer: false }));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
