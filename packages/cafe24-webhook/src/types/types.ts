/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Enum,
  Cafe24Datetime,
} from "cafe24-types";

/**
 * @event 90077
 *
 * @description
 * 쇼핑몰에 설치된 앱이 삭제된 경우
 *
 * Scopes:
 * - mall.read_application
 *
 * @example
 * ```json
 * {
 *   "event_no": 90077,
 *   "resource": {
 *     "mall_id": "leesunsin",
 *     "client_id": "sample7eBNEqSfkd7I8hoA",
 *     "app_name": "sample_app",
 *     "deleted_date": "2020-07-01T12:30:15+09:00"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnAppDeleted {
  eventNo: 90077;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     */
    mallId: string;
    /**
     * @description
     * 앱 ID
     */
    clientId: string;
    /**
     * @description
     * 앱 관리 상품명
     */
    appName: string;
    /**
     * @description
     * 앱 삭제일시
     */
    deletedDate: Cafe24Datetime;
  };
}

/**
 * @event 90078
 *
 * @description
 * 쇼핑몰에 설치된 앱이 만료된 경우
 *
 * Scopes:
 * - mall.read_application
 *
 * @example
 * ```json
 * {
 *   "event_no": 90078,
 *   "resource": {
 *     "mall_id": "leesunsin",
 *     "client_id": "sample7eBNEqSfkd7I8hoA",
 *     "app_name": "sample_app",
 *     "expired_date": "2020-07-01T12:30:15+09:00"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnAppExpired {
  eventNo: 90078;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     */
    mallId: string;
    /**
     * @description
     * 앱 ID
     */
    clientId: string;
    /**
     * @description
     * 앱 관리 상품명
     */
    appName: string;
    /**
     * @description
     * 앱 만료일시
     */
    expiredDate: Cafe24Datetime;
  };
}

/**
 * @event 90079
 *
 * @description
 * 쇼핑몰에 설치된 앱의 만료일이 연장된 경우
 *
 * Scopes:
 * - mall.read_application
 *
 * @example
 * ```json
 * {
 *   "event_no": 90079,
 *   "resource": {
 *     "mall_id": "leesunsin",
 *     "client_id": "sample7eBNEqSfkd7I8hoA",
 *     "app_name": "sample_app",
 *     "expire_date": "2020-08-31T23:59:59+09:00",
 *     "previous_expire_date": "2020-07-31T23:59:59+09:00",
 *     "updated_date": "2020-07-01T12:30:15+09:00"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnAppExpirationExtended {
  eventNo: 90079;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     */
    mallId: string;
    /**
     * @description
     * 앱 ID
     */
    clientId: string;
    /**
     * @description
     * 앱 관리 상품명
     */
    appName: string;
    expireDate: Cafe24Datetime;
    /**
     * @description
     * 앱 만료일 연장 이전의 기존 만료일시
     */
    previousExpireDate: Cafe24Datetime;
    /**
     * @description
     * 앱 만료일 연장 일시
     */
    updatedDate: Cafe24Datetime;
  };
}

/**
 * @event 90157
 *
 * @description
 * 쇼핑몰에 설치된 앱이 결제된 경우
 *
 * Scopes:
 * - mall.read_application
 *
 * @example
 * ```json
 * {
 *   "event_no": 90157,
 *   "resource": {
 *     "mall_id": "leesunsin",
 *     "client_id": "sample7eBNEqSfkd7I8hoA",
 *     "order_id": "Tb1dbe01667974041111",
 *     "payed_date": "2022-12-01 13:54:30",
 *     "currency": "KRW",
 *     "amount": "1000",
 *     "channel": "APP"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnAppPayment {
  eventNo: 90157;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     */
    mallId: string;
    /**
     * @description
     * 앱 ID
     */
    clientId: string;
    /**
     * @description
     * 주문번호
     */
    orderId: string;
    /**
     * @description
     * 결제일시
     */
    payedDate: Cafe24Date;
    /**
     * @description
     * 결제통화
     */
    currency: string;
    /**
     * @description
     * 결제금액
     */
    amount: string;
    /**
     * @description
     * 요청채널
     *
     * App : 인앱결제
     * Web : 유료결제
     */
    channel: string;
  };
}

/**
 * @event 90158
 *
 * @description
 * 쇼핑몰에 설치된 앱의 결제 환불을 요청한 경우
 *
 * Scopes:
 * - mall.read_application
 *
 * @example
 * ```json
 * {
 *   "event_no": 90158,
 *   "resource": {
 *     "mall_id": "leesunsin",
 *     "client_id": "sample7eBNEqSfkd7I8hoA",
 *     "order_id": "Tb1dbe01667974041111",
 *     "reason_code": "A",
 *     "reason_detail": "The app does not function properly.",
 *     "request_date": "2022-12-13T16:09:58+09:00"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnAppPaymentRefundRequested {
  eventNo: 90158;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     */
    mallId: string;
    /**
     * @description
     * 앱 ID
     */
    clientId: string;
    /**
     * @description
     * 주문번호
     */
    orderId: string;
    /**
     * @description
     * 환불 사유 코드
     *
     * A : App의 기능이 정상동작 하지 않음
     * B : App으로 인해 쇼핑몰 성능이 저하됨
     * C : 개인정보유출 등 법적이슈가 있음
     * D : 안내된 기능을 모두 충족하지 못함
     * E : 구매자의 사유로 판매자와 합의하였음
     * Z : 기타사유
     */
    reasonCode: Cafe24Enum;
    /**
     * @description
     * 상세사유
     */
    reasonDetail: string;
    /**
     * @description
     * 요청일시
     */
    requestDate: Cafe24Datetime;
  };
}

/**
 * @event 90159
 *
 * @description
 * 쇼핑몰에 설치된 앱의 결제 환불이 완료된 경우
 *
 * Scopes:
 * - mall.read_application
 *
 * @example
 * ```json
 * {
 *   "event_no": 90159,
 *   "resource": {
 *     "mall_id": "leesunsin",
 *     "client_id": "sample7eBNEqSfkd7I8hoA",
 *     "order_id": "Tb1dbe01667974041111",
 *     "currency": "KRW",
 *     "refunded_amount": "200.00",
 *     "expire_date": "2023-01-21T23:59:59+09:00",
 *     "refunded_date": "2022-12-13T16:09:58+09:00"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnAppPaymentRefundCompleted {
  eventNo: 90159;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     */
    mallId: string;
    /**
     * @description
     * 앱 ID
     */
    clientId: string;
    /**
     * @description
     * 주문번호
     */
    orderId: string;
    /**
     * @description
     * 결제통화
     */
    currency: string;
    /**
     * @description
     * 환불금액
     */
    refundedAmount: string;
    expireDate: Cafe24Datetime;
    /**
     * @description
     * 환불일시
     */
    refundedDate: Cafe24Datetime;
  };
}

/**
 * @event 90160
 *
 * @description
 * 쇼핑몰에 접수된 주문의 반품이 완료된 경우 (취소번호별)
 *
 * Scopes:
 * - mall.read_application
 *
 * @example
 * ```json
 * {
 *   "event_no": 90160,
 *   "resource": {
 *     "mall_id": "sampleMall",
 *     "event_shop_no": "1",
 *     "order_id": "20230316-0000287",
 *     "claim_code": "C20230329-0001215",
 *     "claim_reason_type": "",
 *     "claim_reason_type_text": "",
 *     "claim_reason": "",
 *     "order_price_amount": "38000.00",
 *     "refund_amount": "35000.00",
 *     "shipping_fee": "0.00",
 *     "refund_shipping_fee": "0.00",
 *     "refund_regional_surcharge": "0.00",
 *     "return_shipping_fee": "0.00",
 *     "return_regional_surcharge": "0.00",
 *     "add_discount_amount": "0.00",
 *     "member_grade_discount_amount": "0.00",
 *     "shipping_discount_amount": "0.00",
 *     "coupon_discount_amount": "-3000.00",
 *     "point_used": "0.00",
 *     "credit_used": "0.00"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnAppOrderReturnCompleted {
  eventNo: 90160;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     */
    mallId: string;
    eventShopNo: string;
    /**
     * @description
     * 주문번호
     */
    orderId: string;
    claimCode: string;
    claimReasonType: string;
    claimReasonTypeText: string;
    claimReason: string;
    orderPriceAmount: string;
    refundAmount: string;
    shippingFee: string;
    refundShippingFee: string;
    refundRegionalSurcharge: string;
    returnShippingFee: string;
    returnRegionalSurcharge: string;
    addDiscountAmount: string;
    memberGradeDiscountAmount: string;
    shippingDiscountAmount: string;
    couponDiscountAmount: string;
    pointUsed: string;
    creditUsed: string;
  };
}

/**
 * @event 90001
 *
 * @description
 * 쇼핑몰에 상품이 등록된 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90001,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "product_no": 36518,
 *     "product_code": "P000CCAO",
 *     "created_date": "2020-07-17T15:26:52+09:00",
 *     "updated_date": "2020-07-17T15:26:52+09:00",
 *     "product_name": "Sample Product Name",
 *     "eng_product_name": "",
 *     "supply_product_name": "Supply Sample Name",
 *     "model_name": "Sample Product CAFE2468",
 *     "custom_product_code": "CAFE2468",
 *     "product_condition": "N",
 *     "summary_description": "Flower Skirt",
 *     "simple_description": "Sweet Ballerina Flower Pleated Skirt.",
 *     "description": "desc.",
 *     "display": "F",
 *     "selling": "T",
 *     "retail_price": "0.00",
 *     "supply_price": "20000.00",
 *     "price": "24680.00",
 *     "price_content": null,
 *     "adult_certification": "F",
 *     "manufacturer_code": "M0000000",
 *     "supplier_code": "S0000000",
 *     "brand_code": "B0000000",
 *     "trend_code": "T0000000",
 *     "made_date": "2020-07-10",
 *     "release_date": "2020-07-10",
 *     "origin_place_code": 126,
 *     "shipping_scope": "B",
 *     "translated": "F"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnProductCreated {
  eventNo: 90001;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 상품번호
     * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음
     *
     *
     */
    productNo: number;
    productCode: string;
    /**
     * @description
     * 가입일
     *
     *
     */
    createdDate: Cafe24Datetime;
    /**
     * @description
     * 상품이 수정된 일시
     *
     * date
     */
    updatedDate: Cafe24Datetime;
    /**
     * @description
     * 상품명
     *
     * 최대글자수 : [250자]
     */
    productName: string;
    /**
     * @description
     * 영문 상품명
     * 상품의 영문 이름. 해외 배송 등에 사용 가능함
     *
     * 최대글자수 : [250자]
     */
    engProductName: string;
    /**
     * @description
     * 공금사 상품명
     *
     * 최대글자수 : [250자]
     */
    supplyProductName: string;
    /**
     * @description
     * 상품의 모델명
     *
     * 최대글자수 : [100자]
     */
    modelName: string;
    /**
     * @description
     * 자체상품 코드
     * 사용자가 상품에 부여 가능한 코드. 재고 관리 등의 이유로 자체적으로 상품을 관리하고 있는 경우 사용함
     *
     * 최대글자수 : [40자]
     */
    customProductCode: string;
    /**
     * @description
     * 상품상태
     *
     * N : 신상품
     * B : 반품상품
     * R : 재고상품
     * U : 중고상품
     * E : 전시상품
     * F : 리퍼상품
     * S : 스크래치 상품
     */
    productCondition: Cafe24Enum;
    /**
     * @description
     * 상품 요약 설명
     *
     * 최대글자수 : [255자]
     */
    summaryDescription: string;
    /**
     * @description
     * 상품 간략 설명
     *
     *
     */
    simpleDescription: string;
    /**
     * @description
     * 상품 상세 설명
     *
     *
     */
    description: string;
    /**
     * @description
     * 진열상태
     *
     * T : 진열함
     * F : 진열안함
     */
    display: Cafe24Enum;
    /**
     * @description
     * 판매상태
     *
     * T : 판매함
     * F : 판매안함
     */
    selling: Cafe24Enum;
    /**
     * @description
     * 상품 소비자가
     *
     * 최소: [0]~최대: [2147483647]
     */
    retailPrice: string;
    /**
     * @description
     * 상품 공급가
     *
     * 최소: [0]~최대: [2147483647]
     */
    supplyPrice: string;
    /**
     * @description
     * 상품 판매가
     *
     * 최소: [0]~최대: [2147483647]
     */
    price: string;
    /**
     * @description
     * 판매가 대체문구
     *
     * 최대글자수 : [20자]
     */
    priceContent: any;
    /**
     * @description
     * 성인인증이 필요한 상품인지 여부
     *
     * T : 사용함
     * F : 사용안함
     */
    adultCertification: Cafe24Enum;
    /**
     * @description
     * 제조사 코드
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    manufacturerCode: string;
    /**
     * @description
     * 공급사 코드
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    supplierCode: string;
    /**
     * @description
     * 브랜드 코드
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    brandCode: string;
    /**
     * @description
     * 트렌드 코드
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    trendCode: string;
    /**
     * @description
     * 제조일자
     *
     * date
     */
    madeDate: Cafe24Date;
    /**
     * @description
     * 출시일자
     *
     * date
     */
    releaseDate: Cafe24Date;
    /**
     * @description
     * 원산지
     *
     *
     */
    originPlaceCode: number;
    shippingScope: Cafe24Enum;
    /**
     * @description
     * 번역상태
     *
     * T : 번역함
     * F : 번역안함
     */
    translated: Cafe24Enum;
  };
}

/**
 * @event 90002
 *
 * @description
 * 쇼핑몰 상품이 수정된 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90001,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "product_no": 36518,
 *     "product_code": "P000CCAO",
 *     "created_date": "2020-07-17T15:26:52+09:00",
 *     "updated_date": "2020-07-17T15:26:52+09:00",
 *     "product_name": "Sample Product Name",
 *     "eng_product_name": "",
 *     "supply_product_name": "Supply Sample Name",
 *     "model_name": "Sample Product CAFE2468",
 *     "custom_product_code": "CAFE2468",
 *     "product_condition": "N",
 *     "summary_description": "Flower Skirt",
 *     "simple_description": "Sweet Ballerina Flower Pleated Skirt.",
 *     "description": "desc.",
 *     "display": "F",
 *     "selling": "T",
 *     "retail_price": "0.00",
 *     "supply_price": "20000.00",
 *     "price": "24680.00",
 *     "price_content": null,
 *     "adult_certification": "F",
 *     "manufacturer_code": "M0000000",
 *     "supplier_code": "S0000000",
 *     "brand_code": "B0000000",
 *     "trend_code": "T0000000",
 *     "made_date": "2020-07-10",
 *     "release_date": "2020-07-10",
 *     "origin_place_code": 126,
 *     "shipping_scope": "B",
 *     "translated": "F"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnProductUpdated {
  eventNo: 90002;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 상품번호
     * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음
     *
     *
     */
    productNo: number;
    productCode: string;
    /**
     * @description
     * 가입일
     *
     *
     */
    createdDate: Cafe24Datetime;
    /**
     * @description
     * 상품이 수정된 일시
     *
     * date
     */
    updatedDate: Cafe24Datetime;
    /**
     * @description
     * 상품명
     *
     * 최대글자수 : [250자]
     */
    productName: string;
    /**
     * @description
     * 영문 상품명
     * 상품의 영문 이름. 해외 배송 등에 사용 가능함
     *
     * 최대글자수 : [250자]
     */
    engProductName: string;
    /**
     * @description
     * 공금사 상품명
     *
     * 최대글자수 : [250자]
     */
    supplyProductName: string;
    /**
     * @description
     * 상품의 모델명
     *
     * 최대글자수 : [100자]
     */
    modelName: string;
    /**
     * @description
     * 자체상품 코드
     * 사용자가 상품에 부여 가능한 코드. 재고 관리 등의 이유로 자체적으로 상품을 관리하고 있는 경우 사용함
     *
     * 최대글자수 : [40자]
     */
    customProductCode: string;
    /**
     * @description
     * 상품상태
     *
     * N : 신상품
     * B : 반품상품
     * R : 재고상품
     * U : 중고상품
     * E : 전시상품
     * F : 리퍼상품
     * S : 스크래치 상품
     */
    productCondition: Cafe24Enum;
    /**
     * @description
     * 상품 요약 설명
     *
     * 최대글자수 : [255자]
     */
    summaryDescription: string;
    /**
     * @description
     * 상품 간략 설명
     *
     *
     */
    simpleDescription: string;
    /**
     * @description
     * 상품 상세 설명
     *
     *
     */
    description: string;
    /**
     * @description
     * 진열상태
     *
     * T : 진열함
     * F : 진열안함
     */
    display: Cafe24Enum;
    /**
     * @description
     * 판매상태
     *
     * T : 판매함
     * F : 판매안함
     */
    selling: Cafe24Enum;
    /**
     * @description
     * 상품 소비자가
     *
     * 최소: [0]~최대: [2147483647]
     */
    retailPrice: string;
    /**
     * @description
     * 상품 공급가
     *
     * 최소: [0]~최대: [2147483647]
     */
    supplyPrice: string;
    /**
     * @description
     * 상품 판매가
     *
     * 최소: [0]~최대: [2147483647]
     */
    price: string;
    /**
     * @description
     * 판매가 대체문구
     *
     * 최대글자수 : [20자]
     */
    priceContent: any;
    /**
     * @description
     * 성인인증이 필요한 상품인지 여부
     *
     * T : 사용함
     * F : 사용안함
     */
    adultCertification: Cafe24Enum;
    /**
     * @description
     * 제조사 코드
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    manufacturerCode: string;
    /**
     * @description
     * 공급사 코드
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    supplierCode: string;
    /**
     * @description
     * 브랜드 코드
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    brandCode: string;
    /**
     * @description
     * 트렌드 코드
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    trendCode: string;
    /**
     * @description
     * 제조일자
     *
     * date
     */
    madeDate: Cafe24Date;
    /**
     * @description
     * 출시일자
     *
     * date
     */
    releaseDate: Cafe24Date;
    /**
     * @description
     * 원산지
     *
     *
     */
    originPlaceCode: number;
    shippingScope: Cafe24Enum;
    /**
     * @description
     * 번역상태
     *
     * T : 번역함
     * F : 번역안함
     */
    translated: Cafe24Enum;
  };
}

/**
 * @event 90041
 *
 * @description
 * 쇼핑몰 상품이 일괄 수정된 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90041,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "product_no": "17652,17394,17293,16807,16118",
 *     "action": "batch"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnBulkProductUpdate {
  eventNo: 90041;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 상품번호
     * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음
     *
     *
     */
    productNo: string;
    action: string;
  };
}

/**
 * @event 90003
 *
 * @description
 * 쇼핑몰 상품이 삭제된 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90003,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "4",
 *     "product_no": 7178,
 *     "product_code": "P0000KQC"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnProductDeleted {
  eventNo: 90003;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 상품번호
     * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음
     *
     *
     */
    productNo: number;
    productCode: string;
  };
}

/**
 * @event 90022
 *
 * @description
 * 쇼핑몰에서 상품을 복구한 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90022,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "product_no": 131
 *   }
 * }
 * ```
 *
 *
 */
export interface OnProductRestored {
  eventNo: 90022;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 상품번호
     * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음
     *
     *
     */
    productNo: number;
  };
}

/**
 * @event 90075
 *
 * @description
 * 품목의 재고가 품절되었거나, 품절이 해제된 경우
 *
 * (재고 1개 -> 재고 0개)
 *
 * 또는
 *
 * (재고 0개 -> 재고 1개)
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90075,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "product_no": 36518,
 *     "product_code": "P000CCAO",
 *     "created_date": "2020-07-17T15:26:52+09:00",
 *     "updated_date": "2020-07-17T15:26:52+09:00",
 *     "product_name": "Sample Product Name",
 *     "eng_product_name": "",
 *     "supply_product_name": "Supply Sample Name",
 *     "model_name": "Sample Product CAFE2468",
 *     "custom_product_code": "CAFE2468",
 *     "product_condition": "N",
 *     "summary_description": "Flower Skirt",
 *     "simple_description": "Sweet Ballerina Flower Pleated Skirt.",
 *     "description": "desc.",
 *     "display": "F",
 *     "selling": "T",
 *     "retail_price": "0.00",
 *     "supply_price": "27000.00",
 *     "price": "24680.00",
 *     "price_content": null,
 *     "adult_certification": "F",
 *     "manufacturer_code": "M0000000",
 *     "supplier_code": "S0000000",
 *     "brand_code": "B0000000",
 *     "trend_code": "T0000000",
 *     "made_date": "2020-07-10",
 *     "release_date": "2020-07-10",
 *     "origin_place_code": 126,
 *     "shipping_scope": "B",
 *     "translated": "F",
 *     "status_text": "In case that item stock is less than or equal 0",
 *     "variant_code": "P000CCAO000B",
 *     "use_soldout": "T"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnProductInventoryChanged {
  eventNo: 90075;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 상품번호
     * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음
     *
     *
     */
    productNo: number;
    productCode: string;
    /**
     * @description
     * 가입일
     *
     *
     */
    createdDate: Cafe24Datetime;
    /**
     * @description
     * 상품이 수정된 일시
     *
     * date
     */
    updatedDate: Cafe24Datetime;
    /**
     * @description
     * 상품명
     *
     * 최대글자수 : [250자]
     */
    productName: string;
    /**
     * @description
     * 영문 상품명
     * 상품의 영문 이름. 해외 배송 등에 사용 가능함
     *
     * 최대글자수 : [250자]
     */
    engProductName: string;
    /**
     * @description
     * 공금사 상품명
     *
     * 최대글자수 : [250자]
     */
    supplyProductName: string;
    /**
     * @description
     * 상품의 모델명
     *
     * 최대글자수 : [100자]
     */
    modelName: string;
    /**
     * @description
     * 자체상품 코드
     * 사용자가 상품에 부여 가능한 코드. 재고 관리 등의 이유로 자체적으로 상품을 관리하고 있는 경우 사용함
     *
     * 최대글자수 : [40자]
     */
    customProductCode: string;
    /**
     * @description
     * 상품상태
     *
     * N : 신상품
     * B : 반품상품
     * R : 재고상품
     * U : 중고상품
     * E : 전시상품
     * F : 리퍼상품
     * S : 스크래치 상품
     */
    productCondition: Cafe24Enum;
    /**
     * @description
     * 상품 요약 설명
     *
     * 최대글자수 : [255자]
     */
    summaryDescription: string;
    /**
     * @description
     * 상품 간략 설명
     *
     *
     */
    simpleDescription: string;
    /**
     * @description
     * 상품 상세 설명
     *
     *
     */
    description: string;
    /**
     * @description
     * 진열상태
     *
     * T : 진열함
     * F : 진열안함
     */
    display: Cafe24Enum;
    /**
     * @description
     * 판매상태
     *
     * T : 판매함
     * F : 판매안함
     */
    selling: Cafe24Enum;
    /**
     * @description
     * 상품 소비자가
     *
     * 최소: [0]~최대: [2147483647]
     */
    retailPrice: string;
    /**
     * @description
     * 상품 공급가
     *
     * 최소: [0]~최대: [2147483647]
     */
    supplyPrice: string;
    /**
     * @description
     * 상품 판매가
     *
     * 최소: [0]~최대: [2147483647]
     */
    price: string;
    /**
     * @description
     * 판매가 대체문구
     *
     * 최대글자수 : [20자]
     */
    priceContent: any;
    /**
     * @description
     * 성인인증이 필요한 상품인지 여부
     *
     * T : 사용함
     * F : 사용안함
     */
    adultCertification: Cafe24Enum;
    /**
     * @description
     * 제조사 코드
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    manufacturerCode: string;
    /**
     * @description
     * 공급사 코드
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    supplierCode: string;
    /**
     * @description
     * 브랜드 코드
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    brandCode: string;
    /**
     * @description
     * 트렌드 코드
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    trendCode: string;
    /**
     * @description
     * 제조일자
     *
     * date
     */
    madeDate: Cafe24Date;
    /**
     * @description
     * 출시일자
     *
     * date
     */
    releaseDate: Cafe24Date;
    /**
     * @description
     * 원산지
     *
     *
     */
    originPlaceCode: number;
    shippingScope: Cafe24Enum;
    /**
     * @description
     * 번역상태
     *
     * T : 번역함
     * F : 번역안함
     */
    translated: Cafe24Enum;
    /**
     * @description
     * 현재 처리상태 문구 설명
     *
     *
     */
    statusText: string;
    variantCode: string;
    /**
     * @description
     * 품목 품절표시 사용 여부 ???
     *
     * T : 사용함
     * F : 사용안함
     */
    useSoldout: Cafe24Enum;
  };
}

