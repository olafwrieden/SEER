import React from "react";
import { FaHourglass } from "react-icons/fa";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

const data = [
  { value: 68, fill: "#ff4861" },
  { value: 32, fill: "#eeeeee" },
];

const ProgressChart = ({ pending }) => (
  <div className="box" style={{ marginBottom: "20px" }}>
    <h5 className="subtitle has-text-centered">Approval Queue</h5>
    <div style={{ position: "relative" }}>
      <ResponsiveContainer height={180}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cy={85}
            innerRadius={80}
            outerRadius={90}
          />
        </PieChart>
      </ResponsiveContainer>
      <div
        className="has-text-centered"
        style={{
          position: "absolute",
          width: "100%",
          top: `calc(50% - 55px)`,
          animation: `label 1.5s ease-in`,
        }}
      >
        <FaHourglass className="has-text-danger" />
        <p style={{ fontSize: "56px", lineHeight: "60px" }}>{pending}</p>
        <p style={{ marginTop: "5px" }}>Pending</p>
      </div>
    </div>
  </div>
);

export default ProgressChart;
