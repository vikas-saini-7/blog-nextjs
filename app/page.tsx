import Card from "@/components/common/Card";
import SectionTitle from "@/components/common/SectionTitle";
import PopularPosts from "@/components/posts/PopularPosts";
import TrendingPosts from "@/components/posts/TrendingPosts";
import YouMayAlsoLike from "@/components/posts/YouMayAlsoLike";
import { PopularPostsSkeleton } from "@/components/skeletons/Skeletons";
import { DUMMY_DATA } from "@/constants/DUMMY_DATA";
import { Suspense } from "react";
export default function Home() {
  return (
    <div className='container mx-auto px-[16px]'>

      <Suspense fallback={<PopularPostsSkeleton/>}>
        <PopularPosts/>
      </Suspense>

      <Suspense fallback={<PopularPostsSkeleton/>}>
        <TrendingPosts/>
      </Suspense>

      <Suspense fallback={<PopularPostsSkeleton/>}>
        <YouMayAlsoLike/>
      </Suspense>

    </div>
  );
}
