import Image from "next/image";

// lib
import { markdownify } from "@/lib/helper/convert";
import { useLocation } from "@/context/location.context";

type Props = {
  service: {
    data: {
      title: string;
      short_description: string;
      image: string;
    };
  };
};

const ServiceCard6 = ({ service }: Props) => {
  const { title, short_description, image } = service.data;
  const { country } = useLocation();

  const getDescription = () => {
    if (title === "Simple Tax Filing") {
      return country === "ZA" 
        ? "Connect with SARS and stay tax compliant."
        : "Connect with HMRC and stay tax compliant.";
    }
    return short_description;
  };

  return (
    <div className="px-[50px]">
      {image && (
        <div>
          <Image width={65} height={65} src={image} alt="feature icon" />
        </div>
      )}
      <div className="mt-[38px]">
        <h3
          className="text-[20px] lg:text-[24px] leading-tight"
          dangerouslySetInnerHTML={markdownify(title)}
        />
        <p className="mt-[19px]">{getDescription()}</p>
      </div>
    </div>
  );
};

export default ServiceCard6;
