"use client";

import React, { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import IdeaEditCard from "@/components/IdeaEditCard";
import Loadingcard from "@/components/Loadingcard";

const MyIdeas = () => {
  const { data: session, isPending } = authClient.useSession();

  const [ideas, setIdeas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showblank, setshowblank]=useState(false);

  useEffect(() => {
    if (!session?.user?.id) return;

    const fetchIdeas = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/ideas/user/${session.user.id}`,
        );
        if(res.status==404||res.status==500){
          setshowblank(true)
        }

        const data = await res.json();
        console.log(data);

        setIdeas(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchIdeas();
  }, [session]);


  return (
    <div className="max-w-6xl mx-auto flex flex-col justify-around items-center">
      <div className="text-center max-w-3xl mt-5">
        {" "}
        <div className="inline-block bg-black text-white px-5 py-2 text-sm font-bold border-2 border-black shadow-[4px_4px_0px_#ff66a3] rotate-[-2deg]">
          {" "}
          Ultimate Treasure Chest{" "}
        </div>{" "}
        <h1 className="text-2xl md:text-4xl font-black text-black dark:text-white mt-2">
          {" "}
          Unlocking shared brilliance{" "}
        </h1>{" "}
      </div>{" "}
      <div className="w-full h-px bg-black dark:bg-gray-300 my-4"></div>

{ showblank?(<div>Nothing to show</div>):(
          loading ?(<Loadingcard></Loadingcard>):
        (<div className="max-w-6xl mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5 justify-items-center mx-1">
          {ideas.map((idea) => (
            <IdeaEditCard idea={idea} key={idea._id}></IdeaEditCard>
          ))}
        </div>
      </div> ))
      }
    </div>
  );
};

export default MyIdeas;
