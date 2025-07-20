// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

// const Reviews = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Get reviews per page based on screen size
//   const getReviewsPerPage = () => {
//     if (typeof window !== 'undefined') {
//       if (window.innerWidth >= 1024) return 3; // Large screens
//       if (window.innerWidth >= 768) return 2;  // Medium screens
//       return 1; // Small screens
//     }
//     return 3; // Default
//   };

//   const [reviewsPerPage, setReviewsPerPage] = useState(getReviewsPerPage());
//   const totalPages = Math.ceil(reviewsData.length / reviewsPerPage);

//   // Handle window resize
//   React.useEffect(() => {
//     const handleResize = () => {
//       const newReviewsPerPage = getReviewsPerPage();
//       setReviewsPerPage(newReviewsPerPage);
//       // Reset to first page when screen size changes
//       setCurrentIndex(0);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Reviews data in JSON format
//   const reviewsData = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       role: "Marketing Director",
//       company: "TechStart Inc.",
//       rating: 5,
//       review: "Exceptional service! The freelancer delivered our project ahead of schedule with outstanding quality. Their communication was professional throughout the entire process.",
//       avatar: "SJ",
//       date: "March 2024"
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       role: "CEO",
//       company: "Digital Solutions",
//       rating: 5,
//       review: "Working with this guild has been a game-changer for our business. The talent pool is incredible and the project management is seamless.",
//       avatar: "MC",
//       date: "February 2024"
//     },
//     {
//       id: 3,
//       name: "Emily Rodriguez",
//       role: "Product Manager",
//       company: "InnovateCorp",
//       rating: 4,
//       review: "Great experience overall. The freelancer was skilled and delivered exactly what we needed. Would definitely recommend to other businesses.",
//       avatar: "ER",
//       date: "March 2024"
//     },
//     {
//       id: 4,
//       name: "David Thompson",
//       role: "Startup Founder",
//       company: "NextGen Apps",
//       rating: 5,
//       review: "Outstanding work quality and professionalism. They understood our vision perfectly and brought it to life. Exceeded all expectations!",
//       avatar: "DT",
//       date: "January 2024"
//     },
//     {
//       id: 5,
//       name: "Lisa Wang",
//       role: "Operations Manager",
//       company: "GrowthLab",
//       rating: 5,
//       review: "The freelancer guild provided us with top-tier talent. The project was completed efficiently with excellent attention to detail.",
//       avatar: "LW",
//       date: "February 2024"
//     },
//     {
//       id: 6,
//       name: "James Mitchell",
//       role: "Creative Director",
//       company: "Brand Studio",
//       rating: 4,
//       review: "Impressed with the creative solutions and timely delivery. The collaboration was smooth and the final result was exactly what we envisioned.",
//       avatar: "JM",
//       date: "March 2024"
//     },
//     {
//       id: 7,
//       name: "Anna Peterson",
//       role: "E-commerce Manager",
//       company: "ShopSmart",
//       rating: 5,
//       review: "Fantastic experience! The freelancer was responsive, professional, and delivered high-quality work. Will definitely work with them again.",
//       avatar: "AP",
//       date: "January 2024"
//     },
//     {
//       id: 8,
//       name: "Robert Kim",
//       role: "Tech Lead",
//       company: "CodeCraft",
//       rating: 5,
//       review: "Exceptional technical skills and great communication. The project was delivered on time and exceeded our quality standards.",
//       avatar: "RK",
//       date: "February 2024"
//     },
//     {
//       id: 9,
//       name: "Maria Garcia",
//       role: "Business Owner",
//       company: "Local Eats",
//       rating: 4,
//       review: "Very pleased with the service. The freelancer was professional, creative, and helped us achieve our business goals effectively.",
//       avatar: "MG",
//       date: "March 2024"
//     }
//   ];

//   const nextReviews = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex + reviewsPerPage >= reviewsData.length ? 0 : prevIndex + reviewsPerPage
//     );
//   };

//   const prevReviews = () => {
//     setCurrentIndex((prevIndex) => 
//       prevIndex === 0 ? Math.max(0, reviewsData.length - reviewsPerPage) : prevIndex - reviewsPerPage
//     );
//   };

//   const getCurrentReviews = () => {
//     return reviewsData.slice(currentIndex, currentIndex + reviewsPerPage);
//   };

//   const renderStars = (rating) => {
//     return [...Array(5)].map((_, index) => (
//       <Star
//         key={index}
//         className={`reviewss-starss ${index < rating ? 'reviewss-starss-filleddd' : 'reviewss-starss-emptyyyy'}`}
//       />
//     ));
//   };

//   return (
//     <>
//       <style jsx>{`
//         :root {
//           --primary-color: #398e93;
//           --secondary-color: #5fc8c5;
//           --dark-color: #2c3e50;
//           --light-gray: #f8f9fa;
//           --medium-gray: #6c757d;
//           --white: #ffffff;
//           --shadow-light: rgba(0, 0, 0, 0.1);
//           --shadow-medium: rgba(0, 0, 0, 0.15);
//           --shadow-heavy: rgba(0, 0, 0, 0.25);
//           --border-radius: 16px;
//           --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .reviewss-containerrr {
//           background-color: var(--light-gray);
//           padding: 4rem 1rem;
//         }

