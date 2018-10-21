import React, { Component } from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import classNames from "classnames/bind";
import { clientSideFetchProjects } from "store/projects/actions";
import Project from "components/Lists/Project";
import styles from "./Projects.css";

const s = classNames.bind(styles);

class Projects extends Component {
  componentWillMount() {
    const { projects } = this.props;

    if (!projects.projectsFulfilled) {
      this.props.clientSideFetchProjects();
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
    return (
      <DocumentTitle title={"Projekt"}>
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
  clientSideFetchProjects: () => {
    dispatch(clientSideFetchProjects());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
