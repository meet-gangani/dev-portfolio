import React from 'react'
import Typewriter from 'typewriter-effect'

function Type() {
  return (
      <Typewriter
          options={{
            strings: [
              'Javascript Developer',
              'MERN Stack Developer',
              'ReactJS Developer',
              'NodeJS Developer',
              'NextJS Developer'
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 70
          }}
      />
  )
}

export default Type
