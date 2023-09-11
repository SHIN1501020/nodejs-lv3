/**
 * 오류를 처리하기 위한 request handelr 핸들러
 * 
 * 
 * @function
 * @param {function} fn - 비동기 함수 
 * @returns {function} - 미들웨어 함수 반환
 * @namespace asyncHandler
 */
export const asyncHandler = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next); //* 함수실행
    } catch (error) {
      next(error);
    }
  };
};
