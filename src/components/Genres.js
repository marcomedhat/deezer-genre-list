import React, { Component } from 'react';
import Genre from './Genre';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getGenres} from '../actions/genresAction';

class Genres extends Component {
  componentDidMount() {
    this.props.getGenres();
  }

  render() {
    const { genres } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 my-3">
          <span className="text-danger">Genres</span> List
        </h1>
        <div className="d-inline-flex flex-wrap justify-content-around">
          {genres.map(gn => (
              <Genre key={gn.id} genre={gn} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

Genres.propTypes = {
  genres: PropTypes.array.isRequired,
  getGenres: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  genres: state.genres
});

const mapDispatchToProps = (dispatch) => ({
  getGenres: () => dispatch(getGenres())
});

export default connect(mapStateToProps, mapDispatchToProps)(Genres);
