"use client";
import React from 'react';
import Image from 'next/image';
import {backend} from '@/constants/const';
import {useEffect} from "react";
import axios from "axios";

function BlogHeader() {
    // Sample data for the blogs
    const blogs = [
        {
            id: 1,
            imageUrl:
                'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            link: '1',
            title: 'How to use sticky note for problem solving',
            date: '20 October 2019',
        },
        {
            id: 2,
            imageUrl:
                'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            link: '2',
            title: 'How to use sticky note for problem solving',
            date: '20 October 2019',
        },
        {
            id: 3,
            imageUrl:
                'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            link: '3',
            title: 'How to use sticky note for problem solving',
            date: '20 October 2019',
        },
        {
            id: 4,
            imageUrl:
                'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            link: '4',
            title: 'How to use sticky note for problem solving',
            date: '20 October 2019',
        },
        {
            id: 5,
            imageUrl:
                'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            link: '5',
            title: 'How to use sticky note for problem solving',
            date: '20 October 2019',
        },
        // Add more blog items as needed
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allPosts = await axios.get(`${backend}/`);
                console.log(allPosts.data,"allPosts");
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData().then((e)=>{
            console.log(e, "allPosts");
        });
    }, []);
    return (
        <>
        <section>
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
                    From the blog
                </h1>
                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                    {blogs.map((blog:any) => (
                        <div key={blog.id} className="lg:flex">
                            <Image
                                src={blog.imageUrl}
                                width={100}
                                height={100}
                                style={{ width: '100%', height: '100%' }}
                                alt=""
                            />
                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <a
                                    href={`/Blog/${blog.link}`}
                                    className="text-xl font-semibold text-gray-800 hover:underline dark:text-white"
                                >
                                    {blog.title}
                                </a>

                                <span className="text-sm text-gray-500 dark:text-gray-300">
                                  On: {blog.date}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}

export default BlogHeader;
