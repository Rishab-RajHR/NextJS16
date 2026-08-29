'use client';
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
        <main className={styles.main}>
            <h2>Alex Pandian</h2>
            {/* <EventsFunctionsState /> */}
            <Link href='/mongo-add-emp'>Add Employee</Link> <br/> <br/>
            <Link href='/mongo-get-emp'>Get Employee</Link>
        </main>
    </div>
  );
}
