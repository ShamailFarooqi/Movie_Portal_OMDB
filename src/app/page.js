import React from "react"
import styles from "./page.module.css"
import Link from "next/link";
import videoData from "../../public/video/video.mp4"
export default function Home() {
  return  (
      <main className={styles.main}>
          <div className={styles.contents}>
              <h1>welcome to our movie portal</h1>
              <div className={styles.buttons}>
                  <Link href="/search">Lets get Started</Link>
              </div>
          </div>
          <video
              src="https://ia600300.us.archive.org/17/items/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
              autoPlay
              muted
              loop
              className={styles.video}
          />
      </main>
  );

  
}
