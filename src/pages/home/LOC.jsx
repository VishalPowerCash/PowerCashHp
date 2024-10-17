import { Link } from "react-router-dom"

export default function LOC() {
    return (<>
        <div className="mb-3">
            <div className=" mb-3">
                <div className="container border-0 h-100  bg-black text-white" style={{ borderRadius: "20px" }}>
                    <div className="row">
                        <div className="col-12 col-md-6 p-4 d-flex flex-column justify-content-between">
                            <div className="p-3 ">
                                <h2 className=" fw-bold text-start mb-3 display-6"> Line of Credit</h2>


                                <p className="text-start display-6 " style={{ color: "#fffffff0", fontSize: "1rem" }}>

                                    Borrow as little or as much as required, up to your credit limit.
                                </p>

                            </div>
                            <Link to="/products/line-of-credit" className="btn-sm rounded-3 mb-3 py-1 px-3 m-3" style={{ backgroundColor: "white", width: "130px" }}>Start Now</Link>

                        </div>
                        <div className="col-12 col-md-6 p-0">
                            <img src="images/LOC.svg" className="img-fluid my-3" style={{ width: "250px" }} alt="" />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </>)
}