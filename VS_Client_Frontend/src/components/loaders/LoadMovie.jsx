import React from 'react'
import Navigation from '../navigation/Navigation'
import './LoadMovieStylesheet.css'

export default function LoadMovie() {
  return (
    <div className="movieLoaderMain">
        <Navigation/>
        <div class="loaderMovie">
            <div class="circleMovie"></div>
            <div class="circleMovie"></div>
            <div class="circleMovie"></div>
            <div class="circleMovie"></div>
        </div>
    </div>
  )
}
