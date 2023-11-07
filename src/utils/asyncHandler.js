const asyncHandler =(requestHandler)=>{
  (req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next))
    .catch((error)=>next(error))
  }
}




asyncHandler()

// const asyncHandler = (fn) => async(req,res,next)=>{
//   try {
//     await fn(req,res,next)
//   } catch (error) {
//     res.send(error.code || 500).json({
//       success:false,
//       massage:error.massage
//     })
//   }
// }