import Head from 'next/head';
import React, { useRef } from 'react';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import Skills from '../components/Skills';

export default function Home() {

  
  return (
    <div className="container">
      <Head>
        <title>Alan Hajo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro />
      <Skills />
      <Projects />
    </div>
  )
}
