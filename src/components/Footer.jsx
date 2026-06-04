import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <a className="brand" href="#home">
        Eliyani<span>.</span>
      </a>
      <p>Personal portfolio for campus projects, web development, and graphic design.</p>
      <small>Copyright {new Date().getFullYear()} Eliyani Dwi Astuti. All rights reserved.</small>
    </footer>
  )
}
