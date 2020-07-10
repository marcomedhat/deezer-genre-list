import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getGenre, resetGenre} from '../actions/genresAction';

import { List, Image, Button, Icon, Header, Segment } from 'semantic-ui-react';

const modalStyle = {
  position: "fixed",
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  backgroundColor: "rgba(0,0,0,.8)",
  color: "#fff",
  fontSize: "30px",
};

class Artists extends Component {

  componentDidMount() {
    this.props.resetGenre();
    const {id} = this.props.match.params;
    this.props.getGenre(id);
  }

  closeModal() {
    this.props.history.push('/');
    this.props.resetGenre();
  }

  render() {
    const {singleGenre} = this.props;
    const {name} = this.props.location.state;

    return (
      <div style={modalStyle} onClick={() => this.closeModal()} className="d-flex justify-content-center align-items-center">

        <div className="w-75 h-75 d-flex flex-column bg-white">
          <Segment clearing className="d-flex justify-content-end mb-0">
            <Header as='h2' floated='left' className="mr-auto my-auto align-self-center">
            { name } - Artists
            </Header>
            <Button animated size='large' onClick={() => this.closeModal()} className="mb-2  mr-0">
              <Button.Content visible>Close</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow left' />
              </Button.Content>
            </Button>
          </Segment>
          <List divided relaxed className='d-flex flex-column align-items-start w-100 overflow-auto mt-0 pt-3 pb-4'>
          {singleGenre.length > 0 && singleGenre.map(artist => (
            <List.Item key={artist.id} className="d-flex align-items-center w-100 pl-5">
              <Image avatar src={artist.picture_medium} />
              <List.Content>
                <List.Header key={artist.id}>{artist.name}</List.Header>
              </List.Content>
            </List.Item>
          ))}
          </List>
        </div>
      </div>  
    );
  }
}

Artists.propTypes = {
  singleGenre: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  singleGenre: state.genre
});

const mapDispatchToProps = (dispatch) => ({
  getGenre: (id) => dispatch(getGenre(id)),
  resetGenre: () => dispatch(resetGenre())
});

export default connect(mapStateToProps, mapDispatchToProps)(Artists);
