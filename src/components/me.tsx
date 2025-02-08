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
      "Python, Java, SQL, JavaScript, TypeScript, C++, HTML/CSS, R, Motoko",
    icon: GlobeAmericasIcon,
  },
  {
    name: "Frameworks.",
    description:
      "React.js, Next.js, Node.js, Express.js, Flask, Bootstrap, Tailwind, Material-UI, jQuery",
    icon: CpuChipIcon,
  },
  {
    name: "Developer Tools.",
    description:
      "Git, Unix Shell, Figma, Amazon Web Services, VS Code, PyCharm, Jupyter, RStudio, PostgreSQL, MySQL, SQLite, MongoDB, DynamoDB",
    icon: ChartBarSquareIcon,
  },
  {
    name: "Libraries.",
    description:
      "Socket.IO, Pandas, NumPy, Matplotlib, SciPy, Seaborn, TanStack Query, Scikit-learn, Selenium, JUnit",
    icon: WrenchIcon,
  },
];

export default function Henry() {
  return (
    <div className="bg-white py-2 xl:py-8 h-[48rem] fade_in flex flex-col justify-center mb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 grid place-content-center lg:place-content-start`">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-[2.5vh] text-indigo-600">
                Software Engineer
              </h2>
              <p className="mt-2 xl:mt-2 text-[5vh] xl:text-4xl font-bold tracking-tight text-gray-900">
                Henry Leung
              </p>
              <p className="mt-3 xl:mt-6 text-[100%] leading-8 text-gray-600">
                Combined Major in <b>Computer Science and Business</b> student
                at the <b>University of British Columbia</b>.<br />
              </p>
              <dl className="mt-3 xl:mt-6 max-w-xl space-y-3 lg:space-y-4 xl:space-y-5 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        aria-hidden="true"
                      />
                      <span className="text-[100%]">{feature.name}</span>
                    </dt>{" "}
                    <dd className="inline text-[100%] xl:text-base">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="lg:pt-4 grid grid-cols-1 grid-rows-1 justify-items-center fade_in">
            <div>
              <Image
                src="/aws-certified-cloud-practitioner.png"
                height={110}
                width={110}
                alt="AWS Badge"
                className="absolute xl:mt-[8rem] xl:mr-4 xl:top-1"
                style={{ width: "7rem", height: "auto" }}
              />
              <img
                src="/myself.jpg"
                alt="Me"
                className="w-[30rem] md:h-[20rem] lg:h-[35rem] max-w-lg rounded-xl shadow-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
