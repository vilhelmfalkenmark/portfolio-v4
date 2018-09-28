import React, { Component } from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import classNames from "classnames/bind";
import { fetchProjects } from "store/projects/actions";
import Project from "components/Lists/Project";
import styles from "./Projects.css";

const s = classNames.bind(styles);

class Projects extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    const { projects } = this.props;

    return (
      <DocumentTitle title={"Projekt"}>
        <main className={s({ container: true })}>
          <h4>Projekt!</h4>
          {projects.fulfilled && (
            <ul className={s({ list: true })}>
              {projects.data.map((project, index) => (
                <Project key={index} project={project} />
              ))}
            </ul>
          )}
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
    dispatch(fetchProjects());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Projects);
