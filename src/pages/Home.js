import React, { useEffect, useState } from "react";
import gsap from "gsap";

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

  useEffect(() => {
    var main = document.querySelector(".main");
    var cursor = document.querySelector(".cursor");
    main.addEventListener("mousemove", function (dets) {
      gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 0.5,
        ease: "back.out",
      });
    });
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="main" style={{ position: "relative", overflow: "hidden" }}>
      <div className="cursor"></div>
      <nav
        className="navbar navbar-expand-lg"
        style={{
          backgroundColor: "#232325",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
          height: "56px",
        }}
      >
        <div className="container-fluid ">
          <a
            className="navbar-brand d-flex align-items-center"
            href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
            style={{ color: "white", fontSize: "21px" }}
          >
            <img
              src={process.env.PUBLIC_URL + "/motionarteffect-img2.png"}
              style={{ height: "46px", width: "39px" }}
              alt="Motion Art Image"
            />
            <div className="ms-0 d-flex flex-row align-items-center">
              <div style={{ color: "white", fontSize: "21px" }}>envato</div>
              <div style={{ color: "#75ba0e", fontSize: "21px" }}>market</div>
            </div>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{ borderColor: "#75ba0e" }}
          >
            <span
              className="navbar-toggler-icon"
              style={{ color: "#75ba0e" }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item d-flex align-items-center">
                <button
                  className="btn btn-responsive"
                  style={{
                    backgroundColor: "#75ba0e",
                    border: "2px solid #75ba0e",
                    color: "white",
                    fontFamily: "sans-serif",
                    borderRadius: "3.5px",
                    fontSize: "0.9em",
                    padding: "0.375rem 0.75rem",
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
          minHeight: "100vh",
          maxWidth: "400vh",
          backgroundColor: "#10101b",

          overflow: "hidden",
        }}
      >
        <div className="row">
          <div className="row">
            <div className="col-md-4 mb-4 d-flex justify-content-center align-items-center">
              <img
                className="pt-md-85px pt-lg-85px pt-xl-85px"
                src={process.env.PUBLIC_URL + "/MotionArtEffect-logo.png"}
                style={{ width: "100%", maxWidth: "225px", paddingTop: "85px" }}
                alt="Motion Art Image"
              />
            </div>
            <div className="col-md-8 mb-4 d-flex justify-content-end align-items-center">
              <button
                className="btn1"
                style={{
                  backgroundColor: isHovered ? "#10101b" : "white",
                  color: isHovered ? "white" : "black",
                  border: "1.6px solid white",
                  borderRadius: "5px",
                  width: "100%",
                  maxWidth: "190px",
                  height: "55px",
                  marginTop: "85px",
                  fontSize: "1.05em",
                  transition: "background-color 0.3s ease",
                  marginRight: "90px",
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                Purchase Now
              </button>
            </div>
          </div>
          <div
            className="col-md-4 mb-4"
            style={{
              padding: "0px",
              width: "295px",
              marginLeft: "155px",
              paddingTop: "78px",
              paddingBottom: "80px",
              fontSize: "1.15em",
              color: "#dfd3d3",
            }}
          >
            <p
              className="gradient-text"
              style={{ marginBottom: "0px", display: "flex" }}
            >
              Transform
            </p>
            <p
              className="gradient-text"
              style={{ marginBottom: "10px", display: "flex" }}
            >
              Your Website
            </p>
            <p
              style={{
                marginBottom: "0px",
                fontSize: "0.9em",
                display: "flex",
              }}
            >
              With Motion Art
            </p>
            <p
              style={{
                marginBottom: "0px",
                fontSize: "0.9em",
                display: "flex",
              }}
            >
              Effect
            </p>
          </div>
          <div
            className="col-md-8 mb-4"
            style={{ paddingTop: "80px", maxWidth: "650px" }}
          >
            <h1
              className="display-4"
              style={{ fontSize: "4.2rem", color: "#f0e5fb" }}
            >
              Attract Your <br /> Visitors Attention <br /> With Colorful <br />
              <span>
                <span className="gradient-text">Motion Art Effect</span>
              </span>
            </h1>
          </div>
          <div
            className="col-sm-4 mb-4 ml-md-455px ml-lg-455px ml-xl-455px w-md-700px w-lg-700px w-xl-700px pl-md-6px pb-md-60px pl-lg-6px pb-lg-60px pl-xl-6px pb-xl-60px"
            style={
              {
                // marginLeft: "455px",
                // paddingLeft: "6px",
                // width: "700px",
                // paddingBottom: "60px",
              }
            }
          >
            <p
              className="w-md-700px w-lg-700px w-xl-700px"
              style={{ color: "#d6c1dc" }}
            >
              Unleash the power of creativity with Motion Art for Elementor -
              your <br /> ultimate solution for seamlessly integrating
              captivating animations into
              <br /> your website.{" "}
            </p>
          </div>
          <div
            className="col-md-4 mb-4 ml-sm-520px ml-md-520px ml-lg-520px ml-xl-520px
            maxw-sm-800px maxw-md-800px maxw-lg-800px maxw-xl-800px"
            style={{
              // marginLeft: "520px",
              // maxWidth: "800px",
              marginBottom: "20px",
            }}
          >
            <h2 className="h4" style={{ fontSize: "1.2em", color: "#f0e5fb" }}>
              Trusted by thousands of users around the world
            </h2>
          </div>
          <div
            className="col-md-4 mb-4 pt-md-50px w-md-1480px
            pt-lg-50px w-lg-1480px
            pt-xl-50px w-xl-1480px"
            style={{
              // paddingTop: "50px",
              display: "flex",
              alignItems: "flex-start",
              // width: "1480px",
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/motionarteffect-img2.png"}
              className="ml-md-130px ml-lg-130px ml-xl-130px"
              style={{}}
              alt="Motion Art Image"
            />
            <div
              className="pl-md-10px pl-lg-10px pl-xl-10px"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // paddingLeft: "10px",
              }}
            >
              <img
                className="h-md-19px mt-md-22px
              h-lg-19px mt-lg-22px
              h-xl-19px mt-xl-22px"
                src={process.env.PUBLIC_URL + "/motionarteffect-img4.png"}
                style={{}}
                alt="Motion Art Image"
              />
              <p
                style={{
                  margin: 0,
                  paddingTop: "20px",
                  fontSize: "0.85em",
                  color: "#b2b2ca",
                }}
              >
                <b>4.5</b> Score, 9 Reviews
              </p>
            </div>
            <img
              className="ml-md-250px ml-lg-250px ml-xl-250px"
              src={process.env.PUBLIC_URL + "/motionarteffect-img1.png"}
              style={{}}
              alt="Motion Art Image"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingLeft: "10px",
              }}
            >
              <img
                className="h-md-19px mt-md-22px
                h-lg-19px mt-lg-22px
                h-xl-19px mt-xl-22px"
                src={process.env.PUBLIC_URL + "/motionarteffect-img4.png"}
                style={{}}
                alt="Motion Art Image"
              />
              <p
                style={{
                  margin: 0,
                  paddingTop: "20px",
                  fontSize: "0.85em",
                  color: "#b2b2ca",
                }}
              >
                <b>4.5</b> Score, 9 Reviews
              </p>
            </div>
            <img
              className="ml-md-250px ml-lg-250px ml-xl-250px"
              src={process.env.PUBLIC_URL + "/motionarteffect-img3.png"}
              style={{}}
              alt="Motion Art Image"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingLeft: "10px",
              }}
            >
              <img
                className="h-md-19px mt-md-22px
                h-lg-19px mt-lg-22px
                h-xl-19px mt-xl-22px"
                src={process.env.PUBLIC_URL + "/motionarteffect-img4.png"}
                style={{}}
                alt="Motion Art Image"
              />
              <p
                style={{
                  margin: 0,
                  paddingTop: "20px",
                  fontSize: "0.85em",
                  color: "#b2b2ca",
                }}
              >
                <b>4.5</b> Score, 9 Reviews
              </p>
            </div>
          </div>
          <div
            className="col-md-4 mb-4 pt-md-100px ml-md-125px w-md-800px
            pt-lg-100px ml-lg-125px w-lg-800px
            pt-xl-100px ml-xl-125px w-xl-800px"
            style={{}}
          >
            <h2 style={{ color: "#f0e5fb", fontSize: "2.58em" }}>
              Turn Your Cursor Into A Colorful{" "}
            </h2>
            <h2 style={{ color: "#f0e5fb", fontSize: "2.58em" }}>
              Magic Wand & Charm Your Visitors
            </h2>{" "}
            <br />
            <h5 style={{ color: "#b2b2ca", fontSize: "0.99em" }}>
              Motion Art for Elementor is a groundbreaking plugin that empowers
              you to effortlessly infuse{" "}
            </h5>
            <h5 style={{ color: "#b2b2ca", fontSize: "0.99em" }}>
              your website with visually stunning motion art elements.
            </h5>
            <div
              className="mt-md-40px h-md-65px w-md-331px
              mt-lg-40px h-lg-65px w-lg-331px
              mt-xl-40px h-xl-65px w-xl-331px"
              style={{
                // marginTop: "40px",
                // height: "65px",
                // width: "331px",
                borderRadius: "20px",
                background: "linear-gradient(90deg, #5E11FF 0%, #F87516 100%)",
              }}
            >
              {" "}
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  paddingTop: "12px",
                  fontSize: "1.3em",
                }}
              >
                Purchase from Envato{" "}
                <span style={{ paddingLeft: "16px", fontSize: "1.3em" }}>
                  {" "}
                  &#8594;
                </span>
              </p>{" "}
            </div>
          </div>
          <div
            className="col-md-4 mb-4 pt-md-120px pl-md-235px
            pt-lg-120px pl-lg-235px
            pt-xl-120px pl-xl-235px"
            style={{}}
          >
            <img
              src={process.env.PUBLIC_URL + "/motionarteffect-img5.png"}
              style={{}}
              alt="Motion Art Image"
            />
          </div>

          <div
            className="col-md-4 mb-4 pt-sm-100px pl-sm-440px pt-md-100px pl-md-440px pt-lg-100px pl-lg-440px pt-xl-100px pl-xl-440px"
            style={{ width: "100%" }}
          >
            <h1 style={{ fontSize: "2.58em", color: "#f0e5fb" }}>
              Apply On Any Section Or Enable{" "}
            </h1>
            <h1
              style={{
                fontSize: "2.58em",
                color: "#f0e5fb",
                paddingLeft: "165px",
              }}
            >
              For Whole Page
            </h1>
          </div>

          <div
            className="card w-sm-610px h-sm-571px ml-sm-150px mt-sm-40px
            w-md-610px h-md-571px ml-md-150px mt-md-40px
            w-lg-610px h-lg-571px ml-lg-150px mt-lg-40px
            w-xl-610px h-xl-571px ml-xl-150px mt-xl-40px"
            style={{
              // width: "610px",
              // height: "571px",
              // marginLeft: "150px",
              // marginTop: "40px",
              borderRadius: "15px",
              background: "linear-gradient(180deg, #120426 0%, #1d1524 100%)",
              border: "0.5px solid #302d33",
              boxShadow: "1px 1px 2px black",
            }}
          >
            <div className="card-body">
              <h2
                style={{
                  color: "#f0e5fb",
                  fontSize: "1.55em",
                  paddingTop: "24px",
                }}
              >
                Apply On Section
              </h2>
              <p
                style={{
                  color: "#b2b2ca",
                  paddingTop: "10px",
                  marginBottom: "8px",
                }}
                className="card-text"
              >
                Apply on section is a game-changer, offering an unparalleled way
                to
              </p>
              <p
                style={{ color: "#b2b2ca", paddingBottom: "16px" }}
                className="card-text"
              >
                manage applications directly from your website.{" "}
              </p>
              <img
                className="card-img-bottom"
                src={process.env.PUBLIC_URL + "/motionarteffect-img11.png"}
                style={{}}
                alt="Motion Art Image"
              />
            </div>
          </div>
          <div
            className="card w-sm-610px h-sm-610px ml-sm-20px mt-sm-110px
            w-md-610px h-md-610px ml-md-20px mt-md-110px
            w-lg-610px h-lg-610px ml-lg-20px mt-lg-110px
            w-xl-610px h-xl-610px ml-xl-20px mt-xl-110px"
            style={{
              // width: "610px",
              // height: "610px",
              // marginLeft: "20px",
              // marginTop: "110px",
              borderRadius: "15px",
              background: "linear-gradient(180deg, #120426 0%, #1d1524 100%)",
              border: "0.5px solid #302d33",
              boxShadow: "1px 1px 2px black",
            }}
          >
            <div className="card-body">
              <h2
                style={{
                  color: "#f0e5fb",
                  fontSize: "1.55em",
                  paddingTop: "24px",
                }}
              >
                Apply On Page
              </h2>
              <p
                style={{
                  color: "#b2b2ca",
                  paddingTop: "10px",
                  marginBottom: "8px",
                }}
                className="card-text"
              >
                Take your website to new heights with Motion Art for Elementor.
              </p>
              <p
                style={{ color: "#b2b2ca", paddingBottom: "16px" }}
                className="card-text"
              >
                Embrace the power of motion and animation.
              </p>
              <img
                className="card-img-bottom"
                src={process.env.PUBLIC_URL + "/motionarteffect-img10.png"}
                style={{}}
                alt="Motion Art Image"
              />
            </div>
          </div>
          <div
            className="card w-sm-1230px h-sm-286px ml-sm-160px mt-sm-120px
            w-md-1230px h-md-286px ml-md-160px mt-md-120px
            w-lg-1230px h-lg-286px ml-lg-160px mt-lg-120px
            w-xl-1230px h-xl-286px ml-xl-160px mt-xl-120px"
            style={{
              // width: "1230px",
              // height: "286px",
              // marginLeft: "160px",
              // marginTop: "120px",
              borderRadius: "15px",
              background: "linear-gradient(180deg, #120426 0%, #1d1524 100%)",
              border: "0.5px solid #302d33",
              boxShadow: "1px 1px 2px black",
            }}
          >
            <div className="card-body pt-sm-30px pl-sm-370px pt-md-30px pl-md-370px pt-lg-30px pl-lg-370px pt-xl-30px pl-xl-370px">
              <h2
                style={{
                  color: "#f0e5fb",
                  fontSize: "1.55em",
                  // paddingTop: "30px",
                  // paddingLeft: "370px",
                }}
              >
                Supported by All Popular Browsers
              </h2>
              <p
                style={{
                  color: "#b2b2ca",
                  paddingTop: "10px",
                  marginBottom: "8px",
                  // paddingLeft: "375px",
                }}
                className="card-text"
              >
                Rest assured, Motion Art is designed to be compatible
              </p>
              <p
                style={{
                  color: "#b2b2ca",
                  // paddingBottom: "16px",
                  // paddingLeft: "100px",
                }}
                className="card-text pb-sm-16px pl-sm-100px pb-md-16px pl-md-100px pb-lg-16px pl-lg-100px pb-xl-16px pl-xl-100px"
              >
                with all major web browsers.
              </p>
              <img
                className="card-img-bottom"
                src={process.env.PUBLIC_URL + "/motionarteffect-img8.png"}
                style={{ width: "450px", height: "400xp" }}
                alt="Motion Art Image"
              />
            </div>
          </div>
          <div
            className="col-md-4 mb-4 "
            style={{ marginTop: "140px", width: "100%" }}
          >
            <h1
              style={{
                fontSize: "2.51em",
                color: "#f0e5fb",
                paddingLeft: "500px",
              }}
            >
              An All-Round Plugin With
            </h1>
            <h1
              style={{
                fontSize: "2.51em",
                color: "#f0e5fb",
                paddingLeft: "580px",
              }}
            >
              Powerful Features
            </h1>
            <h5
              style={{
                color: "#b2b2ca",
                fontSize: "0.99em",
                paddingLeft: "460px",
                paddingTop: "20px",
              }}
            >
              Whether you're a seasoned web designer or just starting out,
              Motion Art for
            </h5>
            <h5
              style={{
                color: "#b2b2ca",
                fontSize: "0.99em",
                paddingLeft: "460px",
              }}
            >
              Elementor seamlessly integrates with the Elementor platform,
              providing you
            </h5>
            <h5
              style={{
                color: "#b2b2ca",
                fontSize: "0.99em",
                paddingLeft: "600px",
              }}
            >
              with a seamless and intuitive experience.
            </h5>
          </div>
          <div
            className="card w-sm-400px h-sm-376px ml-sm-150px mt-sm-40px pl-sm-0 pr-sm-0
            w-md-400px h-md-376px ml-md-150px mt-md-40px pl-md-0 pr-md-0
            w-lg-400px h-lg-376px ml-lg-150px mt-lg-40px pl-lg-0 pr-lg-0
            w-xl-400px h-xl-376px ml-xl-150px mt-xl-40px pl-xl-0 pr-xl-0"
            style={{
              // width: "400px",
              // height: "376px",
              // marginLeft: "150px",
              // marginTop: "40px",
              borderRadius: "15px",
              background: "linear-gradient(180deg, #120426 0%, #1d1524 100%)",
              border: "0.5px solid #302d33",
              boxShadow: "1px 1px 2px black",
              // paddingLeft: "0px",
              // paddingRight: "0px",
            }}
          >
            <div className="card-body" style={{ paddingLeft: "0px" }}>
              <img
                className="card-img-top h-sm-190px w-sm-180px
                h-md-190px w-md-180px
                h-lg-190px w-lg-180px
                h-xl-190px w-xl-180px"
                src={process.env.PUBLIC_URL + "/motionarteffect-img9.png"}
                style={{
                  // height: "190px",
                  // width: "180px",
                  marginLeft: "0px",
                  paddingLeft: "0px",
                }}
                alt="Motion Art Image"
              />
              <h2
                style={{
                  color: "#f0e5fb",
                  fontSize: "1.53em",
                  paddingTop: "20px",
                  paddingLeft: "26px",
                }}
              >
                Light Weight
              </h2>
              <p
                style={{
                  color: "#b2b2ca",
                  paddingTop: "10px",
                  marginBottom: "8px",
                  paddingLeft: "26px",
                }}
                className="card-text"
              >
                Motion Art for Elementor is designed to be
              </p>
              <p
                style={{
                  color: "#b2b2ca",
                  paddingBottom: "16px",
                  paddingLeft: "26px",
                }}
                className="card-text"
              >
                lightweight.
              </p>
            </div>
          </div>
          <div
            className="card w-sm-400px h-sm-376px ml-sm-20px mt-sm-40px
            w-md-400px h-md-376px ml-md-20px mt-md-40px
            w-lg-400px h-lg-376px ml-lg-20px mt-lg-40px
            w-xl-400px h-xl-376px ml-xl-20px mt-xl-40px"
            style={{
              // width: "400px",
              // height: "376px",
              // marginLeft: "20px",
              // marginTop: "40px",
              borderRadius: "15px",
              background: "linear-gradient(180deg, #120426 0%, #1d1524 100%)",
              border: "0.5px solid #302d33",
              boxShadow: "1px 1px 2px black",
              paddingLeft: "0px",
              paddingRight: "0px",
            }}
          >
            <div className="card-body" style={{ paddingLeft: "0px" }}>
              <img
                className="card-img-top h-sm-190px w-sm-180px
                h-md-190px w-md-180px
                h-lg-190px w-lg-180px
                h-xl-190px w-xl-180px"
                src={process.env.PUBLIC_URL + "/motionarteffect-img6.png"}
                style={{
                  // height: "190px",
                  // width: "180px",
                  marginLeft: "0px",
                  paddingLeft: "0px",
                }}
                alt="Motion Art Image"
              />
              <h2
                style={{
                  color: "#f0e5fb",
                  fontSize: "1.53em",
                  paddingTop: "20px",
                  paddingLeft: "26px",
                }}
              >
                100% Responsive
              </h2>
              <p
                style={{
                  color: "#b2b2ca",
                  paddingTop: "10px",
                  marginBottom: "8px",
                  paddingLeft: "26px",
                }}
                className="card-text"
              >
                Create a consistent visual experience
              </p>
              <p
                style={{
                  color: "#b2b2ca",
                  paddingBottom: "16px",
                  paddingLeft: "26px",
                }}
                className="card-text"
              >
                across all devices.
              </p>
            </div>
          </div>
          <div
            className="card w-sm-400px h-sm-376px ml-sm-20px mt-sm-40px
            w-md-400px h-md-376px ml-md-20px mt-md-40px
            w-lg-400px h-lg-376px ml-lg-20px mt-lg-40px
            w-xl-400px h-xl-376px ml-xl-20px mt-xl-40px"
            style={{
              // width: "400px",
              // height: "376px",
              // marginLeft: "20px",
              // marginTop: "40px",
              borderRadius: "15px",
              background: "linear-gradient(180deg, #120426 0%, #1d1524 100%)",
              border: "0.5px solid #302d33",
              boxShadow: "1px 1px 2px black",
              paddingLeft: "0px",
              paddingRight: "0px",
            }}
          >
            <div className="card-body" style={{ paddingLeft: "0px" }}>
              <img
                className="card-img-top h-sm-190px w-sm-180px
                h-md-190px w-md-180px
                h-lg-190px w-lg-180px
                h-xl-190px w-xl-180px"
                src={process.env.PUBLIC_URL + "/motionarteffect-img7.png"}
                style={{
                  // height: "190px",
                  // width: "180px",
                  marginLeft: "0px",
                  paddingLeft: "0px",
                }}
                alt="Motion Art Image"
              />
              <h2
                style={{
                  color: "#f0e5fb",
                  fontSize: "1.53em",
                  paddingTop: "20px",
                  paddingLeft: "26px",
                }}
              >
                User Friendly Interface
              </h2>
              <p
                style={{
                  color: "#b2b2ca",
                  paddingTop: "10px",
                  marginBottom: "8px",
                  paddingLeft: "26px",
                }}
                className="card-text"
              >
                Ensure a smooth experience for both
              </p>
              <p
                style={{
                  color: "#b2b2ca",
                  paddingBottom: "16px",
                  paddingLeft: "26px",
                }}
                className="card-text"
              >
                applicants and administrators.
              </p>
            </div>
          </div>
          <footer
            className="mt-sm-125px min-h-sm-50-5px
            mt-md-125px min-h-md-50-5px
            mt-lg-125px min-h-lg-50-5px
            mt-xl-125px min-h-xl-50-5px"
            style={{
              // marginTop: "125px",
              // minHeight: "50.5px",
              background: "linear-gradient(90deg, #F87516 0%, #5E11FF 100%)",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <p
              className="pl-sm-130px pt-sm-23px pl-md-130px pt-md-23px
              pl-lg-130px pt-lg-23px pl-xl-130px pt-xl-23px w-sm-460px w-md-460px w-lg-460px w-xl-460px"
              style={{
                fontSize: "0.77em",
                color: "#f0e5fb",
                // paddingLeft: "130px",
                // paddingTop: "23px",
                // width: "460px",
              }}
            >
              &copy; 2023 Copywrite. All rights reserved by QodeMatrix
            </p>
            <p
              style={{
                fontSize: "0.77em",
                color: "#f0e5fb",
                paddingTop: "0px",
                width: "100px",
                paddingTop: "23px",
                paddingLeft: "750px",
              }}
            >
              Documentation
            </p>
            <p
              style={{
                fontSize: "0.77em",
                color: "#f0e5fb",
                paddingTop: "0px",
                width: "70px",
                paddingTop: "23px",
                paddingLeft: "130px",
              }}
            >
              Support
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
