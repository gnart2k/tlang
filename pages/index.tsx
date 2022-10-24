import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import QuizSet from "../components/QuizSet";
import FlashCard from "./flashcard/[fid]";
import SubjectList from "../components/SubjectList";

const Home: NextPage = (props) => {
  return (
    <div className="flex justify-between w-full mt-10">
      <QuizSet />
      <SubjectList />
    </div>
  );
};

export default Home;
