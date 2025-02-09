import React from "react";

import { DevicePhoneMobileIcon } from "@heroicons/react/20/solid";

export default function chattingbusiness({
  carousel,
}: {
  carousel: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-center isolate bg-white px-6 py-5 lg:px-4 h-[50rem]">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-0 h-[100%]">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 content-center h-[140%] mb-3">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                View Live Cryptocurrency Statistics
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                Crypto Viewer
              </h1>
              <p className="mt-3 text-lg leading-8 text-gray-700">
                A full stack web application to view live cryptocurrency
                statistics.
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
                Crypto Viewer&apos;s beautiful frontend is made with{" "}
                <strong>EJS, CSS, Bootstrap CSS, and vanilla JavaScript</strong>
                . The large dataset is queried from Coin Market Cap&apos;s API
                from the server. The clientside is then sent specific data
                snippets using <strong>RESTful APIs</strong> on the serverside
                created with <strong>NodeJS and ExpressJs</strong>.
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
                    EJS, CSS, Bootstrap CSS, JavaScript, NodeJS, ExpressJs,
                    RESTful APIs
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
