import React from "react";
import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'
import { CompletedChellenges } from "../components/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import { ChallengeBox } from "../components/ChallengeBox";
import { Countdown } from "../components/Countdown";
import { Profile } from "../components/Profile";
import { CountdownProvider } from "../contexts/CountdownContext";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Inicio | move.it
        </title>
      </Head>
      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChellenges />
            <Countdown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  )
}
