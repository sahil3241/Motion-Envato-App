import React, { useEffect, useState } from 'react';
import gsap from 'gsap';



const Home = () => {



  useEffect(() => {
    gsap.from(".container.body", {
      // x: 1200,
      delay: 1,
      duration: 0.3,
      // rotate: 360,
      opacity: 0,
      // stagger: 10,
      // repeat: 2,
      // scale: 0.5,
      // yoyo: true,
    });
  }, []);

  // useEffect(()=>{
  //   var tl = gsap.timeline();

  // tl.from(("nav"),{
  //   y: -20, 
  //   opacity: 0,
  //   delay: 1,
  //   duration: 0.8,
  //   stagger: true,
  // })
  // // tl.from((".container.body"),{
  // //   opacity: 0,
  // //   // scale: 0, 
  // //   duration: 0.8,
  // //   // ease: "back.out(1.7)",
  // //   // scrollTrigger:{
  // //   //   trigger: ".container.body div",
  // //   //   scroller: "body",
  // //   //   markers: true,
  // //   //   start: "top 60%",
  // //   // },
  // //   // transform: "translate(50%)",
  // // })
  // },[])

  useEffect(()=>{
    var main = document.querySelector(".main");
    var cursor = document.querySelector(".cursor");
    main.addEventListener('mousemove', function(dets){
      gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.5,
        ease: "back.out",
      })
    })
  },[])


  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="main" style={{ position: 'relative', overflow: 'hidden' }}>
      <dv className='cursor'></dv>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: '#232325',
          paddingTop: '0px',
          paddingBottom: '0px',
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          height: '56px'
        }}
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                

              <li
                className="nav-item"
                style={{ display: 'flex', alignItems: 'center' }}
              >
                <img
                  src={process.env.PUBLIC_URL + '/motionarteffect-img2.png'}
                  style={{ height: '46px', width: '39px' }}
                  alt="Motion Art Image"
                />
                <a
                  className="nav-link active header"
                  aria-current="page"
                  href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
                  style={{ paddingLeft: '0px' }}
                >
                  <div style={{ display: 'flex' }}>
                    <div style={{ color: 'white', fontSize: '21px' }}>
                      envato
                    </div>
                    <div style={{ color: '#75ba0e', fontSize: '21px' }}>
                      market
                    </div>
                  </div>
                </a>
              </li>
            </ul>
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ paddingLeft: '1210px' }}
            >
              <li
                className="nav-item"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginRight: '0px',
                }}
              >
                <button
                  style={{
                    backgroundColor: '#75ba0e',
                    border: '2px solid #75ba0e',
                    color: 'white',
                    fontFamily: 'sans-serif',
                    // padding: '4px 14px',
                    borderRadius: '3.5px',
                    fontSize: '0.9em',
                    width: '90px',
                    height: '35px'
                  }}
                >
                  Buy now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Section with Compartments */}
      <div
        className="container body"
        style={{
          minHeight: '500vh',
          minWidth: '205vh',
          backgroundColor: '#10101b',
          paddingRight: '0px',
          paddingLeft: '0px',
          marginLeft: '0px',
          marginRight: '0px',
          marginTop: '0px',
          overflow: 'hidden'
        }}
      >
        <div className="row">
          <div className="col-md-4 mb-4" style={{ display: 'flex', gap: '65em'}}>
            <img
              src={process.env.PUBLIC_URL + '/motionarteffect-logo.png'}
              style={{ paddingTop: '85px', marginLeft: '130.400px', width: '225px' }}
              alt="Motion Art Image"
            />
            
          </div>
          <div className="col-md-4 mb-4" style={{paddingLeft: '690px'}}>
          <button className='btn1'
                  style={{
                    backgroundColor: isHovered ? '#10101b' : 'white',
                    color: isHovered ? 'white' : 'black',
                    border: '1.6px solid white',
                    borderRadius: '5px',
                    width: '190px',
                    height: '55px',
                    marginTop: '85px',
                    fontSize: '1.05em',
                    transition: 'background-color 0.3s ease',
                    
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  
            >
              Purchase Now
            </button>
          </div>
          <div className="col-md-4 mb-4"  style={{ padding: '0px', width: '295px' ,marginLeft: '155px', paddingTop: '78px', paddingBottom: '80px' ,fontSize: '1.15em', color: '#dfd3d3'}}>
          <p className="gradient-text" style={{marginBottom: '0px', display: 'flex'}}>Transform</p>
          <p className="gradient-text" style={{marginBottom: '10px', display: 'flex'}}>Your Website</p>
                  <p style={{marginBottom: '0px',fontSize: '0.9em', display: 'flex'}}>With Motion Art</p>
                  <p style={{marginBottom: '0px',fontSize: '0.9em', display: 'flex'}}>Effect</p>
          </div>
          <div className="col-md-4 mb-4" style={{paddingTop: '80px', width:'650px'}}>
                  <h1 style={{fontSize: '65px', width: '700px', color: '#f0e5fb'}}>Attract Your <br /> Visitors Attention <br /> With Colorful<br />
                  <span>
                  <span className='gradient-text'>Motion Art Effect</span>
                  </span>
                  </h1>
          </div>
          <div className="col-md-4 mb-4" style={{ marginLeft: '455px', paddingLeft: '6px', width: '700px', paddingBottom: '90px'}}>
            <p style={{ width: '700px', color: '#d6c1dc'}}>Unleash the power of creativity with Motion Art for Elementor - your <br /> ultimate solution
             for seamlessly integrating captivating animations into<br /> your website. </p>
          </div>
          <div className="col-md-4 mb-4" style={{ marginLeft: '520px', width: '800px', marginBottom: '20px' }}>
                  <h2 style={{ fontSize: '1.2em', color: '#f0e5fb'}}>Trusted by thousands of users around the world</h2>
          </div>
          <div className="col-md-4 mb-4" style={{ paddingTop: '50px', display: 'flex', alignItems: 'flex-start', width: '1480px' }}>
  <img
    src={process.env.PUBLIC_URL + '/motionarteffect-img2.png'}
    style={{ marginLeft: '130px' }}
    alt="Motion Art Image"
  />
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '10px' }}>
    <img
      src={process.env.PUBLIC_URL + '/motionarteffect-img4.png'}
      style={{ height: '19px', marginTop: '22px' }}
      alt="Motion Art Image"
    />
    <p style={{ margin: 0, paddingTop: '20px', fontSize: '0.85em', color: '#b2b2ca' }}><b>4.5</b> Score, 9 Reviews</p>
  </div>
  <img
    src={process.env.PUBLIC_URL + '/motionarteffect-img1.png'}
    style={{ marginLeft: '250px' }}
    alt="Motion Art Image"
  />
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '10px' }}>
    <img
      src={process.env.PUBLIC_URL + '/motionarteffect-img4.png'}
      style={{ height: '19px', marginTop: '22px' }}
      alt="Motion Art Image"
    />
    <p style={{ margin: 0, paddingTop: '20px', fontSize: '0.85em', color: '#b2b2ca' }}><b>4.5</b> Score, 9 Reviews</p>
  </div>
  <img
    src={process.env.PUBLIC_URL + '/motionarteffect-img3.png'}
    style={{ marginLeft: '250px' }}
    alt="Motion Art Image"
  />
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '10px' }}>
    <img
      src={process.env.PUBLIC_URL + '/motionarteffect-img4.png'}
      style={{ height: '19px', marginTop: '22px' }}
      alt="Motion Art Image"
    />
    <p style={{ margin: 0, paddingTop: '20px', fontSize: '0.85em', color: '#b2b2ca' }}><b>4.5</b> Score, 9 Reviews</p>
  </div>
