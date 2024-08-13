import { TypographyH1 } from "@/components/ui/typography/TypographyH1";
import { TypographyP } from "@/components/ui/typography/TypographyP";

import RandomQuote from "@/components/RandomQuote";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-start items-center gap-7 h-full pt-12">
      <TypographyH1 text="NCAA CFB App" />
      <TypographyP text="Explore data about NCAA College Football here" />
      <RandomQuote />
    </div>
  );
};

export default HomePage;
