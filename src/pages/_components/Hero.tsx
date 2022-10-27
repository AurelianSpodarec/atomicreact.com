import Button from "@components/atoms/Button/Button";
import Container from "@components/Container";

function Hero() {
    return (
        <Container className="pt-20 pb-16 text-center mx-auto">

            <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
                Build faster with a minimalistic UI starter kit
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
                Atomic React is a minimalistic set of components and a starter kit so you dont need to reinvent the wheel and case edge scenarios to speed up
            </p>

            <div className="mt-10 flex justify-center gap-x-6">
                <Button href="/register">Get started</Button>
            </div>
             
        </Container>
    );
}

export default Hero;