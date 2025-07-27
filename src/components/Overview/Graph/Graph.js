"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { year: "1952/54", literacy: 0.7 },
  { year: "1961", literacy: 1.8 },
  { year: "1971", literacy: 3.9 },
  { year: "1981", literacy: 12.0 },
  { year: "1991", literacy: 25.0 },
  { year: "2001", literacy: 42.8 },
  { year: "2011", literacy: 57.4 },
  { year: "2021", literacy: 69.4 },
];

export default function LiteracyLineGraph() {
  const graphRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (graphRef.current) {
      observer.observe(graphRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={graphRef} className="w-[80%] aspect-[3/2] translate-x-[-10%]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={animate ? data : []}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis domain={[0, 100]} />
          <Tooltip content={CustomTooltip} />
          <Line
            type="monotone"
            dataKey="literacy"
            stroke="#ffa9d0"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <p className="text-center text-gray-600 mt-4">
        Female Literacy Rate Trend in Nepal
      </p>
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  const isVisible = active && payload && payload.length;
  return (
    <div
      className="custom-tooltip"
      style={{ visibility: isVisible ? "visible" : "hidden" }}
    >
      {isVisible && (
        <div className="bg-white p-3 rounded-2xl shadow-md text-lg">
          <p className="label">{`${label} : ${payload[0].value + "%"}`}</p>
        </div>
      )}
    </div>
  );
};
