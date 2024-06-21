import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { PostCard, Container } from "../components";
import SkeletonComponent from "../components/Skeleton";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appwriteService
      .getAllPosts([])
      .then((posts) => {
        // console.log(posts);
        if (posts) {
          setPosts(posts.documents);
          setLoading(false);
        }
      })
      .catch((error) => {
        throw error;
      });
    // console.log(posts);
  }, [setPosts]);

  return loading ? (
    <SkeletonComponent />
  ) : (
    <section className="text-gray-400 w-full flex justify-center items-center bg-gray-900 body-font">
      <div className="container w-full px-5 py-24 justify-center items-center lg:w-5/6 2xl:w-4/6 mx-auto">
        <div className="flex justify-center items-center flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-11/12 lg:w-1/3">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // {
  //   if (loading) {
  //     <SkeletonComponent />;
  //   } else {
  //     if (posts.length === 0) {
  //       return (
  //         <div className="w-full py-8 mt-4 text-center">
  //           <Container>
  //             <div className="flex flex-wrap h-[600px] justify-center items-center">
  //               <div className="p-2 w-full">
  //                 <h1 className="text-2xl font-semibold cursor-pointer text-gray-200 hover:text-gray-400">
  //                   No posts found
  //                 </h1>
  //               </div>
  //             </div>
  //           </Container>
  //         </div>
  //       );
  //     }
  //     return (
  //       <section className="text-gray-400 w-screen flex justify-center items-center bg-gray-900 body-font">
  //         <div className="container w-full px-5 py-24 justify-center items-center lg:w-5/6 2xl:w-4/6 mx-auto">
  //           <div className="flex justify-center items-center flex-wrap">
  //             {posts.map((post) => (
  //               <div key={post.$id} className="p-2 w-11/12 lg:w-1/3">
  //                 <PostCard {...post} />
  //               </div>
  //             ))}
  //           </div>
  //         </div>
  //       </section>
  //     );
  //   }
  // }
}

export default AllPosts;
