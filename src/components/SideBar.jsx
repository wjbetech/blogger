import React from 'react'
import "./SideBar.css"

export const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar--item">
        <span className="sidebar--title">ABOUT ME</span>
        <img 
          src="https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1lY2hhbmljYWwlMjBrZXlib2FyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60" 
          alt="A cozy desk" 
          className='sidebar--img'
        />
        <p className='sidebar--text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime labore fugit sequi sunt assumenda dolore saepe non dicta, ex quis voluptates.</p>
      </div>
      <div className="sidebar--item">
        <span className="sidebar--title">LIFE IN KOREA</span>
        <img 
          src="https://images.unsplash.com/photo-1583833008338-31a6657917ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fG1lY2hhbmljYWwlMjBrZXlib2FyZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&https://images.unsplash.com/photo--31a6657917ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80=crop&w=700&q=60" 
          alt="A cozy desk" 
          className='sidebar--img'
        />
        <p className='sidebar--text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quasi accusamus numquam corporis exercitationem perferendis, eos sapiente quia molestiae iusto, consectetur dicta vero libero placeat porro.</p>
      </div>
      <div className="sidebar--item">
        <span className="sidebar--title">LAPTOPS 2023</span>
        <img 
          src="https://images.unsplash.com/photo-1636211995350-00174a49550d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8emVuYm9va3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60" 
          alt="A cozy desk" 
          className='sidebar--img'
        />
        <p className='sidebar--text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptates ipsam rerum, minus modi excepturi sed esse ullam corrupti, velit alias, quod aperiam.</p>
      </div>
      <div className="sidebar--item">
        <p className="sidebar--title">FOLLOW</p>
          <a href="https://github.com/wjbetech" target="_blank">
            <i className='bx bxl-github'></i>
          </a>
          <a href="https://www.linkedin.com/in/william-east-653535211/" target="_blank">
            <i className='bx bxl-linkedin-square'></i>
          </a>
        <p className="sidebar--text follow">@wjbetech 2023</p>
      </div>
    </div>
  )
}
