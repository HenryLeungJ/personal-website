import {
  CpuChipIcon,
  GlobeAmericasIcon,
  ChartBarSquareIcon,
  CircleStackIcon,
  WrenchIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

const features = [
  {
    name: "Languages.",
    description:
      "HTML, CSS, JavaScript, Typescript, Java, Python, R, SQL, Motoko",
    icon: GlobeAmericasIcon,
  },
  {
    name: "Software Engineering Technologies.",
    description:
      "Tailwind, Bootstrap, jQuery, Node.js, Express.js, Flask, React.js, TanStack Query, Next.js, Tkinter, Amazon Web Services",
    icon: CpuChipIcon,
  },
  {
    name: "Data Science Technologies.",
    description:
      "Beautiful Soup, Selenium, Pandas, NumPy, Matplotlib, Plotly, Seaborn, Scipy, Scikit-learn",
    icon: ChartBarSquareIcon,
  },
  {
    name: "Developer Tools & Databases.",
    description:
      "Git/Github, Visual Studio Code, PyCharm, Jupyter Notebook, RStudio, Figma, PostgreSQL, MongoDB, MySQL, DynamoDB, SQLite",
    icon: WrenchIcon,
  },
];

export default function Henry() {
  return (
    <div className="bg-white py-2 xl:py-8 h-[80%]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 grid place-content-center lg:place-content-start`">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-[2.5vh] xl:text-[1.8vh] text-indigo-600">
                Software Engineer
              </h2>
              <p className="mt-2 xl:mt-2 text-[5vh] xl:text-4xl font-bold tracking-tight text-gray-900">
                Henry Leung
              </p>
              <p className="mt-3 xl:mt-6 text-[2.5vh] xl:text-lg leading-8 text-gray-600">
                A <b>Software Engineer</b>.<br />
                Combined Major in <b>Business and Computer Science</b> at the{" "}
                <b>University of British Columbia</b>.<br />
              </p>
              <dl className="mt-3 xl:mt-10 max-w-xl space-y-3 lg:space-y-4 xl:space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="text-[2vh]">{feature.name}</span>
                    </dt>{" "}
                    <dd className="inline text-[2vh] xl:text-base">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="lg:pt-4 grid grid-cols-1 grid-rows-1 justify-items-center">
            <div>
              <Image
                src="/aws-certified-cloud-practitioner.png"
                height={110}
                width={110}
                alt="AWS Badge"
                className="absolute xl:mt-20 xl:mr-4 xl:top-1"
                style={{ width: "6%", height: "auto" }}
              />
              <img
                src="/myself.jpg"
                alt="Me"
                className="w-[50vh] max-w-lg rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
