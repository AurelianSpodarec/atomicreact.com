import Button from "@components/atoms/Button/Button";
import Container from "@components/Container";

function Hero() {
    return (
        <Container className="pt-20 pb-16 text-center mx-auto">

            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Build faster with a minimalistic UI starter kit
            </h1>
            <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl mx-auto max-w-2xl">
                Atomic React is a minimalistic set of components and a starter kit so you dont need to reinvent the wheel and case edge scenarios to speed up
            </p>

            <div className="mt-10 flex justify-center gap-x-6">
                <Button href="/register">Get started</Button>
            </div>
             
        </Container>
    );
}

export default Hero;