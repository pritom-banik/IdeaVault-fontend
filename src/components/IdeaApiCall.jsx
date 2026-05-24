"use client";
import React, { useEffect, useState } from "react";
import AllIdeas from "./AllIdeas";
import Loadingcard from "./Loadingcard";

const IdeaApiCall = () => {
  const [title, setSearchTitle] = useState("");
  const [showAllIdea, setShowAllIdea] = useState(true);
  const [categories, setSearchCategories] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIdeas = async () => {
      setLoading(true);

      let url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/ideas`;

      if (categories.length > 0) {
        url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/ideas/filter?categories=${categories.join("&categories=")}`;
      } else if (title) {
        url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/ideas/search?title=${title}`;
      }

      try {
        const res = await fetch(url);
        const result = await res.json();
        if (!res.ok) {
          setData([]);
        } else {
          setData(result);
        }
      } catch (err) {
        console.error(err);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchIdeas();
  }, [title, categories, showAllIdea]);

  if (isLoading) return <Loadingcard></Loadingcard>;

  useEffect(()=>{
    const allCategories=async()=>{
        let url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/ideas/categories`;

    }
  })

  return (
    <div>
      <AllIdeas
        data={data}
        setSearchTitle={setSearchTitle}
        setShowAllIdea={setShowAllIdea}
        setSearchCategories={setSearchCategories}
      ></AllIdeas>
    </div>
  );
};

export default IdeaApiCall;
