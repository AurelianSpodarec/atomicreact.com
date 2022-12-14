import Button from "@components/atoms/Button/Button";
import type { NextPage, } from "next";
import Head from "next/head";
 
import Hero from "./_components/Hero";
import LayoutPage from "./_components/layouts/LayoutPage";
import SecondaryFeatures from "./_components/SecondaryFeatures";
 
const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />

                {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;700&display=swap"
                    rel="stylesheet"
                /> */}
            </Head>

            <div>
                <LayoutPage>
                  
                    <Hero />
                    <SecondaryFeatures />

                    Brad Frost Atomic Design

                    Support Almost -All- Edge Case Scenario

                    Flexible

Atomic Desing is a way of work. Its not just about desing system its about team work scalability and maintanability. 



                    <section>
                        Scale and Maintanability
                        Atomic Desing

                        Atoms
                        Organisms
                        Molecules
                        Pages

                    </section>


                    <section>
                        Dont re-invet the wheel


                        xs sm md lg xl xl2 xl3
                    </section>


                        TailwindCSS Friendly
                        Customise

                    <section>
                        <div>
                        Button
                        Input
                        Checkox
                        Text    
                        </div>

                        <div>
                        Playground
                        </div>
                    </section>


                    <section className="flex justify-between bg-blue-600">
                        <div>
                            Connect with Community
                        </div>

                        <Button label="Join Atomic React" />
                  
                    </section>

                </LayoutPage>

               

              
            </div>
        </div>
    );
};

export default Home;
