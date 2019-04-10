import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
import { getPeople } from '../actions'
import Loader from "react-loader-spinner";


class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPeople()
  }

  render() {
    return (
      <div className="CharactersList_wrapper">
        {this.props.isFetching && (
          <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
        )}
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = state =>  ({
  characters: state.charsReducer.characters,
  isFetching: state.charsReducer.isFetching,
})

export default connect(
  mapStateToProps,
  {
    getPeople
  }
)(CharacterListView);
