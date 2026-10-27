import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function LenisGsapSync() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const update = (time: number) => {
      lenis.raf(time * 1000);
    };

    const onScroll = () => {
      ScrollTrigger.update();
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);
    lenis.on("scroll", onScroll);

    const refresh = window.requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      window.cancelAnimationFrame(refresh);
      gsap.ticker.remove(update);
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);

  return null;
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        lerp: 0.09,
        smoothWheel: true,
        syncTouch: false,
        touchMultiplier: 1.4,
        wheelMultiplier: 1,
        stopInertiaOnNavigate: true,
      }}
    >
      <LenisGsapSync />
      {children}
    </ReactLenis>
  );
}
