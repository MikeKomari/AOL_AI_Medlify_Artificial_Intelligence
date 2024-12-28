import React from "react";

type TeamMember = {
  name: string;
  position: string;
  year: string;
  major: string;
  insta: string;
  profile: string;
};

const memberList: TeamMember[] = [
  {
    name: "Christopher Matthew Cahyono",
    position: "Research & Laporan",
    year: "B27",
    major: "Computer Science",
    insta: "matthew.cahyono",
    profile: "/assets/mc.png",
  },
  {
    name: "Michael Kimeison",
    position: "Frontend & Overall Support",
    year: "B27",
    major: "Computer Science",
    insta: "michonirique",
    profile: "/assets/mike.png",
  },
  {
    name: "Williams Sandjaya",
    position: "Backend & AI Training",
    year: "B27",
    major: "Computer Science",
    insta: "nocturalnerdss",
    profile: "/assets/williams.png",
  },
];

const Team = () => {
  return (
    <div className="container">
      <h1 className="mt-[10rem] mb-10 font-bold text-xl text-center">
        TEAM MEMBER
      </h1>
      <div className="grid grid-cols-3 lg:grid-cols-1 gap-5 mb-10">
        {memberList.map((member) => (
          <TeamComponent key={member.name} member={member} />
        ))}
      </div>
    </div>
  );
};

const TeamComponent = ({ member }: { member: TeamMember }) => {
  return (
    <div className="col-span-1 flex h-full min-w-full flex-col items-center rounded-3xl bg-custom-white xl:min-h-fit xl:max-w-[150px]">
      <div className="relative h-[150px] w-[300px] overflow-hidden rounded-xl md:h-[25px] md:w-[45px] xl:h-[75px] xl:w-[150px] 2xl:max-w-fit">
        <img
          src="/assets/filler.png"
          className="object-cover"
          style={{ transform: "scale(1.2)" }}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center p-4 xl:p-2">
        <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-dark-purple xl:h-[50px] xl:w-[50px]">
          <img
            src={member.profile}
            // src="/staffProfile/advisor/profile.png"
            className="h-[80px] w-[80px] rounded-full xl:h-[40px] xl:w-[40px]"
            alt=""
          />
        </div>

        <div className="flex items-center justify-center">
          <h1 className="mt-4 h-[60px] max-w-[200px] justify-center text-center text-[20px] font-bold text-custom-black xl:h-[30px] xl:max-w-[130px] xl:text-[14px]">
            {member.name}
          </h1>
        </div>

        {/* LineBreak */}
        <div className="mb-2 mt-4 h-1 w-full max-w-[300px] rounded-full bg-gray-200 md:mt-4 xl:max-w-[150px]"></div>

        <h1 className="mt-4 text-center text-[16px] font-bold text-dark-purple xl:text-[16px]">
          {member.position}
        </h1>

        <h1 className="mt-4 h-[50px] max-w-[200px] text-center text-[14px] font-bold text-gray-700 md:text-[11px]">
          {member.major}
        </h1>

        <h1 className="mt-4 text-[14px] font-bold text-gray-500 hover:text-[#651FFF] md:text-[11px]">
          {member.insta && (
            <>
              <a
                href={`https://instagram.com/${member.insta}`}
                className="flex cursor-pointer items-center justify-center gap-1"
              >
                @{member.insta}
              </a>
            </>
          )}
        </h1>
      </div>
    </div>
  );
};

export default Team;
