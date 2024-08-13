import { Conference } from "@/types/types";
import { TypographyH1 } from "./typography/TypographyH1";
import { TypographyH3 } from "./typography/TypographyH3";
import { TypographyH4 } from "./typography/TypographyH4";
import { useTheme } from "../theme-provider";

type ConferenceItemProps = {
  conference: Conference;
};

const ConferenceItem = ({ conference }: ConferenceItemProps) => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col items-center">
      <TypographyH1 text={conference.Name} className="pb-6" />
      <div className="grid grid-cols-3 gap-6">
        {conference.Teams.map((team) => {
          return (
            <div
              key={team.Key}
              className={`flex flex-col justify-center items-center hover:cursor-pointer p-4 rounded-md ${
                theme === "dark" ? "hover:bg-gray-800" : "hover:bg-gray-200"
              }`}
            >
              <TypographyH3 text={team.School} />
              <TypographyH4 text={team.Name} />
              <img
                src={team.TeamLogoUrl}
                alt="Team Logo"
                className=" w-32 h-32 aspect-square"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConferenceItem;
