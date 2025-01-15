/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Enum,
  Cafe24Datetime,
} from "cafe24-types";
import * as base from "../client";

export type Endpoints = ReturnType<typeof Endpoints>;
export const Endpoints = (self: base.Client) => ({
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/dcollection/#shops
   */
  shops: {
    /**
     * Scopes:
     * - dcollection.read_shop
     *
     * @see https://developers.cafe24.com/docs/api/dcollection/#retrieve-a-list-of-stores
     */
    retrieveAListOfStores(
      request: RetrieveAListOfStoresRequest,
      options?: base.RequestOptions<RetrieveAListOfStoresRequest>,
    ): Promise<RetrieveAListOfStoresResponse> {
      return self.createRequest("GET", "/api/shops", request, options);
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/dcollection/#products
   */
  products: {
    /**
     * Scopes:
     * - dcollection.read_product
     *
     * @see https://developers.cafe24.com/docs/api/dcollection/#retrieve-a-list-of-products
     */
    retrieveAListOfProducts(
      request: RetrieveAListOfProductsRequest,
      options?: base.RequestOptions<RetrieveAListOfProductsRequest>,
    ): Promise<RetrieveAListOfProductsResponse> {
      return self.createRequest("GET", "/api/products", request, options);
    },
    /**
     * Scopes:
     * - dcollection.read_product
     *
     * @see https://developers.cafe24.com/docs/api/dcollection/#retrieve-the-number-of-product-items
     */
    retrieveTheNumberOfProductItems(
      request: RetrieveTheNumberOfProductItemsRequest,
      options?: base.RequestOptions<RetrieveTheNumberOfProductItemsRequest>,
    ): Promise<RetrieveTheNumberOfProductItemsResponse> {
      return self.createRequest("GET", "/api/products/count", request, options);
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/dcollection/#products-standardtags
   */
  productsstandardtags: {
    /**
     * Scopes:
     * - dcollection.read_product
     *
     * @see https://developers.cafe24.com/docs/api/dcollection/#retrieve-a-list-of-product-tag-properties
     */
    retrieveAListOfProductTagProperties(
      request: RetrieveAListOfProductTagPropertiesRequest,
      options?: base.RequestOptions<RetrieveAListOfProductTagPropertiesRequest>,
    ): Promise<RetrieveAListOfProductTagPropertiesResponse> {
      return self.createRequest(
        "GET",
        "/api/products/standardtags",
        request,
        options,
      );
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/dcollection/#storeproducts
   */
  storeproducts: {
    /**
     * Scopes:
     * - dcollection.read_product
     *
     * @see https://developers.cafe24.com/docs/api/dcollection/#retrieve-a-list-of-products-with-mall-id
     */
    retrieveAListOfProductsWithMallId(
      request: RetrieveAListOfProductsWithMallIdRequest,
      options?: base.RequestOptions<RetrieveAListOfProductsWithMallIdRequest>,
    ): Promise<RetrieveAListOfProductsWithMallIdResponse> {
      return self.createRequest("GET", "/api/storeproducts", request, options);
    },
  },
});

interface RetrieveAListOfStoresRequest {
  /**
   * @description
   * D.Collection 상점 표준 카테고리
   *
   * 검색 가능한 값 : 카테고리 번호
   * dcollection_store_category
   */
  dcollectionStoreCategory?: any;
  /**
   * @description
   * 상점명
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   *
   * @constraints
   * 배열 최대사이즈: [3]
   */
  shopName?: any;
  /**
   * @description
   * 상점 아이디
   */
  storeId?: any;
  /**
   * @description
   * 멀티쇼핑몰 번호
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   *
   * @constraints
   * 배열 최대사이즈: [3]
   */
  shopNo?: any;
  /**
   * @description
   * 결제 화폐
   *
   * 검색 가능한 값 : ISO_4217 통화 코드
   *
   * KRW : ￦ 원
   * USD : $ 달러
   * JPY : ¥ 엔
   * PHP : ₱ 페소
   */
  shopCurrencyCode?: any;
  /**
   * @description
   * 상점 언어
   *
   * ko_KR : 한국어
   * en_US : 영어
   * zh_CN : 중국어(간체)
   * zh_TW : 중국어(번체)
   * ja_JP : 일본어
   * vi_VN : 베트남어
   */
  shopLanguage?: any;
  /**
   * @description
   * 상점 인기도
   *
   * black : 인기지수 90 이상
   * purple : 인기지수 80 이상
   * green : 인기지수 70 이상
   * orange : 인기지수 70 미만
   */
  shopGrade?: any;
  /**
   * @description
   * 상점 인기 연령대
   *
   * teenager : 10대
   * twenties : 20대
   * thirties : 30대
   * forties : 40대
   * etc : 기타
   */
  shopPopularAge?: any;
  /**
   * @description
   * 인기 성별
   *
   * F : 여성
   * M : 남성
   */
  shopSex?: any;
  /**
   * @description
   * 인기 지역
   *
   * 서울
   * 경기
   * 인천
   * 강원
   * 충북
   * 세종
   * 충남
   * 대전
   * 경북
   * 대구
   * 울산
   * 부산
   * 경남
   * 전북
   * 전남
   * 광주
   * 제주
   */
  shopRegion?: any;
  /**
   * @description
   * 상점 태그
   *
   * 검색 가능한 값 : 상점 태그 코드
   * dcollection_store_taglist
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   *
   * @constraints
   * 배열 최대사이즈: [10]
   */
  shopTags?: any;
  /**
   * @description
   * 상점의 카페24페이 사용여부
   *
   * true : 사용함
   * false : 사용안함
   */
  useCafe24pay?: any;
  /**
   * @description
   * 상점의 네이버페이 사용여부
   *
   * true : 사용함
   * false : 사용안함
   */
  useNaverpay?: any;
  /**
   * @description
   * 상점의 우체국EMS 사용여부
   *
   * true : 사용함
   * false : 사용안함
   */
  useEMS?: any;
  /**
   * @description
   * SNS 로그인 연동 채널
   *
   * facebook : 페이스북
   * kakao : 카카오
   * naver : 네이버
   * line : 라인
   * google : 구글
   * apple : 애플
   */
  socialLogins?: any;
  /**
   * @description
   * 상점의 기본 배송비 유형
   *
   * T : 배송비 무료
   * R : 고정배송비 사용
   * M : 구매 금액에 따른 부과
   * D : 구매 금액별 차등 배송료 사용
   * W : 상품 무게별 차등 배송료 사용
   * C : 상품 수량별 차등 배송료 사용
   * N : 상품 수량에 비례하여 배송료 부과
   * E : 자동 책정 배송비(EMS) 사용
   * F : 착불
   */
  shippingFeeType?: any;
  /**
   * @description
   * 상점에서 제공하는 고객 혜택 유형
   *
   * DP : 기간 할인
   * DR : 재구매 할인
   * DQ : 대량구매 할인
   * DM : 회원 할인
   * DN : 신규 상품 할인
   * DV : 배송비 할인
   * PG : 사은품
   * PB : 1+N 이벤트
   */
  benefits?: any;
  /**
   * @description
   * 상점에서 지원하는 해외 결제 서비스
   *
   * AX : 엑시즈
   * EX : 엑심베이
   * PP : 페이팔
   * CG : 위챗페이
   * EY : ECPAY
   * PW : 페이먼트월
   */
  globalPaymentType?: any;
  /**
   * @description
   * 상점 생성일 검색 시작 값
   *
   * @constraints
   * 날짜
   */
  createdStartDate?: any;
  /**
   * @description
   * 상점 생성일 검색 종료 값
   *
   * @constraints
   * 날짜
   */
  createdEndDate?: any;
  /**
   * @description
   * 조회 결과 최대 건수
   *
   *
   * @constraints
   * 최소: [1]~최대: [100]
   */
  limit?: any;
  /**
   * @description
   * 조회 결과 시작 위치
   *
   *
   * @constraints
   * 최소: [0]~최대: [5000]
   */
  offset?: any;
  /**
   * @description
   * 정렬 순서 값
   *
   * created_date : 상점 생성일
   * shop_name : 상점명
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * asc : 오름차순
   * desc : 내림차순
   */
  order?: any;
}

interface RetrieveAListOfProductsRequest {
  /**
   * @description
   * D.Collection 상품 표준 카테고리
   *
   * Metaport 상품 표준 카테고리
   * 검색 가능한 값 : 중분류 또는 소분류 카테고리 번호
   * dcollection_product_category
   * 중분류가 같은 소분류 카테고리에 한하여 소분류 카테고리는 (콤마)로 최대 10개까지 검색
   * 중분류 상품 카테고리와 소분류 상품 카테고리를 동시 요청 시 소분류 상품 카테고리만 검색
   */
  dcollectionProductCategory: any;
  /**
   * @description
   * 상품의 고유키
   *
   * 특정 상점의 상품을 구분하는 고유한 값
   * 검색 가능한 값
   * 구문 : "${mall_id}_${shop_no}_${product_no}"
   * 예시 : cafe24_1_1356
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   *
   * @constraints
   * 배열 최대사이즈: [100]
   */
  productUkey?: any;
  /**
   * @description
   * 상점명
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   *
   * @constraints
   * 배열 최대사이즈: [3]
   */
  shopName?: any;
  /**
   * @description
   * 상점 아이디
   *
   * product_ukey와 동시 사용 불가
   */
  storeId?: any;
  /**
   * @description
   * 멀티쇼핑몰 번호
   *
   * product_ukey와 동시 사용 불가
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   *
   * @constraints
   * 배열 최대사이즈: [3]
   */
  shopNo?: any;
  /**
   * @description
   * 상점 인기도
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   *
   * black : 인기지수 90 이상
   * purple : 인기지수 80 이상
   * green : 인기지수 70 이상
   * orange : 인기지수 70 미만
   *
   * @constraints
   * 배열 최대사이즈: [4]
   */
  shopGrade?: any;
  /**
   * @description
   * 상점 언어
   *
   * ko_KR : 한국어
   * en_US : 영어
   * zh_CN : 중국어(간체)
   * zh_TW : 중국어(번체)
   * ja_JP : 일본어
   * vi_VN : 베트남어
   */
  shopLanguage?: any;
  /**
   * @description
   * 결제 화폐
   *
   * 검색 가능한 값 : ISO_4217 통화 코드
   *
   * KRW : ￦ 원
   * USD : $ 달러
   * JPY : ¥ 엔
   * PHP : ₱ 페소
   */
  shopCurrencyCode?: any;
  /**
   * @description
   * 상품명
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   *
   * @constraints
   * 배열 최대사이즈: [3]
   */
  productName?: any;
  /**
   * @description
   * 상품번호
   *
   * product_ukey와 동시 사용 불가
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   *
   * @constraints
   * 배열 최대사이즈: [3]
   */
  productNo?: any;
  /**
   * @description
   * 상품 상태
   *
   * N : 신상품
   * B : 반품 상품
   * R : 재고 상품
   * U : 중고 상품
   * E : 전시 상품
   * F : 리퍼 상품
   * S : 스크래치 상품
   */
  productStatusType?: any;
  /**
   * @description
   * 상품 판매가 검색 최소 값
   *
   * 소수점 2째 자리까지 입력
   */
  priceMin?: any;
  /**
   * @description
   * 상품 판매가 검색 최대 값
   *
   * 소수점 2째 자리까지 입력
   */
  priceMax?: any;
  /**
   * @description
   * PC 할인 여부
   *
   * true : 사용함
   * false : 사용안함
   */
  isPcDiscount?: any;
  /**
   * @description
   * 모바일 할인 여부
   *
   * true : 사용함
   * false : 사용안함
   */
  isMobileDiscount?: any;
  /**
   * @description
   * PC 할인 판매가 검색 최소 값
   *
   * PC 할인 판매가가 해당 범위 이상인 상품 검색
   * 소수점 2째 자리까지 입력
   */
  pcDiscountPriceMin?: any;
  /**
   * @description
   * PC 할인 판매가 검색 최대 값
   *
   * PC 할인 판매가가 해당 범위 이상인 상품 검색
   * 소수점 2째 자리까지 입력
   */
  pcDiscountPriceMax?: any;
  /**
   * @description
   * 모바일 할인 판매가 검색 최소 값
   *
   * 모바일 할인 판매가가 해당 범위 이상인 상품 검색
   * 소수점 2째 자리까지 입력
   */
  mobileDiscountPriceMin?: any;
  /**
   * @description
   * 모바일 할인 판매가 검색 최대 값
   *
   * 모바일 할인 판매가가 해당 범위 이상인 상품 검색
   * 소수점 2째 자리까지 입력
   */
  mobileDiscountPriceMax?: any;
  /**
   * @description
   * PC 할인율 최소 값
   */
  pcDiscountRateMin?: any;
  /**
   * @description
   * PC 할인율 최대 값
   */
  pcDiscountRateMax?: any;
  /**
   * @description
   * 모바일 할인율 최소 값
   */
  mobileDiscountRateMin?: any;
  /**
   * @description
   * 모바일 할인율 최대 값
   */
  mobileDiscountRateMax?: any;
  /**
   * @description
   * 무료 배송 상품 여부
   *
   * true : 사용함
   * false : 사용안함
   */
  isFreeShipping?: any;
  /**
   * @description
   * 해외 배송 가능 여부
   *
   * true : 사용함
   * false : 사용안함
   */
  isInternationalShipping?: any;
  /**
   * @description
   * 상품이 배송될 수 있는 해외 국가
   */
  internationalShippingCountry?: any;
  /**
   * @description
   * 사은품 제공 여부
   *
   * true : 사용함
   * false : 사용안함
   */
  isFreeGift?: any;
  /**
   * @description
   * 할인 쿠폰 제공 여부
   *
   * true : 사용함
   * false : 사용안함
   */
  isCouponDiscount?: any;
  /**
   * @description
   * 상품 리뷰 수 최소 값
   */
  reviewCountMin?: any;
  /**
   * @description
   * 상품 리뷰 수 최대 값
   */
  reviewCountMax?: any;
  /**
   * @description
   * 상품 리뷰 평점 최소 값
   *
   * 소수점 2째 자리까지 입력
   * 리뷰 평점이 해당 범위 이상인 상품 검색
   *
   * @constraints
   * 최소: [0]~최대: [5]
   */
  reviewScoreMin?: any;
  /**
   * @description
   * 상품 리뷰 평점 최대 값
   *
   * 소수점 2째 자리까지 입력
   * 리뷰 평점이 해당 범위 이상인 상품 검색
   *
   * @constraints
   * 최소: [0]~최대: [5]
   */
  reviewScoreMax?: any;
  /**
   * @description
   * 브랜드 이름
   *
   * 브랜드 이름과 일치하는 상품 검색
   */
  brandName?: any;
  /**
   * @description
   * D.Collection에서 제공하는 상품 표준 태그
   *
   * 상품 표준 태그 API를 조회하여 지원되는 태그 키와 값 확인 가능
   * product_standard_tags 하위요소
   * standard_tag_key 태그 키
   * standard_tag_values 태그 값
   * 하나의 태그 키에 대한 태그 값은 ,(콤마)로 최대 10개까지 검색 가능
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  productStandardTags?: any;
  /**
   * @description
   * 상품 인기 연령대
   *
   * 검색 가능한 값
   * - teenager : 10대
   * - twenties : 20대
   * - thirties : 30대
   * - forties : 40대
   * - etc : 기타
   *
   * teenager : 10대
   * twenties : 20대
   * thirties : 30대
   * forties : 40대
   * etc : 기타
   */
  productPopularAge?: any;
  /**
   * @description
   * 상품 생성일 검색 시작 값
   *
   * @constraints
   * 날짜
   */
  createdStartDate?: any;
  /**
   * @description
   * 상품 생성일 검색 종료 값
   *
   * @constraints
   * 날짜
   */
  createdEndDate?: any;
  /**
   * @description
   * 상품 업데이트일 검색 시작 값
   *
   * @constraints
   * 날짜
   */
  updatedStartDate?: any;
  /**
   * @description
   * 상품 업데이트일 검색 종료 값
   *
   * @constraints
   * 날짜
   */
  updatedEndDate?: any;
  /**
   * @description
   * 조회 결과 최대 건수
   *
   *
   * @constraints
   * 최소: [1]~최대: [100]
   */
  limit?: any;
  /**
   * @description
   * 조회 결과 시작 위치
   *
   *
   * @constraints
   * 최소: [0]~최대: [5000]
   */
  offset?: any;
  /**
   * @description
   * 정렬 순서 값
   *
   * mobile_discount_price : 모바일 할인 판매가
   * pc_discount_price : PC 할인 판매가
   * mobile_discount_rate : 모바일 할인율
   * pc_discount_rate : PC 할인율
   * price : 상품 판매가
   * created_date : 상품 생성일
   * product_name : 상품명
   * review_count : 상품 리뷰 수
   * review_score : 상품 리뷰 평점
   * hits_count : 페이지뷰수
   * popularity_score : 인기지수
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * asc : 오름차순
   * desc : 내림차순
   */
  order?: any;
}

interface RetrieveTheNumberOfProductItemsRequest {
  /**
   * @description
   * D.Collection 상품 표준 카테고리
   *
   * 검색 가능한 값 : 중분류 또는 소분류 카테고리 번호
   * dcollection_product_category
   * 중분류가 같은 소분류 카테고리에 한하여 소분류 카테고리는 (콤마)로 최대 10개까지 검색
   * 중분류 상품 카테고리와 소분류 상품 카테고리를 동시 요청 시 소분류 상품 카테고리만 검색
   */
  dcollectionProductCategory: any;
  /**
   * @description
   * 상품의 고유키
   *
   * 특정 상점의 상품을 구분하는 고유한 값
   * 검색 가능한 값
   * 구문 : "${mall_id}_${shop_no}_${product_no}"
   * 예시 : cafe24_1_1356
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   *
   * @constraints
   * 배열 최대사이즈: [100]
   */
  productUkey?: any;
  /**
   * @description
   * 상점명
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   *
   * @constraints
   * 배열 최대사이즈: [3]
   */
  shopName?: any;
  /**
   * @description
   * 상점 아이디
   *
   * product_ukey와 동시 사용 불가
   */
  storeId?: any;
  /**
   * @description
   * 멀티쇼핑몰 번호
   *
   * product_ukey와 동시 사용 불가
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   *
   * @constraints
   * 배열 최대사이즈: [3]
   */
  shopNo?: any;
  /**
   * @description
   * 상점 인기도
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   *
   * black : 인기지수 90 이상
   * purple : 인기지수 80 이상
   * green : 인기지수 70 이상
   * orange : 인기지수 70 미만
   *
   * @constraints
   * 배열 최대사이즈: [4]
   */
  shopGrade?: any;
  /**
   * @description
   * 상점 언어
   *
   * ko_KR : 한국어
   * en_US : 영어
   * zh_CN : 중국어(간체)
   * zh_TW : 중국어(번체)
   * ja_JP : 일본어
   * vi_VN : 베트남어
   */
  shopLanguage?: any;
  /**
   * @description
   * 결제 화폐
   *
   * 검색 가능한 값 : ISO_4217 통화 코드
   *
   * KRW : ￦ 원
   * USD : $ 달러
   * JPY : ¥ 엔
   * PHP : ₱ 페소
   */
  shopCurrencyCode?: any;
  /**
   * @description
   * 상품명
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   *
   * @constraints
   * 배열 최대사이즈: [3]
   */
  productName?: any;
  /**
   * @description
   * 상품번호
   *
   * product_ukey와 동시 사용 불가
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   *
   * @constraints
   * 배열 최대사이즈: [3]
   */
  productNo?: any;
  /**
   * @description
   * 상품 상태
   *
   * N : 신상품
   * B : 반품 상품
   * R : 재고 상품
   * U : 중고 상품
   * E : 전시 상품
   * F : 리퍼 상품
   * S : 스크래치 상품
   */
  productStatusType?: any;
  /**
   * @description
   * 상품 판매가 검색 최소 값
   *
   * 소수점 2째 자리까지 입력
   */
  priceMin?: any;
  /**
   * @description
   * 상품 판매가 검색 최대 값
   *
   * 소수점 2째 자리까지 입력
   */
  priceMax?: any;
  /**
   * @description
   * PC 할인 여부
   *
   * true : 사용함
   * false : 사용안함
   */
  isPcDiscount?: any;
  /**
   * @description
   * 모바일 할인 여부
   *
   * true : 사용함
   * false : 사용안함
   */
  isMobileDiscount?: any;
  /**
   * @description
   * PC 할인 판매가 검색 최소 값
   *
   * PC 할인 판매가가 해당 범위 이상인 상품 검색
   * 소수점 2째 자리까지 입력
   */
  pcDiscountPriceMin?: any;
  /**
   * @description
   * PC 할인 판매가 검색 최대 값
   *
   * PC 할인 판매가가 해당 범위 이상인 상품 검색
   * 소수점 2째 자리까지 입력
   */
  pcDiscountPriceMax?: any;
  /**
   * @description
   * 모바일 할인 판매가 검색 최대 값
   *
   * 모바일 할인 판매가가 해당 범위 이상인 상품 검색
   * 소수점 2째 자리까지 입력
   */
  mobileDiscountPriceMin?: any;
  /**
   * @description
   * 모바일 할인 판매가 검색 최대 값
   *
   * 모바일 할인 판매가가 해당 범위 이상인 상품 검색
   * 소수점 2째 자리까지 입력
   */
  mobileDiscountPriceMax?: any;
  /**
   * @description
   * PC 할인율 최소 값
   */
  pcDiscountRateMin?: any;
  /**
   * @description
   * PC 할인율 최대 값
   */
  pcDiscountRateMax?: any;
  /**
   * @description
   * 모바일 할인율 최소 값
   */
  mobileDiscountRateMin?: any;
  /**
   * @description
   * 모바일 할인율 최대 값
   */
  mobileDiscountRateMax?: any;
  /**
   * @description
   * 무료 배송 상품 여부
   *
   * true : 사용함
   * false : 사용안함
   */
  isFreeShipping?: any;
  /**
   * @description
   * 해외 배송 가능 여부
   *
   * true : 사용함
   * false : 사용안함
   */
  isInternationalShipping?: any;
  /**
   * @description
   * 상품이 배송될 수 있는 해외 국가
   */
  internationalShippingCountry?: any;
  /**
   * @description
   * 사은품 제공 여부
   *
   * true : 사용함
   * false : 사용안함
   */
  isFreeGift?: any;
  /**
   * @description
   * 할인 쿠폰 제공 여부
   *
   * true : 사용함
   * false : 사용안함
   */
  isCouponDiscount?: any;
  /**
   * @description
   * 상품 리뷰 수 최소 값
   */
  reviewCountMin?: any;
  /**
   * @description
   * 상품 리뷰 수 최대 값
   */
  reviewCountMax?: any;
  /**
   * @description
   * 상품 리뷰 평점 최소 값
   *
   * 소수점 2째 자리까지 입력
   * 리뷰 평점이 해당 범위 이상인 상품 검색
   *
   * @constraints
   * 최소: [0]~최대: [5]
   */
  reviewScoreMin?: any;
  /**
   * @description
   * 상품 리뷰 평점 최대 값
   *
   * 소수점 2째 자리까지 입력
   * 리뷰 평점이 해당 범위 이상인 상품 검색
   *
   * @constraints
   * 최소: [0]~최대: [5]
   */
  reviewScoreMax?: any;
  /**
   * @description
   * 브랜드 이름
   *
   * 브랜드 이름과 일치하는 상품 검색
   */
  brandName?: any;
  /**
   * @description
   * D.Collection에서 제공하는 상품 표준 태그
   *
   * 상품 표준 태그 API를 조회하여 지원되는 태그 키와 값 확인 가능
   * product_standard_tags 하위요소
   * standard_tag_key 태그 키
   * standard_tag_values 태그 값
   * 하나의 태그 키에 대한 태그 값은 ,(콤마)로 최대 10개까지 검색 가능
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  productStandardTags?: any;
  /**
   * @description
   * 상품 인기 연령대
   *
   * teenager : 10대
   * twenties : 20대
   * thirties : 30대
   * forties : 40대
   * etc : 기타
   */
  productPopularAge?: any;
  /**
   * @description
   * 상품 생성일 검색 시작 값
   *
   * @constraints
   * 날짜
   */
  createdStartDate?: any;
  /**
   * @description
   * 상품 생성일 검색 종료 값
   *
   * @constraints
   * 날짜
   */
  createdEndDate?: any;
  /**
   * @description
   * 상품 업데이트일 검색 시작 값
   *
   * @constraints
   * 날짜
   */
  updatedStartDate?: any;
  /**
   * @description
   * 상품 업데이트일 검색 종료 값
   *
   * @constraints
   * 날짜
   */
  updatedEndDate?: any;
}

interface RetrieveAListOfProductTagPropertiesRequest {
  /**
   * @description
   * 조회 결과 최대 건수
   *
   *
   * @constraints
   * 최소: [1]~최대: [100]
   */
  limit?: any;
  /**
   * @description
   * 조회 결과 시작 위치
   *
   *
   * @constraints
   * 최소: [0]~최대: [5000]
   */
  offset?: any;
}

interface RetrieveAListOfProductsWithMallIdRequest {
  /**
   * @description
   * 상점 아이디
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  storeId: any;
  /**
   * @description
   * 상점명
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   *
   * @constraints
   * 배열 최대사이즈: [3]
   */
  shopName?: any;
  /**
   * @description
   * 멀티쇼핑몰 번호
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   *
   * @constraints
   * 배열 최대사이즈: [3]
   */
  shopNo?: any;
  /**
   * @description
   * 상품명
   */
  productName?: any;
  /**
   * @description
   * 상품 상태
   *
   * N : 신상품
   * B : 반품 상품
   * R : 재고 상품
   * U : 중고 상품
   * E : 전시 상품
   * F : 리퍼 상품
   * S : 스크래치 상품
   */
  productStatusType?: any;
  /**
   * @description
   * 상품 판매가 검색 최소 값
   *
   * 소수점 2째 자리까지 입력
   */
  priceMin?: any;
  /**
   * @description
   * 상품 판매가 검색 최대 값
   *
   * 소수점 2째 자리까지 입력
   */
  priceMax?: any;
  /**
   * @description
   * PC 할인 여부
   *
   * true : 사용함
   * false : 사용안함
   */
  isPcDiscount?: any;
  /**
   * @description
   * 모바일 할인 여부
   *
   * true : 사용함
   * false : 사용안함
   */
  isMobileDiscount?: any;
  /**
   * @description
   * PC 할인 판매가 검색 최소 값
   *
   * PC 할인 판매가가 해당 범위 이상인 상품 검색
   * 소수점 2째 자리까지 입력
   */
  pcDiscountPriceMin?: any;
  /**
   * @description
   * PC 할인 판매가 검색 최대 값
   *
   * PC 할인 판매가가 해당 범위 이하인 상품 검색
   * 소수점 2째 자리까지 입력
   */
  pcDiscountPriceMax?: any;
  /**
   * @description
   * 모바일 할인 판매가 검색 최소 값
   *
   * 모바일 할인 판매가가 해당 범위 이상인 상품 검색
   * 소수점 2째 자리까지 입력
   */
  mobileDiscountPriceMin?: any;
  /**
   * @description
   * 모바일 할인 판매가 검색 최대 값
   *
   * 모바일 할인 판매가가 해당 범위 이하인 상품 검색
   * 소수점 2째 자리까지 입력
   */
  mobileDiscountPriceMax?: any;
  /**
   * @description
   * PC 할인율 최소 값
   */
  pcDiscountRateMin?: any;
  /**
   * @description
   * PC 할인율 최대 값
   */
  pcDiscountRateMax?: any;
  /**
   * @description
   * 모바일 할인율 최소 값
   */
  mobileDiscountRateMin?: any;
  /**
   * @description
   * 모바일 할인율 최대 값
   */
  mobileDiscountRateMax?: any;
  /**
   * @description
   * 무료 배송 상품 여부
   *
   * true : 사용함
   * false : 사용안함
   */
  isFreeShipping?: any;
  /**
   * @description
   * 해외 배송 가능 여부
   *
   * true : 사용함
   * false : 사용안함
   */
  isInternationalShipping?: any;
  /**
   * @description
   * 상품이 배송될 수 있는 해외 국가
   *
   * 검색 가능한 값 : ISO 3166-1 국가 코드(2자리)
   */
  internationalShippingCountry?: any;
  /**
   * @description
   * 사은품 제공 여부
   *
   * true : 사용함
   * false : 사용안함
   */
  isFreeGift?: any;
  /**
   * @description
   * 할인 쿠폰 제공 여부
   *
   * true : 사용함
   * false : 사용안함
   */
  isCouponDiscount?: any;
  /**
   * @description
   * 상품 리뷰 수 최소 값
   */
  reviewCountMin?: any;
  /**
   * @description
   * 상품 리뷰 수 최대 값
   */
  reviewCountMax?: any;
  /**
   * @description
   * 상품 리뷰 평점 최소 값
   *
   * 허용 범위 : 0.00 ~ 5.00
   * 소수점 2째 자리까지 입력
   * 리뷰 평점이 해당 범위 이상인 상품 검색
   *
   * @constraints
   * 최소: [0]~최대: [5]
   */
  reviewScoreMin?: any;
  /**
   * @description
   * 상품 리뷰 평점 최대 값
   *
   * 허용 범위 : 0.00 ~ 5.00
   * 소수점 2째 자리까지 입력
   * 리뷰 평점이 해당 범위 이하인 상품 검색
   *
   * @constraints
   * 최소: [0]~최대: [5]
   */
  reviewScoreMax?: any;
  /**
   * @description
   * 브랜드 이름
   *
   * 브랜드 이름과 일치하는 상품 검색
   */
  brandName?: any;
  /**
   * @description
   * 상품 인기 연령대
   *
   * teenager : 10대
   * twenties : 20대
   * thirties : 30대
   * forties : 40대
   * etc : 기타
   */
  productPopularAge?: any;
  /**
   * @description
   * 상품 생성일 검색 시작 값
   *
   * 형식 : yyyy-mm-dd
   *
   * @constraints
   * 날짜
   */
  createdStartDate?: any;
  /**
   * @description
   * 상품 생성일 검색 종료 값
   *
   * 형식 : yyyy-mm-dd
   *
   * @constraints
   * 날짜
   */
  createdEndDate?: any;
  /**
   * @description
   * 상품 업데이트일 검색 시작 값
   *
   * 형식 : yyyy-mm-dd
   *
   * @constraints
   * 날짜
   */
  updatedStartDate?: any;
  /**
   * @description
   * 상품 업데이트일 검색 종료 값
   *
   * 형식 : yyyy-mm-dd
   *
   * @constraints
   * 날짜
   */
  updatedEndDate?: any;
  /**
   * @description
   * 조회 결과 최대 건수
   *
   *
   * @constraints
   * 최소: [1]~최대: [100]
   */
  limit?: any;
  /**
   * @description
   * 조회 결과 시작 위치
   *
   *
   * @constraints
   * 최소: [0]~최대: [5000]
   */
  offset?: any;
  /**
   * @description
   * 정렬 순서 값
   *
   * mobile_discount_price : 모바일 할인 판매가
   * pc_discount_price : PC 할인 판매가
   * mobile_discount_rate : 모바일 할인율
   * pc_discount_rate : PC 할인율
   * price : 상품 판매가
   * created_date : 상품 생성일
   * product_name : 상품명
   * review_count : 상품 리뷰 수
   * review_score : 상품 리뷰 평점
   * hits_count : 페이지뷰수
   * popularity_score : 인기지수
   *
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * asc : 오름차순
   * desc : 내림차순
   *
   */
  order?: any;
}

/**
 * @example
 * ```json
 * {
 *     "shops": [
 *         {
 *             "dcollection_store_category": {
 *                 "depth1": "D111111",
 *                 "depth2": "D111111"
 *             },
 *             "store_id": "examplepublic",
 *             "shop_name": "example11",
 *             "shop_no": 4,
 *             "shop_url": "http://example11.com",
 *             "shop_currency_code": "USD",
 *             "shop_language": "zh_CN",
 *             "shop_grade": "orange",
 *             "shop_popular_age": "etc",
 *             "shop_sex": "F",
 *             "shop_region": "UNKNOWN",
 *             "social_logins": [],
 *             "use_cafe24pay": false,
 *             "use_naverpay": true,
 *             "use_EMS": false,
 *             "shipping_fee_type": "M",
 *             "benefits": [],
 *             "global_payment_type": [
 *                 "EX"
 *             ],
 *             "created_date": "2022-09-05T15:36:09+09:00",
 *             "updated_date": "2022-09-05T19:27:48+09:00"
 *         },
 *         {
 *             "dcollection_store_category": {
 *                 "depth1": "D111111",
 *                 "depth2": "D111111"
 *             },
 *             "store_id": "examplepublic2",
 *             "shop_name": "example22",
 *             "shop_no": "2",
 *             "shop_url": "http://examplepublic2.com",
 *             "shop_currency_code": "USD",
 *             "shop_language": "en_US",
 *             "shop_grade": "orange",
 *             "shop_popular_age": "etc",
 *             "shop_sex": "F",
 *             "shop_region": "UNKNOWN",
 *             "social_logins": [],
 *             "use_cafe24pay": false,
 *             "use_naverpay": true,
 *             "use_EMS": false,
 *             "shipping_fee_type": "T",
 *             "benefits": [],
 *             "global_payment_type": [
 *                 "EX"
 *             ],
 *             "created_date": "2022-09-01T08:26:43+09:00",
 *             "updated_date": "2022-09-02T19:27:48+09:00"
 *         }
 *     ]
 * }```
 */
interface RetrieveAListOfStoresResponse {
  shops: Array<{
    dcollectionStoreCategory: {
      depth1: string;
      depth2: string;
    };
    storeId: string;
    shopName: string;
    shopNo: number;
    shopUrl: string;
    shopCurrencyCode: string;
    shopLanguage: string;
    shopGrade: string;
    shopPopularAge: string;
    shopSex: Cafe24Enum;
    shopRegion: string;
    socialLogins: Array<any>;
    useCafe24pay: any;
    useNaverpay: any;
    useEMS: any;
    shippingFeeType: Cafe24Enum;
    benefits: Array<any>;
    globalPaymentType: Array<string>;
    createdDate: Cafe24Datetime;
    updatedDate: Cafe24Datetime;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "products": [
 *         {
 *             "dcollection_product_category": {
 *                 "depth1": "C111111",
 *                 "depth2": "C111112",
 *                 "depth3": "C111113"
 *             },
 *             "product_ukey": "example_123_easd",
 *             "shop_name": "example 123",
 *             "store_id": "example123",
 *             "shop_no": 1,
 *             "shop_grade": "orange",
 *             "shop_language": "ko_KR",
 *             "shop_currency_code": "KRW",
 *             "product_name": "Round Tshirts",
 *             "product_no": 1324,
 *             "product_code": "P1234DAK",
 *             "product_url": "example_product.cafe24.com/product/detail.html?product_no=2038&utm_source=dcollection_gmp&utm_medium=test",
 *             "product_status_type": "N",
 *             "price": "1.00",
 *             "pc_discount_price": "1.00",
 *             "mobile_discount_price": "1.00",
 *             "is_pc_discount": false,
 *             "is_mobile_discount": false,
 *             "pc_discount_rate": 0,
 *             "mobile_discount_rate": 0,
 *             "is_free_shipping": false,
 *             "is_international_shipping": false,
 *             "international_shipping_country": [
 *                 "MO",
 *                 "KZ"
 *             ],
 *             "is_free_gift": false,
 *             "is_coupon_discount": false,
 *             "product_options": [],
 *             "brand_name": "Self-branding",
 *             "product_standard_tags": [
 *                 {
 *                     "standard_tags_key": "size",
 *                     "standard_tags_values": "blue"
 *                 },
 *                 {
 *                     "standard_tags_key": "size",
 *                     "standard_tags_values": "black"
 *                 }
 *             ],
 *             "product_popular_age": "etc",
 *             "detail_image": "example_product.cafe24.com/web/product/big/202101/a7a8984bb5334cec0bcf740d161c51ca.jpg",
 *             "list_image": "example_product.cafe24.com/web/product/medium/202101/e1e18758f76ab8a09127a50b3b1a58c7.jpg",
 *             "tiny_image": "example_product.cafe24.com/web/product/tiny/202101/800fb8076c56a1afdb9d60e40c8afb06.jpg",
 *             "small_image": "example_product.cafe24.com/web/product/small/202101/4c301bde5caa62e076f74b29f484f713.jpg",
 *             "review_count": 0,
 *             "review_score": 5,
 *             "hits_count": 0,
 *             "expiration_date": null,
 *             "created_date": "2022-08-21T05:22:32+09:00",
 *             "updated_date": "2022-09-05T08:34:18+09:00"
 *         },
 *         {
 *             "dcollection_product_category": {
 *                 "depth1": "C111111",
 *                 "depth2": "C111112",
 *                 "depth3": "C111113"
 *             },
 *             "product_ukey": "example_124_easd",
 *             "shop_name": "example 124",
 *             "store_id": "example124",
 *             "shop_no": 1,
 *             "shop_grade": "orange",
 *             "shop_language": "ko_KR",
 *             "shop_currency_code": "KRW",
 *             "product_name": "Round Short-Sleeved T-Shirt",
 *             "product_no": 12345,
 *             "product_code": "P1234DB1",
 *             "product_url": "example_product2.cafe24.com/product/detail.html?product_no=2068&utm_source=dcollection_gmp&utm_medium=test",
 *             "product_status_type": "N",
 *             "price": "1.00",
 *             "pc_discount_price": "1.00",
 *             "mobile_discount_price": "1.00",
 *             "is_pc_discount": false,
 *             "is_mobile_discount": false,
 *             "pc_discount_rate": 0,
 *             "mobile_discount_rate": 0,
 *             "is_free_shipping": false,
 *             "is_international_shipping": false,
 *             "international_shipping_country": [
 *                 "AU",
 *                 "HK"
 *             ],
 *             "is_free_gift": false,
 *             "is_coupon_discount": true,
 *             "product_options": [],
 *             "brand_name": "Self-branding",
 *             "product_standard_tags": [
 *                 {
 *                     "standard_tags_key": "size",
 *                     "standard_tags_values": "red"
 *                 },
 *                 {
 *                     "standard_tags_key": "sex",
 *                     "standard_tags_values": "female"
 *                 }
 *             ],
 *             "product_popular_age": "etc",
 *             "detail_image": "example_product2.cafe24.com/web/product/big/202101/c53cffaabe5b2e439ba68dea9892d1bc.jpg",
 *             "list_image": "example_product2.cafe24.com/web/product/medium/202101/6f48e8bf588ddeb94fcd053b3b1b0423.jpg",
 *             "tiny_image": "example_product2.cafe24.com/web/product/tiny/202101/2115afd33e6ffec7513e9fd66252d659.jpg",
 *             "small_image": "example_product2.cafe24.com/web/product/small/202101/990bed38b403e0fb8cfa4e756cc2d8f0.jpg",
 *             "review_count": 0,
 *             "review_score": 3,
 *             "hits_count": 0,
 *             "expiration_date": null,
 *             "created_date": "2022-07-14T08:31:28+09:00",
 *             "updated_date": "2022-09-14T09:09:29+09:00"
 *         }
 *     ]
 * }```
 */
interface RetrieveAListOfProductsResponse {
  products: Array<{
    dcollectionProductCategory: {
      depth1: string;
      depth2: string;
      depth3: string;
    };
    productUkey: string;
    shopName: string;
    storeId: string;
    shopNo: number;
    shopGrade: string;
    shopLanguage: string;
    shopCurrencyCode: string;
    productName: string;
    productNo: number;
    productCode: string;
    productUrl: string;
    productStatusType: Cafe24Enum;
    price: string;
    pcDiscountPrice: string;
    mobileDiscountPrice: string;
    isPcDiscount: any;
    isMobileDiscount: any;
    pcDiscountRate: number;
    mobileDiscountRate: number;
    isFreeShipping: any;
    isInternationalShipping: any;
    internationalShippingCountry: Array<string>;
    isFreeGift: any;
    isCouponDiscount: any;
    productOptions: Array<any>;
    brandName: string;
    productStandardTags: Array<{
      standardTagsKey: string;
      standardTagsValues: string;
    }>;
    productPopularAge: string;
    detailImage: string;
    listImage: string;
    tinyImage: string;
    smallImage: string;
    reviewCount: number;
    reviewScore: number;
    hitsCount: number;
    expirationDate: any;
    createdDate: Cafe24Datetime;
    updatedDate: Cafe24Datetime;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "count": 86397
 * }```
 */
interface RetrieveTheNumberOfProductItemsResponse {
  count: number;
}

/**
 * @example
 * ```json
 * {
 *     "standardtags": [
 *         {
 *             "standard_tag_key": "color",
 *             "standard_tag_values": [
 *                 "black",
 *                 "gray"
 *             ]
 *         },
 *         {
 *             "standard_tag_key": "sex",
 *             "standard_tag_values": [
 *                 "male",
 *                 "female"
 *             ]
 *         }
 *     ]
 * }```
 */
interface RetrieveAListOfProductTagPropertiesResponse {
  standardtags: Array<{
    standardTagKey: string;
    standardTagValues: Array<string>;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "store_products": [
 *         {
 *             "dcollection_product_category": {
 *                 "depth1": "C111111",
 *                 "depth2": "C111112",
 *                 "depth3": "C111113"
 *             },
 *             "product_ukey": "example_1_1324",
 *             "shop_name": "example 123",
 *             "store_id": "example",
 *             "shop_no": 1,
 *             "shop_grade": "orange",
 *             "shop_language": "ko_KR",
 *             "shop_currency_code": "KRW",
 *             "product_name": "Round Tshirts",
 *             "product_no": 1324,
 *             "product_code": "P1234DAK",
 *             "product_url": "example_product.cafe24.com/product/detail.html?product_no=2038&utm_source=dcollection_gmp&utm_medium=test",
 *             "product_status_type": "N",
 *             "price": "1.00",
 *             "pc_discount_price": "1.00",
 *             "mobile_discount_price": "1.00",
 *             "is_pc_discount": false,
 *             "is_mobile_discount": false,
 *             "pc_discount_rate": 0,
 *             "mobile_discount_rate": 0,
 *             "is_free_shipping": false,
 *             "is_international_shipping": false,
 *             "international_shipping_country": [
 *                 "MO",
 *                 "KZ"
 *             ],
 *             "is_free_gift": false,
 *             "is_coupon_discount": false,
 *             "product_options": [],
 *             "brand_name": "Self-branding",
 *             "product_popular_age": "etc",
 *             "detail_image": "example_product.cafe24.com/web/product/big/202101/a7a8984bb5334cec0bcf740d161c51ca.jpg",
 *             "list_image": "example_product.cafe24.com/web/product/medium/202101/e1e18758f76ab8a09127a50b3b1a58c7.jpg",
 *             "tiny_image": "example_product.cafe24.com/web/product/tiny/202101/800fb8076c56a1afdb9d60e40c8afb06.jpg",
 *             "small_image": "example_product.cafe24.com/web/product/small/202101/4c301bde5caa62e076f74b29f484f713.jpg",
 *             "review_count": 0,
 *             "review_score": "5.0",
 *             "hits_count": 0,
 *             "expiration_date": null,
 *             "created_date": "2022-08-21T05:22:32+09:00",
 *             "updated_date": "2022-09-05T08:34:18+09:00"
 *         },
 *         {
 *             "dcollection_product_category": {
 *                 "depth1": "C111111",
 *                 "depth2": "C111112",
 *                 "depth3": "C111113"
 *             },
 *             "product_ukey": "example_123_12345",
 *             "shop_name": "example 123",
 *             "store_id": "example",
 *             "shop_no": 1,
 *             "shop_grade": "orange",
 *             "shop_language": "ko_KR",
 *             "shop_currency_code": "KRW",
 *             "product_name": "Round Short-Sleeved T-Shirt",
 *             "product_no": 12345,
 *             "product_code": "P1234DB1",
 *             "product_url": "example_product2.cafe24.com/product/detail.html?product_no=2068&utm_source=dcollection_gmp&utm_medium=test",
 *             "product_status_type": "N",
 *             "price": "1.00",
 *             "pc_discount_price": "1.00",
 *             "mobile_discount_price": "1.00",
 *             "is_pc_discount": false,
 *             "is_mobile_discount": false,
 *             "pc_discount_rate": 0,
 *             "mobile_discount_rate": 0,
 *             "is_free_shipping": false,
 *             "is_international_shipping": false,
 *             "international_shipping_country": [
 *                 "AU",
 *                 "HK"
 *             ],
 *             "is_free_gift": false,
 *             "is_coupon_discount": true,
 *             "product_options": [],
 *             "brand_name": "Self-branding",
 *             "product_popular_age": "etc",
 *             "detail_image": "example_product2.cafe24.com/web/product/big/202101/c53cffaabe5b2e439ba68dea9892d1bc.jpg",
 *             "list_image": "example_product2.cafe24.com/web/product/medium/202101/6f48e8bf588ddeb94fcd053b3b1b0423.jpg",
 *             "tiny_image": "example_product2.cafe24.com/web/product/tiny/202101/2115afd33e6ffec7513e9fd66252d659.jpg",
 *             "small_image": "example_product2.cafe24.com/web/product/small/202101/990bed38b403e0fb8cfa4e756cc2d8f0.jpg",
 *             "review_count": 0,
 *             "review_score": "3.0",
 *             "hits_count": 0,
 *             "expiration_date": null,
 *             "created_date": "2022-07-14T08:31:28+09:00",
 *             "updated_date": "2022-09-14T09:09:29+09:00"
 *         }
 *     ]
 * }```
 */
interface RetrieveAListOfProductsWithMallIdResponse {
  storeProducts: Array<{
    dcollectionProductCategory: {
      depth1: string;
      depth2: string;
      depth3: string;
    };
    productUkey: string;
    shopName: string;
    storeId: string;
    shopNo: number;
    shopGrade: string;
    shopLanguage: string;
    shopCurrencyCode: string;
    productName: string;
    productNo: number;
    productCode: string;
    productUrl: string;
    productStatusType: Cafe24Enum;
    price: string;
    pcDiscountPrice: string;
    mobileDiscountPrice: string;
    isPcDiscount: any;
    isMobileDiscount: any;
    pcDiscountRate: number;
    mobileDiscountRate: number;
    isFreeShipping: any;
    isInternationalShipping: any;
    internationalShippingCountry: Array<string>;
    isFreeGift: any;
    isCouponDiscount: any;
    productOptions: Array<any>;
    brandName: string;
    productPopularAge: string;
    detailImage: string;
    listImage: string;
    tinyImage: string;
    smallImage: string;
    reviewCount: number;
    reviewScore: string;
    hitsCount: number;
    expirationDate: any;
    createdDate: Cafe24Datetime;
    updatedDate: Cafe24Datetime;
  }>;
}
