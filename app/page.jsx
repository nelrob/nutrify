import Feed from '@components/Feed';

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <h1 className="head_text text-center">
                Nurture yourself;
                <br className="max-md:hidden"/>
                <span className="orange_gradient text-center">inspire others</span>
            </h1>
            <p className="desc text-center">
            Nurture yourself by reflecting on the things you're grateful for and inspire others with them. Create a post to spread gratitude, affirmations, or whatever else you're willing to share with the world. 
            </p>

            <Feed />
        </section>
    )
}

export default Home