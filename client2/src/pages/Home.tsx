import Hero from "../components/home/Hero";
import Team from "../components/home/Team";
import Layout from "../layout/Layout";
function Home() {
  return (
    <>
      <Layout>
        {/* <img src="assets/testHero.png" className="z-[999]" alt="" /> */}
        <Hero />
        <Team />
      </Layout>
    </>
  );
}

export default Home;
