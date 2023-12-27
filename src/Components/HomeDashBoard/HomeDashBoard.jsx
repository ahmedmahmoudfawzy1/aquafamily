import React from "react";


import "./HomeDashBoard.css";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill
} from "react-icons/bs";
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Link } from "react-router-dom";

export default function HomeDashBoard() {






const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
  return (
    <main className="maiin_container">
      <div className="maiin_titlle">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main_cards">
        <Link className="cards">
          <div className="cards__inner">
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className="cards_icon" />
          </div>
          <h1>300</h1>
        </Link>
        <Link className="cards">
          <div className="cards__inner">
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className="cards_icon" />
          </div>
          <h1>12</h1>
        </Link>
        <Link to="/customers" className="cards">
          <div className="cards__inner">
            <h3>CUSTOMER</h3>
            <BsPeopleFill className="cards_icon" />
          </div>
          <h1>12</h1>
        </Link>
        <Link className="cards">
          <div className="cards__inner">
            <h3>ALERTS</h3>
            <BsFillBellFill className="cards_icon" />
          </div>
          <h1>100</h1>
        </Link>
      </div>


      <div className="charts">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>


      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
          
      </div>
    </main>
  );
}
