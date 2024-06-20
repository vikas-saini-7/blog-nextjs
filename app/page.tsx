import Card from "@/components/common/Card";
import SectionTitle from "@/components/common/SectionTitle";
import PopularPosts from "@/components/posts/PopularPosts";
import { DUMMY_DATA } from "@/constants/DUMMY_DATA";
export default function Home() {
  return (
    <div className='container mx-auto px-[16px]'>

      <PopularPosts/>

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