/**
 * @event 90150
 *
 * @description
 * 쇼핑몰에 등록된 상품의 품절상태가 변경된 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90150,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "sold_out_by_current_shop": "T",
 *     "product_no": "1",
 *     "sold_out": {
 *       "1": "T",
 *       "2": "F",
 *       "3": "F"
 *     }
 *   }
 * }
 * ```
 *
 *
 */
export interface OnProductStockStatusChanged {
  eventNo: 90150;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 상품 품절 여부
     *
     * T : 품절, F : 품절 아님
     *
     *
     */
    soldOutByCurrentShop: Cafe24Enum;
    /**
     * @description
     * 상품번호
     * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음
     *
     *
     */
    productNo: string;
    /**
     * @description
     * 전체 쇼핑몰의 상품 품절 여부
     *
     * “1”:“T”,“2”:“F”
     *
     *
     */
    soldOut: {
      1: Cafe24Enum;
      2: Cafe24Enum;
      3: Cafe24Enum;
    };
  };
}

/**
 * @event 90023
 *
 * @description
 * 쇼핑몰에 주문이 접수된 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_customer
 * - mall.read_order
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90023,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "event_code": "create_order",
 *     "order_id": "20200717-0029236",
 *     "payment_gateway_name": "",
 *     "currency": "KRW",
 *     "order_date": "2020-07-17T15:28:14+09:00",
 *     "order_place_name": "naver pay",
 *     "member_id": "gdhong",
 *     "member_authentication": null,
 *     "buyer_name": "Jessica Hong",
 *     "buyer_email": "gdhong@cafe24corp.com",
 *     "buyer_phone": "02-0000-0000",
 *     "buyer_cellphone": "010-2424-2424",
 *     "group_no_when_ordering": "",
 *     "first_order": null,
 *     "order_from_mobile": "F",
 *     "paid": "T",
 *     "payment_date": "2020-07-17T15:24:07+09:00",
 *     "billing_name": "Jessica Hong",
 *     "bank_code": null,
 *     "payment_method": "mileage",
 *     "easypay_name": "",
 *     "use_escrow": "F",
 *     "bank_account_no": "",
 *     "order_price_amount": "24680.00",
 *     "membership_discount_amount": "0.00",
 *     "actual_payment_amount": "0.00",
 *     "mileage_spent_amount": "0.00",
 *     "shipping_fee": "0.00",
 *     "shipping_type": "A",
 *     "shipping_status": "F",
 *     "wished_delivery_date": "0000-00-00",
 *     "wished_delivery_time": null,
 *     "store_pickup": "F",
 *     "shipping_message": "",
 *     "order_place_id": "NCHECKOUT",
 *     "ordering_product_code": "P00000BO,P00000DQ",
 *     "ordering_product_name": "Sample Product Name 1,Sample Product Name 2"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnOrderReceived {
  eventNo: 90023;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 주문 상태 관련 이벤트코드
     *
     * create_order (주문생성)
     * pickup_complete_order (수거완료)
     * product_ready (상품 준비중)
     * shipping_end (배송완료 처리)
     * purchase_confirm (구매확정 처리)
     * shipping_ready (배송준비중 처리)
     * shipping_start (배송중 처리)
     * shipping_standby (배송대기 처리)
     * do_shipping_holding (배송보류 처리)
     * update_invoice_no (송장번호 변경)
     * unpaid (입금전)
     * paid_order (입금확인)
     * cancel_order (취소처리)
     * cancel_order_request (취소 신청)
     * cancel_unpaid_order (입금전 주문취소)
     * cancellation_complete (취소 완료)
     * auto_order_cancel (주문자동취소)
     * return_order (반품)
     * return_order_process (반품 처리중)
     * return_order_request (반품 신청)
     * return_complete_refunded (반품 완료-환불 완료)
     * return_hold (반품 보류)
     * exchange_order (교환)
     * exchange_order_request (교환 신청)
     * exchange_hold (교환 보류)
     * exchange_ready (교환 준비)
     * refund_order (환불 완료 처리)
     * unrefund_order (환불 전 처리)
     * changing_recipient_information (수령자 정보 변경)
     * insert_admin_memo (관리자 메모 등록)
     * modify_admin_memo (관리자 메모 수정)
     * delete_admin_memo (관리자 메모 삭제)
     * old_order_delete (주문서 삭제)
     */
    eventCode: string;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: string;
    /**
     * @description
     * 결제 PG사 이름
     *
     *
     */
    paymentGatewayName: string;
    /**
     * @description
     * 화폐단위
     *
     * KRW : ￦ 원
     * USD : $ 달러
     * JPY : ¥ 엔
     */
    currency: string;
    /**
     * @description
     * 주문일
     *
     * date
     */
    orderDate: Cafe24Datetime;
    /**
     * @description
     * 주문경로 텍스트
     *
     *
     */
    orderPlaceName: string;
    /**
     * @description
     * 회원 아이디
     *
     *
     */
    memberId: string;
    /**
     * @description
     * 회원 인증 여부
     *
     * T : 인증
     * F : 미인증
     * B : 특별관리회원
     * J : 14세미만회원
     */
    memberAuthentication: any;
    /**
     * @description
     * 주문자명
     *
     *
     */
    buyerName: string;
    /**
     * @description
     * 주문자 이메일
     *
     *
     */
    buyerEmail: string;
    /**
     * @description
     * 주문자 일반 전화
     *
     *
     */
    buyerPhone: string;
    /**
     * @description
     * 주문자 휴대 전화
     *
     *
     */
    buyerCellphone: string;
    /**
     * @description
     * 주문 시 회원등급
     *
     *
     */
    groupNoWhenOrdering: string;
    /**
     * @description
     * 최초 주문여부
     *
     * T : 최초 주문
     * F : 최초 주문 아님
     */
    firstOrder: any;
    /**
     * @description
     * 주문이 모바일에서 이루어졌는지 여부
     *
     * T : 모바일 주문
     * F : 모바일 주문 아님
     */
    orderFromMobile: Cafe24Enum;
    /**
     * @description
     * 결제 완료 여부
     *
     * T : 결제
     * F : 미결제
     * M : 부분 결제
     */
    paid: Cafe24Enum;
    /**
     * @description
     * 결제일
     *
     * date
     */
    paymentDate: Cafe24Datetime;
    /**
     * @description
     * 결제자명
     *
     *
     */
    billingName: string;
    /**
     * @description
     * 은행코드
     *
     * bank_code
     */
    bankCode: any;
    /**
     * @description
     * 결제수단 코드
     *
     * cash : 무통장
     * card : 신용카드
     * cell : 휴대폰
     * tcash : 계좌이체
     * prepaid : 선불금
     * credit : 예치금
     * point : 적립금
     * pointfy : 통합포인트
     * cvs : 편의점
     * cod : 후불
     * coupon : 쿠폰
     * market_discount : 마켓할인
     * etc : 기타
     */
    paymentMethod: string;
    /**
     * @description
     * 간편결제 결제사 이름
     *
     *
     */
    easypayName: string;
    /**
     * @description
     * 에스크로 사용여부
     *
     * T : 에스크로 사용
     * F : 에스크로 미사용
     */
    useEscrow: Cafe24Enum;
    /**
     * @description
     * 해당 주문건에 대한 쇼핑몰의 계좌번호
     *
     *
     */
    bankAccountNo: string;
    /**
     * @description
     * 주문금액
     *
     *
     */
    orderPriceAmount: string;
    /**
     * @description
     * 회원할인금액
     *
     *
     */
    membershipDiscountAmount: string;
    /**
     * @description
     * 실결제금액
     *
     *
     */
    actualPaymentAmount: string;
    /**
     * @description
     * 적립금 사용금액
     *
     *
     */
    mileageSpentAmount: string;
    /**
     * @description
     * 배송비
     *
     *
     */
    shippingFee: string;
    /**
     * @description
     * 배송비 타입
     *
     * 01 : 선불
     * 02 : 착불
     * 03 : 신용
     */
    shippingType: Cafe24Enum;
    /**
     * @description
     * 배송상태
     *
     * F : 배송전
     * M : 배송중
     * T : 배송완료
     * W : 배송보류
     */
    shippingStatus: Cafe24Enum;
    /**
     * @description
     * 희망배송일
     *
     *
     */
    wishedDeliveryDate: Cafe24Date;
    /**
     * @description
     * 희망배송시간
     *
     *
     */
    wishedDeliveryTime: any;
    /**
     * @description
     * 매장수령여부
     *
     * T : 매장수령
     * F : 매장수령 아님
     */
    storePickup: Cafe24Enum;
    /**
     * @description
     * 배송 메세지
     *
     *
     */
    shippingMessage: string;
    /**
     * @description
     * 주문경로
     *
     * cafe24:카페24
     * mobile:모바일웹
     * mobile_d:모바일앱
     * NCHECKOUT:네이버페이
     * inpark:인터파크
     * auction:옥션
     * sk11st:11번가
     * gmarket:G마켓
     * coupang:쿠팡
     * shopn:스마트스토어
     */
    orderPlaceId: string;
    /**
     * @description
     * 주문 상품
     *
     *
     */
    orderingProductCode: string;
    /**
     * @description
     * 주문 상품명
     *
     *
     */
    orderingProductName: string;
  };
}

/**
 * @event 90024
 *
 * @description
 * 쇼핑몰에 접수된 주문의 배송상태가 변경된 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_customer
 * - mall.read_order
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90024,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "event_code": "pickup_complete_order",
 *     "order_id": "20200717-0029236",
 *     "payment_gateway_name": "",
 *     "currency": "KRW",
 *     "order_date": "2020-07-17T15:28:14+09:00",
 *     "order_place_name": "네이버 페이",
 *     "member_id": "gdhong",
 *     "member_authentication": null,
 *     "buyer_name": "홍길동",
 *     "buyer_email": "gdhong@cafe24corp.com",
 *     "buyer_phone": "02-0000-0000",
 *     "buyer_cellphone": "010-2424-2424",
 *     "group_no_when_ordering": "",
 *     "first_order": null,
 *     "order_from_mobile": "T",
 *     "paid": "T",
 *     "payment_date": "2020-07-17T15:24:07+09:00",
 *     "billing_name": "홍길동",
 *     "bank_code": null,
 *     "payment_method": "card",
 *     "easypay_name": "",
 *     "use_escrow": "F",
 *     "bank_account_no": "",
 *     "order_price_amount": "24680.00",
 *     "membership_discount_amount": "0.00",
 *     "actual_payment_amount": "4000.00",
 *     "mileage_spent_amount": "0.00",
 *     "cancel_date": null,
 *     "shipping_fee": "0.00",
 *     "shipping_type": "A",
 *     "shipping_status": "T",
 *     "wished_delivery_date": "0000-00-00",
 *     "wished_delivery_time": null,
 *     "return_confirmed_date": null,
 *     "store_pickup": "F",
 *     "shipping_message": "",
 *     "order_place_id": "NCHECKOUT",
 *     "ordering_product_code": "P00000BO,P00000DQ",
 *     "ordering_product_name": "카페24 샘플 상품1,카페24 샘플 상품2",
 *     "included_deferpay_order": "F",
 *     "deferpay_order_id": "",
 *     "withdraw": "T",
 *     "withdraw_type": "C"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnOrderDeliveryStatusChanged {
  eventNo: 90024;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 주문 상태 관련 이벤트코드
     *
     * create_order (주문생성)
     * pickup_complete_order (수거완료)
     * product_ready (상품 준비중)
     * shipping_end (배송완료 처리)
     * purchase_confirm (구매확정 처리)
     * shipping_ready (배송준비중 처리)
     * shipping_start (배송중 처리)
     * shipping_standby (배송대기 처리)
     * do_shipping_holding (배송보류 처리)
     * update_invoice_no (송장번호 변경)
     * unpaid (입금전)
     * paid_order (입금확인)
     * cancel_order (취소처리)
     * cancel_order_request (취소 신청)
     * cancel_unpaid_order (입금전 주문취소)
     * cancellation_complete (취소 완료)
     * auto_order_cancel (주문자동취소)
     * return_order (반품)
     * return_order_process (반품 처리중)
     * return_order_request (반품 신청)
     * return_complete_refunded (반품 완료-환불 완료)
     * return_hold (반품 보류)
     * exchange_order (교환)
     * exchange_order_request (교환 신청)
     * exchange_hold (교환 보류)
     * exchange_ready (교환 준비)
     * refund_order (환불 완료 처리)
     * unrefund_order (환불 전 처리)
     * changing_recipient_information (수령자 정보 변경)
     * insert_admin_memo (관리자 메모 등록)
     * modify_admin_memo (관리자 메모 수정)
     * delete_admin_memo (관리자 메모 삭제)
     * old_order_delete (주문서 삭제)
     */
    eventCode: string;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: string;
    /**
     * @description
     * 결제 PG사 이름
     *
     *
     */
    paymentGatewayName: string;
    /**
     * @description
     * 화폐단위
     *
     * KRW : ￦ 원
     * USD : $ 달러
     * JPY : ¥ 엔
     */
    currency: string;
    /**
     * @description
     * 주문일
     *
     * date
     */
    orderDate: Cafe24Datetime;
    /**
     * @description
     * 주문경로 텍스트
     *
     *
     */
    orderPlaceName: string;
    /**
     * @description
     * 회원 아이디
     *
     *
     */
    memberId: string;
    /**
     * @description
     * 회원 인증 여부
     *
     * T : 인증
     * F : 미인증
     * B : 특별관리회원
     * J : 14세미만회원
     */
    memberAuthentication: any;
    /**
     * @description
     * 주문자명
     *
     *
     */
    buyerName: string;
    /**
     * @description
     * 주문자 이메일
     *
     *
     */
    buyerEmail: string;
    /**
     * @description
     * 주문자 일반 전화
     *
     *
     */
    buyerPhone: string;
    /**
     * @description
     * 주문자 휴대 전화
     *
     *
     */
    buyerCellphone: string;
    /**
     * @description
     * 주문 시 회원등급
     *
     *
     */
    groupNoWhenOrdering: string;
    /**
     * @description
     * 최초 주문여부
     *
     * T : 최초 주문
     * F : 최초 주문 아님
     */
    firstOrder: any;
    /**
     * @description
     * 주문이 모바일에서 이루어졌는지 여부
     *
     * T : 모바일 주문
     * F : 모바일 주문 아님
     */
    orderFromMobile: Cafe24Enum;
    /**
     * @description
     * 결제 완료 여부
     *
     * T : 결제
     * F : 미결제
     * M : 부분 결제
     */
    paid: Cafe24Enum;
    /**
     * @description
     * 결제일
     *
     * date
     */
    paymentDate: Cafe24Datetime;
    /**
     * @description
     * 결제자명
     *
     *
     */
    billingName: string;
    /**
     * @description
     * 은행코드
     *
     * bank_code
     */
    bankCode: any;
    /**
     * @description
     * 결제수단 코드
     *
     * cash : 무통장
     * card : 신용카드
     * cell : 휴대폰
     * tcash : 계좌이체
     * prepaid : 선불금
     * credit : 예치금
     * point : 적립금
     * pointfy : 통합포인트
     * cvs : 편의점
     * cod : 후불
     * coupon : 쿠폰
     * market_discount : 마켓할인
     * etc : 기타
     */
    paymentMethod: string;
    /**
     * @description
     * 간편결제 결제사 이름
     *
     *
     */
    easypayName: string;
    /**
     * @description
     * 에스크로 사용여부
     *
     * T : 에스크로 사용
     * F : 에스크로 미사용
     */
    useEscrow: Cafe24Enum;
    /**
     * @description
     * 해당 주문건에 대한 쇼핑몰의 계좌번호
     *
     *
     */
    bankAccountNo: string;
    /**
     * @description
     * 주문금액
     *
     *
     */
    orderPriceAmount: string;
    /**
     * @description
     * 회원할인금액
     *
     *
     */
    membershipDiscountAmount: string;
    /**
     * @description
     * 실결제금액
     *
     *
     */
    actualPaymentAmount: string;
    /**
     * @description
     * 적립금 사용금액
     *
     *
     */
    mileageSpentAmount: string;
    /**
     * @description
     * 주문취소일
     *
     *
     */
    cancelDate: any;
    /**
     * @description
     * 배송비
     *
     *
     */
    shippingFee: string;
    /**
     * @description
     * 배송비 타입
     *
     * 01 : 선불
     * 02 : 착불
     * 03 : 신용
     */
    shippingType: Cafe24Enum;
    /**
     * @description
     * 배송상태
     *
     * F : 배송전
     * M : 배송중
     * T : 배송완료
     * W : 배송보류
     */
    shippingStatus: Cafe24Enum;
    /**
     * @description
     * 희망배송일
     *
     *
     */
    wishedDeliveryDate: Cafe24Date;
    /**
     * @description
     * 희망배송시간
     *
     *
     */
    wishedDeliveryTime: any;
    /**
     * @description
     * 반품승인일시
     *
     *
     */
    returnConfirmedDate: any;
    /**
     * @description
     * 매장수령여부
     *
     * T : 매장수령
     * F : 매장수령 아님
     */
    storePickup: Cafe24Enum;
    /**
     * @description
     * 배송 메세지
     *
     *
     */
    shippingMessage: string;
    /**
     * @description
     * 주문경로
     *
     * cafe24:카페24
     * mobile:모바일웹
     * mobile_d:모바일앱
     * NCHECKOUT:네이버페이
     * inpark:인터파크
     * auction:옥션
     * sk11st:11번가
     * gmarket:G마켓
     * coupang:쿠팡
     * shopn:스마트스토어
     */
    orderPlaceId: string;
    /**
     * @description
     * 주문 상품
     *
     *
     */
    orderingProductCode: string;
    /**
     * @description
     * 주문 상품명
     *
     *
     */
    orderingProductName: string;
    /**
     * @description
     * 후불결제 포함여부
     *
     *
     */
    includedDeferpayOrder: Cafe24Enum;
    /**
     * @description
     * 후불결제 주문번호
     *
     *
     */
    deferpayOrderId: string;
    /**
     * @description
     * 클레임 철회 여부
     *
     * T: 철회된 주문 / F: 일반 주문
     */
    withdraw: Cafe24Enum;
    /**
     * @description
     * 클레임 철회 종류
     *
     * 클레임이 철회된 주문만 해당 값이 반환됩니다.
     * C: 입금전 취소 철회 / E: 입금전 교환 철회
     */
    withdrawType: Cafe24Enum;
  };
}

/**
 * @event 90071
 *
 * @description
 * 쇼핑몰에 접수된 주문의 배송상태가 변경된 경우 (일괄)
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_customer
 * - mall.read_order
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90071,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "event_code": "pickup_complete_order",
 *     "order_id": "20200717-0001242,20200717-0001251,20200717-0001261,20200717-0001270,20200717-0001287",
 *     "included_deferpay_order": "",
 *     "deferpay_order_id": ""
 *   }
 * }
 * ```
 *
 *
 */
