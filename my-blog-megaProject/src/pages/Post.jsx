import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="py-8 ">
            <Container>
                <div className=" flex flex-col justify-center mb-4 relative rounded-xl p-2">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl m-auto"
                        width='400px'
                    />
                
                {isAuthor && (
                    <div className="mt-10 m-auto">
                        <Link to={`/edit-post/${post.$id}`}>
                            <Button bgColor="bg-green-500" className="mr-3 hover:cursor-pointer hover:bg-green-400">
                                Edit
                            </Button>
                        </Link>
                        <Button bgColor="bg-red-500" className="hover:cursor-pointer hover:bg-red-400" onClick={deletePost}>
                            Delete
                        </Button>
                    </div>
                )}
                </div>
                <div className="w-full mb-6 text-center">
                    <h1 className="text-2xl font-bold text-white ">{post.title}</h1>
                </div>
                <div className="browser-css text-white ">
                    {parse(post.content)}
                    </div>
            </Container>
        </div>
    ) : null;
}