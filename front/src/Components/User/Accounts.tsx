import React from "react";
import AccountCard from "./Account";

const Accounts: React.FC = () => {
  return (
    <>
      <AccountCard
        title="Argent Bank Checking (x8349)"
        balance={2082.79}
        description="Available Balance"
      />

      <AccountCard
        title="Argent Bank Savings (x6712)"
        balance={10928.42}
        description="Available Balance"
      />

      <AccountCard
        title="Argent Bank Credit Card (x8349)"
        balance={184.3}
        description="Current Balance"
      />
    </>
  );
};
export default Accounts;
