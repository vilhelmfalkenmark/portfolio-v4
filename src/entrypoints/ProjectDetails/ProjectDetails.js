import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import classNames from 'classnames/bind';
import { Redirect } from 'react-router-dom';
import { NOT_FOUND_ROUTE } from 'router/routes';
import ParallaxHero from 'components/ParallaxHero';
import { pluckImageUrl } from 'utils/selectors/projects';
import { pluckSlug } from 'utils/network/url';
import {
  fetchProjectDetails,
  projectDetailsFromStore
} from 'store/projects/actions';
import styles from './ProjectDetails.css';

const s = classNames.bind(styles);

class ProjectDetails extends Component {
  constructor(props) {
    super(props);
    this.pageSlug = pluckSlug(props.location.pathname);
  }

  fetchContent() {}

  componentDidMount() {
    const {
      projects,
      projectDetailsFromStore,
      fetchProjectDetails
    } = this.props;
    /**
     * Check if projects already have been fetched
     */
    if (projects.data.length > 0 && projects.projectsFulfilled) {
      let i = 0;
      while (i < projects.data.length) {
        if (projects.data[i].slug === this.pageSlug) {
          return projectDetailsFromStore(projects.data[i]);
        }
        i++;
      }
      /**
       * Otherwise fetch it
       */
    } else if (!projects.projectDetailsFulfilled) {
      return fetchProjectDetails(this.pageSlug);
    }
  }

  getMarkup() {
    const {
      projects,
      projects: { detailData }
    } = this.props;

    if (projects.projectDetailsFulfilled && detailData) {
      return [
        <ParallaxHero
          imageUrl={pluckImageUrl(detailData.image)}
          title={'_STATIC_'}
          key={1}
        />,
        <section key={2} className={s({ contentSection: true })}>
          <article className={s({ content: true })}>
            <p>{detailData.content}</p>
            <p>{detailData.content}</p>
            <p>{detailData.content}</p>
            <p>{detailData.content}</p>
            <p>{detailData.content}</p>
            <p>{detailData.content}</p>
            <p>{detailData.content}</p>
          </article>
        </section>
      ];
    } else if (projects.projectDetailsRejected) {
      return <p>Error!</p>;
    }
    return <p>Laddar data!</p>;
  }

  render() {
    const { projects } = this.props;

    if (projects.pageNotFound && !projects.projectDetailsFetching) {
      return <Redirect to={NOT_FOUND_ROUTE.path} />;
    }

    return (
      <DocumentTitle title={'Projekt'}>
        <main className={s({ container: true })}>{this.getMarkup()}</main>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

const mapDispatchToProps = dispatch => ({
  fetchProjectDetails: slug => {
    dispatch(fetchProjectDetails({ slug, isServer: false }));
  },
  projectDetailsFromStore: project => {
    dispatch(projectDetailsFromStore(project));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectDetails);
