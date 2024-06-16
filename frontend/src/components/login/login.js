import React from "react";


function login(){
    return(
        // <div className="text-center col-md-6 mx-auto p-2">
        //     <h1>Login</h1>
        //     <form>
        //         <input type="text" name="" id=""className="form-control mb-4" placeholder="Username" ></input>
        //         <input type="email" name="" id="" className="form-control mb-4" placeholder="Email"></input>
        //         <input type="password" name="" id="" className="form-control mb-4" placeholder="password"></input>
        //         <button type="submit" className="btn btn-success btn-info  d-block mx-auto fs-5">Login</button> 
        //     </form>
        // </div>
        <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="card shadow">
              <div className="card-title text-center border-bottom">
                <h2 className="p-3">Login</h2>
              </div>
              <div className="card-body">
                {/* invalid cred err */}
                {/* {errorOccurred === true && (
                  <p className="text-center" style={{ color:"blue" }}>
                    {errMsg}
                  </p>
                )} */}
                <form >
                  {/* radio */}
                  <div className="mb-4">
                    {/* <label
                    //   htmlFor="user"
                      className="form-check-label me-3"
                      style={{
                        fontSize: "1.2rem",
                        color: "black",
                      }}
                    >
                    </label> */}
                    <h4>As Student</h4>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                    //   {...register("username")}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                    //   {...register("password")}
                    />
                  </div>
  
                  <div className="text-center">
                    <button type="submit" className="text-white bg-black">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default login;