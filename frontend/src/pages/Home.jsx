import React from 'react'
import {FaArrowRight} from "react-icons/fa"
import {AiOutlineShareAlt} from "react-icons/ai"
import {FaRegComment} from "react-icons/fa"

import {Link} from "react-router-dom"
import HighlightText from '../components/core/HomePage/HighlightText'
import ProductsList from '../components/core/HomePage/Productlist'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CTAButton from "../components/core/HomePage/Button"
import Banner from "../assets/Images/banner.mp4"
import epboysec1 from "../assets/Images/epboysec1.jpg"
import epboy2sec1 from "../assets/Images/epboysec2.jpg"
import epgirlsec1 from "../assets/Images/epgirlsec1.png"
import homepagesec3 from "../data/HomepageSec3"
import Homepagesec5 from "../data/Homepagesec5"
import e1sec4 from "../assets/Images/e1sec4.jpg"
import e2sec4 from "../assets/Images/e2sec4.jpg"
import e3sec4 from "../assets/Images/e3sec4.jpg"
import e4sec4 from "../assets/Images/e4sec4.jpg"
import e5sec4 from "../assets/Images/e5sec4.jpg"

import CodeBlocks from "../components/core/HomePage/CodeBlocks"
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from '../components/common/Footer'
import ExploreMore from '../components/core/HomePage/ExploreMore'


    


