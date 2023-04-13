import React, { useEffect, useState } from "react";
import { Get } from "../../../components/common/FetchFuctions";
import {AiOutlineCaretDown, AiOutlineCaretUp }from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const videoId = new URLSearchParams(window.location.search).get("v");
function VideoComments() {
    const [comments, setComments] = useState([]);
    const nextpage = React.useRef(null);

    const getComments = async () => {
        const response = await Get(0, (
            nextpage?.current ? `nextpage/comments/${videoId}` : `comments/${videoId}`
        ), {
            nextpage: nextpage.current ?? null
        });
        setComments(prev => [...prev, ...response.data.comments]);
        console.log(response.data);
        nextpage.current = response.data.nextpage;
    };
    useEffect(() => {
        getComments();
    }, []);



    return (
        <>
        <h2 className="w-full ml-8 text-2xl text-white ">
            Comments
        </h2>
        <div
            className="w-full text-white/90  flex flex-col items-start justify-center relative md:h-full gap-2  px-4 py-2"
        >
            {comments.map((comment) => (
                <Comment key={comment.id} {...comment} />
            ))}
            {nextpage.current && <button
                className="bg-gray-800 text-white px-4 py-2 rounded-md mx-auto my-2"
                onClick={() => getComments()}
            >Load more comments</button>}
        </div>
        </>
    );
}
function Comment({ author, commentText, commentedTime, commentorUrl, hearted, likeCount, pinned, repliesPage, replyCount, verified, thumbnail }) {
    const [showReplies, setShowReplies] = useState(false);

    return (
        <div
            className="w-full px-4 py-2"
        >
            <div className="flex items-center gap-1">
                <img
                    className="w-10 h-10 rounded-full hover:ring-2"
                    // Todo: improve hover effect
                    src={thumbnail}
                    // Todo: Onclick to go to user profile
                    alt="thumbnail"
                />
                <div className="flex flex-col ml-2">
                    <div className="flex items-center">
                        <h1 className="text-sm font-semibold">{author}</h1>
                        {verified && <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
                            
                            </svg>
                            }<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                  </svg>
                        <p className="text-sm text-gray-400">{commentedTime}</p>
                    </div>
                    <p>{commentText}</p>
                </div>
            </div>
            {repliesPage && (showReplies ?
                <button
                    className="text-blue-400 my-2 ml-12 flex gap-1 items-center  justify-center"
                    onClick={() => setShowReplies(false)}>Hide replies
                    <AiOutlineCaretUp />
                    </button> :
                <button
                    className="text-blue-400 my-2 ml-12 flex gap-1  items-center justify-center"
                    onClick={() => setShowReplies(true)}>
                        View {replyCount} replies <AiOutlineCaretDown />
                </button>  
                        
                        )}
                        
            {showReplies && <Replies repliesPage={repliesPage} />}
        </div>
    );
}


function Replies({ repliesPage }) {
    const [replies, setReplies] = useState([]);
    const nextpage = React.useRef();


    const getReplies = async () => {
        const response = await Get(0, `nextpage/comments/${videoId}`, {
            nextpage: nextpage?.current ?? repliesPage
        });
        setReplies(response.data.comments);
        nextpage.current = response.data.nextpage;
        // console.log(response.data);
    };
    useEffect(() => {
        getReplies();
    }, []);

    return (
        <div
            className=" flex flex-col items-end ml-12 gap-2"
        >
            {replies.map((reply) => (
                <Comment key={reply.commentId} {...reply} />
            ))}
            {nextpage.current && <button onClick={() => getReplies()}>Load more replies</button>}
        </div>
    );
}

export default VideoComments;
