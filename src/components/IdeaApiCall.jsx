"use client";
import React, { useEffect, useState } from "react";
import AllIdeas from "./AllIdeas";
import Loadingcard from "./Loadingcard";

const IdeaApiCall = () => {
  const [title, setSearchTitle] = useState("");
  const [showAllIdea, setShowAllIdea] = useState(true);
  const [searchcategories, setSearchCategories] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [allCategories,setAllCategories]=useState([])

  useEffect(() => {
    const fetchIdeas = async () => {
      setLoading(true);

      let url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/ideas`;

      if (searchcategories.length > 0) {
        url = `${process.env.NEXT_PUBLIC_API_ENDPOINT}/ideas/filter?category=${searchcategories.join("&category=")}`;
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
  }, [title, searchcategories, showAllIdea]);

  

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/ideas/categories`,
        );

        if (!res.ok) {
          setAllCategories([]);
          return;
        }

        const data = await res.json();

        setAllCategories(data);
      } catch (err) {
        console.error(err);
        setAllCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <AllIdeas
        data={data}
        setSearchTitle={setSearchTitle}
        setShowAllIdea={setShowAllIdea}
        setSearchCategories={setSearchCategories}
        allCategories={allCategories}
        searchcategories={searchcategories}
        isLoading={isLoading}
      ></AllIdeas>
    </div>
  );
};

export default IdeaApiCall;
