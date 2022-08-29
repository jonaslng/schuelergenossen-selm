import Nav from "./_Navbar.jsx";
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import Footer from "./_footer.tsx";
import { MantineProvider } from "@mantine/core";


export default function Home() {
  const autoplay = useRef(Autoplay({ delay: 3500 }, (emblaRoot) => emblaRoot.parentElement));

  return (
    <div>
      <Nav active="Start" />
      <div className="w-full h-full flex flex-col">
        <h1 className="text-center m-5 text-gray-600">Schülergenossen Selm</h1>
        <Carousel
        mx="auto"
        withControls={false}
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        style={{marginTop: "20px"}}
        >
        <Carousel.Slide><img src="img1.jpeg" style={{height: "60vh"}}/></Carousel.Slide>
        <Carousel.Slide>2</Carousel.Slide>
        <Carousel.Slide>3</Carousel.Slide>
      </Carousel>
      <MantineProvider theme={{colorScheme: "dark"}}><Footer /></MantineProvider>
      </div>
    </div>
  )
}
