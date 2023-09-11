import { CustomError } from "./CustomError.js";
/**
 * 유효성 검사 에러 클래스
 * 
 * 유효성 검사 에러를 처리하기 위한 클래스입니다.
 * 
 * @class
 * @namespace VALIDITY_ERROR
 */
export class VALIDITY_ERROR extends CustomError {
    constructor(message) {
        super(412, message);
      }
  }
  