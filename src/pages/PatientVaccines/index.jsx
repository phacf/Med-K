import Card from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";

export default function PageVaccines() {
  const [card, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //     setLoading(true)
  //     axios.get('abc123').then(res => {
  //         setLoading(false)
  //         setCards(res.map(c => c.exemplo))
  //     })
  // }, [])

  const divStyle = {
    backgraoundColor: "white",
    display: "flex",
    flexWrap: "wrap",
  };

  const divStyle2 = {
    backgraoundColor: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "white",
    width: "85vw",
    color: "black",
    borderRadius: "10px",
    alignItems: "center",
    justifyItems: "center",
    alignContent: "center",
    textAlign: "center",
  };

  const h1Style = {
    fontSize: "5vw",
  };

  const divButton = {
    height: "6vh",
    width: "23vw",
    boxShadow: "4px 4px 16px 8px rgba(0, 0, 0, 0.25)",
    margin: "20px",
    borderRadius: "10px",
  };

  if (loading) return <h1 style={{ color: "black" }}>...Loading</h1>;

  return (
    <div style={divStyle2}>
      <h1 style={h1Style}>Vacinação</h1>
      <div style={divStyle}>
        {/* {ex.map((vaccine,local,date,index)=>{
           <Card vaccine={vaccine} local={local} date={date} key={index} />
         })} */}
        <Card vaccine="{vaccine}" local="{local}" date="{date" key="{index}" />
        <Card vaccine="{vaccine}" local="{local}" date="{date" key="{index}" />
        <Card vaccine="{vaccine}" local="{local}" date="{date" key="{index}" />
        <Card vaccine="{vaccine}" local="{local}" date="{date" key="{index}" />
        <Card vaccine="{vaccine}" local="{local}" date="{date" key="{index}" />
        <Card vaccine="{vaccine}" local="{local}" date="{date" key="{index}" />
        <Card vaccine="{vaccine}" local="{local}" date="{date" key="{index}" />
        <Card vaccine="{vaccine}" local="{local}" date="{date" key="{index}" />
        <Card vaccine="{vaccine}" local="{local}" date="{date" key="{index}" />
        <Card vaccine="{vaccine}" local="{local}" date="{date" key="{index}" />
        <Card vaccine="{vaccine}" local="{local}" date="{date" key="{index}" />
        <Card vaccine="{vaccine}" local="{local}" date="{date" key="{index}" />
        <Card vaccine="{vaccine}" local="{local}" date="{date" key="{index}" />
      </div>
      <div style={divButton}>Sair</div>
    </div>
  );
}
