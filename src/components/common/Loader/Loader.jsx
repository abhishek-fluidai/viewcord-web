import "./Loader.css";
const Loader = () => {
  return (
    // <div className="loader">
    //   <div className="loader-inner">
    //     <div className="loader-line-wrap">
    //       <div className="loader-line"></div>
    //     </div>
    //     <div className="loader-line-wrap">
    //       <div className="loader-line"></div>
    //     </div>
    //     <div className="loader-line-wrap">
    //       <div className="loader-line"></div>
    //     </div>
    //     <div className="loader-line-wrap">
    //       <div className="loader-line"></div>
    //     </div>
    //     <div className="loader-line-wrap">
    //       <div className="loader-line"></div>
    //     </div>
    //   </div>
    // </div>
    <div className="loader">
    <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
   <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
</svg>
</div>
  );
};

export default Loader;