import styles from './App.module.css'

import { SocialNetworks } from "./components/socialNetworks/socialNetworks"

function App() {
    return (
    <div className={styles.container}>
      
      <h1 className={styles.challengeTitle}>Desafio CSS</h1>
      
      <div>
        <h2 className={styles.numberChallengeTitle}>Desafio 1 - Social Media Icons</h2>
        <SocialNetworks />
      </div>

    </div>
  )
}

export default App
