import React from "react";
import axios from "axios";

class MovieDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      guests: []
    };
  }

  componentWillMount() {
    axios
      .get("https://guarded-plateau-76604.herokuapp.com/api/guests")
      .then(({ data }) => {
        this.setState({
          guests: data.data
        });
      });
  }

  render() {
    const { guests } = this.state;
    console.log(guests);

    return (
      <div>
        <h1>VÄLKOMMEN TILL MER INFO OM FILM</h1>
        {guests.map(guest => (
          <li key={guest._id}>{guest.guests}</li>
        ))}
      </div>
    );
  }
}

export default MovieDetails;
