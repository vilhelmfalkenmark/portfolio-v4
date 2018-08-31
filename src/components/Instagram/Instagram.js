import React, { Component } from "react";
import { connect } from "react-redux";
import InstagramSkeleton from "components/Skeletons/InstagramSkeleton";
import WithStyles from "layout/WithStyles";

import { fetchInstagram } from "store/instagram/actions";
import { captionView, lowResolutionUrlView } from "utils/selectors/instagram";
import s from "./Instagram.css";

class Instagram extends Component {
  componentWillMount() {
    this.props.fetchInstagram();
  }
  render() {
    const {
      instagram: { data, fulfilled, fetching }
    } = this.props;
    return fulfilled && !fetching ? (
      <ul className={s.list}>
        {data.data.map((image, index) => (
          <li key={index} className={s.item}>
            <figure
              style={{
                backgroundImage: `url(${lowResolutionUrlView(image)})`
              }}
              className={s.backgroundImage}
            >
              <span className={s.imageCaption}>{captionView(image)}</span>
            </figure>
          </li>
        ))}
      </ul>
    ) : (
      <InstagramSkeleton />
    );
  }
}

const mapStateToProps = state => ({
  instagram: state.instagram
});

const mapDispatchToProps = dispatch => ({
  fetchInstagram: () => {
    dispatch(fetchInstagram());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithStyles(Instagram, s));
