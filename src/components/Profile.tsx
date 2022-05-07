import Image from 'next/image';
import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <Image className={styles.myImg} src="https://avatars.githubusercontent.com/u/8497405?v=4" alt="Lucas Barque" width={100} height={100} />
      <div>
        <strong>Lucas Barque</strong>
        <p>
          <Image src="/icons/level.svg" alt="Level" width={14} height={16} />
          Level {level}</p>
      </div>
    </div>
  )
}