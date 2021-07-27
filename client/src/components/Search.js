import React from "react";
const axios = require('axios');

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {city: '', usState: '', restaurants: 0, hotels: false, landmarks: 0};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    switch(event.target.id) {
      case 'city':
        this.setState({city: event.target.value});
        break;
      case 'usState':
        this.setState({usState: event.target.value});
        break;
      case 'restaurants':
        this.setState({restaurants: event.target.value});
        break;
      case 'hotels':
        this.setState({hotels: event.target.value});
        console.log(this.state.hotels);
        break;
      case 'landmarks':
        this.setState({landmarks: event.target.value});
        break;
      default:
        break;
    }
  }

  handleSubmit(event) {
    console.log('There has been a submission. Data Below');
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className='searchbody'>
          <div className='searchcontent'>
            <h1 className='searchtitle'>Search City and State</h1>
  
            <div className='form'>
                <form onSubmit={this.handleSubmit}>
                  <input className='searchinput' type="City" placeholder="City" id="city" value={this.state.city} onChange={this.handleChange}></input>
                  <input className='searchinput' type="State" placeholder="State" id="usState" value={this.state.usState} onChange={this.handleChange}></input>  
  
  
                  <p className='choicesprompt'>Please select which of the following you would like you see in results.</p>
                  <div className='choices'>
                    {/* <label class="container">Crime
                      <input type="checkbox"></input>
                      <span class="custombox"></span>
                    </label> */}
                    <label class="container">Restaurants
                      <input type="checkbox" id="restaurants" value={this.state.restaurants} onChange={this.handleChange}></input>
                      <span class="custombox"></span>
                    </label>
                    <label class="container">Hotels
                      <input type="checkbox" id="hotels" value={this.state.hotels} onChange={this.handleChange}></input>
                      <span class="custombox"></span>
                    </label>
                    <label class="container">Landmarks
                      <input type="checkbox" id="landmarks" value={this.state.landmarks} onChange={this.handleChange}></input>
                      <span class="custombox"></span>
                    </label>
                  </div>
  
                  <button id="searchbutton" className='searchbutton' type="submit" value="Submit">Search</button>
  
                </form>
            </div>
          </div>
          <div className='footer'>
                
              </div>
      </div>
    );
  }
}

const getDetails= async()=> {;
  try{
      const resp = await axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json',
      {params:
          {location: '44.980553, -93.270035',
          radius: '30000',
          types: 'restaurant',
          key:'AIzaSyAexWk-s7fGhAtV1jikHnncG5syH41GJ1E'}})
      
      return resp}
  catch (err) {
      console.error(err);
  };
}

const getPhotos = async(reference) => {
  try{
      const photoResp = await axios.get('https://maps.googleapis.com/maps/api/place/photo',
      {
          params:
              {
                  key: 'AIzaSyAexWk-s7fGhAtV1jikHnncG5syH41GJ1E',
                  photoreference: reference,
                  maxheight: 1600,
                  maxwidth: 1600
              }
      })
      return photoResp;
  } catch (err) {
      console.error(err);
  };
}

const getLatLon = async(city, state) => {
  try{

  } catch (err) {
    console.error(err);
  }
}

// getDetails()
  // .then(function(response) {
  //     for (let i = 0; i < 1; i++)
  //     {
  //         console.log('Name: ' + response.data.results[i].name);
  //         console.log('Types: ' + response.data.results[i].types);
  //         console.log('Rating: ' + response.data.results[i].rating);
  //         console.log('Icon: ' + response.data.results[i].icon);
  //         // console.log(response.data.results[i].photos[0].photo_reference);
  //         console.log('_________________________________________________________');
  //         // console.log(response.data.results[i].photos[0]);

  //         getPhotos(response.data.results[i].photos[0].photo_reference)
  //         .then(function(response) {
  //             console.log(response.request.res.responseUrl);
  //         });

  //     }
  // });


export default Search;
