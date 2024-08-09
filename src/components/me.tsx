import {
  CpuChipIcon,
  GlobeAmericasIcon,
  ChartBarSquareIcon,
  CircleStackIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

const features = [
  {
    name: "Languages.",
    description: "HTML, CSS, JavaScript, Typescript, Python, R, SQL, Motoko",
    icon: GlobeAmericasIcon,
  },
  {
    name: "Software Engineering Technologies.",
    description:
      "Figma, Tailwind, Bootstrap, jQuery, Node, Express, Flask, React, TanStack Query, Next, Tkinter, Amazon Web Services (AWS), Visual Studio Code, PyCharm",
    icon: CpuChipIcon,
  },
  {
    name: "Data Science Technologies.",
    description:
      "Beautiful Soup, Selenium, Pandas, NumPy, Matplotlib, Plotly, Seaborn, Scipy, Scikit-learn, Jupyter Notebook, Git/Github, RStudio",
    icon: ChartBarSquareIcon,
  },
  {
    name: "Databases & Others.",
    description: "PostgreSQL, MongoDB, DynamoDB, SQLite, Git/Github",
    icon: CircleStackIcon,
  },
];

export default function Henry() {
  return (
    <div className="bg-white py-4 sm:py-8 h-full lg:overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 grid place-content-center lg:place-content-start">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Software Engineer & Data Scientist
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Henry Leung
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                A <b>Software Engineer</b> and <b>Data Scientist</b>.<br />
                Combined Major in <b>Business and Computer Science</b> at the{" "}
                <b>University of British Columbia</b>.<br />
                Always open to new experiences and learning opportunities.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="lg:pt-4 grid grid-cols-1 grid-rows-1 place-content-center">
            <Image
              src="/aws-certified-cloud-practitioner.png"
              height={110}
              width={110}
              alt="AWS Badge"
              className="absolute xl:mt-20 xl:mr-4 xl:top-1"
            />
            <img
              src="/myself.jpg"
              alt="Me"
              className="w-[48rem] max-w-lg rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 h-5/6 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
