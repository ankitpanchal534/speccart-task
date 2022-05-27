import React from 'react'
import './Section4.css'
import slider from './Images/slider.JPG'
export default function Section4() {
  return (
    <div className='Section4'>

        <h1> Your eyes are splendid. Let people see them clearly.</h1>
        <p className='section4-para'>
        We know how frustrating glasses glare can be. Anti-reflective or anti-glare coating prevents glare on your lenses - letting almost
all light through. Not only do anti-reflective glasses help in computer use and driving at night, they also allow other people to
see you clearly. You don’t need to tilt your head at awkward angles while getting photographed, either! Since more light reaches
your eyes, you’ll also notice an improvement in your vision. And the best part? Anti-glare, anti-scratch, and anti-UV coatings are
all free of cost at Specscart!
        </p>
<div className='image-transform-area'>

  <img src={slider} alt="image-transform" className='slider-image' />

</div>

    </div>
  )
}