export interface OnBulkOrderDeliveryStatusChanged {
  eventNo: 90071;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 주문 상태 관련 이벤트코드
     *
     * create_order (주문생성)
     * pickup_complete_order (수거완료)
     * product_ready (상품 준비중)
     * shipping_end (배송완료 처리)
     * purchase_confirm (구매확정 처리)
     * shipping_ready (배송준비중 처리)
     * shipping_start (배송중 처리)
     * shipping_standby (배송대기 처리)
     * do_shipping_holding (배송보류 처리)
     * update_invoice_no (송장번호 변경)
     * unpaid (입금전)
     * paid_order (입금확인)
     * cancel_order (취소처리)
     * cancel_order_request (취소 신청)
     * cancel_unpaid_order (입금전 주문취소)
     * cancellation_complete (취소 완료)
     * auto_order_cancel (주문자동취소)
     * return_order (반품)
     * return_order_process (반품 처리중)
     * return_order_request (반품 신청)
     * return_complete_refunded (반품 완료-환불 완료)
     * return_hold (반품 보류)
     * exchange_order (교환)
     * exchange_order_request (교환 신청)
     * exchange_hold (교환 보류)
     * exchange_ready (교환 준비)
     * refund_order (환불 완료 처리)
     * unrefund_order (환불 전 처리)
     * changing_recipient_information (수령자 정보 변경)
     * insert_admin_memo (관리자 메모 등록)
     * modify_admin_memo (관리자 메모 수정)
     * delete_admin_memo (관리자 메모 삭제)
     * old_order_delete (주문서 삭제)
     */
    eventCode: string;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: string;
    /**
     * @description
     * 후불결제 포함여부
     *
     *
     */
    includedDeferpayOrder: string;
    /**
     * @description
     * 후불결제 주문번호
     *
     *
     */
    deferpayOrderId: string;
  };
}

/**
 * @event 90025
 *
 * @description
 * 쇼핑몰에 접수된 주문의 입금상태가 변경된 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_customer
 * - mall.read_order
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90025,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "event_code": "paid_order",
 *     "order_id": "20200717-0029236",
 *     "payment_gateway_name": "",
 *     "currency": "KRW",
 *     "order_date": "2020-07-17T15:30:14+09:00",
 *     "order_place_name": "모바일웹",
 *     "member_id": "gdhong",
 *     "member_authentication": null,
 *     "buyer_name": "홍길동",
 *     "buyer_email": "gdhong@cafe24corp.com",
 *     "buyer_phone": "02-0000-0000",
 *     "buyer_cellphone": "010-2424-2424",
 *     "group_no_when_ordering": "",
 *     "first_order": "F",
 *     "order_from_mobile": "T",
 *     "paid": "T",
 *     "payment_date": "2020-07-17T15:24:07+09:00",
 *     "billing_name": "홍길동",
 *     "bank_code": "bank_20",
 *     "payment_method": "cash",
 *     "easypay_name": "",
 *     "use_escrow": "F",
 *     "bank_account_no": "382-222254-13-001",
 *     "order_price_amount": "24680.00",
 *     "membership_discount_amount": "0.00",
 *     "actual_payment_amount": "27580",
 *     "mileage_spent_amount": "100.00",
 *     "shipping_fee": "3000.00",
 *     "shipping_type": "A",
 *     "shipping_status": "F",
 *     "wished_delivery_date": "",
 *     "wished_delivery_time": null,
 *     "store_pickup": "F",
 *     "shipping_message": "빠른 배송 부탁드립니다.",
 *     "ordering_product_code": "P00000HK",
 *     "ordering_product_name": "카페24 샘플 상품1",
 *     "withdraw": "T",
 *     "withdraw_type": "E"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnOrderPaymentStatusChanged {
  eventNo: 90025;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 주문 상태 관련 이벤트코드
     *
     * create_order (주문생성)
     * pickup_complete_order (수거완료)
     * product_ready (상품 준비중)
     * shipping_end (배송완료 처리)
     * purchase_confirm (구매확정 처리)
     * shipping_ready (배송준비중 처리)
     * shipping_start (배송중 처리)
     * shipping_standby (배송대기 처리)
     * do_shipping_holding (배송보류 처리)
     * update_invoice_no (송장번호 변경)
     * unpaid (입금전)
     * paid_order (입금확인)
     * cancel_order (취소처리)
     * cancel_order_request (취소 신청)
     * cancel_unpaid_order (입금전 주문취소)
     * cancellation_complete (취소 완료)
     * auto_order_cancel (주문자동취소)
     * return_order (반품)
     * return_order_process (반품 처리중)
     * return_order_request (반품 신청)
     * return_complete_refunded (반품 완료-환불 완료)
     * return_hold (반품 보류)
     * exchange_order (교환)
     * exchange_order_request (교환 신청)
     * exchange_hold (교환 보류)
     * exchange_ready (교환 준비)
     * refund_order (환불 완료 처리)
     * unrefund_order (환불 전 처리)
     * changing_recipient_information (수령자 정보 변경)
     * insert_admin_memo (관리자 메모 등록)
     * modify_admin_memo (관리자 메모 수정)
     * delete_admin_memo (관리자 메모 삭제)
     * old_order_delete (주문서 삭제)
     */
    eventCode: string;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: string;
    /**
     * @description
     * 결제 PG사 이름
     *
     *
     */
    paymentGatewayName: string;
    /**
     * @description
     * 화폐단위
     *
     * KRW : ￦ 원
     * USD : $ 달러
     * JPY : ¥ 엔
     */
    currency: string;
    /**
     * @description
     * 주문일
     *
     * date
     */
    orderDate: Cafe24Datetime;
    /**
     * @description
     * 주문경로 텍스트
     *
     *
     */
    orderPlaceName: string;
    /**
     * @description
     * 회원 아이디
     *
     *
     */
    memberId: string;
    /**
     * @description
     * 회원 인증 여부
     *
     * T : 인증
     * F : 미인증
     * B : 특별관리회원
     * J : 14세미만회원
     */
    memberAuthentication: any;
    /**
     * @description
     * 주문자명
     *
     *
     */
    buyerName: string;
    /**
     * @description
     * 주문자 이메일
     *
     *
     */
    buyerEmail: string;
    /**
     * @description
     * 주문자 일반 전화
     *
     *
     */
    buyerPhone: string;
    /**
     * @description
     * 주문자 휴대 전화
     *
     *
     */
    buyerCellphone: string;
    /**
     * @description
     * 주문 시 회원등급
     *
     *
     */
    groupNoWhenOrdering: string;
    /**
     * @description
     * 최초 주문여부
     *
     * T : 최초 주문
     * F : 최초 주문 아님
     */
    firstOrder: Cafe24Enum;
    /**
     * @description
     * 주문이 모바일에서 이루어졌는지 여부
     *
     * T : 모바일 주문
     * F : 모바일 주문 아님
     */
    orderFromMobile: Cafe24Enum;
    /**
     * @description
     * 결제 완료 여부
     *
     * T : 결제
     * F : 미결제
     * M : 부분 결제
     */
    paid: Cafe24Enum;
    /**
     * @description
     * 결제일
     *
     * date
     */
    paymentDate: Cafe24Datetime;
    /**
     * @description
     * 결제자명
     *
     *
     */
    billingName: string;
    /**
     * @description
     * 은행코드
     *
     * bank_code
     */
    bankCode: string;
    /**
     * @description
     * 결제수단 코드
     *
     * cash : 무통장
     * card : 신용카드
     * cell : 휴대폰
     * tcash : 계좌이체
     * prepaid : 선불금
     * credit : 예치금
     * point : 적립금
     * pointfy : 통합포인트
     * cvs : 편의점
     * cod : 후불
     * coupon : 쿠폰
     * market_discount : 마켓할인
     * etc : 기타
     */
    paymentMethod: string;
    /**
     * @description
     * 간편결제 결제사 이름
     *
     *
     */
    easypayName: string;
    /**
     * @description
     * 에스크로 사용여부
     *
     * T : 에스크로 사용
     * F : 에스크로 미사용
     */
    useEscrow: Cafe24Enum;
    /**
     * @description
     * 해당 주문건에 대한 쇼핑몰의 계좌번호
     *
     *
     */
    bankAccountNo: Cafe24Date;
    /**
     * @description
     * 주문금액
     *
     *
     */
    orderPriceAmount: string;
    /**
     * @description
     * 회원할인금액
     *
     *
     */
    membershipDiscountAmount: string;
    /**
     * @description
     * 실결제금액
     *
     *
     */
    actualPaymentAmount: string;
    /**
     * @description
     * 적립금 사용금액
     *
     *
     */
    mileageSpentAmount: string;
    /**
     * @description
     * 배송비
     *
     *
     */
    shippingFee: string;
    /**
     * @description
     * 배송비 타입
     *
     * 01 : 선불
     * 02 : 착불
     * 03 : 신용
     */
    shippingType: Cafe24Enum;
    /**
     * @description
     * 배송상태
     *
     * F : 배송전
     * M : 배송중
     * T : 배송완료
     * W : 배송보류
     */
    shippingStatus: Cafe24Enum;
    /**
     * @description
     * 희망배송일
     *
     *
     */
    wishedDeliveryDate: string;
    /**
     * @description
     * 희망배송시간
     *
     *
     */
    wishedDeliveryTime: any;
    /**
     * @description
     * 매장수령여부
     *
     * T : 매장수령
     * F : 매장수령 아님
     */
    storePickup: Cafe24Enum;
    /**
     * @description
     * 배송 메세지
     *
     *
     */
    shippingMessage: string;
    /**
     * @description
     * 주문 상품
     *
     *
     */
    orderingProductCode: string;
    /**
     * @description
     * 주문 상품명
     *
     *
     */
    orderingProductName: string;
    /**
     * @description
     * 클레임 철회 여부
     *
     * T: 철회된 주문 / F: 일반 주문
     */
    withdraw: Cafe24Enum;
    /**
     * @description
     * 클레임 철회 종류
     *
     * 클레임이 철회된 주문만 해당 값이 반환됩니다.
     * C: 입금전 취소 철회 / E: 입금전 교환 철회
     */
    withdrawType: Cafe24Enum;
  };
}

/**
 * @event 90026
 *
 * @description
 * 쇼핑몰에 접수된 주문의 취소상태가 변경된 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_customer
 * - mall.read_order
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90026,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "event_code": "cancel_order",
 *     "order_id": "20200716-0000023",
 *     "payment_gateway_name": "inicis",
 *     "currency": "KRW",
 *     "order_date": "2020-07-16T02:20:20+09:00",
 *     "order_place_name": "naver pay",
 *     "member_id": "gdhong",
 *     "member_authentication": null,
 *     "buyer_name": "Jessica Hong",
 *     "buyer_email": "gdhong@cafe24corp.com",
 *     "buyer_phone": "02-0000-0000",
 *     "buyer_cellphone": "010-2424-2424",
 *     "group_no_when_ordering": "1",
 *     "first_order": "T",
 *     "order_from_mobile": "T",
 *     "paid": "T",
 *     "payment_date": "2020-07-17T15:24:07+09:00",
 *     "billing_name": "Jessica Hong",
 *     "bank_code": "",
 *     "payment_method": "card",
 *     "easypay_name": "",
 *     "use_escrow": "F",
 *     "bank_account_no": "382-222254-13-001",
 *     "order_price_amount": "24680.00",
 *     "membership_discount_amount": "0.00",
 *     "actual_payment_amount": "24580",
 *     "mileage_spent_amount": "100.00",
 *     "cancel_date": null,
 *     "shipping_fee": "0.00",
 *     "shipping_type": "A",
 *     "shipping_status": "F",
 *     "wished_delivery_date": "",
 *     "wished_delivery_time": null,
 *     "store_pickup": "F",
 *     "shipping_message": "Quick Delivery please.",
 *     "order_place_id": "mobile",
 *     "ordering_product_code": "P00000HK",
 *     "ordering_product_name": "Sample Product Name 1"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnOrderCancellationStatusChanged {
  eventNo: 90026;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 주문 상태 관련 이벤트코드
     *
     * create_order (주문생성)
     * pickup_complete_order (수거완료)
     * product_ready (상품 준비중)
     * shipping_end (배송완료 처리)
     * purchase_confirm (구매확정 처리)
     * shipping_ready (배송준비중 처리)
     * shipping_start (배송중 처리)
     * shipping_standby (배송대기 처리)
     * do_shipping_holding (배송보류 처리)
     * update_invoice_no (송장번호 변경)
     * unpaid (입금전)
     * paid_order (입금확인)
     * cancel_order (취소처리)
     * cancel_order_request (취소 신청)
     * cancel_unpaid_order (입금전 주문취소)
     * cancellation_complete (취소 완료)
     * auto_order_cancel (주문자동취소)
     * return_order (반품)
     * return_order_process (반품 처리중)
     * return_order_request (반품 신청)
     * return_complete_refunded (반품 완료-환불 완료)
     * return_hold (반품 보류)
     * exchange_order (교환)
     * exchange_order_request (교환 신청)
     * exchange_hold (교환 보류)
     * exchange_ready (교환 준비)
     * refund_order (환불 완료 처리)
     * unrefund_order (환불 전 처리)
     * changing_recipient_information (수령자 정보 변경)
     * insert_admin_memo (관리자 메모 등록)
     * modify_admin_memo (관리자 메모 수정)
     * delete_admin_memo (관리자 메모 삭제)
     * old_order_delete (주문서 삭제)
     */
    eventCode: string;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: string;
    /**
     * @description
     * 결제 PG사 이름
     *
     *
     */
    paymentGatewayName: string;
    /**
     * @description
     * 화폐단위
     *
     * KRW : ￦ 원
     * USD : $ 달러
     * JPY : ¥ 엔
     */
    currency: string;
    /**
     * @description
     * 주문일
     *
     * date
     */
    orderDate: Cafe24Datetime;
    /**
     * @description
     * 주문경로 텍스트
     *
     *
     */
    orderPlaceName: string;
    /**
     * @description
     * 회원 아이디
     *
     *
     */
    memberId: string;
    /**
     * @description
     * 회원 인증 여부
     *
     * T : 인증
     * F : 미인증
     * B : 특별관리회원
     * J : 14세미만회원
     */
    memberAuthentication: any;
    /**
     * @description
     * 주문자명
     *
     *
     */
    buyerName: string;
    /**
     * @description
     * 주문자 이메일
     *
     *
     */
    buyerEmail: string;
    /**
     * @description
     * 주문자 일반 전화
     *
     *
     */
    buyerPhone: string;
    /**
     * @description
     * 주문자 휴대 전화
     *
     *
     */
    buyerCellphone: string;
    /**
     * @description
     * 주문 시 회원등급
     *
     *
     */
    groupNoWhenOrdering: string;
    /**
     * @description
     * 최초 주문여부
     *
     * T : 최초 주문
     * F : 최초 주문 아님
     */
    firstOrder: Cafe24Enum;
    /**
     * @description
     * 주문이 모바일에서 이루어졌는지 여부
     *
     * T : 모바일 주문
     * F : 모바일 주문 아님
     */
    orderFromMobile: Cafe24Enum;
    /**
     * @description
     * 결제 완료 여부
     *
     * T : 결제
     * F : 미결제
     * M : 부분 결제
     */
    paid: Cafe24Enum;
    /**
     * @description
     * 결제일
     *
     * date
     */
    paymentDate: Cafe24Datetime;
    /**
     * @description
     * 결제자명
     *
     *
     */
    billingName: string;
    /**
     * @description
     * 은행코드
     *
     * bank_code
     */
    bankCode: string;
    /**
     * @description
     * 결제수단 코드
     *
     * cash : 무통장
     * card : 신용카드
     * cell : 휴대폰
     * tcash : 계좌이체
     * prepaid : 선불금
     * credit : 예치금
     * point : 적립금
     * pointfy : 통합포인트
     * cvs : 편의점
     * cod : 후불
     * coupon : 쿠폰
     * market_discount : 마켓할인
     * etc : 기타
     */
    paymentMethod: string;
    /**
     * @description
     * 간편결제 결제사 이름
     *
     *
     */
    easypayName: string;
    /**
     * @description
     * 에스크로 사용여부
     *
     * T : 에스크로 사용
     * F : 에스크로 미사용
     */
    useEscrow: Cafe24Enum;
    /**
     * @description
     * 해당 주문건에 대한 쇼핑몰의 계좌번호
     *
     *
     */
    bankAccountNo: Cafe24Date;
    /**
     * @description
     * 주문금액
     *
     *
     */
    orderPriceAmount: string;
    /**
     * @description
     * 회원할인금액
     *
     *
     */
    membershipDiscountAmount: string;
    /**
     * @description
     * 실결제금액
     *
     *
     */
    actualPaymentAmount: string;
    /**
     * @description
     * 적립금 사용금액
     *
     *
     */
    mileageSpentAmount: string;
    /**
     * @description
     * 주문취소일
     *
     *
     */
    cancelDate: any;
    /**
     * @description
     * 배송비
     *
     *
     */
    shippingFee: string;
    /**
     * @description
     * 배송비 타입
     *
     * 01 : 선불
     * 02 : 착불
     * 03 : 신용
     */
    shippingType: Cafe24Enum;
    /**
     * @description
     * 배송상태
     *
     * F : 배송전
     * M : 배송중
     * T : 배송완료
     * W : 배송보류
     */
    shippingStatus: Cafe24Enum;
    /**
     * @description
     * 희망배송일
     *
     *
     */
    wishedDeliveryDate: string;
    /**
     * @description
     * 희망배송시간
     *
     *
     */
    wishedDeliveryTime: any;
    /**
     * @description
     * 매장수령여부
     *
     * T : 매장수령
     * F : 매장수령 아님
     */
    storePickup: Cafe24Enum;
    /**
     * @description
     * 배송 메세지
     *
     *
     */
    shippingMessage: string;
    /**
     * @description
     * 주문경로
     *
     * cafe24:카페24
     * mobile:모바일웹
     * mobile_d:모바일앱
     * NCHECKOUT:네이버페이
     * inpark:인터파크
     * auction:옥션
     * sk11st:11번가
     * gmarket:G마켓
     * coupang:쿠팡
     * shopn:스마트스토어
     */
    orderPlaceId: string;
    /**
     * @description
     * 주문 상품
     *
     *
     */
    orderingProductCode: string;
    /**
     * @description
     * 주문 상품명
     *
     *
     */
    orderingProductName: string;
  };
}

/**
 * @event 90072
 *
 * @description
 * 쇼핑몰에 접수된 주문의 취소상태가 변경된 경우 (일괄)
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_customer
 * - mall.read_order
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90072,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "event_code": "cancel_order",
 *     "order_id": "20200713-0000039,20200708-0000080"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnBulkOrderCancellationStatusChanged {
  eventNo: 90072;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 주문 상태 관련 이벤트코드
     *
     * create_order (주문생성)
     * pickup_complete_order (수거완료)
     * product_ready (상품 준비중)
     * shipping_end (배송완료 처리)
     * purchase_confirm (구매확정 처리)
     * shipping_ready (배송준비중 처리)
     * shipping_start (배송중 처리)
     * shipping_standby (배송대기 처리)
     * do_shipping_holding (배송보류 처리)
     * update_invoice_no (송장번호 변경)
     * unpaid (입금전)
     * paid_order (입금확인)
     * cancel_order (취소처리)
     * cancel_order_request (취소 신청)
     * cancel_unpaid_order (입금전 주문취소)
     * cancellation_complete (취소 완료)
     * auto_order_cancel (주문자동취소)
     * return_order (반품)
     * return_order_process (반품 처리중)
     * return_order_request (반품 신청)
     * return_complete_refunded (반품 완료-환불 완료)
     * return_hold (반품 보류)
     * exchange_order (교환)
     * exchange_order_request (교환 신청)
     * exchange_hold (교환 보류)
     * exchange_ready (교환 준비)
     * refund_order (환불 완료 처리)
     * unrefund_order (환불 전 처리)
     * changing_recipient_information (수령자 정보 변경)
     * insert_admin_memo (관리자 메모 등록)
     * modify_admin_memo (관리자 메모 수정)
     * delete_admin_memo (관리자 메모 삭제)
     * old_order_delete (주문서 삭제)
     */
    eventCode: string;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: string;
  };
}

