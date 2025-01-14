export enum Cafe24DisplayCode {
  /** @description 전체 페이지 */
  ALL = "all",
  /** @description 상품 분류 */
  PRODUCT_LIST = "PRODUCT_LIST",
  /** @description 상품 상세 */
  PRODUCT_DETAIL = "PRODUCT_DETAIL",
  /** @description 상품 검색 */
  PRODUCT_SEARCH = "PRODUCT_SEARCH",
  /** @description 기획전 */
  PRODUCT_PROJECT = "PRODUCT_PROJECT",
  /** @description 최근본상품 */
  PRODUCT_RECENT = "PRODUCT_RECENT",
  /** @description 게시판 메인 */
  BOARD_MAIN = "BOARD_MAIN",
  /** @description 게시판 목록 */
  BOARD_FREE_LIST = "BOARD_FREE_LIST",
  /** @description 게시판 상세보기 */
  BOARD_FREE_DETAIL = "BOARD_FREE_DETAIL",
  /** @description 게시물 쓰기 */
  BOARD_FREE_WRITE = "BOARD_FREE_WRITE",
  /** @description 게시물 수정 */
  BOARD_FREE_MODIFY = "BOARD_FREE_MODIFY",
  /** @description 게시물 답글 */
  BOARD_FREE_REPLY = "BOARD_FREE_REPLY",
  /** @description 상품사용후기 목록 */
  BOARD_PRODUCT_LIST = "BOARD_PRODUCT_LIST",
  /** @description 상품사용후기 상세보기 */
  BOARD_PRODUCT_DETAIL = "BOARD_PRODUCT_DETAIL",
  /** @description 상품사용후기 쓰기 */
  BOARD_PRODUCT_WRITE = "BOARD_PRODUCT_WRITE",
  /** @description 상품사용후기 수정 */
  BOARD_PRODUCT_MODIFY = "BOARD_PRODUCT_MODIFY",
  /** @description 상품사용후기 답글 */
  BOARD_PRODUCT_REPLY = "BOARD_PRODUCT_REPLY",
  /** @description 갤러리 목록 (갤러리형) */
  BOARD_GALLERY_LIST = "BOARD_GALLERY_LIST",
  /** @description 갤러리 상세보기 */
  BOARD_GALLERY_DETAIL = "BOARD_GALLERY_DETAIL",
  /** @description 갤러리 쓰기 */
  BOARD_GALLERY_WRITE = "BOARD_GALLERY_WRITE",
  /** @description 갤러리 수정 */
  BOARD_GALLERY_MODIFY = "BOARD_GALLERY_MODIFY",
  /** @description 갤러리 답글 */
  BOARD_GALLERY_REPLY = "BOARD_GALLERY_REPLY",
  /** @description 긴급문의접수 */
  BOARD_URGENCY = "BOARD_URGENCY",
  /** @description 1=1맞춤상담목록 */
  BOARD_CONSULT_LIST = "BOARD_CONSULT_LIST",
  /** @description 1=1맞춤상담상세 */
  BOARD_CONSULT_DETAIL = "BOARD_CONSULT_DETAIL",
  /** @description 1=1 맞춤상담 쓰기 */
  BOARD_CONSULT_WRITE = "BOARD_CONSULT_WRITE",
  /** @description 1=1 맞춤상담 수정 */
  BOARD_CONSULT_MODIFY = "BOARD_CONSULT_MODIFY",
  /** @description 1=1 맞춤상담 답글 */
  BOARD_CONSULT_REPLY = "BOARD_CONSULT_REPLY",
  /** @description 회원가입 */
  MEMBER_JOIN = "MEMBER_JOIN",
  /** @description 회원정보수정 */
  MEMBER_MODIFY = "MEMBER_MODIFY",
  /** @description 이용약관 */
  MEMBER_AGREEMENT = "MEMBER_AGREEMENT",
  /** @description 개인정보 취급방침 */
  MEMBER_PRIVACY = "MEMBER_PRIVACY",
  /** @description 회원가입결과 */
  MEMBER_JOINRESULT = "MEMBER_JOINRESULT",
  /** @description 아이디찾기 */
  MEMBER_ID_FIND = "MEMBER_ID_FIND",
  /** @description 비밀번호찾기 */
  MEMBER_PW_FIND = "MEMBER_PW_FIND",
  /** @description 마이쇼핑 메인 화면 */
  MYSHOP_MAIN = "MYSHOP_MAIN",
  /** @description 마이쇼핑 주문내역 */
  MYSHOP_ORDER_LIST = "MYSHOP_ORDER_LIST",
  /** @description 마이쇼핑 주문상세내역 */
  MYSHOP_ORDER_DETAIL = "MYSHOP_ORDER_DETAIL",
  /** @description 마이쇼핑 적립금내역 */
  MYSHOP_MILEAGE_LIST = "MYSHOP_MILEAGE_LIST",
  /** @description 마이쇼핑 쿠폰내역 */
  MYSHOP_COUPON_COUPON = "MYSHOP_COUPON_COUPON",
  /** @description 마이쇼핑 예치금내역 */
  MYSHOP_DEPOSIT_LIST = "MYSHOP_DEPOSIT_LIST",
  /** @description 배송주소록목록 */
  MYSHOP_ADDR_LIST = "MYSHOP_ADDR_LIST",
  /** @description 배송주소록등록 */
  MYSHOP_ADDR_REGIST = "MYSHOP_ADDR_REGIST",
  /** @description 배송주소록수정 */
  MYSHOP_ADDR_MODIFY = "MYSHOP_ADDR_MODIFY",
  /** @description 메인화면 */
  MAIN = "MAIN",
  /** @description 회원만 접근 가능 페이지 */
  MAIN_INTRO_MEMBER = "MAIN_INTRO_MEMBER",
  /** @description 본인인증 페이지 */
  MAIN_INTRO_ADULT = "MAIN_INTRO_ADULT",
  /** @description 이용안내(FAQ) */
  SHOPINFO_FAQ = "SHOPINFO_FAQ",
  /** @description 회사소개 */
  SHOPINFO_COMPANY = "SHOPINFO_COMPANY",
  /** @description 장바구니 화면 */
  ORDER_BASKET = "ORDER_BASKET",
  /** @description 주문서 작성화면 */
  ORDER_ORDERFORM = "ORDER_ORDERFORM",
  /** @description 주문 완료 */
  ORDER_ORDERRESULT = "ORDER_ORDERRESULT",
  /** @description 사은품 안내 */
  ORDER_GIFTLIST = "ORDER_GIFTLIST",
  /** @description 쿠폰존 */
  COUPON_COUPONZONE = "COUPON_COUPONZONE",
  /** @description 로그인 화면 */
  MEMBER_LOGIN = "MEMBER_LOGIN",
  /** @description 마이쇼핑 관심상품 목록 */
  MYSHOP_WISHLIST = "MYSHOP_WISHLIST",
  /** @description 상품비교 */
  PRODUCT_COMPARE = "PRODUCT_COMPARE",
  /** @description 운영일지 목록 */
  BOARD_OPDIARY_LIST = "BOARD_OPDIARY_LIST",
  /** @description 운영일지 읽기 */
  BOARD_OPDIARY_DETAIL = "BOARD_OPDIARY_DETAIL",
  /** @description 게시물 댓글삭제 */
  BOARD_FREE_COMMENTDEL = "BOARD_FREE_COMMENTDEL",
  /** @description 게시물 비밀글 */
  BOARD_FREE_SECRET = "BOARD_FREE_SECRET",
  /** @description 갤러리 댓글삭제 */
  BOARD_GALLERY_COMMENTDEL = "BOARD_GALLERY_COMMENTDEL",
  /** @description 갤러리 비밀글 */
  BOARD_GALLERY_SECRET = "BOARD_GALLERY_SECRET",
  /** @description 대량구매문의 목록 */
  BOARD_INQUIRY_LIST = "BOARD_INQUIRY_LIST",
  /** @description 대량구매문의 수정 */
  BOARD_INQUIRY_MODIFY = "BOARD_INQUIRY_MODIFY",
  /** @description 대량구매문의 등록 */
  BOARD_INQUIRY_WRITE = "BOARD_INQUIRY_WRITE",
  /** @description 대량구매문의 상세보기 */
  BOARD_INQUIRY_DETAIL = "BOARD_INQUIRY_DETAIL",
  /** @description 한줄메모 목록 */
  BOARD_MEMO_LIST = "BOARD_MEMO_LIST",
  /** @description 회원 비밀번호 인증 */
  MEMBER_CHECKPW = "MEMBER_CHECKPW",
  /** @description 아이디 찾기결과 */
  MEMBER_ID_FINDRESULT = "MEMBER_ID_FINDRESULT",
  /** @description 비밀번호찾기 결과 */
  MEMBER_PW_FINDRESULT = "MEMBER_PW_FINDRESULT",
  /** @description 비밀번호찾기 질문 */
  MEMBER_PW_FINDQUESTION = "MEMBER_PW_FINDQUESTION",
  /** @description 접근 제한 */
  MEMBER_ADMINFAIL = "MEMBER_ADMINFAIL",
  /** @description 나의 게시글 */
  MYSHOP_BOARDLIST = "MYSHOP_BOARDLIST",
  /** @description 미가용 적립내역보기 */
  MYSHOP_MILEAGE_UNAVAILLIST = "MYSHOP_MILEAGE_UNAVAILLIST",
  /** @description 취소신청 */
  MYSHOP_ORDER_CANCEL = "MYSHOP_ORDER_CANCEL",
  /** @description 교환신청 */
  MYSHOP_ORDER_EXCHANGE = "MYSHOP_ORDER_EXCHANGE",
  /** @description 반품신청 */
  MYSHOP_ORDER_RETURN = "MYSHOP_ORDER_RETURN",
  /** @description 세금계산서 신청 양식 */
  MYSHOP_ORDER_ISSUE_TAX = "MYSHOP_ORDER_ISSUE_TAX",
  /** @description 현금 영수증 신청 양식 */
  MYSHOP_ORDER_ISSUE_CASH = "MYSHOP_ORDER_ISSUE_CASH",
  /** @description 출석체크 (댓글형) */
  ATTEND_COMMENT = "ATTEND_COMMENT",
  /** @description 출석체크 (달력형) */
  ATTEND_STAMP = "ATTEND_STAMP",
  /** @description 캘린더게시판 (일간) */
  CALENDAR_DAY = "CALENDAR_DAY",
  /** @description 캘린더게시판 추가항목 */
  CALENDAR_FIELD = "CALENDAR_FIELD",
  /** @description 캘린더게시판 (월간) */
  CALENDAR_MONTH = "CALENDAR_MONTH",
  /** @description 캘린더게시판 (주간) */
  CALENDAR_WEEK = "CALENDAR_WEEK",
  /** @description 공급사 메인 */
  SUPPLY_INDEX = "SUPPLY_INDEX",
  /** @description 바로가기(링콘) */
  LINK_LIVELINKON = "LINK_LIVELINKON",
}

const codes = Object.values(Cafe24DisplayCode);

export const isCafe24DisplayCode = (code: unknown): code is Cafe24DisplayCode =>
  codes.includes(code as Cafe24DisplayCode);
