import React from "react";
import styles from "./navbar.module.css"
import Link from "next/link";


const navLinks=[{
    id:0,
    title:"Home",
    path:"/"
},
{
    id:1,
    title:"Favourites",
    path:"/favourites"
},

{
    id:2,
    title:"Search",
    path:"/search"
}
]


export default function Navbar(){


    return(
        <div className={styles.container}>
            <div className={styles.logo}><Link href="/">IMovie</Link></div>
            <div className={styles.links}>
                {navLinks.map((link)=><Link key={link.id} href={link.path}>{link.title}</Link>)}

            </div>

        </div>
    )

}