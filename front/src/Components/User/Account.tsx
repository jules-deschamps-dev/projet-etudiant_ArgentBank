import React from "react";
import { ConvertNumberToUsd } from "../../Helpers/AppHelper";

interface Props {
  title: string;
  balance: number;
  description: string;
}

const AccountCard: React.FC<Props> = ({ title, balance, description }) => {
  const balanceUSD = ConvertNumberToUsd(balance);

  return (
    <section className="account">
    <div className="account-content-wrapper">
      <h3 className="account-title">{title}</h3>
      <p className="account-amount">{balanceUSD}</p>
      <p className="account-amount-description">{description}</p>
    </div>
    <div className="account-content-wrapper cta">
      <button className="transaction-button">View transactions</button>
    </div>
    </section>
  );
};

export default AccountCard;