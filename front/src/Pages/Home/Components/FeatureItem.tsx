import React from "react";

interface Props {
  icon: string;
  alt: string;
  title: string;
  text: string;
}

const FeatureItem: React.FC<Props> = ({ icon, alt, title, text }) => {
  return (
    <div className="feature-item">
      <img src={icon} alt={alt} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default FeatureItem;