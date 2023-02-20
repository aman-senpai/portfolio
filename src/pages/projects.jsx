import { usePage } from "context/page";
import useSWR from "hooks/useSWR";
import Button from "components/Global/Button";
import Link from "next/link";
export default function Projects() {
  const { page } = usePage();

  return (
    <>
      <div className="max-w-3xl mx-auto">
        <div className="py-24">
          <h1 className="font-display text-5xl font-medium sm:text-7xl text-black dark:text-white">
            My{" "}
            <span className="relative whitespace-nowrap text-primary">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute -mt-1 ml-1 top-3/5 left-0 h-[0.45em] w-full fill-primary/20 rotate-180"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">Projects</span>
            </span>
          </h1>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between w-full h-full py-24 gap-24">
              <div>
                <h1 className="text-4xl font-bold">
                  {" "}
                  Facial-
                  <span className="relative whitespace-nowrap text-primary">
                    Recognition
                  </span>
                  -Identificatio
                </h1>
                <br />
                <p className="text-xl mt-1">
                  Created a resilient Discord bot for your servers. Used
                  Discord’s API for 100% moderation with a latency of 5ms.{" "}
                </p>
                <br />
                <p className="text-xl mt-1">
                  Implemented fun chat games for users and provided moderators
                  to use this bot for managing the channel’s activities
                  seamlessly.
                </p>
              </div>
              <div className="relative flex-shrink-0">
                <img
                  src="https://play-lh.googleusercontent.com/Ca4n6DqVCa5M09h3dxGNXNOMXRshdqtDVcgGMbntrY6kDliwTaWuarZxEJNScZYS7tU"
                  style={{ zIndex: 1 }}
                  className="relative shadow-xl z-1 w-full lg:w-64 h-full lg:h-64 rounded-full lg:rounded-lg"
                />

                <Link href="https://github.com/aman-senpai/Senpai-Bot">
                  <a>
                    <Button className="flex items-center ms-2 px-5 gap-2 w-full">
                      <i className="fab fa-github" />
                      Go to Github
                      <i className="fal fa-arrow-right -rotate-45 text-xs" />
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between w-full h-full py-24 gap-24">
              <div className="relative flex-shrink-0">
                <img
                  src="https://github.com/aman-senpai/ImprovedCalculatorApp/raw/master/Images/img2.png"
                  style={{ zIndex: 1 }}
                  className="relative shadow-xl z-1 w-full lg:w-64 h-full lg:h-64 rounded-full lg:rounded-lg"
                />
                <Link href="https://github.com/aman-senpai/ImprovedCalculatorApp">
                  <a>
                    <Button className="flex items-center ms-2 px-5 gap-2 w-full">
                      <i className="fab fa-github" />
                      Go to Github
                      <i className="fal fa-arrow-right -rotate-45 text-xs" />
                    </Button>
                  </a>
                </Link>
              </div>

              <div>
                <h1 className="text-4xl font-bold">
                  Calculator
                  <span className="relative whitespace-nowrap text-primary">
                    {" "}
                    clone{" "}
                  </span>{" "}
                  app{" "}
                </h1>
                <p className="text-xl mt-1">
                  A basic calculator embracing material design.
                </p>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between w-full h-full py-24 gap-24">
              <div>
                <h1 className="text-4xl font-bold">
                  Classic{" "}
                  <span className="relative whitespace-nowrap text-primary">
                    Snake
                  </span>
                  Game
                </h1>
                <p className="text-xl mt-1">
                  This game uses turtle module for GUI. Game scores are stored
                  in a data.txt file.{" "}
                </p>
              </div>

              <div className="relative flex-shrink-0">
                <img
                  src="https://github.com/aman-senpai/Classic-Snake-Game/raw/master/scr1.png"
                  style={{ zIndex: 1 }}
                  className="relative shadow-xl z-1 w-full lg:w-64 h-full lg:h-64 rounded-full lg:rounded-lg"
                />
                <Link href="https://github.com/aman-senpai/Classic-Snake-Game">
                  <a>
                    <Button className="flex items-center ms-2 px-5 gap-2 w-full">
                      <i className="fab fa-github" />
                      Go to Github
                      <i className="fal fa-arrow-right -rotate-45 text-xs" />
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <Link href="https://github.com/aman-senpai">
            <a>
              <Button className="flex items-center ms-2 px-5 gap-2">
                <i className="fab fa-github" />
                Go to Github
                <i className="fal fa-arrow-right -rotate-45 text-xs" />
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