</div>
  <div className="col-md-4 mb-4" style={{ paddingTop: '100px', marginLeft: '125px', width: '800px' }}>
      <h2 style={{ color: '#f0e5fb', fontSize: '2.58em'  }}>Turn Your Cursor Into A Colorful </h2>
      <h2 style={{ color: '#f0e5fb', fontSize: '2.58em'  }}>Magic Wand & Charm Your Visitors</h2> <br />
      <h5 style={{ color: '#b2b2ca', fontSize: '0.99em' }}>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse </h5>
      <h5 style={{ color: '#b2b2ca', fontSize: '0.99em' }}>your website with visually stunning motion art elements.</h5>
      <div style={{ marginTop: '40px' ,height: '65px', width: '331px', borderRadius: '20px', background: 'linear-gradient(90deg, #5E11FF 0%, #F87516 100%)' }}> <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white', paddingTop: '12px', fontSize: '1.3em'}}>Purchase from Envato <span style={{ paddingLeft: '16px', fontSize: '1.3em' }}>  &#8594;</span></p> </div>
  </div>
  <div className="col-md-4 mb-4" style={{ paddingTop: '120px', paddingLeft: '235px' }}>
  <img
      src={process.env.PUBLIC_URL + '/motionarteffect-img5.png'}
      style={{  }}
      alt="Motion Art Image"
    />
  </div>
            
  <div className="col-md-4 mb-4" style={ { width: '100%', paddingTop: '100px', paddingLeft: '440px'} }>
    <h1 style={{ fontSize: '2.58em', color: '#f0e5fb' }}>Apply On Any Section Or Enable </h1>
    <h1 style={{ fontSize: '2.58em', color: '#f0e5fb', paddingLeft: '165px' }}>For Whole Page</h1>
  </div>

  <div className="card" style={{width: '610px', height: '571px', marginLeft: '150px', marginTop: '40px', borderRadius: '15px', background: 'linear-gradient(180deg, #120426 0%, #1d1524 100%)' ,border: '0.5px solid #302d33', boxShadow: '1px 1px 2px black'}}>
  <div className="card-body">
    <h2 style={{ color: '#f0e5fb', fontSize: '1.55em', paddingTop: '24px' }}>Apply On Section</h2>
    <p  style={{ color: '#b2b2ca', paddingTop: '10px', marginBottom: '8px' }} className="card-text">Apply on section is a game-changer, offering an unparalleled way to</p>
    <p  style={{ color: '#b2b2ca', paddingBottom: '16px'}} className="card-text">manage applications directly from your website. </p>
    <img
      className="card-img-bottom"
      src={process.env.PUBLIC_URL + '/motionarteffect-img11.png'}
      style={{  }}
      alt="Motion Art Image"
    />
  </div>
  
