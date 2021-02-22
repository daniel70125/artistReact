import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './GoogleMap.scss';
 
export class MapContainer extends Component {
  constructor(props){
    super(props);
    
    this.state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    }
  }
    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const containerStyle = {
      position: 'relative',  
      height: '50vh'
    }
    const {lat, long} = this.props;
    console.log(this.props);
    return (
      <>
        <Map classname='gmap-1' gestureHandling={"cooperative"} containerStyle={containerStyle} google={this.props.google} zoom={14} onClick={this.onMapClicked} initialCenter={{ lat: 29.958890, lng: -90.101740 }} > 
          <Marker
          onClick={this.onMarkerClick}
          name={'Kenyatta International Convention Centre'}
          position={{lat: 29.958890, lng: -90.101740}} 
          />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
            <span>Hello 1</span>
          </div>
        </InfoWindow>
        </Map>
</>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCqPOkrUK2Jndzihmo-UXMS8XJvooWi16c')
})(MapContainer)