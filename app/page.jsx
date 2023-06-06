import Feed from '@components/Feed';

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Nurture yourself;
                <br className="max-md:hidden"/>
                <span className="orange_gradient text-center">nurture others</span>
            </h1>
            <p className="desc text-center">
                Dolore commodo excepteur do Lorem nisi nostrud ut pariatur. Anim tempor aliquip ad ex enim occaecat duis adipisicing ut eiusmod. Occaecat exercitation anim exercitation exercitation eu.
            </p>

            <Feed />
        </section>
    )
}

export default Home