const Home = () => {
  return (
    <div>
      {/*Section1  */}
      <div className='relative 
      lg:flex w-100%   items-center 
      text-white justify-between bg-[#e0f0ff] '>

                <img 
                    src = {epboysec1}
                    alt = "KNowYourProgressImage"
                    className=' h-[636px] w-[809px] '
                />
                <div className='mx-auto flex flex-col gap-4 text-justify  w-3/12   max-w-maxContent justify-center items-center  '> 
                    <div className='font-small lg:font-[400] text-richblack-600 lg:text-4xl text-xs'>
                        Blue Jeans and sweater
                    </div>
                    <p className='text-xs font-light text-richblack-100  '> so how did the classical become so incoherent.according to McClintok,a 15th century typesetter likely.</p>
                   <div className='lg:mr-[111px]'>
                   <CTAButton active={true} linkto={"/signup"} > 
                     Shop Now
                    </CTAButton>
                   </div>
                    
                </div>
                <img src = {epgirlsec1}
                    alt = "KNowYourProgressImage"
                    className='object-contain h-[391px] w-[629px]  '
                    />
    
        {/* <Link to={"/signup"}>
            <div className=' group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
            transition-all duration-200 hover:scale-95 w-fit'>
                <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px]
                transition-all duration-200 group-hover:bg-richblack-900'>
                    <p>Become an Instructor</p>
                    <FaArrowRight />
                </div>
            </div>

        </Link> */}

        {/* <div className='text-center text-4xl font-semibold mt-7'>
            Empower Your Future with
            <HighlightText text={"Coding Skills"} />
        </div> */}

        {/* <div className=' mt-4 w-[90%] text-center text-lg font-bold text-richblack-300'>
            With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors. 
        </div> */}

        {/* <div className='flex flex-row gap-7 mt-8'>
            <CTAButton active={true} linkto={"/signup"}> 
                Learn More
            </CTAButton>

            <CTAButton active={false} linkto={"/login"}> 
                Book a Demo
            </CTAButton>
        </div> */}

        {/* <div className='mx-3 my-12 shadow-blue-200'>
            <video
            muted
            loop
            autoPlay
            >
            <source  src={Banner} type="video/mp4" />
            </video>
        </div> */}

        {/* Code Section 1 */}
        {/* <div>
             <CodeBlocks 
                position={"lg:flex-row"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Unlock Your
                        <HighlightText text={"coding potential"}/>
                        with our online courses
                    </div>
                }
                subheading = {
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {
                        btnText: "try it yourself",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
                codeColor={"text-yellow-25"}
            />
        </div>  */}

                {/* Code Section 2 */}
        {/* <div>
            <CodeBlocks 
                position={"lg:flex-row-reverse"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Unlock Your
                        <HighlightText text={"coding potential"}/>
                        with our online courses
                    </div>
                }
                subheading = {
                    "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
                }
                ctabtn1={
                    {
                        btnText: "try it yourself",
                        linkto: "/signup",
                        active: true,
                    }
                }
                ctabtn2={
                    {
                        btnText: "learn more",
                        linkto: "/login",
                        active: false,
                    }
                }

                codeblock={`<<!DOCTYPE html>\n<html>\nhead><title>Example</title><linkrel="stylesheet"href="styles.css">\n/head>\n`}
                codeColor={"text-yellow-25"}
            />
        </div>

            <ExploreMore /> */}
           
      </div>

      {/*Section 2  */}
      
        
         <ProductsList />

         
      {/*Section 3   */}

     
      <div className=' ml-[1%] mr-[1%]  flex flex-col mt-[90px] mx-auto'>
        <div className='lg:flex lg:justify-between md:ustify-between '>
            <div className='lg:flex lg:flex-col gap-4 '>
                     <p className='text-xs font-light text-richblack-300 '>
                          Choose top trending items
                     </p>
                     <div className='font-small lg:font-[500] text-richblack-900 lg:text-3xl text-xs'>
                          Our products
                     </div>
            </div>
            <div className='   flex  justify-between   lg:gap-2 gap-1 mt-[3%]
            mr-[1%]'>
                <p className=' font-small lg:font-[600] text-richblack-500  lg:text-base text-sm hover:text-richblack-900
              hover:underline-offset-4 cursor-pointer hover:border-b-2 hover:border-richblack-900'>TOP SELLERS</p>
                <p className='font-small lg:font-[600] text-richblack-500  lg:text-base text-sm hover:text-richblack-900
                  underline-offset-4 cursor-pointer hover:border-b-2 hover:border-richblack-900'>TRENDING</p>
                <p className='font-small lg:font-[600] text-richblack-500  lg:text-base text-sm hover:text-richblack-900
                  underline-offset-4 cursor-pointer hover:border-b-2 hover:border-richblack-900'>NEW ARRIVALS</p>
            </div>
        </div>
        <div className='flex gap-6 cursor-pointer  flex-wrap  mt-[3%]'>
            {

               homepagesec3.map( (element, index) => {
                    return (
                        <div className='lg:flex  lg:w-fit lg:flex-col md:w-[170px] w-[170px]  gap-1' key={index}>
                         
                            
                                <img 
                                src={element.img}

                                className=' lg:h-[296px] lg:w-[246px] md:w-[170px] md:h-[202.86px] w-[170px] h-[202.86px] '
                                />
                           

                            <div className='flex justify-between w-[100%] '>
                               <div className='flex flex-col'>
                               <p className='text-xs font-light text-richblack-300'>{element.title}</p>
                               <p className='text-xs font-[600] text-richblack-900 
                              '>{element.Option}</p>
                               </div>
                              
                                <p className='text-richblack-900 font-[600] '>{element.rate}</p>
                              
                            </div>

                        </div>
                    )
                } )

               
                //   <img 
                //     src = {img1}
                //     alt = "KNowYourProgressImage"
                //     className=' h-[296px] w-[246px] '
                //   />  
            }
        </div>
            {/* <div className='homepage_bg h-[310px]'>

                <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
                    <div className='h-[150px]'></div>
                    <div className='flex flex-row gap-7 text-white '>
                        <CTAButton active={true} linkto={"/signup"}>
                            <div className='flex items-center gap-3' >
                                Explore Full Catalog
                                <FaArrowRight />
                            </div>
                            
                        </CTAButton>
                        <CTAButton active={false} linkto={"/signup"}>
                            <div>
                                Learn more
                            </div>
                        </CTAButton>
                    </div>

                </div>


            </div>

            <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7'>

                <div className='flex flex-row gap-5 mb-10 mt-[95px]'>
                    <div className='text-4xl font-semibold w-[45%]'>
                        Get the Skills you need for a
                        <HighlightText text={"Job that is in demand"} />
                    </div>

                    <div className='flex flex-col gap-10 w-[40%] items-start'>
                    <div className='text-[16px]'>
                    The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
                    </div>
                    <CTAButton active={true} linkto={"/signup"}>
                        <div>
                            Learn more
                        </div>
                    </CTAButton>
                    </div>

                </div>
                
                

                <TimelineSection />

                <LearningLanguageSection />

            </div> */}

            

      </div>

    
      {/* Section4 */}

       <div className=' ml-[1%] mr-[1%]   flex flex-col gap-6 mt-[10%] mx-auto'>
        <div className='lg:flex lg:flex-row    lg:gap-6 ml-[1%] mr-[1%]'>
            <div className='cursor-pointer group'>
            

                  <img 
                    src={e1sec4}
                    alt="loading"
                    className='lg:w-[650px] lg:h-[427px] h-[237px] w-[360px] mx-auto lg:relative relative mb-[3%] group-hover:scale-95 
                    group-hover:transition-all  group-hover:duration-100'
                     />
                    
                    <div className='lg:absolute absolute lg:flex lg:flex-col md:w-3/12 h-[154px] w-[300px]

                    lg:translate-y-[-270%] lg:translate-x-[5%] translate-x-[5%] translate-y-[-152%] lg:gap-4
                    flex flex-col gap-4 ml-[2%]'>
                      <p className='md:font-small md:font-[500] text-[rgba(255,255,255,.6)] 
                      md:text-[rgba(255,255,255,.6)]  md:leading-6	 md:text-base group-hover:scale-95 
                      group-hover:transition-all  group-hover:duration-100'>
                        CLOTHES THAT YOU LIKE
                      </p>
                      <p className='font-small lg:font-[500] font-[500] text-xl
                       text-white lg:text-3xl  group-hover:scale-95 
                       group-hover:transition-all  group-hover:duration-100	'>
                       Home Clothes And Accessories
                      </p>
                      <p className='font-small lg:font-[500] 
                       text-white lg:text-xs group-hover:scale-95 
                       group-hover:transition-all  group-hover:duration-100'>Read More</p>
                    </div>
                    
            </div>
            <div className='cursor-pointer group '>
            

            <img 
              src={e2sec4}
              alt="loading"
              className='lg:w-[650px] lg:h-[427px] h-[237px] w-[360px] lg:relative relative mb-[3%] mx-auto group-hover:scale-95 
              group-hover:transition-all  group-hover:duration-100'
               />
              
              <div className='lg:absolute absolute lg:flex lg:flex-col md:w-3/12 h-[154px] w-[300px]
              lg:translate-y-[-270%] lg:translate-x-[5%] translate-x-[5%]  translate-y-[-152%] lg:gap-4
              flex flex-col gap-4 ml-[2%]'>
                <p className='md:font-small md:font-[500] text-[rgba(255,255,255,.6)] 
                      md:text-[rgba(255,255,255,.6)]  md:leading-6	 md:text-base group-hover:scale-95 
                      group-hover:transition-all  group-hover:duration-100'>
                 MODERN AND STYLISH OUTFIT
                </p>
                <p className='font-small lg:font-[500] font-[500] text-xl
                       text-white lg:text-3xl  group-hover:scale-95 
                       group-hover:transition-all  group-hover:duration-100	'>
                The Best Women Fashion Outfits For Date
                </p>
                <p className='font-small lg:font-[500] 
                 text-white lg:text-xs group-hover:scale-95 
                 group-hover:transition-all  group-hover:duration-100'>Read More</p>
              </div>
              
      </div>
            
        </div>
        <div className='lg:flex lg:flex-row gap-6'>
        <div className='cursor-pointer group'>
            

            <img 
              src={e3sec4}
              alt="loading"
              className='lg:w-[427px] lg:h-[427px] h-[237px] w-[360px] mb-[3%] mx-auto relative group-hover:scale-95 
              group-hover:transition-all  group-hover:duration-100'
               />
              
              <div className='lg:absolute absolute lg:flex lg:flex-col w-3/12 
              lg:translate-y-[-250%] lg:translate-x-[5%] translate-x-[5%]  translate-y-[-138%] lg:gap-4  flex flex-col gap-4 ml-[2%]
              h-[170px] w-[300px]'>
                <p className='font-small lg:font-[500] 
                text-[rgba(255,255,255,.6)]  leading-6	 lg:text-base group-hover:scale-95 
                group-hover:transition-all  group-hover:duration-100'>
                  LATEST TRENDING LOOKS
                </p>
                <p className='font-small lg:font-[500] 
                 text-white lg:text-3xl text-xl group-hover:scale-95 
                 group-hover:transition-all  group-hover:duration-100	'>
                Holiday Deals On Fashion Clothes
                </p>
                <p className='font-small lg:font-[500] 
                 text-white lg:text-xs group-hover:scale-95 
                 group-hover:transition-all  group-hover:duration-100'>Read More</p>
              </div>
              
      </div>
      <div className='cursor-pointer group'>
            

            <img 
              src={e4sec4}
              alt="loading"
              className='lg:w-[427px] lg:h-[427px] h-[237px] w-[360px] mb-[3%] mx-auto relative group-hover:scale-95 
              group-hover:transition-all  group-hover:duration-100'
               />
              
              <div className='lg:absolute absolute lg:flex lg:flex-col w-3/12 
              lg:translate-y-[-250%] lg:translate-x-[5%] translate-x-[5%]  translate-y-[-138%] lg:gap-4  flex flex-col gap-4 ml-[2%]
              h-[170px] w-[300px]'>
                <p className='font-small lg:font-[500] 
                text-[rgba(255,255,255,.6)]  leading-6	 lg:text-base group-hover:scale-95 
                group-hover:transition-all  group-hover:duration-100'>
                  BEST SELLER CLOSING
                </p>
                <p className='font-small lg:font-[500] 
                 text-white lg:text-3xl text-xl group-hover:scale-95 
                 group-hover:transition-all  group-hover:duration-100	'>
                Spring & Summer Accessories Trends
                </p>
                <p className='font-small lg:font-[500] 
                 text-white lg:text-xs group-hover:scale-95 
                 group-hover:transition-all  group-hover:duration-100'>Read More</p>
              </div>
              
      </div>
      <div className='cursor-pointer group'>
            

            <img 
              src={e5sec4}
              alt="loading"
              className='lg:w-[427px] lg:h-[427px] h-[237px] w-[360px] mb-[3%] mx-auto relative group-hover:scale-95 
              group-hover:transition-all  group-hover:duration-100'
               />
              
              <div className='lg:absolute absolute lg:flex lg:flex-col w-3/12 
              lg:translate-y-[-250%] lg:translate-x-[5%] translate-x-[5%]  translate-y-[-138%] lg:gap-4  flex flex-col gap-4 ml-[2%]
              h-[170px] w-[300px]'>
                <p className='font-small lg:font-[500] 
                text-[rgba(255,255,255,.6)]  leading-6	 lg:text-base group-hover:scale-95 
                group-hover:transition-all  group-hover:duration-100'>
                 СOMFORTABLE CLOTHES
                </p>
                <p className='font-small lg:font-[500] 
                 text-white lg:text-2xl text-xl group-hover:scale-95 
                 group-hover:transition-all  group-hover:duration-100	'>
                Practical Clothes For Your Kids
                </p>
                <p className='font-small lg:font-[500] 
                 text-white lg:text-xs group-hover:scale-95 
                 group-hover:transition-all  group-hover:duration-100'>Read More</p>
              </div>
              
      </div>
        </div>
       </div>



      {/* Section 5 */}

      <div className=' ml-[1%] mr-[1%]  lg:flex lg:flex-col mt-[7%] mx-auto'>
         <div className='lg:flex justify-between'>
            <div className='lg:flex lg:flex-col gap-4 '>
                     <p className='text-xs font-light text-richblack-300 '>
                     Modern and stylish outfit
                     </p>
                     <div className='font-small lg:font-[500] text-richblack-900 lg:text-3xl text-xs'>
                     Latest Articles
                     </div>
            </div>
            <div>

            </div>
         </div>
         <div className='lg:flex gap-6 cursor-pointer flex-wrap w-screen mt-[3%]'>
         {

                 Homepagesec5.map( (element, index) => {
                return (
                    <div className='flex flex-col w-[23%] flex-wrap gap-1 relative' key={index}>
          
             
                    <img 
                      src={element.img}

                      className=' h-[177px] w-[315px] '
                      />
               <div className='flex justify-between w-[85%] bg-white absolute  top-[49%]'>
                <p className='p-2 text-xs font-[100] text-black'>
                   {element.ititle}
                </p>
                <div className='flex gap-1 p-2  '>
                    <AiOutlineShareAlt />
                    <FaRegComment />
                    <p className='text-xs'>0</p>
                </div>
               </div>

               
                <div className='flex flex-col mt-[10%] gap-3'>
                <p className='text-lg font-[500] text-richblack-800'>{element.title}</p>
                <p className='text-xs font-light text-richblack-300 
               '>{element.Description}</p>
                </div>
               
                
               
            
           </div>
             )
           } )


 //   <img 
 //     src = {img1}
 //     alt = "KNowYourProgressImage"
 //     className=' h-[296px] w-[246px] '
 //   />  
}
         </div>
      </div>
      {/* <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 first-letter bg-richblack-900 text-white'>

            <InstructorSection />

            <h2 className='text-center text-4xl font-semobold mt-10'>review from Other Learners</h2>
            
            
      </div> */}


      {/*Footer */}
      <Footer />

    </div>
  )
}

export default Home