/**
 * @event 90027
 *
 * @description
 * 쇼핑몰에 접수된 주문의 반품상태가 변경된 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_customer
 * - mall.read_order
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90027,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "event_code": "return_order",
 *     "order_id": "20200716-0000023",
 *     "payment_gateway_name": "inicis",
 *     "currency": "KRW",
 *     "order_date": "2020-07-16T02:20:20+09:00",
 *     "order_place_name": "모바일웹",
 *     "member_id": "gdhong",
 *     "member_authentication": null,
 *     "buyer_name": "홍길동",
 *     "buyer_email": "gdhong@cafe24corp.com",
 *     "buyer_phone": "02-0000-0000",
 *     "buyer_cellphone": "010-2424-2424",
 *     "group_no_when_ordering": "1",
 *     "first_order": "T",
 *     "order_from_mobile": "T",
 *     "paid": "T",
 *     "payment_date": "2020-07-17T15:24:07+09:00",
 *     "billing_name": "홍길동",
 *     "bank_code": "",
 *     "payment_method": "card",
 *     "easypay_name": "",
 *     "use_escrow": "F",
 *     "bank_account_no": "382-222254-13-001",
 *     "order_price_amount": "24680.00",
 *     "membership_discount_amount": "0.00",
 *     "actual_payment_amount": "24580",
 *     "mileage_spent_amount": "100.00",
 *     "cancel_date": null,
 *     "shipping_fee": "0.00",
 *     "shipping_type": "A",
 *     "shipping_status": "F",
 *     "wished_delivery_date": "",
 *     "wished_delivery_time": null,
 *     "store_pickup": "F",
 *     "shipping_message": "빠른 배송 부탁드립니다.",
 *     "order_place_id": "mobile",
 *     "ordering_product_code": "P00000HK",
 *     "ordering_product_name": "카페24 샘플 상품1",
 *     "claim_reason_type": "P",
 *     "claim_reason": "not satisfied",
 *     "claim_reason_type_text": "상품 불만족"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnOrderReturnStatusChanged {
  eventNo: 90027;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 주문 상태 관련 이벤트코드
     *
     * create_order (주문생성)
     * pickup_complete_order (수거완료)
     * product_ready (상품 준비중)
     * shipping_end (배송완료 처리)
     * purchase_confirm (구매확정 처리)
     * shipping_ready (배송준비중 처리)
     * shipping_start (배송중 처리)
     * shipping_standby (배송대기 처리)
     * do_shipping_holding (배송보류 처리)
     * update_invoice_no (송장번호 변경)
     * unpaid (입금전)
     * paid_order (입금확인)
     * cancel_order (취소처리)
     * cancel_order_request (취소 신청)
     * cancel_unpaid_order (입금전 주문취소)
     * cancellation_complete (취소 완료)
     * auto_order_cancel (주문자동취소)
     * return_order (반품)
     * return_order_process (반품 처리중)
     * return_order_request (반품 신청)
     * return_complete_refunded (반품 완료-환불 완료)
     * return_hold (반품 보류)
     * exchange_order (교환)
     * exchange_order_request (교환 신청)
     * exchange_hold (교환 보류)
     * exchange_ready (교환 준비)
     * refund_order (환불 완료 처리)
     * unrefund_order (환불 전 처리)
     * changing_recipient_information (수령자 정보 변경)
     * insert_admin_memo (관리자 메모 등록)
     * modify_admin_memo (관리자 메모 수정)
     * delete_admin_memo (관리자 메모 삭제)
     * old_order_delete (주문서 삭제)
     */
    eventCode: string;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: string;
    /**
     * @description
     * 결제 PG사 이름
     *
     *
     */
    paymentGatewayName: string;
    /**
     * @description
     * 화폐단위
     *
     * KRW : ￦ 원
     * USD : $ 달러
     * JPY : ¥ 엔
     */
    currency: string;
    /**
     * @description
     * 주문일
     *
     * date
     */
    orderDate: Cafe24Datetime;
    /**
     * @description
     * 주문경로 텍스트
     *
     *
     */
    orderPlaceName: string;
    /**
     * @description
     * 회원 아이디
     *
     *
     */
    memberId: string;
    /**
     * @description
     * 회원 인증 여부
     *
     * T : 인증
     * F : 미인증
     * B : 특별관리회원
     * J : 14세미만회원
     */
    memberAuthentication: any;
    /**
     * @description
     * 주문자명
     *
     *
     */
    buyerName: string;
    /**
     * @description
     * 주문자 이메일
     *
     *
     */
    buyerEmail: string;
    /**
     * @description
     * 주문자 일반 전화
     *
     *
     */
    buyerPhone: string;
    /**
     * @description
     * 주문자 휴대 전화
     *
     *
     */
    buyerCellphone: string;
    /**
     * @description
     * 주문 시 회원등급
     *
     *
     */
    groupNoWhenOrdering: string;
    /**
     * @description
     * 최초 주문여부
     *
     * T : 최초 주문
     * F : 최초 주문 아님
     */
    firstOrder: Cafe24Enum;
    /**
     * @description
     * 주문이 모바일에서 이루어졌는지 여부
     *
     * T : 모바일 주문
     * F : 모바일 주문 아님
     */
    orderFromMobile: Cafe24Enum;
    /**
     * @description
     * 결제 완료 여부
     *
     * T : 결제
     * F : 미결제
     * M : 부분 결제
     */
    paid: Cafe24Enum;
    /**
     * @description
     * 결제일
     *
     * date
     */
    paymentDate: Cafe24Datetime;
    /**
     * @description
     * 결제자명
     *
     *
     */
    billingName: string;
    /**
     * @description
     * 은행코드
     *
     * bank_code
     */
    bankCode: string;
    /**
     * @description
     * 결제수단 코드
     *
     * cash : 무통장
     * card : 신용카드
     * cell : 휴대폰
     * tcash : 계좌이체
     * prepaid : 선불금
     * credit : 예치금
     * point : 적립금
     * pointfy : 통합포인트
     * cvs : 편의점
     * cod : 후불
     * coupon : 쿠폰
     * market_discount : 마켓할인
     * etc : 기타
     */
    paymentMethod: string;
    /**
     * @description
     * 간편결제 결제사 이름
     *
     *
     */
    easypayName: string;
    /**
     * @description
     * 에스크로 사용여부
     *
     * T : 에스크로 사용
     * F : 에스크로 미사용
     */
    useEscrow: Cafe24Enum;
    /**
     * @description
     * 해당 주문건에 대한 쇼핑몰의 계좌번호
     *
     *
     */
    bankAccountNo: Cafe24Date;
    /**
     * @description
     * 주문금액
     *
     *
     */
    orderPriceAmount: string;
    /**
     * @description
     * 회원할인금액
     *
     *
     */
    membershipDiscountAmount: string;
    /**
     * @description
     * 실결제금액
     *
     *
     */
    actualPaymentAmount: string;
    /**
     * @description
     * 적립금 사용금액
     *
     *
     */
    mileageSpentAmount: string;
    /**
     * @description
     * 주문취소일
     *
     *
     */
    cancelDate: any;
    /**
     * @description
     * 배송비
     *
     *
     */
    shippingFee: string;
    /**
     * @description
     * 배송비 타입
     *
     * 01 : 선불
     * 02 : 착불
     * 03 : 신용
     */
    shippingType: Cafe24Enum;
    /**
     * @description
     * 배송상태
     *
     * F : 배송전
     * M : 배송중
     * T : 배송완료
     * W : 배송보류
     */
    shippingStatus: Cafe24Enum;
    /**
     * @description
     * 희망배송일
     *
     *
     */
    wishedDeliveryDate: string;
    /**
     * @description
     * 희망배송시간
     *
     *
     */
    wishedDeliveryTime: any;
    /**
     * @description
     * 매장수령여부
     *
     * T : 매장수령
     * F : 매장수령 아님
     */
    storePickup: Cafe24Enum;
    /**
     * @description
     * 배송 메세지
     *
     *
     */
    shippingMessage: string;
    /**
     * @description
     * 주문경로
     *
     * cafe24:카페24
     * mobile:모바일웹
     * mobile_d:모바일앱
     * NCHECKOUT:네이버페이
     * inpark:인터파크
     * auction:옥션
     * sk11st:11번가
     * gmarket:G마켓
     * coupang:쿠팡
     * shopn:스마트스토어
     */
    orderPlaceId: string;
    /**
     * @description
     * 주문 상품
     *
     *
     */
    orderingProductCode: string;
    /**
     * @description
     * 주문 상품명
     *
     *
     */
    orderingProductName: string;
    claimReasonType: Cafe24Enum;
    claimReason: string;
    /**
     * @description
     * 반품 사유
     *
     * 고객변심, 상품 불만족, 상품불량, 배송 오류
     */
    claimReasonTypeText: string;
  };
}

/**
 * @event 90074
 *
 * @description
 * 쇼핑몰에 접수된 주문의 반품상태가 변경된 경우 (일괄)
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_customer
 * - mall.read_order
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90074,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "event_code": "return_order",
 *     "order_id": "20200528-0000019,20200513-0000040"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnBulkOrderReturnStatusChanged {
  eventNo: 90074;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 주문 상태 관련 이벤트코드
     *
     * create_order (주문생성)
     * pickup_complete_order (수거완료)
     * product_ready (상품 준비중)
     * shipping_end (배송완료 처리)
     * purchase_confirm (구매확정 처리)
     * shipping_ready (배송준비중 처리)
     * shipping_start (배송중 처리)
     * shipping_standby (배송대기 처리)
     * do_shipping_holding (배송보류 처리)
     * update_invoice_no (송장번호 변경)
     * unpaid (입금전)
     * paid_order (입금확인)
     * cancel_order (취소처리)
     * cancel_order_request (취소 신청)
     * cancel_unpaid_order (입금전 주문취소)
     * cancellation_complete (취소 완료)
     * auto_order_cancel (주문자동취소)
     * return_order (반품)
     * return_order_process (반품 처리중)
     * return_order_request (반품 신청)
     * return_complete_refunded (반품 완료-환불 완료)
     * return_hold (반품 보류)
     * exchange_order (교환)
     * exchange_order_request (교환 신청)
     * exchange_hold (교환 보류)
     * exchange_ready (교환 준비)
     * refund_order (환불 완료 처리)
     * unrefund_order (환불 전 처리)
     * changing_recipient_information (수령자 정보 변경)
     * insert_admin_memo (관리자 메모 등록)
     * modify_admin_memo (관리자 메모 수정)
     * delete_admin_memo (관리자 메모 삭제)
     * old_order_delete (주문서 삭제)
     */
    eventCode: string;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: string;
  };
}

/**
 * @event 90028
 *
 * @description
 * 쇼핑몰에 접수된 주문의 교환상태가 변경된 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_customer
 * - mall.read_order
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90028,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "event_code": "exchange_order",
 *     "order_id": "20200716-0000023",
 *     "payment_gateway_name": "inicis",
 *     "currency": "KRW",
 *     "order_date": "2020-07-16T02:20:20+09:00",
 *     "order_place_name": "naver pay",
 *     "member_id": "gdhong",
 *     "member_authentication": null,
 *     "buyer_name": "Jessica Hong",
 *     "buyer_email": "gdhong@cafe24corp.com",
 *     "buyer_phone": "02-0000-0000",
 *     "buyer_cellphone": "010-2424-2424",
 *     "group_no_when_ordering": "1",
 *     "first_order": "T",
 *     "order_from_mobile": "T",
 *     "paid": "T",
 *     "payment_date": "2020-07-17T15:24:07+09:00",
 *     "billing_name": "Jessica Hong",
 *     "bank_code": "",
 *     "payment_method": "card",
 *     "easypay_name": "",
 *     "use_escrow": "F",
 *     "bank_account_no": "382-222254-13-001",
 *     "order_price_amount": "24680.00",
 *     "membership_discount_amount": "0.00",
 *     "actual_payment_amount": "24580",
 *     "mileage_spent_amount": "100.00",
 *     "cancel_date": null,
 *     "shipping_fee": "0.00",
 *     "shipping_type": "A",
 *     "shipping_status": "F",
 *     "wished_delivery_date": "",
 *     "wished_delivery_time": null,
 *     "store_pickup": "F",
 *     "shipping_message": "Quick Delivery please.",
 *     "order_place_id": "mobile",
 *     "ordering_product_code": "P00000HK",
 *     "ordering_product_name": "Sample Product Name1"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnOrderExchangeStatusChanged {
  eventNo: 90028;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 주문 상태 관련 이벤트코드
     *
     * create_order (주문생성)
     * pickup_complete_order (수거완료)
     * product_ready (상품 준비중)
     * shipping_end (배송완료 처리)
     * purchase_confirm (구매확정 처리)
     * shipping_ready (배송준비중 처리)
     * shipping_start (배송중 처리)
     * shipping_standby (배송대기 처리)
     * do_shipping_holding (배송보류 처리)
     * update_invoice_no (송장번호 변경)
     * unpaid (입금전)
     * paid_order (입금확인)
     * cancel_order (취소처리)
     * cancel_order_request (취소 신청)
     * cancel_unpaid_order (입금전 주문취소)
     * cancellation_complete (취소 완료)
     * auto_order_cancel (주문자동취소)
     * return_order (반품)
     * return_order_process (반품 처리중)
     * return_order_request (반품 신청)
     * return_complete_refunded (반품 완료-환불 완료)
     * return_hold (반품 보류)
     * exchange_order (교환)
     * exchange_order_request (교환 신청)
     * exchange_hold (교환 보류)
     * exchange_ready (교환 준비)
     * refund_order (환불 완료 처리)
     * unrefund_order (환불 전 처리)
     * changing_recipient_information (수령자 정보 변경)
     * insert_admin_memo (관리자 메모 등록)
     * modify_admin_memo (관리자 메모 수정)
     * delete_admin_memo (관리자 메모 삭제)
     * old_order_delete (주문서 삭제)
     */
    eventCode: string;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: string;
    /**
     * @description
     * 결제 PG사 이름
     *
     *
     */
    paymentGatewayName: string;
    /**
     * @description
     * 화폐단위
     *
     * KRW : ￦ 원
     * USD : $ 달러
     * JPY : ¥ 엔
     */
    currency: string;
    /**
     * @description
     * 주문일
     *
     * date
     */
    orderDate: Cafe24Datetime;
    /**
     * @description
     * 주문경로 텍스트
     *
     *
     */
    orderPlaceName: string;
    /**
     * @description
     * 회원 아이디
     *
     *
     */
    memberId: string;
    /**
     * @description
     * 회원 인증 여부
     *
     * T : 인증
     * F : 미인증
     * B : 특별관리회원
     * J : 14세미만회원
     */
    memberAuthentication: any;
    /**
     * @description
     * 주문자명
     *
     *
     */
    buyerName: string;
    /**
     * @description
     * 주문자 이메일
     *
     *
     */
    buyerEmail: string;
    /**
     * @description
     * 주문자 일반 전화
     *
     *
     */
    buyerPhone: string;
    /**
     * @description
     * 주문자 휴대 전화
     *
     *
     */
    buyerCellphone: string;
    /**
     * @description
     * 주문 시 회원등급
     *
     *
     */
    groupNoWhenOrdering: string;
    /**
     * @description
     * 최초 주문여부
     *
     * T : 최초 주문
     * F : 최초 주문 아님
     */
    firstOrder: Cafe24Enum;
    /**
     * @description
     * 주문이 모바일에서 이루어졌는지 여부
     *
     * T : 모바일 주문
     * F : 모바일 주문 아님
     */
    orderFromMobile: Cafe24Enum;
    /**
     * @description
     * 결제 완료 여부
     *
     * T : 결제
     * F : 미결제
     * M : 부분 결제
     */
    paid: Cafe24Enum;
    /**
     * @description
     * 결제일
     *
     * date
     */
    paymentDate: Cafe24Datetime;
    /**
     * @description
     * 결제자명
     *
     *
     */
    billingName: string;
    /**
     * @description
     * 은행코드
     *
     * bank_code
     */
    bankCode: string;
    /**
     * @description
     * 결제수단 코드
     *
     * cash : 무통장
     * card : 신용카드
     * cell : 휴대폰
     * tcash : 계좌이체
     * prepaid : 선불금
     * credit : 예치금
     * point : 적립금
     * pointfy : 통합포인트
     * cvs : 편의점
     * cod : 후불
     * coupon : 쿠폰
     * market_discount : 마켓할인
     * etc : 기타
     */
    paymentMethod: string;
    /**
     * @description
     * 간편결제 결제사 이름
     *
     *
     */
    easypayName: string;
    /**
     * @description
     * 에스크로 사용여부
     *
     * T : 에스크로 사용
     * F : 에스크로 미사용
     */
    useEscrow: Cafe24Enum;
    /**
     * @description
     * 해당 주문건에 대한 쇼핑몰의 계좌번호
     *
     *
     */
    bankAccountNo: Cafe24Date;
    /**
     * @description
     * 주문금액
     *
     *
     */
    orderPriceAmount: string;
    /**
     * @description
     * 회원할인금액
     *
     *
     */
    membershipDiscountAmount: string;
    /**
     * @description
     * 실결제금액
     *
     *
     */
    actualPaymentAmount: string;
    /**
     * @description
     * 적립금 사용금액
     *
     *
     */
    mileageSpentAmount: string;
    /**
     * @description
     * 주문취소일
     *
     *
     */
    cancelDate: any;
    /**
     * @description
     * 배송비
     *
     *
     */
    shippingFee: string;
    /**
     * @description
     * 배송비 타입
     *
     * 01 : 선불
     * 02 : 착불
     * 03 : 신용
     */
    shippingType: Cafe24Enum;
    /**
     * @description
     * 배송상태
     *
     * F : 배송전
     * M : 배송중
     * T : 배송완료
     * W : 배송보류
     */
    shippingStatus: Cafe24Enum;
    /**
     * @description
     * 희망배송일
     *
     *
     */
    wishedDeliveryDate: string;
    /**
     * @description
     * 희망배송시간
     *
     *
     */
    wishedDeliveryTime: any;
    /**
     * @description
     * 매장수령여부
     *
     * T : 매장수령
     * F : 매장수령 아님
     */
    storePickup: Cafe24Enum;
    /**
     * @description
     * 배송 메세지
     *
     *
     */
    shippingMessage: string;
    /**
     * @description
     * 주문경로
     *
     * cafe24:카페24
     * mobile:모바일웹
     * mobile_d:모바일앱
     * NCHECKOUT:네이버페이
     * inpark:인터파크
     * auction:옥션
     * sk11st:11번가
     * gmarket:G마켓
     * coupang:쿠팡
     * shopn:스마트스토어
     */
    orderPlaceId: string;
    /**
     * @description
     * 주문 상품
     *
     *
     */
    orderingProductCode: string;
    /**
     * @description
     * 주문 상품명
     *
     *
     */
    orderingProductName: string;
  };
}

/**
 * @event 90029
 *
 * @description
 * 쇼핑몰에 접수된 주문의 환불상태가 변경된 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_customer
 * - mall.read_order
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90029,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "event_code": "refund_order",
 *     "order_id": "20200716-0000023",
 *     "payment_gateway_name": "dacom",
 *     "currency": "KRW",
 *     "order_date": "2020-07-16T02:20:20+09:00",
 *     "order_place_name": "naver pay",
 *     "member_id": "gdhong",
 *     "member_authentication": null,
 *     "buyer_name": "Jessica Hong",
 *     "buyer_email": "gdhong@cafe24corp.com",
 *     "buyer_phone": "02-0000-0000",
 *     "buyer_cellphone": "010-2424-2424",
 *     "group_no_when_ordering": "1",
 *     "first_order": "F",
 *     "order_from_mobile": "T",
 *     "paid": "T",
 *     "payment_date": "2020-07-17T15:24:07+09:00",
 *     "billing_name": "Jessica Hong",
 *     "bank_code": "",
 *     "payment_method": "card",
 *     "easypay_name": "",
 *     "use_escrow": "F",
 *     "bank_account_no": "382-222254-13-001",
 *     "order_price_amount": "24680.00",
 *     "membership_discount_amount": "0.00",
 *     "actual_payment_amount": "24580",
 *     "mileage_spent_amount": "100.00",
 *     "cancel_date": null,
 *     "shipping_fee": "0.00",
 *     "shipping_type": "A",
 *     "shipping_status": "T",
 *     "wished_delivery_date": "",
 *     "wished_delivery_time": null,
 *     "return_confirmed_date": null,
 *     "store_pickup": "F",
 *     "shipping_message": "Quick Delivery please.",
 *     "order_place_id": "mobile",
 *     "ordering_product_code": "P00000HK",
 *     "ordering_product_name": "Sample Product Name1"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnOrderRefundStatusChanged {
  eventNo: 90029;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 주문 상태 관련 이벤트코드
     *
     * create_order (주문생성)
     * pickup_complete_order (수거완료)
     * product_ready (상품 준비중)
     * shipping_end (배송완료 처리)
     * purchase_confirm (구매확정 처리)
     * shipping_ready (배송준비중 처리)
     * shipping_start (배송중 처리)
     * shipping_standby (배송대기 처리)
     * do_shipping_holding (배송보류 처리)
     * update_invoice_no (송장번호 변경)
     * unpaid (입금전)
     * paid_order (입금확인)
     * cancel_order (취소처리)
     * cancel_order_request (취소 신청)
     * cancel_unpaid_order (입금전 주문취소)
     * cancellation_complete (취소 완료)
     * auto_order_cancel (주문자동취소)
     * return_order (반품)
     * return_order_process (반품 처리중)
     * return_order_request (반품 신청)
     * return_complete_refunded (반품 완료-환불 완료)
     * return_hold (반품 보류)
     * exchange_order (교환)
     * exchange_order_request (교환 신청)
     * exchange_hold (교환 보류)
     * exchange_ready (교환 준비)
     * refund_order (환불 완료 처리)
     * unrefund_order (환불 전 처리)
     * changing_recipient_information (수령자 정보 변경)
     * insert_admin_memo (관리자 메모 등록)
     * modify_admin_memo (관리자 메모 수정)
     * delete_admin_memo (관리자 메모 삭제)
     * old_order_delete (주문서 삭제)
     */
    eventCode: string;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: string;
    /**
     * @description
     * 결제 PG사 이름
     *
     *
     */
    paymentGatewayName: string;
    /**
     * @description
     * 화폐단위
     *
     * KRW : ￦ 원
     * USD : $ 달러
     * JPY : ¥ 엔
     */
    currency: string;
    /**
     * @description
     * 주문일
     *
     * date
     */
    orderDate: Cafe24Datetime;
    /**
     * @description
     * 주문경로 텍스트
     *
     *
     */
    orderPlaceName: string;
    /**
     * @description
     * 회원 아이디
     *
     *
     */
    memberId: string;
    /**
     * @description
     * 회원 인증 여부
     *
     * T : 인증
     * F : 미인증
     * B : 특별관리회원
     * J : 14세미만회원
     */
    memberAuthentication: any;
    /**
     * @description
     * 주문자명
     *
     *
     */
    buyerName: string;
    /**
     * @description
     * 주문자 이메일
     *
     *
     */
    buyerEmail: string;
    /**
     * @description
     * 주문자 일반 전화
     *
     *
     */
    buyerPhone: string;
    /**
     * @description
     * 주문자 휴대 전화
     *
     *
     */
    buyerCellphone: string;
    /**
     * @description
     * 주문 시 회원등급
     *
     *
     */
    groupNoWhenOrdering: string;
    /**
     * @description
     * 최초 주문여부
     *
     * T : 최초 주문
     * F : 최초 주문 아님
     */
    firstOrder: Cafe24Enum;
    /**
     * @description
     * 주문이 모바일에서 이루어졌는지 여부
     *
     * T : 모바일 주문
     * F : 모바일 주문 아님
     */
    orderFromMobile: Cafe24Enum;
    /**
     * @description
     * 결제 완료 여부
     *
     * T : 결제
     * F : 미결제
     * M : 부분 결제
     */
    paid: Cafe24Enum;
    /**
     * @description
     * 결제일
     *
     * date
     */
    paymentDate: Cafe24Datetime;
    /**
     * @description
     * 결제자명
     *
     *
     */
    billingName: string;
    /**
     * @description
     * 은행코드
     *
     * bank_code
     */
    bankCode: string;
    /**
     * @description
     * 결제수단 코드
     *
     * cash : 무통장
     * card : 신용카드
     * cell : 휴대폰
     * tcash : 계좌이체
     * prepaid : 선불금
     * credit : 예치금
     * point : 적립금
     * pointfy : 통합포인트
     * cvs : 편의점
     * cod : 후불
     * coupon : 쿠폰
     * market_discount : 마켓할인
     * etc : 기타
     */
    paymentMethod: string;
    /**
     * @description
     * 간편결제 결제사 이름
     *
     *
     */
    easypayName: string;
    /**
     * @description
     * 에스크로 사용여부
     *
     * T : 에스크로 사용
     * F : 에스크로 미사용
     */
    useEscrow: Cafe24Enum;
    /**
     * @description
     * 해당 주문건에 대한 쇼핑몰의 계좌번호
     *
     *
     */
    bankAccountNo: Cafe24Date;
    /**
     * @description
     * 주문금액
     *
     *
     */
    orderPriceAmount: string;
    /**
     * @description
     * 회원할인금액
     *
     *
     */
    membershipDiscountAmount: string;
    /**
     * @description
     * 실결제금액
     *
     *
     */
    actualPaymentAmount: string;
    /**
     * @description
     * 적립금 사용금액
     *
     *
     */
    mileageSpentAmount: string;
    /**
     * @description
     * 주문취소일
     *
     *
     */
    cancelDate: any;
    /**
     * @description
     * 배송비
     *
     *
     */
    shippingFee: string;
    /**
     * @description
     * 배송비 타입
     *
     * 01 : 선불
     * 02 : 착불
     * 03 : 신용
     */
    shippingType: Cafe24Enum;
    /**
     * @description
     * 배송상태
     *
     * F : 배송전
     * M : 배송중
     * T : 배송완료
     * W : 배송보류
     */
    shippingStatus: Cafe24Enum;
    /**
     * @description
     * 희망배송일
     *
     *
     */
    wishedDeliveryDate: string;
    /**
     * @description
     * 희망배송시간
     *
     *
     */
    wishedDeliveryTime: any;
    /**
     * @description
     * 반품승인일시
     *
     *
     */
    returnConfirmedDate: any;
    /**
     * @description
     * 매장수령여부
     *
     * T : 매장수령
     * F : 매장수령 아님
     */
    storePickup: Cafe24Enum;
    /**
     * @description
     * 배송 메세지
     *
     *
     */
    shippingMessage: string;
    /**
     * @description
     * 주문경로
     *
     * cafe24:카페24
     * mobile:모바일웹
     * mobile_d:모바일앱
     * NCHECKOUT:네이버페이
     * inpark:인터파크
     * auction:옥션
     * sk11st:11번가
     * gmarket:G마켓
     * coupang:쿠팡
     * shopn:스마트스토어
     */
    orderPlaceId: string;
    /**
     * @description
     * 주문 상품
     *
     *
     */
    orderingProductCode: string;
    /**
     * @description
     * 주문 상품명
     *
     *
     */
    orderingProductName: string;
  };
}

