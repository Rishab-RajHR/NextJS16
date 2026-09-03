'use client';
import Link from "next/link";
import styles from "./page.module.css";
import AddEmployees from "./components/AddEmployees";
import ShowEmployees from "./components/ShowEmployees";

export default function Home() {
  return (
     <>
        <AddEmployees />
        <ShowEmployees />
     </>
  );
}
