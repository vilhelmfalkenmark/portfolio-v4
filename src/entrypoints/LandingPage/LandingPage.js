import React, { Component } from "react";
import { connect } from "react-redux";
import DocumentTitle from "react-document-title";
// import GoogleMaps from "components/GoogleMaps";
import Hero from "components/Hero";
import { fetchLandingPage } from "store/landingPage/actions";
import Scroll from "react-scroll";

import classNames from "classnames/bind";

import styles from "./LandingPage.css";

const s = classNames.bind(styles);

class LandingPage extends Component {
  componentWillMount() {
    this.props.fetchLandingPage();
  }

  scrollToContent() {
    const offset = window.innerWidth > 900 ? -112 : 0;
    Scroll.scroller.scrollTo("scroll-target", {
      duration: 300,
      delay: 0,
      smooth: true,
      offset
    });
  }

  render() {
    return (
      <DocumentTitle title={`Vilhelm Falkenmark`}>
        <main className={s({ container: true })}>
          <Hero
          // scrollToContent={this.scrollToContent.bind(this)}
          // infoFulfilled={info.fulfilled}
          />
          <section className={s({ infoContainer: true })} name="scroll-target">
            <p>Content</p>
          </section>
          <section className={s({ mapWrapper: true })}>
            {/* <GoogleMaps
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC2vvL4RqLyLTIwBZ0xiIHXdvEiz7h_PJA&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `600px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            /> */}
          </section>
        </main>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => ({
  landingPage: state.landingPage
});

const mapDispatchToProps = dispatch => ({
  fetchLandingPage: () => {
    dispatch(fetchLandingPage());
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
