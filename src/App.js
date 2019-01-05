import React, { Component } from 'react';
import './App.css';
import './Loading.css';

let defaultTextColor = "#fff";
let defaultStyle = {
  color: defaultTextColor
}
let fakeServerData = {
  user: {
    name: 'Eric',
    playlists: [
      {
        name: 'My Favorites',
        songs: [
          {name: 'Beat It', duration: 134},
          {name: 'Sicko Mode', duration: 500},
          {name: 'Mia Bad Bunny', duration: 523}
        ]
      },
      {
        name: 'Car',
        songs: [
          { name: 'Hello', duration: 124 },
          { name: 'Sicko Mode', duration: 590 },
          { name: 'Because', duration: 573 }
        ]
      },
      {
        name: 'Delete ME',
        songs: [
          { name: 'Micka Relax', duration: 434 },
          { name: 'Wake Up', duration: 600 },
          { name: 'Drake Forever', duration: 623 }
        ]
      },
      {
        name: 'A list',
        songs: [
          { name: 'Lose Yourself', duration: 194 },
          { name: '8 mile', duration: 800 },
          { name: 'Not Alike', duration: 823 }
        ]
      },
   
    ]
  }
};

class PlaylistCounter extends Component{
  render(){
    return(
      <div style={{...defaultStyle, width: '40%', display: 'inline-block'}}>
        <h2>{this.props.playlists.length} Playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, []);
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0);
    return (
      <div style={{ ...defaultStyle, width: '40%', display: 'inline-block' }}>
        <h2>{Math.round(totalDuration / 60)} Hours</h2>
      </div>
    );
  }
}

class Filter extends Component{
  render(){
    return(
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
      </div>
    );
  }
}

class Playlist extends Component{
  render(){
    return(
      <div style={{...defaultStyle, display: 'inline-block', width: "25%"}}>
        <img />
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  state = {
    serverData: {}
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({ serverData: fakeServerData });
    }, 3500);
  }

  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
        <div>
            <h1 style={{ ...defaultStyle, 'font-size': '54px' }}>
              {this.state.serverData.user.name}'s Playlists
            </h1>
            <PlaylistCounter playlists={this.state.serverData.user && this.state.serverData.user.playlists} />
            <HoursCounter playlists={this.state.serverData.user && this.state.serverData.user.playlists} />
            <Filter />
            <Playlist />
            <Playlist />
            <Playlist />
            <Playlist />
        </div> : <div className="loader">Loading...</div>
        }
      </div>
    );
  }
}

export default App;
