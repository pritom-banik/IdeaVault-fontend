"use client";

import React from "react";
import {
  ResponsiveContainer,
  ComposedChart,
  Area,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Chart = () => {
  const growthData = [
    {
      year: "2016",
      users: 120,
      ideas: 45,
      comments: 180,
      collaborations: 8,
      activeUsers: 60,
    },
    {
      year: "2017",
      users: 380,
      ideas: 130,
      comments: 620,
      collaborations: 22,
      activeUsers: 190,
    },
    {
      year: "2018",
      users: 850,
      ideas: 320,
      comments: 1600,
      collaborations: 58,
      activeUsers: 480,
    },
    {
      year: "2019",
      users: 1700,
      ideas: 720,
      comments: 3900,
      collaborations: 145,
      activeUsers: 980,
    },
    {
      year: "2020",
      users: 3400,
      ideas: 1550,
      comments: 8100,
      collaborations: 290,
      activeUsers: 2050,
    },
    {
      year: "2021",
      users: 5900,
      ideas: 2800,
      comments: 15600,
      collaborations: 510,
      activeUsers: 3650,
    },
    {
      year: "2022",
      users: 9100,
      ideas: 4300,
      comments: 25400,
      collaborations: 860,
      activeUsers: 5700,
    },
    {
      year: "2023",
      users: 13800,
      ideas: 6500,
      comments: 38900,
      collaborations: 1340,
      activeUsers: 8700,
    },
    {
      year: "2024",
      users: 19700,
      ideas: 9300,
      comments: 56100,
      collaborations: 2010,
      activeUsers: 12400,
    },
    {
      year: "2025",
      users: 27800,
      ideas: 12800,
      comments: 78400,
      collaborations: 3120,
      activeUsers: 18100,
    },
  ];

  return (
    <section className="relative my-24 px-4">
      <div className="absolute top-10 left-10 h-40 w-40 rounded-full bg-pink-300/30 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-cyan-300/30 blur-3xl"></div>

      <div className="relative z-10 flex flex-col items-center gap-10">
        <div className="text-center max-w-3xl space-y-4">
          <div className="inline-block bg-black text-white px-5 py-2 text-sm font-bold border-2 border-black shadow-[4px_4px_0px_#ff66a3] rotate-[-2deg]">
            Growth Analytics
          </div>

          <h1 className="text-4xl md:text-5xl font-black text-black dark:text-white">
            Every Great Startup Begins With One Idea
          </h1>

          <p className="text-gray-700 text-base md:text-lg leading-7 dark:text-white">
            A decade of creativity, collaboration, and growth. From a small
            community of dreamers to a global ecosystem of innovators, IdeaVault
            continues to empower creators and accelerate innovation.
          </p>
        </div>

        {/* INFO + CHART WRAPPER */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {/* LEFT INFO CARD */}
          <div className="lg:col-span-1 bg-gradient-to-br from-[#fc0e6d]  to-[#f88ab6] border-4 border-black p-6 shadow-[8px_8px_0px_#000]">
            <h2 className="text-2xl font-black mb-4 text-black">
              A Decade of Innovation
            </h2>

            <p className=" font-semibold leading-6 text-black ">
              From idea sharing to global collaboration, our platform has
              evolved into a powerful ecosystem where creators build, connect,
              and scale their startups.
            </p>

            <div className="mt-6 space-y-2 text-normal font-bold">
              <div> Users: 27K+</div>
              <div> Ideas: 12K+</div>
              <div> Comments: 78K+</div>
            </div>
          </div>

          {/* CHART CARD */}
          <div className="lg:col-span-2 bg-white border-4 border-black shadow-[10px_10px_0px_#000] p-6">
            <h2 className="text-2xl font-black text-center mb-6 text-black">
              Platform Growth Analytics
            </h2>

            <div className="w-full h-[500px]">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={growthData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />

                  <XAxis dataKey="year" />

                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />

                  <Tooltip
                    contentStyle={{
                      border: "3px solid black",
                      borderRadius: "12px",
                    }}
                  />

                  <Legend />

                  <Area
                    yAxisId="left"
                    type="monotone"
                    dataKey="users"
                    fill="#ff66a3"
                    stroke="#ff2d7a"
                    fillOpacity={0.3}
                  />

                  <Bar
                    yAxisId="left"
                    dataKey="ideas"
                    fill="#ffd93d"
                    radius={[6, 6, 0, 0]}
                  />

                  <Line
                    yAxisId="right"
                    dataKey="comments"
                    stroke="#2563eb"
                    strokeWidth={3}
                  />

                  <Line
                    yAxisId="left"
                    dataKey="activeUsers"
                    stroke="#22c55e"
                    strokeWidth={3}
                  />

                  <Line
                    yAxisId="left"
                    dataKey="collaborations"
                    stroke="#7c3aed"
                    strokeWidth={3}
                  />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chart;
