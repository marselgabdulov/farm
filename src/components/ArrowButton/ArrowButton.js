import React from 'react'
import './ArrowButton.css'

class ArrowButton extends React.Component {
  scrollTo = element => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop - 100,
    })
  }
  render() {
    return (
      <svg
        className={this.props.name}
        onClick={() =>
          this.scrollTo(document.getElementById(this.props.scrollTo))
        }
      >
        <path className="a1" d="M0 0 L15 16 L30 0" />
        <path className="a2" d="M0 10 L15 26 L30 10" />
        <path className="a3" d="M0 20 L15 36 L30 20" />
      </svg>
    )
  }
}

export default ArrowButton
