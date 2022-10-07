import React from "react";
import { useContext } from "react";
import { userContext } from "./App.js";

const Home = () => {
    const user = useContext(userContext);
    return(
        <>
        <h1>welcome = {user}</h1>

        </>
    )
}

export default Home;