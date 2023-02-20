import { usePage } from "context/page";

export default function About() {
  const { page } = usePage();

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between w-full h-full py-24 gap-24">
          <div>
            <h1 className="text-4xl font-bold">
              Who Am{" "}
              <span className="relative whitespace-nowrap text-primary">I</span>
              ?
            </h1>
            <p className="text-xl mt-1">
            Hi, I'm Aman, a final year Computer Science Engineering student from India with strong communication and problem-solving skills, and leadership potential. I have expertise in programming languages, such as Python, Java, and Kotlin, SQL, and JavaScript, with experience in Android and web development. I'm always eager to improve and stay current with advancements in the field, and my versatility allows me to offer innovative solutions to problems. I'm a valuable asset to any team and always seeking new challenges to showcase my abilities. If given the opportunity, I would love to contribute my skills and collaborate on projects that make a positive impact. Let's connect and determine what we can achieve together.
            </p>
          </div>
          <div className="relative flex-shrink-0">
            <img
              src="https://media.licdn.com/dms/image/D4D03AQERT0IYGcEpbQ/profile-displayphoto-shrink_800_800/0/1675847456927?e=1682553600&v=beta&t=LD_qzIjU71XoHCDkGlrdKQij6vDvNEft2xfos8cByuI"
              style={{ zIndex: 1 }}
              className="relative shadow-xl z-1 w-full lg:w-64 h-full lg:h-64 rounded-full lg:rounded-lg"
            />
            <div className="-right-3 top-3 absolute w-full h-full top-0 right-0 border-4 rounded-full lg:rounded-lg border-primary bg-gradient-to-t from-primary" />
          </div>
        </div>
      </div>
    </>
  );
}