/**
 * @event 90073
 *
 * @description
 * 쇼핑몰에 접수된 주문의 환불상태가 변경된 경우 (일괄)
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_customer
 * - mall.read_order
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90073,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "event_code": "refund_order",
 *     "order_id": "20200529-0000015,20200527-0000078"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnBulkOrderRefundStatusChanged {
  eventNo: 90073;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 주문 상태 관련 이벤트코드
     *
     * create_order (주문생성)
     * pickup_complete_order (수거완료)
     * product_ready (상품 준비중)
     * shipping_end (배송완료 처리)
     * purchase_confirm (구매확정 처리)
     * shipping_ready (배송준비중 처리)
     * shipping_start (배송중 처리)
     * shipping_standby (배송대기 처리)
     * do_shipping_holding (배송보류 처리)
     * update_invoice_no (송장번호 변경)
     * unpaid (입금전)
     * paid_order (입금확인)
     * cancel_order (취소처리)
     * cancel_order_request (취소 신청)
     * cancel_unpaid_order (입금전 주문취소)
     * cancellation_complete (취소 완료)
     * auto_order_cancel (주문자동취소)
     * return_order (반품)
     * return_order_process (반품 처리중)
     * return_order_request (반품 신청)
     * return_complete_refunded (반품 완료-환불 완료)
     * return_hold (반품 보류)
     * exchange_order (교환)
     * exchange_order_request (교환 신청)
     * exchange_hold (교환 보류)
     * exchange_ready (교환 준비)
     * refund_order (환불 완료 처리)
     * unrefund_order (환불 전 처리)
     * changing_recipient_information (수령자 정보 변경)
     * insert_admin_memo (관리자 메모 등록)
     * modify_admin_memo (관리자 메모 수정)
     * delete_admin_memo (관리자 메모 삭제)
     * old_order_delete (주문서 삭제)
     */
    eventCode: string;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: string;
  };
}

/**
 * @event 90031
 *
 * @description
 * 쇼핑몰에 접수된 주문에 상품을 추가한 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_customer
 * - mall.read_order
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90031,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "order_id": "20191009-0000126",
 *     "payment_gateway_name": "",
 *     "currency": "KRW",
 *     "order_date": "2019-10-09T15:52:56+09:00",
 *     "order_place_name": "naver pay",
 *     "member_id": "gdhong",
 *     "member_authentication": "B",
 *     "buyer_name": "Jessica Hong",
 *     "buyer_email": "gdhong@cafe24corp.com",
 *     "buyer_phone": "02-0000-0000",
 *     "buyer_cellphone": "010-2424-2424",
 *     "group_no_when_ordering": "13",
 *     "first_order": "F",
 *     "order_from_mobile": "F",
 *     "paid": "M",
 *     "payment_date": "2019-10-09T15:53:08+09:00",
 *     "billing_name": "Jessica Hong",
 *     "bank_code": "bank_82",
 *     "payment_method": "cash",
 *     "easypay_name": "",
 *     "use_escrow": "F",
 *     "bank_account_no": "382-222254-13-001",
 *     "order_price_amount": "24680.00",
 *     "membership_discount_amount": "0.00",
 *     "actual_payment_amount": "24580",
 *     "mileage_spent_amount": "100.00",
 *     "cancel_date": null,
 *     "shipping_fee": "0.00",
 *     "shipping_type": "A",
 *     "shipping_status": "F",
 *     "wished_delivery_date": "Quick delivery please.",
 *     "wished_delivery_time": "ASAP",
 *     "shipping_message": "",
 *     "order_place_id": "self",
 *     "ordering_product_code": "P0000BUC,P0000BUB",
 *     "ordering_product_name": "Sample Product Name 1,Sample Product Name 2"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnProductAddedToOrder {
  eventNo: 90031;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: string;
    /**
     * @description
     * 결제 PG사 이름
     *
     *
     */
    paymentGatewayName: string;
    /**
     * @description
     * 화폐단위
     *
     * KRW : ￦ 원
     * USD : $ 달러
     * JPY : ¥ 엔
     */
    currency: string;
    /**
     * @description
     * 주문일
     *
     * date
     */
    orderDate: Cafe24Datetime;
    /**
     * @description
     * 주문경로 텍스트
     *
     *
     */
    orderPlaceName: string;
    /**
     * @description
     * 회원 아이디
     *
     *
     */
    memberId: string;
    /**
     * @description
     * 회원 인증 여부
     *
     * T : 인증
     * F : 미인증
     * B : 특별관리회원
     * J : 14세미만회원
     */
    memberAuthentication: Cafe24Enum;
    /**
     * @description
     * 주문자명
     *
     *
     */
    buyerName: string;
    /**
     * @description
     * 주문자 이메일
     *
     *
     */
    buyerEmail: string;
    /**
     * @description
     * 주문자 일반 전화
     *
     *
     */
    buyerPhone: string;
    /**
     * @description
     * 주문자 휴대 전화
     *
     *
     */
    buyerCellphone: string;
    /**
     * @description
     * 주문 시 회원등급
     *
     *
     */
    groupNoWhenOrdering: string;
    /**
     * @description
     * 최초 주문여부
     *
     * T : 최초 주문
     * F : 최초 주문 아님
     */
    firstOrder: Cafe24Enum;
    /**
     * @description
     * 주문이 모바일에서 이루어졌는지 여부
     *
     * T : 모바일 주문
     * F : 모바일 주문 아님
     */
    orderFromMobile: Cafe24Enum;
    /**
     * @description
     * 결제 완료 여부
     *
     * T : 결제
     * F : 미결제
     * M : 부분 결제
     */
    paid: Cafe24Enum;
    /**
     * @description
     * 결제일
     *
     * date
     */
    paymentDate: Cafe24Datetime;
    /**
     * @description
     * 결제자명
     *
     *
     */
    billingName: string;
    /**
     * @description
     * 은행코드
     *
     * bank_code
     */
    bankCode: string;
    /**
     * @description
     * 결제수단 코드
     *
     * cash : 무통장
     * card : 신용카드
     * cell : 휴대폰
     * tcash : 계좌이체
     * prepaid : 선불금
     * credit : 예치금
     * point : 적립금
     * pointfy : 통합포인트
     * cvs : 편의점
     * cod : 후불
     * coupon : 쿠폰
     * market_discount : 마켓할인
     * etc : 기타
     */
    paymentMethod: string;
    /**
     * @description
     * 간편결제 결제사 이름
     *
     *
     */
    easypayName: string;
    /**
     * @description
     * 에스크로 사용여부
     *
     * T : 에스크로 사용
     * F : 에스크로 미사용
     */
    useEscrow: Cafe24Enum;
    /**
     * @description
     * 해당 주문건에 대한 쇼핑몰의 계좌번호
     *
     *
     */
    bankAccountNo: Cafe24Date;
    /**
     * @description
     * 주문금액
     *
     *
     */
    orderPriceAmount: string;
    /**
     * @description
     * 회원할인금액
     *
     *
     */
    membershipDiscountAmount: string;
    /**
     * @description
     * 실결제금액
     *
     *
     */
    actualPaymentAmount: string;
    /**
     * @description
     * 적립금 사용금액
     *
     *
     */
    mileageSpentAmount: string;
    /**
     * @description
     * 주문취소일
     *
     *
     */
    cancelDate: any;
    /**
     * @description
     * 배송비
     *
     *
     */
    shippingFee: string;
    /**
     * @description
     * 배송비 타입
     *
     * 01 : 선불
     * 02 : 착불
     * 03 : 신용
     */
    shippingType: Cafe24Enum;
    /**
     * @description
     * 배송상태
     *
     * F : 배송전
     * M : 배송중
     * T : 배송완료
     * W : 배송보류
     */
    shippingStatus: Cafe24Enum;
    /**
     * @description
     * 희망배송일
     *
     *
     */
    wishedDeliveryDate: string;
    /**
     * @description
     * 희망배송시간
     *
     *
     */
    wishedDeliveryTime: string;
    /**
     * @description
     * 배송 메세지
     *
     *
     */
    shippingMessage: string;
    /**
     * @description
     * 주문경로
     *
     * cafe24:카페24
     * mobile:모바일웹
     * mobile_d:모바일앱
     * NCHECKOUT:네이버페이
     * inpark:인터파크
     * auction:옥션
     * sk11st:11번가
     * gmarket:G마켓
     * coupang:쿠팡
     * shopn:스마트스토어
     */
    orderPlaceId: string;
    /**
     * @description
     * 주문 상품
     *
     *
     */
    orderingProductCode: string;
    /**
     * @description
     * 주문 상품명
     *
     *
     */
    orderingProductName: string;
  };
}

/**
 * @event 90064
 *
 * @description
 * 쇼핑몰에 접수된 주문의 수령자정보가 변경된 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_customer
 * - mall.read_order
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90064,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "event_code": "changing_recipient_information",
 *     "order_id": "20200717-0024054",
 *     "order_place_id": "self"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnOrderRecipientInfoChanged {
  eventNo: 90064;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 주문 상태 관련 이벤트코드
     *
     * create_order (주문생성)
     * pickup_complete_order (수거완료)
     * product_ready (상품 준비중)
     * shipping_end (배송완료 처리)
     * purchase_confirm (구매확정 처리)
     * shipping_ready (배송준비중 처리)
     * shipping_start (배송중 처리)
     * shipping_standby (배송대기 처리)
     * do_shipping_holding (배송보류 처리)
     * update_invoice_no (송장번호 변경)
     * unpaid (입금전)
     * paid_order (입금확인)
     * cancel_order (취소처리)
     * cancel_order_request (취소 신청)
     * cancel_unpaid_order (입금전 주문취소)
     * cancellation_complete (취소 완료)
     * auto_order_cancel (주문자동취소)
     * return_order (반품)
     * return_order_process (반품 처리중)
     * return_order_request (반품 신청)
     * return_complete_refunded (반품 완료-환불 완료)
     * return_hold (반품 보류)
     * exchange_order (교환)
     * exchange_order_request (교환 신청)
     * exchange_hold (교환 보류)
     * exchange_ready (교환 준비)
     * refund_order (환불 완료 처리)
     * unrefund_order (환불 전 처리)
     * changing_recipient_information (수령자 정보 변경)
     * insert_admin_memo (관리자 메모 등록)
     * modify_admin_memo (관리자 메모 수정)
     * delete_admin_memo (관리자 메모 삭제)
     * old_order_delete (주문서 삭제)
     */
    eventCode: string;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: string;
    /**
     * @description
     * 주문경로
     *
     * cafe24:카페24
     * mobile:모바일웹
     * mobile_d:모바일앱
     * NCHECKOUT:네이버페이
     * inpark:인터파크
     * auction:옥션
     * sk11st:11번가
     * gmarket:G마켓
     * coupang:쿠팡
     * shopn:스마트스토어
     */
    orderPlaceId: string;
  };
}

/**
 * @event 90066
 *
 * @description
 * 쇼핑몰에 접수된 주문에 관리자메모가 등록된 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_customer
 * - mall.read_order
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90066,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "event_code": "insert_admin_memo",
 *     "order_id": "20200717-0000092",
 *     "requested_date": "2020-07-17 15:38:22",
 *     "order_place_id": "shopn",
 *     "ordering_product_code": "P00000TW",
 *     "ordering_product_name": "카페24 샘플 상품1",
 *     "executor_id": "sample7eBNEqSfkd7I8hoA",
 *     "execute_method": "V2X"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnAdminNoteAddedToOrder {
  eventNo: 90066;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 주문 상태 관련 이벤트코드
     *
     * create_order (주문생성)
     * pickup_complete_order (수거완료)
     * product_ready (상품 준비중)
     * shipping_end (배송완료 처리)
     * purchase_confirm (구매확정 처리)
     * shipping_ready (배송준비중 처리)
     * shipping_start (배송중 처리)
     * shipping_standby (배송대기 처리)
     * do_shipping_holding (배송보류 처리)
     * update_invoice_no (송장번호 변경)
     * unpaid (입금전)
     * paid_order (입금확인)
     * cancel_order (취소처리)
     * cancel_order_request (취소 신청)
     * cancel_unpaid_order (입금전 주문취소)
     * cancellation_complete (취소 완료)
     * auto_order_cancel (주문자동취소)
     * return_order (반품)
     * return_order_process (반품 처리중)
     * return_order_request (반품 신청)
     * return_complete_refunded (반품 완료-환불 완료)
     * return_hold (반품 보류)
     * exchange_order (교환)
     * exchange_order_request (교환 신청)
     * exchange_hold (교환 보류)
     * exchange_ready (교환 준비)
     * refund_order (환불 완료 처리)
     * unrefund_order (환불 전 처리)
     * changing_recipient_information (수령자 정보 변경)
     * insert_admin_memo (관리자 메모 등록)
     * modify_admin_memo (관리자 메모 수정)
     * delete_admin_memo (관리자 메모 삭제)
     * old_order_delete (주문서 삭제)
     */
    eventCode: string;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: string;
    /**
     * @description
     * 관리자메모 변경일
     *
     * 쇼핑몰에 접수된 주문에 관리자메모가 등록된 경우
     */
    requestedDate: Cafe24Date;
    /**
     * @description
     * 주문경로
     *
     * cafe24:카페24
     * mobile:모바일웹
     * mobile_d:모바일앱
     * NCHECKOUT:네이버페이
     * inpark:인터파크
     * auction:옥션
     * sk11st:11번가
     * gmarket:G마켓
     * coupang:쿠팡
     * shopn:스마트스토어
     */
    orderPlaceId: string;
    /**
     * @description
     * 주문 상품
     *
     *
     */
    orderingProductCode: string;
    /**
     * @description
     * 주문 상품명
     *
     *
     */
    orderingProductName: string;
    /**
     * @description
     * 처리자 ID
     *
     *
     */
    executorId: string;
    /**
     * @description
     * 처리자 구분
     *
     *
     */
    executeMethod: string;
  };
}

/**
 * @event 90068
 *
 * @description
 * 쇼핑몰에 접수된 주문에 관리자메모가 수정된 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_customer
 * - mall.read_order
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90068,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "event_code": "modify_admin_memo",
 *     "order_id": "20200114-0002249",
 *     "requested_date": "2020-01-22 10:21:51",
 *     "order_place_id": "mobile",
 *     "executor_id": "sample7eBNEqSfkd7I8hoA",
 *     "execute_method": "V2X"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnAdminNoteUpdatedOnOrder {
  eventNo: 90068;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 주문 상태 관련 이벤트코드
     *
     * create_order (주문생성)
     * pickup_complete_order (수거완료)
     * product_ready (상품 준비중)
     * shipping_end (배송완료 처리)
     * purchase_confirm (구매확정 처리)
     * shipping_ready (배송준비중 처리)
     * shipping_start (배송중 처리)
     * shipping_standby (배송대기 처리)
     * do_shipping_holding (배송보류 처리)
     * update_invoice_no (송장번호 변경)
     * unpaid (입금전)
     * paid_order (입금확인)
     * cancel_order (취소처리)
     * cancel_order_request (취소 신청)
     * cancel_unpaid_order (입금전 주문취소)
     * cancellation_complete (취소 완료)
     * auto_order_cancel (주문자동취소)
     * return_order (반품)
     * return_order_process (반품 처리중)
     * return_order_request (반품 신청)
     * return_complete_refunded (반품 완료-환불 완료)
     * return_hold (반품 보류)
     * exchange_order (교환)
     * exchange_order_request (교환 신청)
     * exchange_hold (교환 보류)
     * exchange_ready (교환 준비)
     * refund_order (환불 완료 처리)
     * unrefund_order (환불 전 처리)
     * changing_recipient_information (수령자 정보 변경)
     * insert_admin_memo (관리자 메모 등록)
     * modify_admin_memo (관리자 메모 수정)
     * delete_admin_memo (관리자 메모 삭제)
     * old_order_delete (주문서 삭제)
     */
    eventCode: string;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: string;
    /**
     * @description
     * 관리자메모 변경일
     *
     * 쇼핑몰에 접수된 주문에 관리자메모가 등록된 경우
     */
    requestedDate: Cafe24Date;
    /**
     * @description
     * 주문경로
     *
     * cafe24:카페24
     * mobile:모바일웹
     * mobile_d:모바일앱
     * NCHECKOUT:네이버페이
     * inpark:인터파크
     * auction:옥션
     * sk11st:11번가
     * gmarket:G마켓
     * coupang:쿠팡
     * shopn:스마트스토어
     */
    orderPlaceId: string;
    /**
     * @description
     * 처리자 ID
     *
     *
     */
    executorId: string;
    /**
     * @description
     * 처리자 구분
     *
     *
     */
    executeMethod: string;
  };
}

/**
 * @event 90069
 *
 * @description
 * 쇼핑몰에 접수된 주문에 관리자메모가 삭제된 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_customer
 * - mall.read_order
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90069,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "event_code": "delete_admin_memo",
 *     "order_id": "20190715-0000014",
 *     "requested_date": "2019-07-15 08:53:46",
 *     "order_place_id": "self",
 *     "executor_id": "sample7eBNEqSfkd7I8hoA",
 *     "execute_method": "V2X"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnAdminNoteDeletedFromOrder {
  eventNo: 90069;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 주문 상태 관련 이벤트코드
     *
     * create_order (주문생성)
     * pickup_complete_order (수거완료)
     * product_ready (상품 준비중)
     * shipping_end (배송완료 처리)
     * purchase_confirm (구매확정 처리)
     * shipping_ready (배송준비중 처리)
     * shipping_start (배송중 처리)
     * shipping_standby (배송대기 처리)
     * do_shipping_holding (배송보류 처리)
     * update_invoice_no (송장번호 변경)
     * unpaid (입금전)
     * paid_order (입금확인)
     * cancel_order (취소처리)
     * cancel_order_request (취소 신청)
     * cancel_unpaid_order (입금전 주문취소)
     * cancellation_complete (취소 완료)
     * auto_order_cancel (주문자동취소)
     * return_order (반품)
     * return_order_process (반품 처리중)
     * return_order_request (반품 신청)
     * return_complete_refunded (반품 완료-환불 완료)
     * return_hold (반품 보류)
     * exchange_order (교환)
     * exchange_order_request (교환 신청)
     * exchange_hold (교환 보류)
     * exchange_ready (교환 준비)
     * refund_order (환불 완료 처리)
     * unrefund_order (환불 전 처리)
     * changing_recipient_information (수령자 정보 변경)
     * insert_admin_memo (관리자 메모 등록)
     * modify_admin_memo (관리자 메모 수정)
     * delete_admin_memo (관리자 메모 삭제)
     * old_order_delete (주문서 삭제)
     */
    eventCode: string;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: string;
    /**
     * @description
     * 관리자메모 변경일
     *
     * 쇼핑몰에 접수된 주문에 관리자메모가 등록된 경우
     */
    requestedDate: Cafe24Date;
    /**
     * @description
     * 주문경로
     *
     * cafe24:카페24
     * mobile:모바일웹
     * mobile_d:모바일앱
     * NCHECKOUT:네이버페이
     * inpark:인터파크
     * auction:옥션
     * sk11st:11번가
     * gmarket:G마켓
     * coupang:쿠팡
     * shopn:스마트스토어
     */
    orderPlaceId: string;
    /**
     * @description
     * 처리자 ID
     *
     *
     */
    executorId: string;
    /**
     * @description
     * 처리자 구분
     *
     *
     */
    executeMethod: string;
  };
}

