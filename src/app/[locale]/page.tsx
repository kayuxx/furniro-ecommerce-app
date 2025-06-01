import Banner from "@/components/Banner";
import { getBackgroundImage } from "@/utils/markup";
import { getImageProps } from "next/image";

export default function Home() {
  const {
    props: { srcSet },
  } = getImageProps({
    alt: "Hero",
    width: 1280,
    height: 720,
    src: "/scandinavian-interior-mockup-wall-decal.png",
  });

  const backgroundImage = getBackgroundImage(srcSet);

  return (
    <div>
      <div
        className="min-h-screen w-full bg-cover bg-bottom"
        style={{ backgroundImage }}
      >
        <Banner alignRight={true} />
      </div>
    </div>
  );
}