</div>
<div className="card" style={{width: '610px', height: '610px', marginLeft: '20px', marginTop: '110px', borderRadius: '15px', background: 'linear-gradient(180deg, #120426 0%, #1d1524 100%)', border: '0.5px solid #302d33', boxShadow: '1px 1px 2px black'}}>
  <div className="card-body">
    <h2 style={{ color: '#f0e5fb', fontSize: '1.55em', paddingTop: '24px' }}>Apply On Page</h2>
    <p  style={{ color: '#b2b2ca', paddingTop: '10px', marginBottom: '8px' }} className="card-text">Take your website to new heights with Motion Art for Elementor.</p>
    <p  style={{ color: '#b2b2ca', paddingBottom: '16px'}} className="card-text">Embrace the power of motion and animation.</p>
    <img
      className="card-img-bottom"
      src={process.env.PUBLIC_URL + '/motionarteffect-img10.png'}
      style={{  }}
      alt="Motion Art Image"
    />
  </div>
  </div>
  <div className="card" style={{width: '1230px', height: '286px', marginLeft: '160px', marginTop: '120px', borderRadius: '15px', background: 'linear-gradient(180deg, #120426 0%, #1d1524 100%)', border: '0.5px solid #302d33', boxShadow: '1px 1px 2px black'}}>
  <div className="card-body">
    <h2 style={{ color: '#f0e5fb', fontSize: '1.55em', paddingTop: '30px', paddingLeft: '370px' }}>Supported by All Popular Browsers</h2>
    <p  style={{ color: '#b2b2ca', paddingTop: '10px', marginBottom: '8px', paddingLeft: '375px' }} className="card-text">Rest assured, Motion Art is designed to be compatible</p>
    <p  style={{ color: '#b2b2ca', paddingBottom: '16px', paddingLeft: '470px'}} className="card-text">with all major web browsers.</p>
    <img
      className="card-img-bottom"
      src={process.env.PUBLIC_URL + '/motionarteffect-img8.png'}
      style={{ width: '450px', height:'400xp', marginLeft: '370px' }}
      alt="Motion Art Image"
    />
  </div>
  </div>
  <div className="col-md-4 mb-4" style={{ marginTop: '140px', width:'100%',  }}>
        <h1 style={{ fontSize: '2.51em', color: '#f0e5fb', paddingLeft: '500px' }}>An All-Round Plugin With</h1>
        <h1 style={{ fontSize: '2.51em', color: '#f0e5fb', paddingLeft: '580px' }}>Powerful Features</h1>
        <h5 style={{ color: '#b2b2ca', fontSize: '0.99em', paddingLeft: '460px', paddingTop: '20px' }}>Whether you're a seasoned web designer or just starting out, Motion Art for</h5>
        <h5 style={{ color: '#b2b2ca', fontSize: '0.99em', paddingLeft: '460px' }}>Elementor seamlessly integrates with the Elementor platform, providing you</h5>
        <h5 style={{ color: '#b2b2ca', fontSize: '0.99em', paddingLeft: '600px' }}>with a seamless and intuitive experience.</h5>
  </div>
  <div className="card" style={{width: '400px', height: '376px', marginLeft: '150px', marginTop: '40px', borderRadius: '15px', background: 'linear-gradient(180deg, #120426 0%, #1d1524 100%)', border: '0.5px solid #302d33', boxShadow: '1px 1px 2px black', paddingLeft: '0px', paddingRight: '0px'}}>
  <div className="card-body" style={{ paddingLeft: '0px'}}>
  <img
      className="card-img-top"
      src={process.env.PUBLIC_URL + '/motionarteffect-img9.png'}
      style={{ height: '190px', width:'180px', marginLeft: '0px', paddingLeft: '0px' }}
      alt="Motion Art Image"
    />
    <h2 style={{ color: '#f0e5fb', fontSize: '1.53em', paddingTop: '20px', paddingLeft: '26px' }}>Light Weight</h2>
    <p  style={{ color: '#b2b2ca', paddingTop: '10px', marginBottom: '8px', paddingLeft: '26px' }} className="card-text">Motion Art for Elementor is designed to be</p>
    <p  style={{ color: '#b2b2ca', paddingBottom: '16px', paddingLeft: '26px'}} className="card-text">lightweight.</p>
    
  </div>
  </div>
  <div className="card" style={{width: '400px', height: '376px', marginLeft: '20px', marginTop: '40px', borderRadius: '15px', background: 'linear-gradient(180deg, #120426 0%, #1d1524 100%)', border: '0.5px solid #302d33', boxShadow: '1px 1px 2px black', paddingLeft: '0px', paddingRight: '0px'}}>
  <div className="card-body" style={{ paddingLeft: '0px'}}>
  <img
      className="card-img-top"
      src={process.env.PUBLIC_URL + '/motionarteffect-img6.png'}
      style={{ height: '190px', width:'180px', marginLeft: '0px', paddingLeft: '0px' }}
      alt="Motion Art Image"
    />
    <h2 style={{ color: '#f0e5fb', fontSize: '1.53em', paddingTop: '20px', paddingLeft: '26px' }}>100% Responsive</h2>
    <p  style={{ color: '#b2b2ca', paddingTop: '10px', marginBottom: '8px', paddingLeft: '26px' }} className="card-text">Create a consistent visual experience</p>
    <p  style={{ color: '#b2b2ca', paddingBottom: '16px', paddingLeft: '26px'}} className="card-text">across all devices.</p>
    
  </div>
  </div>
  <div className="card" style={{width: '400px', height: '376px', marginLeft: '20px', marginTop: '40px', borderRadius: '15px', background: 'linear-gradient(180deg, #120426 0%, #1d1524 100%)', border: '0.5px solid #302d33', boxShadow: '1px 1px 2px black', paddingLeft: '0px', paddingRight: '0px'}}>
  <div className="card-body" style={{ paddingLeft: '0px'}}>
  <img
      className="card-img-top"
      src={process.env.PUBLIC_URL + '/motionarteffect-img7.png'}
      style={{ height: '190px', width:'180px', marginLeft: '0px', paddingLeft: '0px' }}
      alt="Motion Art Image"
    />
    <h2 style={{ color: '#f0e5fb', fontSize: '1.53em', paddingTop: '20px', paddingLeft: '26px' }}>User Friendly Interface</h2>
    <p  style={{ color: '#b2b2ca', paddingTop: '10px', marginBottom: '8px', paddingLeft: '26px' }} className="card-text">Ensure a smooth experience for both</p>
    <p  style={{ color: '#b2b2ca', paddingBottom: '16px', paddingLeft: '26px'}} className="card-text">applicants and administrators.</p>
    
  </div>
  </div>
  <footer style={{ marginTop: '125px', minHeight:'50.5px'  ,background: 'linear-gradient(90deg, #F87516 0%, #5E11FF 100%)', display:'flex', flexDirection: 'row' }}>
    <p style={{ fontSize: '0.77em', color:'#f0e5fb', paddingLeft: '130px', paddingTop: '23px', width: '460px' }}>&copy; 2023 Copywrite. All rights reserved by QodeMatrix</p>
    <p style={{ fontSize: '0.77em', color:'#f0e5fb', paddingTop: '0px',  width: '100px', paddingTop: '23px', paddingLeft: '750px' }}>Documentation</p>
    <p style={{ fontSize: '0.77em', color:'#f0e5fb' , paddingTop: '0px',  width: '70px', paddingTop: '23px', paddingLeft: '130px'}}>Support</p>
  </footer>

        </div>
      </div>
    </div>
  );
};

export default Home;
