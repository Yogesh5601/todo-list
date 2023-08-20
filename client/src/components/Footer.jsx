import React from 'react'
const t = new Date()
const H = t.getHours()
const M =t.getMinutes()
const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <>
      <footer>
        Copyright © {currentYear}   {H}:{M}
      </footer>
    </>
  );
}

export default Footer