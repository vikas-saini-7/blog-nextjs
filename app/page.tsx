import Card from "@/components/Card";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import { DUMMY_DATA } from "@/constants/DUMMY_DATA";
export default function Home() {
  return (
    <div className='container mx-auto px-[16px]'>

      <section>
        <SectionTitle text="Popular"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DUMMY_DATA.map((post) => (
            <Card post={post} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle text="Trending"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DUMMY_DATA.slice(0, 4).map((post) => (
            <Card post={post} />
          ))}
        </div>
      </section>

      <section>
        <SectionTitle text="You may also like"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DUMMY_DATA.slice(0, 4).map((post) => (
            <Card post={post} />
          ))}
        </div>
      </section>

    </div>
  );
}
