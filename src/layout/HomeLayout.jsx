import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LatesNews from "../Components/LatesNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/homeLayout/LeftAside";
import RightAside from "../Components/homeLayout/RightAside";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
          <LatesNews></LatesNews>
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-3  grid grid-cols-12 ">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
        <section className="right_nav"></section>
      </main>
    </div>
  );
};

export default HomeLayout;
