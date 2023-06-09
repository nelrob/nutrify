import Feed from '@components/Feed';
import Favicon from "react-favicon";

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">
            <Favicon src="public/assets/icons/logo.ico"/>
            <h1 className="head_text text-center">
                Nurture yourself;
                <br className="max-md:hidden"/>
                <span className="green_gradient text-center">inspire others</span>
            </h1>
            <p className="desc text-center">
            Reflect on what you're grateful for and inspire others along the way. Create a post to spread gratitude, affirmations, or whatever else you're willing to share with the world. 
            </p>

            <Feed />
        </section>
    )
}

export default Home