/**
 * @event 90070
 *
 * @description
 * 쇼핑몰에서 주문서가 삭제된 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_customer
 * - mall.read_order
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90070,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "event_code": "old_order_delete",
 *     "order_id": "20200228-0000016"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnOrderFormDeleted {
  eventNo: 90070;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 주문 상태 관련 이벤트코드
     *
     * create_order (주문생성)
     * pickup_complete_order (수거완료)
     * product_ready (상품 준비중)
     * shipping_end (배송완료 처리)
     * purchase_confirm (구매확정 처리)
     * shipping_ready (배송준비중 처리)
     * shipping_start (배송중 처리)
     * shipping_standby (배송대기 처리)
     * do_shipping_holding (배송보류 처리)
     * update_invoice_no (송장번호 변경)
     * unpaid (입금전)
     * paid_order (입금확인)
     * cancel_order (취소처리)
     * cancel_order_request (취소 신청)
     * cancel_unpaid_order (입금전 주문취소)
     * cancellation_complete (취소 완료)
     * auto_order_cancel (주문자동취소)
     * return_order (반품)
     * return_order_process (반품 처리중)
     * return_order_request (반품 신청)
     * return_complete_refunded (반품 완료-환불 완료)
     * return_hold (반품 보류)
     * exchange_order (교환)
     * exchange_order_request (교환 신청)
     * exchange_hold (교환 보류)
     * exchange_ready (교환 준비)
     * refund_order (환불 완료 처리)
     * unrefund_order (환불 전 처리)
     * changing_recipient_information (수령자 정보 변경)
     * insert_admin_memo (관리자 메모 등록)
     * modify_admin_memo (관리자 메모 수정)
     * delete_admin_memo (관리자 메모 삭제)
     * old_order_delete (주문서 삭제)
     */
    eventCode: string;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: string;
  };
}

/**
 * @event 90084
 *
 * @description
 * 쇼핑몰 상품이 장바구니에 담긴 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_customer
 * - mall.read_order
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90084,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "member_id": "sampleid",
 *     "shipping_type": "A",
 *     "product_no": 781,
 *     "variant_code": "P0000BEB000A",
 *     "quantity": 1,
 *     "product_bundle": "F"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnProductAddedToCart {
  eventNo: 90084;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 회원 아이디
     *
     *
     */
    memberId: string;
    /**
     * @description
     * 배송비 타입
     *
     * 01 : 선불
     * 02 : 착불
     * 03 : 신용
     */
    shippingType: Cafe24Enum;
    /**
     * @description
     * 상품번호
     * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음
     *
     *
     */
    productNo: number;
    variantCode: string;
    quantity: number;
    productBundle: Cafe24Enum;
  };
}

/**
 * @event 90162
 *
 * @description
 * 쇼핑몰에 접수된 주문의 송장번호가 변경된 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_collection
 * - mall.read_customer
 * - mall.read_order
 * - mall.read_product
 * - mall.read_promotion
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90162,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "event_code": "update_invoice_no",
 *     "order_id": "20200717-0029236",
 *     "shipping_code": "D-20220723-0000019-00",
 *     "shipping_company_code": "0001",
 *     "tracking_no": "123456789123"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnOrderShippingCodeChanged {
  eventNo: 90162;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 주문 상태 관련 이벤트코드
     *
     * create_order (주문생성)
     * pickup_complete_order (수거완료)
     * product_ready (상품 준비중)
     * shipping_end (배송완료 처리)
     * purchase_confirm (구매확정 처리)
     * shipping_ready (배송준비중 처리)
     * shipping_start (배송중 처리)
     * shipping_standby (배송대기 처리)
     * do_shipping_holding (배송보류 처리)
     * update_invoice_no (송장번호 변경)
     * unpaid (입금전)
     * paid_order (입금확인)
     * cancel_order (취소처리)
     * cancel_order_request (취소 신청)
     * cancel_unpaid_order (입금전 주문취소)
     * cancellation_complete (취소 완료)
     * auto_order_cancel (주문자동취소)
     * return_order (반품)
     * return_order_process (반품 처리중)
     * return_order_request (반품 신청)
     * return_complete_refunded (반품 완료-환불 완료)
     * return_hold (반품 보류)
     * exchange_order (교환)
     * exchange_order_request (교환 신청)
     * exchange_hold (교환 보류)
     * exchange_ready (교환 준비)
     * refund_order (환불 완료 처리)
     * unrefund_order (환불 전 처리)
     * changing_recipient_information (수령자 정보 변경)
     * insert_admin_memo (관리자 메모 등록)
     * modify_admin_memo (관리자 메모 수정)
     * delete_admin_memo (관리자 메모 삭제)
     * old_order_delete (주문서 삭제)
     */
    eventCode: string;
    /**
     * @description
     * 주문번호
     *
     *
     */
    orderId: string;
    /**
     * @description
     * 배송번호
     *
     *
     */
    shippingCode: string;
    /**
     * @description
     * 배송업체 코드
     *
     *
     */
    shippingCompanyCode: string;
    /**
     * @description
     * 송장번호
     *
     *
     */
    trackingNo: string;
  };
}

/**
 * @event 90032
 *
 * @description
 * 쇼핑몰에 신규 회원이 가입한 경우
 *
 * Scopes:
 * - mall.read_customer
 * - mall.read_personal
 * - mall.read_privacy
 *
 * @example
 * ```json
 * {
 *   "event_no": 90032,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "member_id": "gdhong",
 *     "group_no": 1,
 *     "name": "Jake Park",
 *     "nick_name": "vjakiev",
 *     "name_english": "",
 *     "name_phonetic": "",
 *     "created_date": "2020-07-17T15:26:00+09:00",
 *     "member_authentication": "T",
 *     "birthday": "",
 *     "gender": "",
 *     "phone": "02-0000-0000",
 *     "cellphone": "010-2468-2468",
 *     "sms": "T",
 *     "email": "gdhong@cafe24corp.com",
 *     "news_mail": "T",
 *     "total_mileage": "0.00",
 *     "available_mileage": "0.00",
 *     "recommend_id": "bestmember",
 *     "residence": "",
 *     "use_mobile_app": "T",
 *     "member_type": "p"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnNewMemberRegistered {
  eventNo: 90032;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 회원 아이디
     *
     *
     */
    memberId: string;
    groupNo: number;
    /**
     * @description
     * 주문자명
     *
     *
     */
    name: string;
    /**
     * @description
     * 운영자 별명
     *
     * 최대글자수 : [50자]
     */
    nickName: string;
    /**
     * @description
     * 회원 영문이름
     *
     *
     */
    nameEnglish: string;
    /**
     * @description
     * 회원 이름 발음 표기(일본어)
     *
     *
     */
    namePhonetic: string;
    /**
     * @description
     * 가입일
     *
     *
     */
    createdDate: Cafe24Datetime;
    /**
     * @description
     * 회원 인증 여부
     *
     * T : 인증
     * F : 미인증
     * B : 특별관리회원
     * J : 14세미만회원
     */
    memberAuthentication: Cafe24Enum;
    /**
     * @description
     * 해당 회원의 생일
     *
     *
     */
    birthday: string;
    /**
     * @description
     * 성별
     *
     * M : 남자
     * F : 여자
     */
    gender: string;
    /**
     * @description
     * 일반 전화
     *
     *
     */
    phone: string;
    /**
     * @description
     * 휴대 전화
     *
     *
     */
    cellphone: string;
    /**
     * @description
     * SMS 수신여부
     *
     * T : 수신
     * F : 수신안함
     */
    sms: Cafe24Enum;
    /**
     * @description
     * 이메일
     *
     *
     */
    email: string;
    /**
     * @description
     * 뉴스메일 수신여부
     *
     * T : 수신
     * F : 수신안함
     */
    newsMail: Cafe24Enum;
    /**
     * @description
     * 총 마일리지
     *
     *
     */
    totalMileage: string;
    /**
     * @description
     * 가용 마일리지
     *
     *
     */
    availableMileage: string;
    /**
     * @description
     * 추천인 ID
     *
     *
     */
    recommendId: string;
    /**
     * @description
     * 지역코드
     *
     *
     */
    residence: string;
    /**
     * @description
     * 모바일앱 사용여부
     *
     * T : 사용
     * F : 사용안함
     */
    useMobileApp: Cafe24Enum;
    /**
     * @description
     * 회원타입
     *
     * p : 개인
     * c : 사업자
     * f : 외국인
     */
    memberType: string;
  };
}

/**
 * @event 90063
 *
 * @description
 * 쇼핑몰 회원이 SNS 계정을 연동한 경우
 *
 * @example
 * ```json
 * {
 *   "event_no": 90063,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "member_id": "member",
 *     "social_name": "kakao",
 *     "social_member_code": 123456
 *   }
 * }
 * ```
 *
 *
 */
export interface OnMemberLinkedSNSAccount {
  eventNo: 90063;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 회원 아이디
     *
     *
     */
    memberId: string;
    socialName: string;
    socialMemberCode: number;
  };
}

/**
 * @event 90080
 *
 * @description
 * 쇼핑몰 회원정보가 변경된 경우
 *
 * Scopes:
 * - mall.read_customer
 * - mall.read_personal
 * - mall.read_privacy
 *
 * @example
 * ```json
 * {
 *   "event_no": 90080,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "member_id": "gdhong",
 *     "diff_key": [
 *       "name",
 *       "phone",
 *       "cellphone",
 *       "gender",
 *       "birthday"
 *     ],
 *     "sub_event_code": "EC_FRONT"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnMemberInfoChanged {
  eventNo: 90080;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 회원 아이디
     *
     *
     */
    memberId: string;
    diffKey: Array<string>;
    /**
     * @description
     * 회원정보 변경위치
     *
     * EC_FRONT : 프론트 회원정보수정에서 수정
     * EC_ADMIN : 몰 어드민에서 관리자가 수정
     */
    subEventCode: string;
  };
}

/**
 * @event 90143
 *
 * @description
 * 쇼핑몰 회원이 로그인한 경우
 *
 * Scopes:
 * - mall.read_customer
 * - mall.read_personal
 * - mall.read_privacy
 *
 * @example
 * ```json
 * {
 *   "event_no": 90143,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "member_id": "sampleid",
 *     "group_name": "Standard Membership",
 *     "inflow_name": "PC"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnMemberLogin {
  eventNo: 90143;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 회원 아이디
     *
     *
     */
    memberId: string;
    /**
     * @description
     * 회원등급명
     *
     *
     */
    groupName: string;
    /**
     * @description
     * 유입경로
     *
     * PC : PC로 접속 / Mobile : 모바일로 접속 mobile Web
     */
    inflowName: string;
  };
}

/**
 * @event 90144
 *
 * @description
 * 쇼핑몰 회원 등급이 변경된 경우
 *
 * Scopes:
 * - mall.read_customer
 * - mall.read_personal
 * - mall.read_privacy
 *
 * @example
 * ```json
 * {
 *   "event_no": 90144,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "member_id": "sampleid",
 *     "after_member_group_name": "Standard Membership"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnMemberGradeChanged {
  eventNo: 90144;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 회원 아이디
     *
     *
     */
    memberId: string;
    afterMemberGroupName: string;
  };
}

/**
 * @event 90145
 *
 * @description
 * 쇼핑몰에 회원이 휴면회원으로 변경된 경우
 *
 * Scopes:
 * - mall.read_customer
 * - mall.read_personal
 * - mall.read_privacy
 *
 * @example
 * ```json
 * {
 *   "event_no": 90145,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "member_id": "sampleid1, sampleid2, sampleid3"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnMemberBecameDormant {
  eventNo: 90145;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 회원 아이디
     *
     *
     */
    memberId: string;
  };
}

/**
 * @event 90146
 *
 * @description
 * 쇼핑몰에 회원이 휴면회원 해제된 경우
 *
 * Scopes:
 * - mall.read_customer
 * - mall.read_personal
 * - mall.read_privacy
 *
 * @example
 * ```json
 * {
 *   "event_no": 90146,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "member_id": "sampleid1, sampleid2, sampleid3"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnMemberDormancyReleased {
  eventNo: 90146;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 회원 아이디
     *
     *
     */
    memberId: string;
  };
}

/**
 * @event 90147
 *
 * @description
 * 쇼핑몰에 회원이 탈퇴한 경우
 *
 * Scopes:
 * - mall.read_customer
 * - mall.read_personal
 * - mall.read_privacy
 *
 * @example
 * ```json
 * {
 *   "event_no": 90147,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "member_id": "sampleid1, sampleid2, sampleid3"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnMemberWithdrawal {
  eventNo: 90147;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 회원 아이디
     *
     *
     */
    memberId: string;
  };
}

/**
 * @event 90148
 *
 * @description
 * 쇼핑몰 회원의 적립금이 변동된 경우
 *
 * Scopes:
 * - mall.read_customer
 * - mall.read_personal
 * - mall.read_privacy
 *
 * @example
 * ```json
 * {
 *   "event_no": 90148,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "shop_no": "1",
 *     "member_id": "sampleid1",
 *     "mileage_money": 100,
 *     "avail_mileage": 1000,
 *     "issue_datetime": "2022-01-25 16:54:45",
 *     "case": "B",
 *     "case_text": "주문취소로 인한 환불시 환불금을 적립금으로 부여",
 *     "reason": null
 *   }
 * }
 * ```
 *
 *
 */
export interface OnMemberPointsChanged {
  eventNo: 90148;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: string;
    /**
     * @description
     * 회원 아이디
     *
     *
     */
    memberId: string;
    mileageMoney: number;
    availMileage: number;
    issueDatetime: Cafe24Date;
    /**
     * @description
     * 적립금 타입 코드
     *
     * A, B, C 등
     */
    case: Cafe24Enum;
    /**
     * @description
     * 적립금 타입
     *
     * 관리자 직접 적림금 부여, 주문취소로 인한 환불시 환불금을 적립금으로 부여 등
     */
    caseText: string;
    /**
     * @description
     * 적립 사유
     *
     * API를 활용하여 적립금 증차감 시 입력한 사유가 출력됩니다.
     */
    reason: any;
  };
}

/**
 * @event 90033
 *
 * @description
 * 쇼핑몰에 게시물이 등록된 경우
 *
 * Scopes:
 * - mall.read_community
 *
 * @example
 * ```json
 * {
 *   "event_no": 90033,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "board_no": 9,
 *     "no": 274,
 *     "has_parent": "T",
 *     "member_id": "bestmember",
 *     "writer": "bestmember"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnPostCreated {
  eventNo: 90033;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 게시판 번호
     *
     *
     */
    boardNo: number;
    no: number;
    /**
     * @description
     * 게시물 여부
     *
     * 쇼핑몰에 게시물이 등록된 경우
     * T : 있음
     * F : 없음
     */
    hasParent: Cafe24Enum;
    /**
     * @description
     * 회원 아이디
     *
     *
     */
    memberId: string;
    /**
     * @description
     * 작성자명
     *
     *
     */
    writer: string;
  };
}

/**
 * @event 90034
 *
 * @description
 * 쇼핑몰 게시물에 댓글이 등록된 경우
 *
 * Scopes:
 * - mall.read_community
 *
 * @example
 * ```json
 * {
 *   "event_no": 90034,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "board_no": 8,
 *     "member_id": "cafe24bestshop",
 *     "writer": "Jake Park",
 *     "comment_member_id": "33578422@n",
 *     "comment_writer": "Jenny"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnCommentAddedToPost {
  eventNo: 90034;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 게시판 번호
     *
     *
     */
    boardNo: number;
    /**
     * @description
     * 회원 아이디
     *
     *
     */
    memberId: string;
    /**
     * @description
     * 작성자명
     *
     *
     */
    writer: string;
    /**
     * @description
     * 댓글 작성자 ID
     *
     *
     */
    commentMemberId: string;
    /**
     * @description
     * 댓글 작성자명
     *
     *
     */
    commentWriter: string;
  };
}

/**
 * @event 90035
 *
 * @description
 * 쇼핑몰에 긴급문의가 접수된 경우
 *
 * Scopes:
 * - mall.read_community
 *
 * @example
 * ```json
 * {
 *   "event_no": 90035,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "member_id": null,
 *     "writer": "bestmember"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnUrgentInquiryReceived {
  eventNo: 90035;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 회원 아이디
     *
     *
     */
    memberId: any;
    /**
     * @description
     * 작성자명
     *
     *
     */
    writer: string;
  };
}

/**
 * @event 90036
 *
 * @description
 * 쇼핑몰의 게시물이 삭제된 경우
 *
 * Scopes:
 * - mall.read_community
 *
 * @example
 * ```json
 * {
 *   "event_no": 90036,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "board_no": 4,
 *     "no": 81,
 *     "member_id": "bestmember",
 *     "writer": "bestmember"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnPostDeleted {
  eventNo: 90036;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 게시판 번호
     *
     *
     */
    boardNo: number;
    no: number;
    /**
     * @description
     * 회원 아이디
     *
     *
     */
    memberId: string;
    /**
     * @description
     * 작성자명
     *
     *
     */
    writer: string;
  };
}

/**
 * @event 90037
 *
 * @description
 * 쇼핑몰 게시물의 댓글이 삭제된 경우
 *
 * Scopes:
 * - mall.read_community
 *
 * @example
 * ```json
 * {
 *   "event_no": 90037,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "board_no": 6,
 *     "member_id": "gdhong",
 *     "writer": "Jake Park",
 *     "comment_member_id": "gdhong",
 *     "comment_writer": "Jenny"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnCommentDeletedFromPost {
  eventNo: 90037;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 게시판 번호
     *
     *
     */
    boardNo: number;
    /**
     * @description
     * 회원 아이디
     *
     *
     */
    memberId: string;
    /**
     * @description
     * 작성자명
     *
     *
     */
    writer: string;
    /**
     * @description
     * 댓글 작성자 ID
     *
     *
     */
    commentMemberId: string;
    /**
     * @description
     * 댓글 작성자명
     *
     *
     */
    commentWriter: string;
  };
}

/**
 * @event 90038
 *
 * @description
 * 쇼핑몰에 접수된 긴급문의가 삭제된 경우
 *
 * Scopes:
 * - mall.read_community
 *
 * @example
 * ```json
 * {
 *   "event_no": 90038,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "member_id": "gdhong",
 *     "writer": "Jake Park"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnUrgentInquiryDeleted {
  eventNo: 90038;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 회원 아이디
     *
     *
     */
    memberId: string;
    /**
     * @description
     * 작성자명
     *
     *
     */
    writer: string;
  };
}

/**
 * @event 90039
 *
 * @description
 * 쇼핑몰의 게시물이 수정된 경우
 *
 * Scopes:
 * - mall.read_community
 *
 * @example
 * ```json
 * {
 *   "event_no": 90039,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "board_no": 1,
 *     "no": 82,
 *     "has_parent": "F",
 *     "member_id": "gdhong",
 *     "writer": "Jake Park"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnPostUpdated {
  eventNo: 90039;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 게시판 번호
     *
     *
     */
    boardNo: number;
    no: number;
    /**
     * @description
     * 게시물 여부
     *
     * 쇼핑몰에 게시물이 등록된 경우
     * T : 있음
     * F : 없음
     */
    hasParent: Cafe24Enum;
    /**
     * @description
     * 회원 아이디
     *
     *
     */
    memberId: string;
    /**
     * @description
     * 작성자명
     *
     *
     */
    writer: string;
  };
}

/**
 * @event 90042
 *
 * @description
 * 쇼핑몰에 상품분류가 추가된 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_product
 *
 * @example
 * ```json
 * {
 *   "event_no": 90042,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "category_no": 96,
 *     "category_name": "Private Order",
 *     "use_display": "F",
 *     "use_main": "F",
 *     "display_type": "A",
 *     "product_display_scope": "A",
 *     "product_display_type": "A",
 *     "product_display_key": "R",
 *     "product_display_sort": "D",
 *     "soldout_product_display": "N",
 *     "sub_category_product_display": "F"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnProductCategoryAdded {
  eventNo: 90042;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 상품분류의 고유한 일련 번호
     *
     *
     */
    categoryNo: number;
    /**
     * @description
     * 상품분류명
     *
     * 최대글자수 : [50자]
     */
    categoryName: string;
    /**
     * @description
     * 상품분류 표시상태
     * 해당 상품분류가 쇼핑몰 메인에 표시되는지 여부
     *
     * T : 표시함
     * F : 표시안함
     */
    useDisplay: Cafe24Enum;
    /**
     * @description
     * 메인분류 표시상태
     *
     * T : 표시함
     * F : 표시안함
     */
    useMain: Cafe24Enum;
    /**
     * @description
     * 쇼핑몰 표시설정
     *
     * A : PC + 모바일
     * P : PC
     * M : 모바일
     * F : 모두 사용안함
     */
    displayType: Cafe24Enum;
    /**
     * @description
     * 상품분류 진열영역 구분
     *
     * A : 전체
     * G : 영역별
     */
    productDisplayScope: Cafe24Enum;
    /**
     * @description
     * 상품분류 진열방법
     *
     * A : 자동정렬
     * U : 사용자 지정
     * M : 자동정렬 + 사용자 지정
     */
    productDisplayType: Cafe24Enum;
    /**
     * @description
     * 상품분류 진열방법 키
     *
     * A : 최근 추가된 상품
     * R : 최근 등록상품
     * U : 최근 수정상품
     * N : 상품명 가나다순
     * P : 판매가 높은 상품
     * S : 판매량 높은 상품
     * C : 조회수가 높은 상품
     * L : 좋아요수가 높은 상품
     */
    productDisplayKey: Cafe24Enum;
    /**
     * @description
     * 상품분류 진열방법 순서
     *
     * D: 내림차순
     * A : 오름차순
     */
    productDisplaySort: Cafe24Enum;
    /**
     * @description
     * 품절상품진열
     *
     * B : 품절상품 맨 뒤로
     * N : 품절상품 상관없음
     */
    soldoutProductDisplay: Cafe24Enum;
    /**
     * @description
     * 하위분류 상품진열
     * 현재 상품 분류 하위 분류에 진열된 상품들까지 포함하여 진열할 것인지 여부
     *
     * T : 진열함
     * F : 진열안함
     */
    subCategoryProductDisplay: Cafe24Enum;
  };
}

