import { Check } from "lucide";
import React from "react";
import Link from "next/link";
import { CheckCheck, CheckCheckIcon, CheckCircle2 } from "lucide-react";

function PricingCard({ data }) {
  const { isRecommended } = data;
  return (
    <div className={"pricing-card"}>
      <div className="card_header">
        <div className="plan">
          <h2>{data.name}</h2>
          <small>{data.description}</small>
        </div>
        <div className="pricing">
          <h2>{data.price}</h2>
          <small>per month</small>
        </div>
      </div>
      <div className="features">
        {data.Features.map((item, i) => {
          return (
            <p key={i}>
              {" "}
              <CheckCircle2 />
              {item}
            </p>
          );
        })}
      </div>
      <div className="start">
        <Link className="get-started" href="#">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default PricingCard;
