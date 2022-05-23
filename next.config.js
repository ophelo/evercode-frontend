// Backend url system if you set the override you 
// change the url in the development stage
// do not commit the change of BACKEND_OVERRIDE
const BACK_OVERRIDE = "http://localhost:5000";

const BACK_ENDPOINT = process.env.NODE_ENV === "development" ?
  BACK_OVERRIDE ?? process.env.BACK_ENDPOINT :
  BACK_OVERRIDE ?? process.env.NEXT_PUBLIC_BACK_ENDPOINT

module.exports = {
  env: {
    BACK_ENDPOINT: BACK_ENDPOINT
  }
};