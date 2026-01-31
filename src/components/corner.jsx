import React, { Component } from 'react'
import GithubCorner from 'react-github-corner'
export default class corner extends Component {
  render() {
    return (
      <div className="github-corner-wrapper">
        <GithubCorner backgroundColor="#151513" octoColor="#fff" direction="right" href="https://github.com/ConanDW" />
      </div>
    )
  }
}