//         .reviewss-wrapperr {
//           max-width: 80rem;
//           margin: 0 auto;
//         }

//         .reviewss-headerr {
//           text-align: center;
//           margin-bottom: 3rem;
//         }

//         .reviewss-titleee {
//           font-size: 2.5rem;
//           font-weight: bold;
//           color: var(--dark-color);
//           margin-bottom: 1rem;
//         }

//         .reviewss-subtitleee {
//           font-size: 1.25rem;
//           color: var(--medium-gray);
//           max-width: 42rem;
//           margin: 0 auto;
//         }

//         .reviewss-carousellll {
//           position: relative;
//         }

//         .reviewss-nav-buttonnn {
//           position: absolute;
//           top: 50%;
//           transform: translateY(-50%);
//           z-index: 10;
//           padding: 0.75rem;
//           border: none;
//           background-color: var(--white);
//           border-radius: var(--border-radius);
//           box-shadow: 0 4px 20px var(--shadow-medium);
//           transition: var(--transition);
//           cursor: pointer;
//         }

//         .reviewss-nav-buttonnn:hover {
//           box-shadow: 0 8px 30px var(--shadow-heavy);
//           background-color: var(--secondary-color);
//           transform: translateY(-50%) scale(1.05);
//         }

//         .reviewss-nav-buttonnn:disabled {
//           opacity: 0.5;
//           cursor: not-allowed;
//         }

//         .reviewss-nav-buttonnn:disabled:hover {
//           background-color: var(--white);
//           transform: translateY(-50%) scale(1);
//         }

//         .reviewss-nav-lefttt {
//           left: -1rem;
//         }

//         .reviewss-nav-rightttt {
//           right: -1rem;
//         }

//         .reviewss-griddd {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 2rem;
//           padding: 0 2rem;
//         }

//         @media (min-width: 768px) {
//           .reviewss-griddd {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }

//         @media (min-width: 1024px) {
//           .reviewss-griddd {
//             grid-template-columns: repeat(3, 1fr);
//           }
//         }

//         .reviewss-carddd {
//           background-color: var(--white);
//           border-radius: var(--border-radius);
//           box-shadow: 0 4px 20px var(--shadow-light);
//           padding: 2rem;
//           position: relative;
//           overflow: hidden;
//           min-height: 20rem;
//           display: flex;
//           flex-direction: column;
//           transition: var(--transition);
//         }

//         .reviewss-carddd:hover {
//           box-shadow: 0 8px 30px var(--shadow-medium);
//           transform: translateY(-5px);
//         }

//         .reviewss-quote-iconnn {
//           position: absolute;
//           top: 1rem;
//           right: 1rem;
//           opacity: 0.2;
//           color: var(--primary-color);
//         }

//         .reviewss-user-infoooo {
//           display: flex;
//           align-items: center;
//           margin-bottom: 1.5rem;
//         }

//         .reviewss-avatarrr {
//           width: 3rem;
//           height: 3rem;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           color: white;
//           font-weight: 600;
//           font-size: 0.875rem;
//           margin-right: 1rem;
//           background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
//         }

//         .reviewss-user-detailsss {
//           flex: 1;
//         }

//         .reviewss-user-nameee {
//           font-size: 1.125rem;
//           font-weight: 600;
//           color: var(--dark-color);
//           margin-bottom: 0.25rem;
//         }

//         .reviewss-user-roleee {
//           font-size: 0.875rem;
//           color: var(--medium-gray);
//         }

//         .reviewss-ratinggg {
//           display: flex;
//           align-items: center;
//           margin-bottom: 1rem;
//         }

//         .reviewss-starss {
//           width: 1rem;
//           height: 1rem;
//           margin-right: 0.125rem;
//         }

//         .reviewss-starss-filleddd {
//           color: #fbbf24;
//           fill: #fbbf24;
//         }

//         .reviewss-starss-emptyyyy {
//           color: var(--medium-gray);
//           fill: transparent;
//         }

//         .reviewss-rating-texttt {
//           font-size: 0.875rem;
//           color: var(--medium-gray);
//           margin-left: 0.5rem;
//         }

//         .reviewss-texttt {
//           font-size: 0.875rem;
//           line-height: 1.6;
//           color: var(--dark-color);
//           margin-bottom: 1rem;
//           flex-grow: 1;
//         }

//         .reviewss-dateee {
//           font-size: 0.75rem;
//           color: var(--medium-gray);
//         }

//         .reviewss-decorativeeee {
//           position: absolute;
//           bottom: 0;
//           left: 0;
//           width: 100%;
//           height: 4px;
//           background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
//         }

//         .reviewss-paginationnn {
//           display: flex;
//           justify-content: center;
//           margin-top: 3rem;
//           gap: 0.5rem;
//         }

