import React, { Component } from 'react'

class Item extends Component {
  state = {
    isOpen: false,
  }
  componentDidMount() {
    document.addEventListener('click', this.clickHandler, false)
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.clickHandler, false)
  }
  clickHandler = (e) => {
    const { title } = this.props
    if (title.localeCompare(e.srcElement.innerText) !== 0) {
      this.setState({ isOpen: false })
    }
  }
  onClick = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }))
  }
  render() {
    const { isOpen } = this.state
    const {
      title,
      children,
    } = this.props
    const classes = `item${(isOpen ? ' active' : '')}`
    return (
      <div className={classes}>
        <button className='title' onClick={this.onClick}>
          {title}
        </button>
        <div className='panel'>{children}</div>
      </div>
    )
  }
}

export default Item
