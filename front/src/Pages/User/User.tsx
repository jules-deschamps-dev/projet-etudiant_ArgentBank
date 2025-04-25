import React from "react";
import { Footer, Nav } from "../../Components/Shared";
import { Accounts, Header } from "../../Components/User/";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const User: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.identity);

  return (
    <>
      <Nav />

      <main className="main bg-dark">
        <Header user={user} />

        <h2 className="sr-only">Accounts</h2>

        <Accounts />
      </main>

      <Footer />
    </>
  );
};

export default User;