//         .reviewss-dottt {
//           width: 0.75rem;
//           height: 0.75rem;
//           border-radius: 50%;
//           border: none;
//           cursor: pointer;
//           transition: var(--transition);
//           opacity: 0.6;
//           background-color: var(--medium-gray);
//         }

//         .reviewss-dottt.activeeee {
//           width: 2rem;
//           opacity: 1;
//           background-color: var(--primary-color);
//         }

//         .reviewss-dottt:hover:not(.activeeee) {
//           background-color: var(--secondary-color);
//           opacity: 0.8;
//         }

//         .reviewss-statssss {
//           margin-top: 4rem;
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 2rem;
//           text-align: center;
//         }

//         @media (min-width: 768px) {
//           .reviewss-statssss {
//             grid-template-columns: repeat(3, 1fr);
//           }
//         }

//         .reviewss-stat-carddd {
//           background-color: var(--white);
//           border-radius: var(--border-radius);
//           box-shadow: 0 4px 15px var(--shadow-light);
//           padding: 1.5rem;
//         }

//         .reviewss-stat-numberrr {
//           font-size: 2rem;
//           font-weight: bold;
//           margin-bottom: 0.5rem;
//         }

//         .reviewss-stat-numberrr.primaryyyy {
//           color: var(--primary-color);
//         }

//         .reviewss-stat-numberrr.secondaryyy {
//           color: var(--secondary-color);
//         }

//         .reviewss-stat-labelll {
//           color: var(--medium-gray);
//         }

//         .reviewss-iconnn {
//           width: 1.5rem;
//           height: 1.5rem;
//           color: var(--dark-color);
//         }
//       `}</style>

//       <div className="reviewss-containerrr">
//         <div className="reviewss-wrapperr">
//           {/* Header */}
//           <div className="reviewss-headerr">
//             <h2 className="reviewss-titleee">
//               What Our Clients Say
//             </h2>
//             <p className="reviewss-subtitleee">
//               Don't just take our word for it. Here's what our satisfied clients have to say about working with our talented freelancers.
//             </p>
//           </div>

//           {/* Reviews Carousel */}
//           <div className="reviewss-carousellll">
//             {/* Navigation Buttons */}
//             <button
//               onClick={prevReviews}
//               className="reviewss-nav-buttonnn reviewss-nav-lefttt"
//               disabled={currentIndex === 0}
//             >
//               <ChevronLeft className="reviewss-iconnn" />
//             </button>

//             <button
//               onClick={nextReviews}
//               className="reviewss-nav-buttonnn reviewss-nav-rightttt"
//               disabled={currentIndex + reviewsPerPage >= reviewsData.length}
//             >
//               <ChevronRight className="reviewss-iconnn" />
//             </button>

//             {/* Reviews Grid */}
//             <div className="reviewss-griddd">
//               {getCurrentReviews().map((review) => (
//                 <div key={review.id} className="reviewss-carddd">
//                   {/* Quote Icon */}
//                   <div className="reviewss-quote-iconnn">
//                     <Quote className="reviewss-iconnn" />
//                   </div>

//                   {/* User Info */}
//                   <div className="reviewss-user-infoooo">
//                     <div className="reviewss-avatarrr">
//                       {review.avatar}
//                     </div>
//                     <div className="reviewss-user-detailsss">
//                       <h4 className="reviewss-user-nameee">
//                         {review.name}
//                       </h4>
//                       <p className="reviewss-user-roleee">
//                         {review.role} at {review.company}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Rating */}
//                   <div className="reviewss-ratinggg">
//                     <div className="reviewss-starss-containerrr">
//                       {renderStars(review.rating)}
//                     </div>
//                     <span className="reviewss-rating-texttt">
//                       ({review.rating}/5)
//                     </span>
//                   </div>

//                   {/* Review Text */}
//                   <p className="reviewss-texttt">
//                     "{review.review}"
//                   </p>

//                   {/* Date */}
//                   <div className="reviewss-dateee">
//                     {review.date}
//                   </div>

//                   {/* Decorative Element */}
//                   <div className="reviewss-decorativeeee"></div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Pagination Dots */}
//           <div className="reviewss-paginationnn">
//             {[...Array(totalPages)].map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentIndex(index * reviewsPerPage)}
//                 className={`reviewss-dottt ${
//                   Math.floor(currentIndex / reviewsPerPage) === index ? 'activeeee' : ''
//                 }`}
//               />
//             ))}
//           </div>

//           {/* Stats Section */}
//           <div className="reviewss-statssss">
//             <div className="reviewss-stat-carddd">
//               <div className="reviewss-stat-numberrr primaryyyy">500+</div>
//               <div className="reviewss-stat-labelll">Happy Clients</div>
//             </div>
//             <div className="reviewss-stat-carddd">
//               <div className="reviewss-stat-numberrr secondaryyy">4.8/5</div>
//               <div className="reviewss-stat-labelll">Average Rating</div>
//             </div>
//             <div className="reviewss-stat-carddd">
//               <div className="reviewss-stat-numberrr primaryyyy">1000+</div>
//               <div className="reviewss-stat-labelll">Projects Completed</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Reviews;