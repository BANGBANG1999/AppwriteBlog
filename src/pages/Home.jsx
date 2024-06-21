// import React, { useEffect, useState } from "react";
// import appwriteService from "../appwrite/config";
// // import appwriteAuthService from "../appwrite/auth";
// // import { login } from "../store/authSlice";
// import { Container, PostCard } from "../components";
// import SkeletonComponent from "../components/Skeleton";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// function Home() {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   // const dispatch = useDispatch();

//   useEffect(() => {
//     setLoading(true);

//     appwriteService.getAllPosts().then((posts) => {
//       if (posts) {
//         setPosts(posts.documents);
//         // console.log(posts);
//       }
//       setLoading(false);
//     });
//   }, []);

//   const userData = useSelector((state) => {
//     state.auth.userData;
//   });

//   console.log(userData);

//   // console.log(userData);

//   if (loading) {
//     return <SkeletonComponent />;
//   } else if (!userData) {
//     return (
//       <div className="w-full py-8 mt-4 text-center">
//         <Container>
//           <div className="flex flex-wrap h-[600px] justify-center items-center">
//             <div className="p-2 w-full">
//               <Link
//                 to="/login"
//                 className="text-2xl hover:underline font-semibold cursor-pointer text-gray-200 hover:text-gray-400"
//               >
//                 Login to read posts
//               </Link>
//             </div>
//           </div>
//         </Container>
//       </div>
//     );
//   } else {
//     return (
//       <div className="w-full py-8">
//         <Container>
//           <div className="flex flex-wrap">
//             {posts.map((post) => (
//               <div key={post.$id} className="p-2 w-1/4">
//                 <PostCard {...post} />
//               </div>
//             ))}
//           </div>
//         </Container>
//       </div>
//     );
//   }

// }

// export default Home;

import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import SkeletonComponent from "../components/Skeleton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // const userData = useSelector((state) => state.auth.userData);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    setLoading(true);
    appwriteService.getAllPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <SkeletonComponent />;
  }

  if (!authStatus) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap h-[600px] justify-center items-center">
            <div className="p-2 w-full">
              <Link
                to="/login"
                className="text-2xl hover:underline font-semibold cursor-pointer text-gray-200 hover:text-gray-400"
              >
                Login to read posts
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
