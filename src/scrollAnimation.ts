export const scrollAnimation = (restStep: number, destination: number) => {
    const delta = (destination - window.pageYOffset) / restStep;
    window.scrollBy(0, delta);
    const nextRestStep = restStep - 1;
    if (!nextRestStep) return;
    window.requestAnimationFrame(() =>
      scrollAnimation(nextRestStep, destination)
    );
  };