/**
 * @event 90043
 *
 * @description
 * 쇼핑몰의 상품분류가 수정된 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_product
 *
 * @example
 * ```json
 * {
 *   "event_no": 90043,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "category_no": 24,
 *     "category_name": "(Category) Outerwear",
 *     "use_display": "T",
 *     "use_main": "T",
 *     "display_type": "A",
 *     "product_display_scope": "A",
 *     "product_display_type": "A",
 *     "product_display_key": "R",
 *     "product_display_sort": "D",
 *     "soldout_product_display": "N",
 *     "sub_category_product_display": "T"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnProductCategoryUpdated {
  eventNo: 90043;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 상품분류의 고유한 일련 번호
     *
     *
     */
    categoryNo: number;
    /**
     * @description
     * 상품분류명
     *
     * 최대글자수 : [50자]
     */
    categoryName: string;
    /**
     * @description
     * 상품분류 표시상태
     * 해당 상품분류가 쇼핑몰 메인에 표시되는지 여부
     *
     * T : 표시함
     * F : 표시안함
     */
    useDisplay: Cafe24Enum;
    /**
     * @description
     * 메인분류 표시상태
     *
     * T : 표시함
     * F : 표시안함
     */
    useMain: Cafe24Enum;
    /**
     * @description
     * 쇼핑몰 표시설정
     *
     * A : PC + 모바일
     * P : PC
     * M : 모바일
     * F : 모두 사용안함
     */
    displayType: Cafe24Enum;
    /**
     * @description
     * 상품분류 진열영역 구분
     *
     * A : 전체
     * G : 영역별
     */
    productDisplayScope: Cafe24Enum;
    /**
     * @description
     * 상품분류 진열방법
     *
     * A : 자동정렬
     * U : 사용자 지정
     * M : 자동정렬 + 사용자 지정
     */
    productDisplayType: Cafe24Enum;
    /**
     * @description
     * 상품분류 진열방법 키
     *
     * A : 최근 추가된 상품
     * R : 최근 등록상품
     * U : 최근 수정상품
     * N : 상품명 가나다순
     * P : 판매가 높은 상품
     * S : 판매량 높은 상품
     * C : 조회수가 높은 상품
     * L : 좋아요수가 높은 상품
     */
    productDisplayKey: Cafe24Enum;
    /**
     * @description
     * 상품분류 진열방법 순서
     *
     * D: 내림차순
     * A : 오름차순
     */
    productDisplaySort: Cafe24Enum;
    /**
     * @description
     * 품절상품진열
     *
     * B : 품절상품 맨 뒤로
     * N : 품절상품 상관없음
     */
    soldoutProductDisplay: Cafe24Enum;
    /**
     * @description
     * 하위분류 상품진열
     * 현재 상품 분류 하위 분류에 진열된 상품들까지 포함하여 진열할 것인지 여부
     *
     * T : 진열함
     * F : 진열안함
     */
    subCategoryProductDisplay: Cafe24Enum;
  };
}

/**
 * @event 90046
 *
 * @description
 * 쇼핑몰에서 상품분류의 상품 진열 설정을 일괄변경한 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_product
 *
 * @example
 * ```json
 * {
 *   "event_no": 90046,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "product_display_scope": "A",
 *     "product_display_type": "A",
 *     "product_display_key": "U",
 *     "product_display_sort": "A"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnBulkProductCategoryDisplaySettingsChanged {
  eventNo: 90046;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 상품분류 진열영역 구분
     *
     * A : 전체
     * G : 영역별
     */
    productDisplayScope: Cafe24Enum;
    /**
     * @description
     * 상품분류 진열방법
     *
     * A : 자동정렬
     * U : 사용자 지정
     * M : 자동정렬 + 사용자 지정
     */
    productDisplayType: Cafe24Enum;
    /**
     * @description
     * 상품분류 진열방법 키
     *
     * A : 최근 추가된 상품
     * R : 최근 등록상품
     * U : 최근 수정상품
     * N : 상품명 가나다순
     * P : 판매가 높은 상품
     * S : 판매량 높은 상품
     * C : 조회수가 높은 상품
     * L : 좋아요수가 높은 상품
     */
    productDisplayKey: Cafe24Enum;
    /**
     * @description
     * 상품분류 진열방법 순서
     *
     * D: 내림차순
     * A : 오름차순
     */
    productDisplaySort: Cafe24Enum;
  };
}

/**
 * @event 90044
 *
 * @description
 * 쇼핑몰에서 상품분류가 삭제된 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_product
 *
 * @example
 * ```json
 * {
 *   "event_no": 90044,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "category_no": 91
 *   }
 * }
 * ```
 *
 *
 */
export interface OnProductCategoryDeleted {
  eventNo: 90044;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 상품분류의 고유한 일련 번호
     *
     *
     */
    categoryNo: number;
  };
}

/**
 * @event 90045
 *
 * @description
 * 쇼핑몰 상품분류의 순서가 변경된 경우
 *
 * Scopes:
 * - mall.read_category
 * - mall.read_product
 *
 * @example
 * ```json
 * {
 *   "event_no": 90045,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnProductCategoryOrderChanged {
  eventNo: 90045;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
  };
}

/**
 * @event 90090
 *
 * @description
 * 쇼핑몰에 공급사가 등록된 경우
 *
 * Scopes:
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90090,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "supplier_code": "S0000000",
 *     "supplier_name": "Default Supplier",
 *     "use_supplier": "T",
 *     "trading_type": "D",
 *     "supplier_type": "WS",
 *     "status": "A",
 *     "payment_type": "D",
 *     "commission": "0.00",
 *     "payment_period": "A"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnSupplierAdded {
  eventNo: 90090;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 공급사 코드
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    supplierCode: string;
    /**
     * @description
     * 공급사명
     *
     *
     */
    supplierName: string;
    /**
     * @description
     * 공급사 사용여부
     *
     * T: 사용함
     * F: 사용안함
     */
    useSupplier: Cafe24Enum;
    /**
     * @description
     * 공급사 유형
     *
     * D: 사입
     * C: 직배송
     */
    tradingType: Cafe24Enum;
    /**
     * @description
     * 공급사 구조
     *
     * WS: 도매업체
     * SF: 사입업체
     * BS: 입점업체
     * ET: 기타
     */
    supplierType: string;
    /**
     * @description
     * 거래상태
     *
     * A: 거래중
     * P: 거래중지
     * N: 거래해지
     */
    status: Cafe24Enum;
    /**
     * @description
     * 정산유형
     *
     * P : 수수료형
     * D : 매입형
     */
    paymentType: Cafe24Enum;
    /**
     * @description
     * 수수료율
     *
     *
     */
    commission: string;
    /**
     * @description
     * 정산주기
     *
     * 0: 선택안함
     * C: 일일정산
     * B: 주간정산
     * A: 월간정산
     */
    paymentPeriod: Cafe24Enum;
  };
}

/**
 * @event 90091
 *
 * @description
 * 쇼핑몰에 등록된 공급사가 수정된 경우
 *
 * Scopes:
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90091,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "supplier_code": "S0000000",
 *     "supplier_name": "Default Supplier",
 *     "use_supplier": "T",
 *     "trading_type": "D",
 *     "supplier_type": "WS",
 *     "status": "A",
 *     "payment_type": "D",
 *     "commission": "0.00",
 *     "payment_period": "A"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnSupplierUpdated {
  eventNo: 90091;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 공급사 코드
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    supplierCode: string;
    /**
     * @description
     * 공급사명
     *
     *
     */
    supplierName: string;
    /**
     * @description
     * 공급사 사용여부
     *
     * T: 사용함
     * F: 사용안함
     */
    useSupplier: Cafe24Enum;
    /**
     * @description
     * 공급사 유형
     *
     * D: 사입
     * C: 직배송
     */
    tradingType: Cafe24Enum;
    /**
     * @description
     * 공급사 구조
     *
     * WS: 도매업체
     * SF: 사입업체
     * BS: 입점업체
     * ET: 기타
     */
    supplierType: string;
    /**
     * @description
     * 거래상태
     *
     * A: 거래중
     * P: 거래중지
     * N: 거래해지
     */
    status: Cafe24Enum;
    /**
     * @description
     * 정산유형
     *
     * P : 수수료형
     * D : 매입형
     */
    paymentType: Cafe24Enum;
    /**
     * @description
     * 수수료율
     *
     *
     */
    commission: string;
    /**
     * @description
     * 정산주기
     *
     * 0: 선택안함
     * C: 일일정산
     * B: 주간정산
     * A: 월간정산
     */
    paymentPeriod: Cafe24Enum;
  };
}

/**
 * @event 90092
 *
 * @description
 * 쇼핑몰에 등록된 공급사가 일괄 수정된 경우
 *
 * Scopes:
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90092,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "supplier_code": "S0000000,S000000A,S000000B"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnBulkSupplierUpdate {
  eventNo: 90092;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 공급사 코드
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    supplierCode: string;
  };
}

/**
 * @event 90093
 *
 * @description
 * 쇼핑몰에 등록된 공급사가 삭제된 경우
 *
 * Scopes:
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90093,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "supplier_code": "S0000000"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnSupplierDeleted {
  eventNo: 90093;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 공급사 코드
     *
     * 형식 : [A-Z0-9]
     * 글자수 최소: [8자]~최대: [8자]
     */
    supplierCode: string;
  };
}

/**
 * @event 90100
 *
 * @description
 * 쇼핑몰에 배송업체가 등록된 경우
 *
 * Scopes:
 * - mall.read_shipping
 *
 * @example
 * ```json
 * {
 *   "event_no": 90100,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "sc_id": "3",
 *     "sc_name": "FASTBOX",
 *     "is_basic": "T",
 *     "phone1": "1588-3413",
 *     "phone2": "1588-3413",
 *     "email": "gdhong@cafe24corp.com",
 *     "shipping_money": "3000",
 *     "homepage": "www.fastbox.com",
 *     "trace_url": "https://www.fastbox.com/ko/tool/parcel/tracking?gnbInvcNo=000000000000",
 *     "sender_name": "cafe24bestshop",
 *     "sender_phone": "010-2424-2424",
 *     "sender_cellphone": "010-2424-2424",
 *     "weight": "15",
 *     "volume": "20",
 *     "shipping_type": "01",
 *     "box_type": "01",
 *     "sender_zipcode": "07071",
 *     "sender_address1": "15 Boramaero 5gil Dongjakgu",
 *     "sender_address2": "Cafe24 22F",
 *     "executor_id": "cafe24bestshop",
 *     "execute_method": "ADMIN"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnShippingProviderAdded {
  eventNo: 90100;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 배송업체 ID
     *
     *
     */
    scId: string;
    /**
     * @description
     * 배송업체명
     *
     *
     */
    scName: string;
    /**
     * @description
     * 기본배송사여부
     *
     * T : 사용함
     * F : 사용안함
     */
    isBasic: Cafe24Enum;
    /**
     * @description
     * 대표 연락처
     *
     *
     */
    phone1: string;
    /**
     * @description
     * 보조 연락처
     *
     *
     */
    phone2: string;
    /**
     * @description
     * 이메일
     *
     *
     */
    email: string;
    /**
     * @description
     * 기본 배송비
     *
     *
     */
    shippingMoney: string;
    homepage: string;
    /**
     * @description
     * 배송 추적 URL
     *
     *
     */
    traceUrl: string;
    /**
     * @description
     * 보내는 사람 이름
     *
     *
     */
    senderName: string;
    /**
     * @description
     * 보내는 사람 대표전화
     *
     *
     */
    senderPhone: string;
    /**
     * @description
     * 보내는 사람 휴대전화
     *
     *
     */
    senderCellphone: string;
    /**
     * @description
     * 배송상품 무게
     *
     *
     */
    weight: string;
    /**
     * @description
     * 배송상품 부피
     *
     *
     */
    volume: string;
    /**
     * @description
     * 배송비 타입
     *
     * 01 : 선불
     * 02 : 착불
     * 03 : 신용
     */
    shippingType: string;
    /**
     * @description
     * 박스 타입
     *
     * 01 : 극소
     * 02 : 소
     * 03 : 중
     * 04 : 대
     * 05 : 특대
     */
    boxType: string;
    /**
     * @description
     * 보내는사람 주소(우편번호)
     *
     *
     */
    senderZipcode: string;
    /**
     * @description
     * 보내는사람 주소(기본주소)
     *
     *
     */
    senderAddress1: string;
    /**
     * @description
     * 보내는사람 주소(상세주소)
     *
     *
     */
    senderAddress2: string;
    /**
     * @description
     * 처리자 ID
     *
     *
     */
    executorId: string;
    /**
     * @description
     * 처리자 구분
     *
     *
     */
    executeMethod: string;
  };
}

/**
 * @event 90101
 *
 * @description
 * 쇼핑몰에 등록된 배송업체가 수정된 경우
 *
 * Scopes:
 * - mall.read_shipping
 *
 * @example
 * ```json
 * {
 *   "event_no": 90101,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "sc_id": "3",
 *     "sc_name": "FASTBOX",
 *     "is_basic": "T",
 *     "phone1": "1588-3413",
 *     "phone2": "1588-3413",
 *     "email": "gdhong@cafe24corp.com",
 *     "shipping_money": "3000",
 *     "homepage": "www.fastbox.com",
 *     "trace_url": "https://www.fastbox.com/ko/tool/parcel/tracking?gnbInvcNo=000000000000",
 *     "executor_id": "cafe24bestshop",
 *     "execute_method": "ADMIN"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnShippingProviderUpdated {
  eventNo: 90101;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 배송업체 ID
     *
     *
     */
    scId: string;
    /**
     * @description
     * 배송업체명
     *
     *
     */
    scName: string;
    /**
     * @description
     * 기본배송사여부
     *
     * T : 사용함
     * F : 사용안함
     */
    isBasic: Cafe24Enum;
    /**
     * @description
     * 대표 연락처
     *
     *
     */
    phone1: string;
    /**
     * @description
     * 보조 연락처
     *
     *
     */
    phone2: string;
    /**
     * @description
     * 이메일
     *
     *
     */
    email: string;
    /**
     * @description
     * 기본 배송비
     *
     *
     */
    shippingMoney: string;
    homepage: string;
    /**
     * @description
     * 배송 추적 URL
     *
     *
     */
    traceUrl: string;
    /**
     * @description
     * 처리자 ID
     *
     *
     */
    executorId: string;
    /**
     * @description
     * 처리자 구분
     *
     *
     */
    executeMethod: string;
  };
}

/**
 * @event 90102
 *
 * @description
 * 쇼핑몰에 등록된 배송업체가 삭제된 경우
 *
 * Scopes:
 * - mall.read_shipping
 *
 * @example
 * ```json
 * {
 *   "event_no": 90102,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "sc_id": "3",
 *     "executor_id": "cafe24bestshop",
 *     "execute_method": "ADMIN"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnShippingProviderDeleted {
  eventNo: 90102;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 배송업체 ID
     *
     *
     */
    scId: string;
    /**
     * @description
     * 처리자 ID
     *
     *
     */
    executorId: string;
    /**
     * @description
     * 처리자 구분
     *
     *
     */
    executeMethod: string;
  };
}

/**
 * @event 90110
 *
 * @description
 * 쇼핑몰에 멀티쇼핑몰이 추가된 경우
 *
 * Scopes:
 * - mall.read_store
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90110,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "shop_no": "2",
 *     "shop_name": "MultiShop",
 *     "language": "en_US",
 *     "currency": "USD",
 *     "is_active": "T"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnMultiStoreAdded {
  eventNo: 90110;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: string;
    shopName: string;
    language: string;
    /**
     * @description
     * 화폐단위
     *
     * KRW : ￦ 원
     * USD : $ 달러
     * JPY : ¥ 엔
     */
    currency: string;
    isActive: Cafe24Enum;
  };
}

/**
 * @event 90111
 *
 * @description
 * 쇼핑몰에 등록된 멀티쇼핑몰이 수정된 경우
 *
 * Scopes:
 * - mall.read_store
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90111,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "shop_no": "2",
 *     "shop_name": "MultiShop",
 *     "is_active": "T"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnMultiStoreUpdated {
  eventNo: 90111;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: string;
    shopName: string;
    isActive: Cafe24Enum;
  };
}

/**
 * @event 90112
 *
 * @description
 * 쇼핑몰에 등록된 멀티쇼핑몰이 삭제된 경우
 *
 * Scopes:
 * - mall.read_store
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90112,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnMultiStoreDeleted {
  eventNo: 90112;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
  };
}

/**
 * @event 90113
 *
 * @description
 * 쇼핑몰에 부운영자가 등록된 경우
 *
 * Scopes:
 * - mall.read_store
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90113,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "sub_admin_id": "subadmin1",
 *     "sub_admin_type": "A",
 *     "user_name": "John Doe",
 *     "available": "T"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnSuboperatorAdded {
  eventNo: 90113;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 부운영자ID
     *
     *
     */
    subAdminId: string;
    /**
     * @description
     * 부운영자 타입
     *
     * A : 쇼핑몰운영자
     * S : 공급사운영자
     */
    subAdminType: Cafe24Enum;
    /**
     * @description
     * 부운영자명
     *
     * 기본몰에 설정된 부운영자명/공급사 운영자명만 제공
     */
    userName: string;
    available: Cafe24Enum;
  };
}

/**
 * @event 90114
 *
 * @description
 * 쇼핑몰에 등록된 부운영자가 수정된 경우
 *
 * Scopes:
 * - mall.read_store
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90114,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "sub_admin_id": "subadmin1",
 *     "sub_admin_type": "A",
 *     "user_name": "John Doe",
 *     "available": "T",
 *     "multishop_access_authority": "{1: 'T'}, {2: 'F'}, {3: 'T'}, {4: 'F'}"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnSuboperatorUpdated {
  eventNo: 90114;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 부운영자ID
     *
     *
     */
    subAdminId: string;
    /**
     * @description
     * 부운영자 타입
     *
     * A : 쇼핑몰운영자
     * S : 공급사운영자
     */
    subAdminType: Cafe24Enum;
    /**
     * @description
     * 부운영자명
     *
     * 기본몰에 설정된 부운영자명/공급사 운영자명만 제공
     */
    userName: string;
    available: Cafe24Enum;
    /**
     * @description
     * 멀티쇼핑몰 접근권한
     *
     * T : 허용함
     * F : 허용안함
     */
    multishopAccessAuthority: string;
  };
}

/**
 * @event 90115
 *
 * @description
 * 쇼핑몰에 등록된 부운영자가 삭제된 경우
 *
 * Scopes:
 * - mall.read_store
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90115,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "sub_admin_id": "subadmin1"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnSuboperatorDeleted {
  eventNo: 90115;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 부운영자ID
     *
     *
     */
    subAdminId: string;
  };
}

/**
 * @event 90116
 *
 * @description
 * 개인정보제공 설정이 변경된 경우
 *
 * Scopes:
 * - mall.read_store
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90116,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "use_information_agreement": "T",
 *     "use_consignment_agreement": "T"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnPrivacySettingsChanged {
  eventNo: 90116;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 개인정보 제3자 제공동의 사용여부
     *
     * T : 사용함
     * F : 사용안함
     */
    useInformationAgreement: Cafe24Enum;
    /**
     * @description
     * 개인정보 위탁동의 사용여부
     *
     * T : 사용함
     * F : 사용안함
     */
    useConsignmentAgreement: Cafe24Enum;
  };
}

/**
 * @event 90117
 *
 * @description
 * 쇼핑몰 도메인이 추가된 경우
 *
 * Scopes:
 * - mall.read_store
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90117,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "domain": "cafe24bestshop.cafe24.com"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnStoreDomainAdded {
  eventNo: 90117;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 도메인 주소
     *
     *
     */
    domain: string;
  };
}

/**
 * @event 90119
 *
 * @description
 * 쇼핑몰 도메인이 삭제된 경우
 *
 * Scopes:
 * - mall.read_store
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90119,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "domain": "cafe24bestshop.cafe24.com"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnStoreDomainToBeDeleted {
  eventNo: 90119;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 도메인 주소
     *
     *
     */
    domain: string;
  };
}

/**
 * @event 90121
 *
 * @description
 * 내 쇼핑몰 정보 설정이 수정된 경우
 *
 * Scopes:
 * - mall.read_store
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90121,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "shop_name": "cafe24bestshop",
 *     "country": "ko_KR",
 *     "zipcode": "07071",
 *     "address1": "15 Boramaero 5gil Dongjakgu",
 *     "address2": "Cafe24 22F",
 *     "president_phone": "02-3284-0300"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnMyStoreInfoSettingsUpdated {
  eventNo: 90121;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    shopName: string;
    /**
     * @description
     * 사업장 국가
     * 사업장이 있는 국가명
     *
     *
     */
    country: string;
    /**
     * @description
     * 사업장 우편번호
     *
     *
     */
    zipcode: string;
    /**
     * @description
     * 사업장 기본주소
     * 사업장의 주소 (시/군/도)
     *
     *
     */
    address1: string;
    /**
     * @description
     * 사업장 상세주소
     *
     *
     */
    address2: string;
    /**
     * @description
     * 대표전화
     *
     *
     */
    presidentPhone: string;
  };
}

/**
 * @event 90166
 *
 * @description
 * 쇼핑몰이 삭제처리된 경우
 *
 * Scopes:
 * - mall.read_store
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90166,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "trigger_name": "쇼핑몰이 삭제 처리된 경우"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnStoreDeleted {
  eventNo: 90166;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    triggerName: string;
  };
}

/**
 * @event 90167
 *
 * @description
 * 쇼핑몰이 휴면처리된 경우
 *
 * Scopes:
 * - mall.read_store
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90167,
 *   "resource": {
 *     "trigger_name": "쇼핑몰이 휴면처리된 경우",
 *     "sample": {
 *       "event_shop_no": "1",
 *       "mall_id": "cafe24bestshop"
 *     }
 *   }
 * }
 * ```
 *
 *
 */
export interface OnStoreDormanted {
  eventNo: 90167;
  resource: {
    triggerName: string;
    sample: {
      /**
       * @description
       * 멀티쇼핑몰 번호
       * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
       *
       *
       */
      eventShopNo: string;
      /**
       * @description
       * 쇼핑몰 ID
       *
       *
       */
      mallId: string;
    };
  };
}

