import { useEffect } from "react";
import { useStore } from "../api/store";
import ConferenceItem from "@/components/ui/ConferenceItem";
import { useTheme } from "@/components/theme-provider";

const Conferences = () => {
  const allData = useStore((state) => state.allData);
  const setAllData = useStore((state) => state.setAllData);
  const { theme } = useTheme();
  console.log(theme);

  useEffect(() => {
    const fetchConferences = async () => {
      const response = await fetch(
        "https://api.sportsdata.io/v3/cfb/scores/json/LeagueHierarchy?key=e37489e3e22a40c2b378d203a948f806"
      );
      const data = await response.json();
      setAllData(data);
    };

    fetchConferences();
  }, []);

  return (
    <div>
      <div className=" grid grid-flow-row grid-cols-3 gap-6 p-6">
        {allData.map((conference) => {
          return (
            <ConferenceItem
              key={conference.ConferenceID}
              conference={conference}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Conferences;
