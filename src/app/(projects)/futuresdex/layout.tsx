import React from "react";

import { DevicePhoneMobileIcon } from "@heroicons/react/20/solid";

export default function chattingbusiness({
  carousel,
}: {
  carousel: React.ReactNode;
}) {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-14 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-0">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Visualize Data and Predict Trends
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Futures Dex
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700 mb-5">
                A one-stop cryptocurrency statistics visualization and optimized
                prediction platform
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          {carousel}
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Futures Dex has three features: Charts, Futures, and Regression.
                Futures Dex Charts and Futures Dex Regression requests{" "}
                <strong>graphical data</strong> from our{" "}
                <strong>RESTful Flask API</strong>. This graphical data is made
                by aggregating and manipulating data from CoinCompare&apos;s API
                with <strong>Pandas</strong>, then utilizing this data as input
                for <strong>Seaborn and Matplotlib</strong>. Futures Dex
                Regression also requires predictions which is generated using
                historical data as training and testing data for{" "}
                <strong>Scikit-Learn</strong> . Futures Dex Futures utilizes{" "}
                <strong>Recharts</strong> instead of our Flask Api to add
                interactability and animations while utilizing Binance&apos;s
                Developer API for relaiable, historical data.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <DevicePhoneMobileIcon
                    className="mt-1 h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Technologies.
                    </strong>{" "}
                    Typescript, ReactJS, NextJS, TanStack Query, Tailwind CSS,
                    Flask, Pandas, Seaborn, Matplotlib, Scikit-Learn
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
