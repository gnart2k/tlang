import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import QuizSet from "../components/QuizSet";
import FlashCard from "./flashcard/[fid]";

const Home: NextPage = () => {
  return (
    <div>
      <QuizSet />
    </div>
  );
};

export default Home;
