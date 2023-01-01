import React from 'react'
import './App.css'

function Head(){
  return (
      <img src='./images/photo.webp'
      alt='photo' />
  )
}
function Main(){
  return (
      <div className='main'>
          <h1>Kautubh Bhargava</h1>
          <p>Full-stack Developer</p>
          <a href='#'>my site</a>
          <div>
              <a href='#' id='mail'><i class="fa-solid fa-envelope"></i> Mail</a>
              <a href='#' id='lin'><i class="fa-brands fa-linkedin"></i>  LinkedIn</a>
          </div>
          <h3>About</h3>
          <p>I am a fullstack developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
          <h3>Interests</h3>
          <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
      </div>
  )
}
function Footer(){
  return (
      <div className='icons'>
      <a href='#' target='_blank'>
      <i className="fa-brands fa-twitter fa-2xl"></i></a>
      <a href='#' target='_blank'>
      <i className="fa-brands fa-instagram fa-2xl"></i></a>
      <a href='#' target='_blank'>
      <i className="fa-brands fa-facebook fa-2xl"></i></a>
      <a href='#' target='_blank'>
      <i className="fa-brands fa-github fa-2xl"></i>
      </a>
      </div>
  )
}
export default function App(){
  return (
      <>
          <Head />
          <Main />
          <Footer />
      </>
  )
}
