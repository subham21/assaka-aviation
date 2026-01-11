import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/flight-crew.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Cabin Crew Training",
    description:
      "This course is designed to train students on the skills required to become a cabin crew. The program encapsulates all the topics related to aviation hospitality that a cabin crew member is required to know",
    icon: <ChartIcon />,
  },
  {
    title: "Hospitality Management",
    description:
      "The hospitality and tourism sectors have made significant contributions to the economy in recent times, and are slated to generate even more revenue in the years ahead. ",
    icon: <WalletIcon />,
  },
  {
    title: "Ground Services",
    description:
      "Airport ground handling services is one of the key sectors within the aviation industry that is expected to witness spectacular growth in the coming years",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Student-Centric{" "}
            </span>
            Approach
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            We provide tailored training solutions that prioritize 
            individual growth, professional development, and industry readiness.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
