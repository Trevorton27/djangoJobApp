import Image from "next/image";
import styles from "./page.module.css";
import Layout from '../components/layout/Layout'
import Home from '../components/Home'

export default function Index() {
  return (
   <Layout>
    <Home />
   </Layout>
  );
}
