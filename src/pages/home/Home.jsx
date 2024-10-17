import BigItemCard from "../../components/BigItemCard";
import ItemCard from "../../components/ItemCard";
import LoanCalculator from "../../components/LoanCalculator";
import ClientDiv from "./ClientDiv";
import "./Home.css"
import LOC from "./LOC";
import WhyPowerCash from "./WhyPowerCash";

const imageSources = [
    'ecomLogos/AmazonLogo.png',
    'ecomLogos/meesho.png',
    'ecomLogos/walmartLogo.png',
    'ecomLogos/myntra.png',
    'ecomLogos/flipkart.png',
    'ecomLogos/EbayLogo.png',
    'ecomLogos/AlibabaLogo.png',
    'ecomLogos/ShopifyLogo.jpeg',
];

const EcommerceLending = () => {
    return (
        <div style={{ marginLeft: "-40px" }
        }>
            {/* First row: Images 1 to 4 */}
            < div style={{ display: 'flex', justifyContent: 'center', marginLeft: "-70px" }}>
                {
                    imageSources.slice(0, 4).map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`E-commerce Option ${index + 1}`}
                            className="img-fluid "
                            style={{ width: '86px', height: '86px', borderRadius: "20px", margin: "5px" }} // Adjust size as needed
                        />
                    ))
                }
            </div >

            {/* Second row: Images 5 to 8 */}
            < div style={{ display: 'flex', justifyContent: 'center', marginLeft: "10px" }}>
                {
                    imageSources.slice(4, 8).map((src, index) => (
                        <img
                            key={index + 4} // To ensure a unique key for each image
                            src={src}
                            alt={`E-commerce Option ${index + 5}`}
                            className="img-fluid"
                            style={{ width: '86px', height: '86px', borderRadius: "20px", margin: "5px" }}  // Adjust size as needed
                        />
                    ))
                }
            </div >
        </div >


    );
};


export default function Home() {
    const images = <div style={{ width: "120%", overflow: "hidden" }}>{
        EcommerceLending()
    }</div>
    return (
        <div className=" ">
            <div className='p-3 bg-black'>

                <h5 className='mt-5 mb-4' style={{ color: "#adb5bd" }}>Powering growth for over <strong className='text-white'>200,000 businesses</strong> – from startups to enterprises.</h5>
                <h1 className='mb-5 text-white'>Effortless lending and partnerships <br /> management for every business</h1>
                <div className='w-100 d-flex justify-content-center'>
                    <a className='text-white btn mb-4 rounded-3' style={{ backgroundColor: "#0059FF" }} href="https://docs.google.com/forms/d/e/1FAIpQLSdJK96stqrqucXD2wRWmQcvSIxm1s9HbCWODcLsbjsoxq8UgA/viewform?pli=1">Contact Sales


                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 1 16 16"
                            className="bi bi-arrow-right ms-2"
                        >
                            <path
                                fillRule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                stroke="currentColor"
                                strokeWidth="1"
                            />
                        </svg>

                    </a>
                </div>
                <ClientDiv />
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 col-md-8">
                        <h1 className=" fw-bold text-start mb-3">One platform to get loans and simplify your finances</h1>
                        <p className="lead text-start text-muted para">Drive revenue, reduce costs, and access funding on one platform. Handle loan applications, repayments, financing, reconciliation, and fraud prevention seamlessly.</p>
                    </div>
                </div>
            </div>

            <div className="container my-2"  >
                <div className="row">
                    <div className="col-md-6 col-lg-4 mb-3">
                        <ItemCard
                            heading="E-Commerce Lending"
                            buttonText="Explore Now!"
                            paragraph="Unlock fast, flexible funding with our e-commerce lending to fuel your business growth and success."
                            body={images}
                        />
                    </div>
                    <div className="d-block d-lg-none col-md-6  mb-3">
                        <ItemCard heading="Anchor Business Finance"
                            buttonText="Explore Now!"
                            paragraph="Empower your supply chain with flexible financing backed by your business’s credit. "
                            body={<img style={{ width: "270px" }} src="/productCardImages/anchorImage.svg" />} />
                    </div>
                    <div className="col-lg-8 mb-3">
                        <div className="container border-0 h-100 " style={{ backgroundColor: "white", borderRadius: "20px" }}>
                            <div className="row">
                                <div className="col-12 col-md-6 p-4">
                                    <div className="p-1">
                                        <h2 className=" fw-bold text-start mb-3"> Access Funds Effortlessly & Secure Your Future</h2>


                                        <p className="text-start text-muted normalPara  ">

                                            Need quick financial support?
                                        </p>
                                        <ul className="mt-2 text-start text-muted normalPara">
                                            <li>Quick Approvals</li>
                                            <li>Low Interest Rates</li>
                                            <li>Flexible Repayment Options </li>
                                            <li>Transparent Process</li>
                                            <li>Trusted by Thousands</li>
                                        </ul>
                                        <p className="mt-2 text-start  normalPara">
                                            Explore Now! and take control of your financial journey with a few clicks <br />
                                            <button className="btn-sm rounded-3 mb-3 py-1 px-3 my-3" style={{ backgroundColor: "#ced4da" }}>Explore Now!</button>
                                        </p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 p-0">
                                    <LoanCalculator />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <LOC />
                <div className="row">
                    <div className="d-none d-lg-block col-lg-4 mb-3">
                        <ItemCard heading="Anchor Business Finance"
                            buttonText="Explore Now!"
                            paragraph="Empower your supply chain with flexible financing backed by your business’s credit. "
                            body={<img style={{ width: "270px" }} src="/productCardImages/anchorImage.svg" />} />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-3">
                        <ItemCard heading="Unsecured Business Loans"
                            buttonText="Explore Now!"
                            paragraph="Get fast, flexible financing with no collateral needed to grow your business and manage cash flow.."
                            body={<img style={{ width: "270px" }} src="/productCardImages/unsecImage.svg" />} />
                    </div>
                    <div className="col-md-6 col-lg-4 mb-3">
                        <ItemCard heading="Rental Deposit Finance"
                            buttonText="Explore Now!"
                            paragraph="Get fast, hassle-free financing for your rental deposit with no collateral required."
                            body={<img style={{ width: "270px" }} src="/productCardImages/phone.svg" />} />
                    </div>
                </div>
            </div>
            <WhyPowerCash />
            <div className='w-100 py-1 px-3 px-md-4 bg-black row m-0'>
                <div className="w-100 col-md-8 text-start p-3  p-md-5">
                    <h1 className='text-white'>Simplify Loans <br />
                        and money management</h1>

                    <h5 className='mt-3 mb-4' style={{ color: "#adb5bd" }}>Drive Lending, Less Rates, and manage funds with PowerCash.</h5>
                    <div className='w-100 d-flex justify-content-start'>
                        <a className='text-white btn mb-4 rounded-3' style={{ backgroundColor: "#0059FF", minWidth: "150px" }} href="https://docs.google.com/forms/d/e/1FAIpQLSdJK96stqrqucXD2wRWmQcvSIxm1s9HbCWODcLsbjsoxq8UgA/viewform?pli=1">Start Now


                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                viewBox="0 1 16 16"
                                className="bi bi-arrow-right ms-2"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                                    stroke="currentColor"
                                    strokeWidth="1"
                                />
                            </svg>

                        </a>
                    </div>
                </div>
            </div>
        </div >

    )
}