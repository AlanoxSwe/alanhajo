import Head from 'next/head';
import React, { useRef } from 'react';
import Intro from '../components/Intro';
import Projects from '../components/Projects';

export default function Home() {
  const projects = React.createRef();

  const scroll = () => projects.current.scrollIntoView();
  
  return (
    <div className="container">
      <Head>
        <title>Alan Hajo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Intro scroll={scroll} />
      <Projects ref={projects} />
    </div>
  )
}
