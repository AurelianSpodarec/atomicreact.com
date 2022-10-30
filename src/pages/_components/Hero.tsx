import Button from "@components/atoms/Button/Button";
import Container from "@components/Container";

function Hero() {
    return (
        <Container className="py-28 text-center mx-auto">

            <div className="max-w-4xl mx-auto">
                <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-800 sm:text-5xl md:text-7xl">
                Build faster with a minimalistic UI starter kit
                </h1>
                <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl mx-auto max-w-2xl">
                Inspired by Atomic Desing by Brad Frost - Atomic React takes the same conceps and applies them to a React application as well as covers all edge case scenarios for components
                </p>
            </div>

            <div className="mt-10 flex justify-center gap-x-6">
                <Button href="/register">Get started</Button>
            </div>
             
        </Container>
    );
}

export default Hero;