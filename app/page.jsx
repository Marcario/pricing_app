"use client";
import PricingCard from "@/components/pricing_card/page";
import React, { useState } from "react";

function Pricing() {
  const [pricingPlan, setPricingPlan] = useState("monthly");

  const packages = [
    {
      name: "Pro",
      description:
        "Ideal for those who have already got their websites uprunning and are seeking assistance",
      price: " $2400",
      Features: [
        "3-5 days turn around",
        "Native Development",
        "Task Delivery one by one",
        "Dedicated dash board",
      ],
      isRecommended: false,
    },
    {
      name: "Pro Plus",
      description:
        "Ideal for those who have already got their websites uprunning and are seeking assistance",
      price: "$ 4200",
      Features: [
        "1-3 days turn around",
        "Monthly strategy call",
        "Commercial Lisence",
        "Native Development",
        "Tasks Delivered one by one",
      ],
      isRecommended: false,
    },
    {
      name: "Custom",
      description:
        "Ideal for those who have already got their websites uprunning and are seeking assistance",
      price: "Let's Talk",
      Features: [
        "3-5 days turn around",
        "Native Development",
        "Task Delivery one by one",
        "Dedicated dash board",
      ],
      isRecommended: true,
    },
  ];
  console.log(packages);

  function changePricingPlan(plan) {
    setPricingPlan(plan);
  }

  return (
    <div className="pricing">
      <div className="header">
        <h1>Choose Your Right Plan !</h1>
        <p>
          Select from best plans,ensuring a perfect match. Need more or less?{" "}
          <br />
          Customize your subscriptionfor a seamline fit
        </p>
        <div className="button-container">
          <button className="button">Monthly</button>
          <button className="button">Yearly</button>
        </div>
      </div>

      <div className="pricing-cards">
        {packages.map((item, i) => {
          return <PricingCard data={item} key={i} />;
        })}
      </div>
    </div>
  );
}

export default Pricing;
