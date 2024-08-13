import { useCallback, useEffect, useRef, useState } from "react";
import { useStore } from "@/api/store";
import { TypographyP } from "./ui/typography/TypographyP";
import { Button } from "./ui/button";
import { Quote } from "@/types/types";
import { useTheme } from "./theme-provider";

const RandomQuote = () => {
  const getRandomQuote = useStore((state) => state.getRandomQuote);
  const [randomQuote, setRandomQuote] = useState<Quote>(getRandomQuote());
  const [isFading, setIsFading] = useState(false);
  const timerId = useRef<number | null>(null);

  const startInterval = () => {
    timerId.current = window.setInterval(() => {
      fetchRandomQuote();
    }, 10000);
  };

  const fetchRandomQuote = useCallback(() => {
    // Trigger fade-out animation
    setIsFading(true);

    // Delay the quote update until after the fade-out animation
    setTimeout(() => {
      const rndmQuote = getRandomQuote();
      setRandomQuote(rndmQuote);

      // Trigger fade-in animation
      setIsFading(false);

      if (timerId.current) {
        clearInterval(timerId.current);
      }
      startInterval();
    }, 500); // Delay matches the duration of fade-out animation
  }, [getRandomQuote]);

  useEffect(() => {
    startInterval();

    return () => {
      if (timerId.current) {
        clearInterval(timerId.current);
      }
    };
  }, []);

  return (
    <div className="w-1/2 flex flex-col justify-center items-end border-2 rounded-md p-4 m-6">
      <div
        className={`w-full transition-opacity duration-500 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        <TypographyP
          text={`"${randomQuote.text}"`}
          className="text-lg italic"
        />
        <TypographyP
          text={`- ${randomQuote.author}`}
          className="text-md font-semibold"
        />
      </div>
      <Button
        onClick={fetchRandomQuote}
        className="w-1/2 md:w-1/4 self-center text-sm md:text-lg"
        aria-label="Fetch a new random quote"
      >
        Random Quote
      </Button>
    </div>
  );
};

export default RandomQuote;
