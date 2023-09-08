import React from 'react';
import "./SinglePost.css";

export const SinglePost = () => {
  return (
    <div className="single--post">
        <div className="single--post--wrapper">
          <img 
            src="https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtleWJvYXJkfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60" 
            alt="A keyboard" className="single--post--img" 
          />
          <h1 className="single--post--title">
            Single Post Title
            <div className="single--post--actions">
              <i class='single--post--icon bx bx-edit'></i>
              <i class='single--post--icon bx bxs-trash' ></i>
            </div>
          </h1>
          <div className="single--post--info">
            <span class="single--post--author">Author: <b>[name]</b></span>
            <span class="single--post--date">Created: <b>[date]</b></span>
          </div>
          <p className="singlepost--p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos praesentium laboriosam totam, nobis dolorum dignissimos laudantium impedit. Ad ex possimus corrupti, debitis voluptatem ullam, odio eligendi in natus earum est?</p>
          <p className="singlepost--p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae ab officia dolores. Et commodi quam mollitia, quia, perferendis odit quasi, molestias ab maxime esse totam veniam! Eveniet perspiciatis dolor cupiditate.</p>
          <p className="singlepost--p">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore qui magni cum, corrupti necessitatibus architecto ipsa, magnam natus provident a vitae et nam aliquam aut asperiores suscipit! Soluta, dolores repellendus.</p>
        </div>
    </div>
  )
}
