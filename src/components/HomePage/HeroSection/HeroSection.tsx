import { Button, Carousel, Col, Row } from "antd";
import Image from "next/image";
import slider1 from "../../../assests/images/slider1.jpg";
import slider2 from "../../../assests/images/slider2.jpg";
import slider3 from "../../../assests/images/slider3.jpg";

const HeroSection = () => {
  return (
    <div className="p-2 flex mb-12 ">
      <div className="w-1\2 lg:w-1/2 py-8 px-6">
        <div className="space-y-10">
          <h5 className="text-3xl font-semibold text-blue-600">We are creative</h5>
          <div className="text-5xl font-bold">
            <p>Best Computer Repair</p>
            <p>And <span className="text-blue-800">IT Solution</span></p>
            <p>Company</p>
          </div>
          <div className="flex gap-10">
            <Button type="primary">About +</Button>
            <Button type="primary">Our Service +</Button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div>
          <Carousel autoplay effect="fade">
            <div className="w-full p-4 h-96">
              <Image
                src={slider1}
                alt="Shoes"
                className="w-full h-full rounded-lg"
                width={600}
                height={600}
                layout="responsive"
              />
              </div>            
            <div className="w-full p-4 h-96">
              <Image
                src={slider2}
                alt="Shoes"
                className="w-full h-full rounded-lg"
                width={600}
                height={600}
                layout="responsive"
              />
              </div>            
            <div className="w-full p-4 h-96">
              <Image
                src={slider3}
                alt="Shoes"
                className="w-full h-full rounded-lg"
                width={600}
                height={600}
                layout="responsive"
              />
              </div>            
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
