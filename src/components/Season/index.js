import React from 'react'
import Display from './Display';
import Spinner from '../Spinner';

class SeasonApp extends React.Component {
  state = { latitude: null, errorMessage: null }

  componentDidMount() {
    this.handleCurrentPosition()
  }

  handleCurrentPosition() {
    return window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ latitude: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    )
  }

  renderErrorMessage() {
    const { errorMessage } = this.state
    return <span className="ui pointing red basic label">{errorMessage}</span>
  }

  renderContent () {
    const { latitude, errorMessage } = this.state
    if (latitude && !errorMessage) return <Display latitude={latitude} />
    if (!latitude && errorMessage) return this.renderErrorMessage()
    return <Spinner message='Please, accept the location request.' />
  }

  render() {
    return <div className={'border red'}>{this.renderContent()}</div>
  }
}

export default SeasonApp
