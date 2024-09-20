import React from "react";

import { DevicePhoneMobileIcon } from "@heroicons/react/20/solid";

export default function chattingbusiness({
  carousel,
}: {
  carousel: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-center isolate overflow-hidden bg-white px-6 py-5 lg:overflow-visible lg:px-4 h-[80%]">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-0">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg pt-10">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Schedule Meetings With Ease
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                Chatting Business
              </h1>
              <p className="mt-3 text-lg mb-3 leading-8 text-gray-700">
                A full stack web application to create, schedule, and record
                business meetings.
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
                Chatting Business utilizes <strong>Stream Video SDK</strong> and{" "}
                <strong>Clerk Authentication</strong> to create a seamless
                online video-calling experience for industry professionals. The
                user interface is styled with{" "}
                <strong>ReactJS and Tailwind CSS</strong> with differing display
                sizes in mind. <strong>NextJs</strong> is used for routing as it
                provides easy-to-use server-side rendering to optimize loading
                times. Everything was created using <strong>Typescript</strong>{" "}
                for superior error handling.
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
                    TypeScript, ReactJS, Tailwind CSS, NextJS, Stream Video SDK,
                    Clerk Authentication
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
