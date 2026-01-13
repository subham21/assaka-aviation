// import { Button } from "./ui/button";
// import { buttonVariants } from "./ui/button";
// import { HeroCards } from "./HeroCards";
// import { GitHubLogoIcon } from "@radix-ui/react-icons";

// export const Hero = () => {
//   return (
//     <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
//       <div className="text-center lg:text-start space-y-6">
//         <main className="text-5xl md:text-6xl font-bold">
//           <h1 className="inline">
//             <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
//               Launch
//             </span>{" "}
//             your career
//           </h1>{" "}
//           in{" "}
//           <h2 className="inline">
//             <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
//               Aviation
//             </span>
//           </h2>
//         </main>

//         <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
//           Professional cabin crew training programs for aspiring aviation professionals.
//         </p>

//         <div className="space-y-4 md:space-y-0 md:space-x-4">
//           <Button className="w-full md:w-1/3">Get Started</Button>

//           <a
//             rel="noreferrer noopener"
//             href="https://assaka-aviation.vercel.app/"
//             target="_blank"
//             className={`w-full md:w-1/3 ${buttonVariants({
//               variant: "outline",
//             })}`}
//           >
//             Github Repository
//             <GitHubLogoIcon className="ml-2 w-5 h-5" />
//           </a>
//         </div>
//       </div>

//       {/* Hero cards sections */}
//       <div className="z-10">
//         <HeroCards />
//       </div>

//       {/* Shadow effect */}
//       <div className="shadow"></div>
//     </section>
//   );
// };

import { Button } from "./ui/button";
import { Input } from "@/components/ui/input"
import heroImage from "@/assets/cabin-crew.jpg"

export const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto h-full flex items-center px-6">
        <div className="max-w-2xl text-white">
          {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Become a member <br /> of the cabin crew
          </h1> */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
             <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
               Launch
             </span>{" "}
             your career
             {" "} in
           </h1>{" "}
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
             <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
               Aviation
             </span>
           </h2>
        </div>
      </div>

      {/* Bottom CTA Strip */}
      <div className="absolute bottom-0 left-0 w-full bg-[#0b2530] py-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white text-lg font-medium">
            Hurry up! New courses will start on February, 2026
          </p>

          <div className="flex items-center gap-3 w-full md:flex-row max-w-md">
            <Input
              type="email"
              placeholder="Your email"
              className="bg-white text-black max-w-xs"
            />
            <Button className="bg-red-600 hover:bg-red-700">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
