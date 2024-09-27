import Container from "@/src/components/UI/Container";
import Post from "@/src/components/UI/Post";
import axiousInstance from "@/src/lib";
 
import { IPost } from "@/src/types";

export default async function FoundItems() {
  const { data } = await axiousInstance.get(`/items`);
  console.log(data)
  return (
    <Container>
      <div className="mx-auto my-3 max-w-[720px]">
        {data?.data?.map((post: IPost) => <Post key={post?._id} post={post} />)}
      </div>
    </Container>
  );
}