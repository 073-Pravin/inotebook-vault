import React, { useContext ,useEffect } from 'react'
import noteContext from '../context.js/notes/noteContext'

export default function  About() {
  const a =useContext(noteContext)
  
  return (
    <div>
      This About page
    </div>
  )
}
