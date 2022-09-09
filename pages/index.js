import Nav from "./_Navbar.jsx";
import { Carousel } from '@mantine/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import Footer from "./_footer.tsx";
import { Center, Divider, MantineProvider } from "@mantine/core";
import Promo1 from "./_promo1"
import Message from "./_message"
import Companies from "./_companies"
import Prizes from "./_prizes"
import Partners from "./_partners"

export default function Home() {
  const message = false;


  return (
    <div>
      {message ? <Message /> : null}
      <Nav active="Start" />
      <Promo1 />
      <Center><Divider style={{width: "90%"}} /></Center>
      <Companies />
      <Center><Divider style={{width: "90%"}} /></Center>
      <Prizes />
      <Center><Divider style={{width: "90%"}} /></Center>
      <Partners />
      <Center><Divider style={{width: "90%"}} /></Center>

      <Center><img src="ad1.jpeg" alt="Werbung" style={{width: "50%", marginTop: "20px"}}/></Center>

      <div className="w-full h-full flex flex-col">


      <MantineProvider theme={{colorScheme: "dark"}}>
        <Footer />
      </MantineProvider>
      </div>
    </div>
  )
}

// <Footer />