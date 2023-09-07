const withData = (maxSpeakersToShow) => {
  return (Component) => {
    const speakers = [
      { imageSrc: "speaker-1124", name: "Douglas Crockford" },
      { imageSrc: "speaker-1530", name: "Tamara Baker" },
      { imageSrc: "speaker-10803", name: "Eugene Chuvyrov" },
    ];
    return () => {
      const limitSpeakers = speakers.slice(0, maxSpeakersToShow);
      return <Component speakers={limitSpeakers}></Component>;
    };
  };
};

export default withData;
