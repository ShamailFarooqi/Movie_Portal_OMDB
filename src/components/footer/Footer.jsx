import React from "react";
import styles from "./footer.module.css"
import Image from "next/image";
export default function Footer(){
    return (
        <div className={styles.container}>
            ©️Shamail. All rights are reserved.
            <div className={styles.Images}>
                <Image src="/1.png" height={20} width={20} alt="meta"/>
                <Image  src="/2.png" height={20} width={20} alt="inst" />
                <Image  src="/3.png" height={20} width={20} alt="x"/>
                <Image  src="/4.png" height={20} width={20} alt="youtube"/>
            </div>

        </div>
    )
}