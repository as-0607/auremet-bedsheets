import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Journal from "../components/Journal";
import Loved from "../components/Loved";
import Promise from "../components/Promise";
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
          <Feature/>
        </section>
        <section>
          <Promise/>
        </section>
        <section>
          <Loved/>
        </section>
        <section>
          <Journal/>
        </section>
      </main>
    </>
  );
}
