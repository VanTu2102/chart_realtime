import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import {ColorModeContext, tokens, useMode} from "./theme";
import Calendar from "./scenes/calendar/calendar";

function App() {
  const [theme, colorMode] = useMode();
  const mockLineData = [
    {
      id: "japan",
      color: tokens("dark").greenAccent[500],
      data: [
        {
          x: 1,
          y: 101,
        },
        {
          x: "helicopter",
          y: 75,
        },
        {
          x: "boat",
          y: 36,
        },
        {
          x: "train",
          y: 216,
        },
        {
          x: "subway",
          y: 35,
        },
        {
          x: "bus",
          y: 236,
        },
        {
          x: "car",
          y: 88,
        },
        {
          x: "moto",
          y: 232,
        },
        {
          x: "bicycle",
          y: 281,
        },
        {
          x: "horse",
          y: 1,
        },
        {
          x: "skateboard",
          y: 35,
        },
        {
          x: "others",
          y: 14,
        },
      ],
    },
    // {
    //   id: "france",
    //   color: tokens("dark").blueAccent[300],
    //   data: [
    //     {
    //       x: "plane",
    //       y: 212,
    //     },
    //     {
    //       x: "helicopter",
    //       y: 190,
    //     },
    //     {
    //       x: "boat",
    //       y: 270,
    //     },
    //     {
    //       x: "train",
    //       y: 9,
    //     },
    //     {
    //       x: "subway",
    //       y: 75,
    //     },
    //     {
    //       x: "bus",
    //       y: 175,
    //     },
    //     {
    //       x: "car",
    //       y: 33,
    //     },
    //     {
    //       x: "moto",
    //       y: 189,
    //     },
    //     {
    //       x: "bicycle",
    //       y: 97,
    //     },
    //     {
    //       x: "horse",
    //       y: 87,
    //     },
    //     {
    //       x: "skateboard",
    //       y: 299,
    //     },
    //     {
    //       x: "others",
    //       y: 251,
    //     },
    //   ],
    // },
    // {
    //   id: "us",
    //   color: tokens("dark").redAccent[200],
    //   data: [
    //     {
    //       x: "plane",
    //       y: 191,
    //     },
    //     {
    //       x: "helicopter",
    //       y: 136,
    //     },
    //     {
    //       x: "boat",
    //       y: 91,
    //     },
    //     {
    //       x: "train",
    //       y: 190,
    //     },
    //     {
    //       x: "subway",
    //       y: 211,
    //     },
    //     {
    //       x: "bus",
    //       y: 152,
    //     },
    //     {
    //       x: "car",
    //       y: 189,
    //     },
    //     {
    //       x: "moto",
    //       y: 152,
    //     },
    //     {
    //       x: "bicycle",
    //       y: 8,
    //     },
    //     {
    //       x: "horse",
    //       y: 197,
    //     },
    //     {
    //       x: "skateboard",
    //       y: 107,
    //     },
    //     {
    //       x: "others",
    //       y: 170,
    //     },
    //   ],
    // },
  ];
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <Line data={mockLineData}/>
            {/*<Routes>*/}
            {/*  <Route path="/" element={<Dashboard />} />*/}
            {/*  <Route path="/team" element={<Team />} />*/}
            {/*  <Route path="/contacts" element={<Contacts />} />*/}
            {/*  <Route path="/invoices" element={<Invoices />} />*/}
            {/*  <Route path="/form" element={<Form />} />*/}
            {/*  <Route path="/bar" element={<Bar />} />*/}
            {/*  <Route path="/pie" element={<Pie />} />*/}
            {/*  <Route path="/line" element={<Line />} />*/}
            {/*  <Route path="/faq" element={<FAQ />} />*/}
            {/*  <Route path="/calendar" element={<Calendar />} />*/}
            {/*  <Route path="/geography" element={<Geography />} />*/}
            {/*</Routes>*/}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;