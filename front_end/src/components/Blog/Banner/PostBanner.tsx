import React from 'react';
import Image from 'next/image';
function PostBanner({imageUrl}:any) {
    return (
        <div>
            <Image src={imageUrl} alt="blog" width={500} height={500} style={{width:"100%", height:"100%"}} className="rounded-2xl"/>
        </div>
    );
}

export default PostBanner;