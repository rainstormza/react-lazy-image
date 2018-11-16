import React, { Component } from 'react'
import img from './img.jpg'
import img3 from './img3.jpg'
import './App.css'
import styled from 'styled-components'
import ProgressiveImage from 'react-progressive-image'
import LazyImage from 'react-lazy-progressive-image'

const Image = styled.img`
  transition: all 0.25s ease;
  /* opacity: ${props => (props.loading ? 0.2 : 1)}; */
  filter: ${props => (props.loading ? 'blur(10px)' : 'none')};
`

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Test Image Placeholder</p>
        <ProgressiveImage delay={300} src={img} placeholder={img3}>
          {(src, loading) => (
            <img
              style={{ filter: loading ? 'blur(10px)' : 'none', transition: 'all .1s ease-in' }}
              width="1000"
              src={src}
              alt=""
            />
          )}
        </ProgressiveImage>
        <LazyImage placeholder={img3} src={img}>
          {(src, loading) => <Image alt="" width="1000" src={src} loading={loading} />}
        </LazyImage>
      </div>
    )
  }
}

export default App
