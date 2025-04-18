const asyncHandler=(requestHandler)=>{
  return async (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((error)=>next(error))
  }
}


// const asyncHandler=(requestHandler)=>async (req,res,next)=>{
//   try {
//     await requestHandler(req,res,next)
//   } catch (error) {
//     res.status(error.code || 500).json({
//       status: false,
//       message: error.message
//     })
//   }
// }