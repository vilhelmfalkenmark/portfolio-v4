import React, { Component } from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import classNames from "classnames/bind";
import { clientSideFetchExperiences } from "store/experiences/actions";
import styles from "./Experiences.css";

const s = classNames.bind(styles);

class Experiences extends Component {
  componentDidMount() {
    const { experiences } = this.props;

    if (!experiences.fulfilled) {
      this.props.clientSideFetchExperiences();
    }
  }

  getMarkup() {
    const { experiences } = this.props;
    console.log(experiences, " <-- this.props.experiences");

    if (experiences.fulfilled && experiences.data.length > 0) {
      return (
        <ul className={s({ list: true })}>
          {experiences.data.map((experience, index) => (
            <li key={index}>{experience.type}</li>
          ))}
        </ul>
      );
    } else if (experiences.fetching) {
      return <p>Laddar!</p>;
    }

    return <p>Error!</p>;
  }

  render() {
    return (
      <DocumentTitle title={"CV"}>
        <main className={s({ container: true })}>
          <h4>CV!</h4>
          {this.getMarkup()}
        </main>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => ({
  experiences: state.experiences
});

const mapDispatchToProps = dispatch => ({
  clientSideFetchExperiences: () => {
    dispatch(clientSideFetchExperiences());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Experiences);