/**
 * @event 90168
 *
 * @description
 * 쇼핑몰이 휴면해제된 경우
 *
 * Scopes:
 * - mall.read_store
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90168,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "trigger_name": "쇼핑몰이 휴면해제된 경우"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnStoreDormantLifted {
  eventNo: 90168;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    triggerName: string;
  };
}

/**
 * @event 90169
 *
 * @description
 * 쇼핑몰이 차단된 경우
 *
 * Scopes:
 * - mall.read_store
 * - mall.read_supply
 *
 * @example
 * ```json
 * {
 *   "event_no": 90169,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "trigger_name": "쇼핑몰이 차단된 경우"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnStoreBlocked {
  eventNo: 90169;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    triggerName: string;
  };
}

/**
 * @event 90142
 *
 * @description
 * 카카오싱크 설정이 변경된 경우
 *
 * Scopes:
 * - mall.read_store
 *
 * @example
 * ```json
 * {
 *   "event_no": 90142,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": "1",
 *     "kakaosync_used": "F",
 *     "client_id": "81b6ceb301d48df7670859c8db411ef4"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnKakaoSyncSettingsChanged {
  eventNo: 90142;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: string;
    /**
     * @description
     * 카카오싱크 설정상태
     *
     * T : 사용함
     * F : 사용안함
     */
    kakaosyncUsed: Cafe24Enum;
    clientId: string;
  };
}

/**
 * @event 90047
 *
 * @description
 * 쇼핑몰에 혜택이 등록된 경우
 *
 * Scopes:
 * - mall.read_store
 * - mall.read_promotion
 *
 * @example
 * ```json
 * {
 *   "event_no": 90047,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "shop_no": 1,
 *     "benefit_no": 3,
 *     "use_benefit": "T",
 *     "benefit_name": "SampleBenefit",
 *     "benefit_start_date": "2019-01-01T12: 00: 00+09: 00",
 *     "benefit_end_date": "2019-01-31T12: 00: 00+09: 00",
 *     "customer_group_list": [
 *       8,
 *       9
 *     ],
 *     "product_binding_type": "P",
 *     "product_list": [
 *       17,
 *       25,
 *       29
 *     ],
 *     "add_category_list": null,
 *     "except_category_list": [
 *       168,
 *       175,
 *       177
 *     ]
 *   }
 * }
 * ```
 *
 *
 */
export interface OnStoreBenefitAdded {
  eventNo: 90047;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: number;
    benefitNo: number;
    /**
     * @description
     * 혜택 진행여부
     *
     *
     */
    useBenefit: Cafe24Enum;
    /**
     * @description
     * 혜택이름
     *
     *
     */
    benefitName: string;
    /**
     * @description
     * 혜택 시작일
     *
     *
     */
    benefitStartDate: Cafe24Date;
    /**
     * @description
     * 혜택 종료일
     *
     *
     */
    benefitEndDate: Cafe24Date;
    /**
     * @description
     * 혜택 참여대상 설정
     *
     *
     */
    customerGroupList: Array<number>;
    /**
     * @description
     * 혜택 상품 범위 설정
     *
     *
     */
    productBindingType: Cafe24Enum;
    /**
     * @description
     * 혜택 적용 상품
     *
     *
     */
    productList: Array<number>;
    /**
     * @description
     * 혜택 적용 상품 분류
     *
     *
     */
    addCategoryList: any;
    /**
     * @description
     * 혜택 적용 제외상품
     *
     *
     */
    exceptCategoryList: Array<number>;
  };
}

/**
 * @event 90048
 *
 * @description
 * 쇼핑몰에 등록된 혜택이 수정된 경우
 *
 * Scopes:
 * - mall.read_store
 * - mall.read_promotion
 *
 * @example
 * ```json
 * {
 *   "event_no": 90048,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "shop_no": 1,
 *     "benefit_no": 3,
 *     "use_benefit": "T",
 *     "benefit_name": "SampleBenefit",
 *     "benefit_start_date": "2019-01-01T12: 00: 00+09: 00",
 *     "benefit_end_date": "2019-01-31T12: 00: 00+09: 00",
 *     "customer_group_list": [
 *       8,
 *       9
 *     ],
 *     "product_binding_type": "P",
 *     "product_list": [
 *       17,
 *       25,
 *       29
 *     ],
 *     "add_category_list": null,
 *     "except_category_list": [
 *       168,
 *       175,
 *       177
 *     ]
 *   }
 * }
 * ```
 *
 *
 */
export interface OnStoreBenefitChanged {
  eventNo: 90048;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: number;
    benefitNo: number;
    /**
     * @description
     * 혜택 진행여부
     *
     *
     */
    useBenefit: Cafe24Enum;
    /**
     * @description
     * 혜택이름
     *
     *
     */
    benefitName: string;
    /**
     * @description
     * 혜택 시작일
     *
     *
     */
    benefitStartDate: Cafe24Date;
    /**
     * @description
     * 혜택 종료일
     *
     *
     */
    benefitEndDate: Cafe24Date;
    /**
     * @description
     * 혜택 참여대상 설정
     *
     *
     */
    customerGroupList: Array<number>;
    /**
     * @description
     * 혜택 상품 범위 설정
     *
     *
     */
    productBindingType: Cafe24Enum;
    /**
     * @description
     * 혜택 적용 상품
     *
     *
     */
    productList: Array<number>;
    /**
     * @description
     * 혜택 적용 상품 분류
     *
     *
     */
    addCategoryList: any;
    /**
     * @description
     * 혜택 적용 제외상품
     *
     *
     */
    exceptCategoryList: Array<number>;
  };
}

/**
 * @event 90050
 *
 * @description
 * 혜택이 삭제된 경우
 *
 * Scopes:
 * - mall.read_store
 * - mall.read_promotion
 *
 * @example
 * ```json
 * {
 *   "event_no": 90050,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "shop_no": 1,
 *     "benefit_no": 3
 *   }
 * }
 * ```
 *
 *
 */
export interface OnStoreBenefitDeleted {
  eventNo: 90050;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     *
     *
     */
    shopNo: number;
    benefitNo: number;
  };
}

/**
 * @event 90151
 *
 * @description
 * 쇼핑몰에 등록된 쿠폰이 수정된 경우
 *
 * Scopes:
 * - mall.read_store
 * - mall.read_promotion
 *
 * @example
 * ```json
 * {
 *   "event_no": 90151,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": 1,
 *     "coupon_type": "O",
 *     "coupon_no": 6072120804600000000,
 *     "coupon_name": "Discount Coupon",
 *     "issue_status_code": "ISSUING",
 *     "issue_status": "발급중"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnCouponUpdated {
  eventNo: 90151;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: number;
    /**
     * @description
     * 쿠폰타입
     *
     * O : 온라인 쿠폰 / S : 오프라인 시리얼 쿠폰
     *
     *
     */
    couponType: Cafe24Enum;
    /**
     * @description
     * 쿠폰번호
     *
     *
     */
    couponNo: number;
    couponName: string;
    /**
     * @description
     * 쿠폰 발급 상태 코드
     *
     *
     */
    issueStatusCode: string;
    /**
     * @description
     * 쿠폰 발급 상태
     *
     * 발급중
     *
     *
     */
    issueStatus: string;
  };
}

/**
 * @event 90152
 *
 * @description
 * 쇼핑몰에 등록된 쿠폰이 삭제된 경우
 *
 * Scopes:
 * - mall.read_store
 * - mall.read_promotion
 *
 * @example
 * ```json
 * {
 *   "event_no": 90152,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": 1,
 *     "coupon_type": "O",
 *     "coupon_no": 6072120804600000000
 *   }
 * }
 * ```
 *
 *
 */
export interface OnCouponDeleted {
  eventNo: 90152;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: number;
    /**
     * @description
     * 쿠폰타입
     *
     * O : 온라인 쿠폰 / S : 오프라인 시리얼 쿠폰
     *
     *
     */
    couponType: Cafe24Enum;
    /**
     * @description
     * 쿠폰번호
     *
     *
     */
    couponNo: number;
  };
}

/**
 * @event 90153
 *
 * @description
 * 쇼핑몰에 쿠폰이 등록된 경우
 *
 * Scopes:
 * - mall.read_store
 * - mall.read_promotion
 *
 * @example
 * ```json
 * {
 *   "event_no": 90153,
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": 1,
 *     "coupon_type": "O",
 *     "coupon_no": 6072120804600000000,
 *     "coupon_name": "Discount Coupon",
 *     "issue_status_code": "ISSUING",
 *     "issue_status": "발급중"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnCouponAdded {
  eventNo: 90153;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: number;
    /**
     * @description
     * 쿠폰타입
     *
     * O : 온라인 쿠폰 / S : 오프라인 시리얼 쿠폰
     *
     *
     */
    couponType: Cafe24Enum;
    /**
     * @description
     * 쿠폰번호
     *
     *
     */
    couponNo: number;
    couponName: string;
    /**
     * @description
     * 쿠폰 발급 상태 코드
     *
     *
     */
    issueStatusCode: string;
    /**
     * @description
     * 쿠폰 발급 상태
     *
     * 발급중
     *
     *
     */
    issueStatus: string;
  };
}

/**
 * @event 90154
 *
 * @description
 * 쇼핑몰 쿠폰의 발급 상태가 변경된 경우
 *
 * Scopes:
 * - mall.read_store
 * - mall.read_promotion
 *
 * @example
 * ```json
 * {
 *   "event_no": "90154",
 *   "resource": {
 *     "mall_id": "cafe24bestshop",
 *     "event_shop_no": 1,
 *     "coupon_no": 6072120804600000000,
 *     "coupon_name": "Discount Coupon",
 *     "issue_status_code": "ISSUING",
 *     "issue_status": "발급중",
 *     "mode": "restart",
 *     "type": "now",
 *     "start_date": "2022-01-01 14:39",
 *     "end_date": "2022-01-01 16:38"
 *   }
 * }
 * ```
 *
 *
 */
export interface OnCouponIssuanceStatusChanged {
  eventNo: 90154;
  resource: {
    /**
     * @description
     * 쇼핑몰 ID
     *
     *
     */
    mallId: string;
    /**
     * @description
     * 멀티쇼핑몰 번호
     * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
     *
     *
     */
    eventShopNo: number;
    /**
     * @description
     * 쿠폰번호
     *
     *
     */
    couponNo: number;
    couponName: string;
    /**
     * @description
     * 쿠폰 발급 상태 코드
     *
     *
     */
    issueStatusCode: string;
    /**
     * @description
     * 쿠폰 발급 상태
     *
     * 발급중
     *
     *
     */
    issueStatus: string;
    /**
     * @description
     * 발급 상태 변경 유형
     *
     * pause : 발급 중지 / restart : 발급 재개
     *
     *
     */
    mode: string;
    /**
     * @description
     * 발급 상태 변경 유형 상세
     *
     * 발급 중지 유형) later : 발급 중지 기간 설정 / now : 즉시 발급 중지
     * 발급 재개 유형) later : 발급 중지 해제일 변경 / now : 즉시 발급 재개
     *
     *
     */
    type: string;
    /**
     * @description
     * 시작일시
     *
     *
     */
    startDate: Cafe24Date;
    /**
     * @description
     * 해제일시
     *
     * 즉시 발급 중지일 경우 빈 값으로 나타납니다.
     */
    endDate: Cafe24Date;
  };
}

export abstract class Event {
  constructor(data: any) {
    Object.assign(this, data);
  }
}

export class OnAppDeleted extends Event {
  constructor(data: OnAppDeleted) {
    super(data);
  }
}
export class OnAppExpired extends Event {
  constructor(data: OnAppExpired) {
    super(data);
  }
}
export class OnAppExpirationExtended extends Event {
  constructor(data: OnAppExpirationExtended) {
    super(data);
  }
}
export class OnAppPayment extends Event {
  constructor(data: OnAppPayment) {
    super(data);
  }
}
export class OnAppPaymentRefundRequested extends Event {
  constructor(data: OnAppPaymentRefundRequested) {
    super(data);
  }
}
export class OnAppPaymentRefundCompleted extends Event {
  constructor(data: OnAppPaymentRefundCompleted) {
    super(data);
  }
}
export class OnAppOrderReturnCompleted extends Event {
  constructor(data: OnAppOrderReturnCompleted) {
    super(data);
  }
}
export class OnProductCreated extends Event {
  constructor(data: OnProductCreated) {
    super(data);
  }
}
export class OnProductUpdated extends Event {
  constructor(data: OnProductUpdated) {
    super(data);
  }
}
export class OnBulkProductUpdate extends Event {
  constructor(data: OnBulkProductUpdate) {
    super(data);
  }
}
export class OnProductDeleted extends Event {
  constructor(data: OnProductDeleted) {
    super(data);
  }
}
export class OnProductRestored extends Event {
  constructor(data: OnProductRestored) {
    super(data);
  }
}
export class OnProductInventoryChanged extends Event {
  constructor(data: OnProductInventoryChanged) {
    super(data);
  }
}
export class OnProductStockStatusChanged extends Event {
  constructor(data: OnProductStockStatusChanged) {
    super(data);
  }
}
export class OnOrderReceived extends Event {
  constructor(data: OnOrderReceived) {
    super(data);
  }
}
export class OnOrderDeliveryStatusChanged extends Event {
  constructor(data: OnOrderDeliveryStatusChanged) {
    super(data);
  }
}
export class OnBulkOrderDeliveryStatusChanged extends Event {
  constructor(data: OnBulkOrderDeliveryStatusChanged) {
    super(data);
  }
}
export class OnOrderPaymentStatusChanged extends Event {
  constructor(data: OnOrderPaymentStatusChanged) {
    super(data);
  }
}
export class OnOrderCancellationStatusChanged extends Event {
  constructor(data: OnOrderCancellationStatusChanged) {
    super(data);
  }
}
export class OnBulkOrderCancellationStatusChanged extends Event {
  constructor(data: OnBulkOrderCancellationStatusChanged) {
    super(data);
  }
}
export class OnOrderReturnStatusChanged extends Event {
  constructor(data: OnOrderReturnStatusChanged) {
    super(data);
  }
}
export class OnBulkOrderReturnStatusChanged extends Event {
  constructor(data: OnBulkOrderReturnStatusChanged) {
    super(data);
  }
}
export class OnOrderExchangeStatusChanged extends Event {
  constructor(data: OnOrderExchangeStatusChanged) {
    super(data);
  }
}
export class OnOrderRefundStatusChanged extends Event {
  constructor(data: OnOrderRefundStatusChanged) {
    super(data);
  }
}
export class OnBulkOrderRefundStatusChanged extends Event {
  constructor(data: OnBulkOrderRefundStatusChanged) {
    super(data);
  }
}
export class OnProductAddedToOrder extends Event {
  constructor(data: OnProductAddedToOrder) {
    super(data);
  }
}
export class OnOrderRecipientInfoChanged extends Event {
  constructor(data: OnOrderRecipientInfoChanged) {
    super(data);
  }
}
export class OnAdminNoteAddedToOrder extends Event {
  constructor(data: OnAdminNoteAddedToOrder) {
    super(data);
  }
}
export class OnAdminNoteUpdatedOnOrder extends Event {
  constructor(data: OnAdminNoteUpdatedOnOrder) {
    super(data);
  }
}
export class OnAdminNoteDeletedFromOrder extends Event {
  constructor(data: OnAdminNoteDeletedFromOrder) {
    super(data);
  }
}
export class OnOrderFormDeleted extends Event {
  constructor(data: OnOrderFormDeleted) {
    super(data);
  }
}
export class OnProductAddedToCart extends Event {
  constructor(data: OnProductAddedToCart) {
    super(data);
  }
}
export class OnOrderShippingCodeChanged extends Event {
  constructor(data: OnOrderShippingCodeChanged) {
    super(data);
  }
}
export class OnNewMemberRegistered extends Event {
  constructor(data: OnNewMemberRegistered) {
    super(data);
  }
}
export class OnMemberLinkedSNSAccount extends Event {
  constructor(data: OnMemberLinkedSNSAccount) {
    super(data);
  }
}
export class OnMemberInfoChanged extends Event {
  constructor(data: OnMemberInfoChanged) {
    super(data);
  }
}
export class OnMemberLogin extends Event {
  constructor(data: OnMemberLogin) {
    super(data);
  }
}
export class OnMemberGradeChanged extends Event {
  constructor(data: OnMemberGradeChanged) {
    super(data);
  }
}
export class OnMemberBecameDormant extends Event {
  constructor(data: OnMemberBecameDormant) {
    super(data);
  }
}
export class OnMemberDormancyReleased extends Event {
  constructor(data: OnMemberDormancyReleased) {
    super(data);
  }
}
export class OnMemberWithdrawal extends Event {
  constructor(data: OnMemberWithdrawal) {
    super(data);
  }
}
export class OnMemberPointsChanged extends Event {
  constructor(data: OnMemberPointsChanged) {
    super(data);
  }
}
export class OnPostCreated extends Event {
  constructor(data: OnPostCreated) {
    super(data);
  }
}
export class OnCommentAddedToPost extends Event {
  constructor(data: OnCommentAddedToPost) {
    super(data);
  }
}
export class OnUrgentInquiryReceived extends Event {
  constructor(data: OnUrgentInquiryReceived) {
    super(data);
  }
}
export class OnPostDeleted extends Event {
  constructor(data: OnPostDeleted) {
    super(data);
  }
}
export class OnCommentDeletedFromPost extends Event {
  constructor(data: OnCommentDeletedFromPost) {
    super(data);
  }
}
export class OnUrgentInquiryDeleted extends Event {
  constructor(data: OnUrgentInquiryDeleted) {
    super(data);
  }
}
export class OnPostUpdated extends Event {
  constructor(data: OnPostUpdated) {
    super(data);
  }
}
export class OnProductCategoryAdded extends Event {
  constructor(data: OnProductCategoryAdded) {
    super(data);
  }
}
export class OnProductCategoryUpdated extends Event {
  constructor(data: OnProductCategoryUpdated) {
    super(data);
  }
}
export class OnBulkProductCategoryDisplaySettingsChanged extends Event {
  constructor(data: OnBulkProductCategoryDisplaySettingsChanged) {
    super(data);
  }
}
export class OnProductCategoryDeleted extends Event {
  constructor(data: OnProductCategoryDeleted) {
    super(data);
  }
}
export class OnProductCategoryOrderChanged extends Event {
  constructor(data: OnProductCategoryOrderChanged) {
    super(data);
  }
}
export class OnSupplierAdded extends Event {
  constructor(data: OnSupplierAdded) {
    super(data);
  }
}
export class OnSupplierUpdated extends Event {
  constructor(data: OnSupplierUpdated) {
    super(data);
  }
}
export class OnBulkSupplierUpdate extends Event {
  constructor(data: OnBulkSupplierUpdate) {
    super(data);
  }
}
export class OnSupplierDeleted extends Event {
  constructor(data: OnSupplierDeleted) {
    super(data);
  }
}
export class OnShippingProviderAdded extends Event {
  constructor(data: OnShippingProviderAdded) {
    super(data);
  }
}
export class OnShippingProviderUpdated extends Event {
  constructor(data: OnShippingProviderUpdated) {
    super(data);
  }
}
export class OnShippingProviderDeleted extends Event {
  constructor(data: OnShippingProviderDeleted) {
    super(data);
  }
}
export class OnMultiStoreAdded extends Event {
  constructor(data: OnMultiStoreAdded) {
    super(data);
  }
}
export class OnMultiStoreUpdated extends Event {
  constructor(data: OnMultiStoreUpdated) {
    super(data);
  }
}
export class OnMultiStoreDeleted extends Event {
  constructor(data: OnMultiStoreDeleted) {
    super(data);
  }
}
export class OnSuboperatorAdded extends Event {
  constructor(data: OnSuboperatorAdded) {
    super(data);
  }
}
export class OnSuboperatorUpdated extends Event {
  constructor(data: OnSuboperatorUpdated) {
    super(data);
  }
}
export class OnSuboperatorDeleted extends Event {
  constructor(data: OnSuboperatorDeleted) {
    super(data);
  }
}
export class OnPrivacySettingsChanged extends Event {
  constructor(data: OnPrivacySettingsChanged) {
    super(data);
  }
}
export class OnStoreDomainAdded extends Event {
  constructor(data: OnStoreDomainAdded) {
    super(data);
  }
}
export class OnStoreDomainToBeDeleted extends Event {
  constructor(data: OnStoreDomainToBeDeleted) {
    super(data);
  }
}
export class OnMyStoreInfoSettingsUpdated extends Event {
  constructor(data: OnMyStoreInfoSettingsUpdated) {
    super(data);
  }
}
export class OnStoreDeleted extends Event {
  constructor(data: OnStoreDeleted) {
    super(data);
  }
}
export class OnStoreDormanted extends Event {
  constructor(data: OnStoreDormanted) {
    super(data);
  }
}
export class OnStoreDormantLifted extends Event {
  constructor(data: OnStoreDormantLifted) {
    super(data);
  }
}
export class OnStoreBlocked extends Event {
  constructor(data: OnStoreBlocked) {
    super(data);
  }
}
export class OnKakaoSyncSettingsChanged extends Event {
  constructor(data: OnKakaoSyncSettingsChanged) {
    super(data);
  }
}
export class OnStoreBenefitAdded extends Event {
  constructor(data: OnStoreBenefitAdded) {
    super(data);
  }
}
export class OnStoreBenefitChanged extends Event {
  constructor(data: OnStoreBenefitChanged) {
    super(data);
  }
}
export class OnStoreBenefitDeleted extends Event {
  constructor(data: OnStoreBenefitDeleted) {
    super(data);
  }
}
export class OnCouponUpdated extends Event {
  constructor(data: OnCouponUpdated) {
    super(data);
  }
}
export class OnCouponDeleted extends Event {
  constructor(data: OnCouponDeleted) {
    super(data);
  }
}
export class OnCouponAdded extends Event {
  constructor(data: OnCouponAdded) {
    super(data);
  }
}
export class OnCouponIssuanceStatusChanged extends Event {
  constructor(data: OnCouponIssuanceStatusChanged) {
    super(data);
  }
}
