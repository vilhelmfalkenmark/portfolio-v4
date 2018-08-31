import React, { Component } from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
import { fetchFaq } from "store/faq/actions";
// import FaqItem from "./FaqItem";
// import RibbonHeading from "components/RibbonHeading";
// import ErrorWall from "components/ErrorWall";
// import FaqSkeleton from "components/Skeletons/FaqSkeleton";
import WithStyles from "layout/WithStyles";

import s from "./Faq.css";

class Faq extends Component {
  componentWillMount() {
    const { faq } = this.props;
    if (faq.fulfilled === false) {
      this.props.fetchFaq();
    }
  }

  render() {
    return (
      <DocumentTitle title={"Vanliga frågor"}>
        <main className={s({ container: true })}>
          <h4>En route</h4>
        </main>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => ({
  faq: state.faq
});

const mapDispatchToProps = dispatch => ({
  fetchFaq: () => {
    dispatch(fetchFaq());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithStyles(Faq, s));
