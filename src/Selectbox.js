import React, { Component, PropTypes } from 'react'
import autobind from 'autobind-decorator'

class Selectbox extends Component {
  static propTypes = {
    fixedPosition: PropTypes.bool,
    className: PropTypes.string,
  }

  static defaultProps = {
    className: 'selectable-selectbox'
  }

  constructor() {
    super()

    this.state = {
      isBoxSelecting: false,
      left: 0,
      top: 0,
      boxWidth: 0,
      boxHeight: 0,
    }
  }

  @autobind
  getRef() {
    return this.refs.selectbox
  }

  render() {
    const boxStyle = {
      left: this.state.boxLeft,
      top: this.state.boxTop,
      width: this.state.boxWidth,
      height: this.state.boxHeight,
      zIndex: 9000,
      position: this.props.fixedPosition ? 'fixed' : 'absolute',
      cursor: 'default',
    }

    return (
      <div>
        {
          this.state.isBoxSelecting &&
          <div style={boxStyle} className={this.props.className} ref="selectbox"></div>
        }
      </div>
    )
  }
}

export default Selectbox
