import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Loved from "../components/Loved";
import Quality from "../components/Quality";

export default function Home() {
  return (
    <>
      <main>
        <section>
          <Hero />
        </section>
        <section>
          <Quality />
        </section>
        <section>
          <Feature />
        </section>

        <section>
          <Loved />
        </section>
      </main>
    </>
  );
}
