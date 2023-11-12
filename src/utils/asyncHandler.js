const asyncHandler = (requestHandler) => {
  return(req, res, next) => {                 //TODO: return
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    )
  }
}

asyncHandler();

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
