import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getGenre, resetGenre} from '../actions/genresAction';

import { Button, Icon, Card, Image } from 'semantic-ui-react'

import './Genre.css';

class Genre extends Component {

  render() {
    const { id, name, picture_medium } = this.props.genre;

    return (
       
      <Card>
        <Image src={picture_medium} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <Button animated as={Link} to={{pathname: `/${id}`, state: {name: name}}} size='medium' fluid>
            <Button.Content visible>Show Artists</Button.Content>
            <Button.Content hidden>
              <Icon name='arrow right' />
            </Button.Content>
          </Button>
        </Card.Content>
      </Card>
    );
  }
}

Genre.propTypes = {
  genre: PropTypes.object.isRequired
};

const mapDispatchToProps = (dispatch) => ({
  getGenre: (id) => dispatch(getGenre(id)),
  resetGenre: (id) => dispatch(resetGenre())
});

export default connect(null, mapDispatchToProps)(Genre);
