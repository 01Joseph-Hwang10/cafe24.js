declare const CAFE24API: any;

interface InitOptions {
  /**
   * 사용할 앱의 App Key를 설정해 주세요.
   */
  client_id: string;
  /**
   * 적용할 버전을 설정해 주세요.
   */
  version?: string;
}

/**
 * @see https://developers.cafe24.com/app/front/common/frontsdk
 */
export class Cafe24FrontSDK {
  protected readonly instance: any;

  /**
   * 현재 접속중인 쇼핑몰의 아이디 조회
   */
  get MALL_ID(): string {
    return this.instance.MALL_ID;
  }

  /**
   * 현재 접속중인 멀티쇼핑몰 번호 조회
   */
  get SHOP_NO(): number {
    return this.instance.SHOP_NO;
  }

  /**
   * CAFE24API SDK를 초기화합니다. SDK를 사용하기 전에 호출해야합니다.
   */
  constructor(options: string | InitOptions, instance: any = CAFE24API) {
    this.instance = instance;
    this.instance.init(options);
  }

  /**
   * 현재 접속중인 고객 아이디 조회
   *
   * Scopes:
   * - 앱 읽기권한 (mall.read_application)
   */
  getCustomerIDInfo(): Promise<GetCustomerIDInfoOutput> {
    return new Promise((resolve, reject) => {
      this.instance.getCustomerIDInfo((error: any, response: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  /**
   * 암호화 처리된 회원 아이디 조회
   *
   * getEncryptedMemberId()는 Service Key가 발급된 앱에서만 이용 가능합니다.
   * [개발자센터 어드민 > Apps > 개발 정보 > STEP 01 개발 정보 관리 > 인증 정보 > Service Key] 의  "보기" 버튼을 클릭하면 Service Key가 발급됩니다.
   *
   * Scopes:
   * - 회원 읽기권한 (mall.read_customer)
   */
  getEncryptedMemberId(
    input: GetEncryptedMemberIdInput,
  ): Promise<GetEncryptedMemberIdOutput> {
    const { client_id } = input;
    return new Promise((resolve, reject) => {
      this.instance.getEncryptedMemberId(
        client_id,
        (error: any, response: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(response);
          }
        },
      );
    });
  }

  /**
   * 현재 접속중인 회원 정보 조회
   *
   * Scopes:
   * - mall.read_customer
   */
  getCustomerInfo(): Promise<GetCustomerInfoOutput> {
    return new Promise((resolve, reject) => {
      this.instance.getCustomerInfo((error: any, response: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  /**
   * 현재 회원이 로그인된 SNS 로그인 방식 조회
   *
   * Scopes:
   * - mall.read_customer
   */
  getLoginProvider(): Promise<GetLoginProviderOutput> {
    return new Promise((resolve, reject) => {
      this.instance.getLoginProvider((error: any, response: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  /**
   * 회원 연동된 sns 정보 조회
   *
   * Scopes:
   * - mall.read_customer
   */
  getCustomerProvider(): Promise<GetCustomerProviderOutput> {
    return new Promise((resolve, reject) => {
      this.instance.getCustomerProvider((error: any, response: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  /**
   * 회원 적립금 정보 조회
   *
   * Scopes:
   * - mall.read_customer
   */
  getPointInfo(): Promise<GetPointInfoOutput> {
    return new Promise((resolve, reject) => {
      this.instance.getPointInfo((error: any, response: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  /**
   * 회원 예치금 정보 조회
   *
   * Scopes:
   * - mall.read_customer
   */
  getCreditInfo(): Promise<GetCreditInfoOutput> {
    return new Promise((resolve, reject) => {
      this.instance.getCreditInfo((error: any, response: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  /**
   * 회원 장바구니 리스트 조회
   *
   * Scopes:
   * - mall.read_cart
   */
  getCartList(): Promise<GetCartListOutput> {
    return new Promise((resolve, reject) => {
      this.instance.getCartList((error: any, response: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  /**
   * 회원 장바구니 총 금액
   *
   * Scopes:
   * - mall.read_cart
   */
  getCartInfo(): Promise<GetCartInfoOutput> {
    return new Promise((resolve, reject) => {
      this.instance.getCartInfo((error: any, response: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  /**
   * 장바구니 리스트 카운트
   *
   * Scopes:
   * - mall.read_cart
   */
  getCartCount(): Promise<GetCartCountOutput> {
    return new Promise((resolve, reject) => {
      this.instance.getCartCount((error: any, response: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  /**
   * 장바구니 품목 조회
   *
   * Scopes:
   * - mall.read_cart
   */
  getCartItemList(): Promise<GetCartItemListOutput> {
    return new Promise((resolve, reject) => {
      this.instance.getCartItemList((error: any, response: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  /**
   * 쿠폰 카운트 조회
   *
   * Scopes:
   * - mall.read_customer
   */
  getCouponCount(): Promise<GetCouponCountOutput> {
    return new Promise((resolve, reject) => {
      this.instance.getCouponCount((error: any, response: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  /**
   * 관심상품 카운트 조회
   *
   * Scopes:
   * - mall.read_customer
   */
  getWishCount(): Promise<GetWishCountOutput> {
    return new Promise((resolve, reject) => {
      this.instance.getWishCount((error: any, response: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  /**
   * 쇼핑몰 정보 조회
   *
   * Scopes:
   * - mall.read_application
   */
  getShopInfo(): Promise<GetShopInfoOutput> {
    return new Promise((resolve, reject) => {
      this.instance.getShopInfo((error: any, response: any) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      });
    });
  }

  /**
   * 현재 쇼핑몰 이용고객이 보고 있는 상품을 해당 회원의 장바구니에 추가합니다.
   *
   * Scopes:
   * - 주문 쓰기 권한 (mall.write_order)
   */
  addCurrentProductToCart(
    input: AddCurrentProductToCartInput,
  ): Promise<AddCurrentProductToCartOutput> {
    const { mall_id, request_time, app_key, member_id, hmac } = input;
    return new Promise((resolve, reject) => {
      this.instance.addCurrentProductToCart(
        mall_id,
        request_time,
        app_key,
        member_id,
        hmac,
        (error: any, response: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(response);
          }
        },
      );
    });
  }

  /**
   * 현재 접속중인 구매자의 장바구니에 품목(일반상품) 추가
   *
   * 1회 호출당 10개 품목까지 추가할 수 있습니다.
   *
   * 평균 소요시간: 150ms
   *
   * Scopes:
   * - 개인화정보 쓰기권한 (mall.write_personal)
   */
  addCart(input: AddCartInput): Promise<AddCartOutput> {
    const { basket_type, prepaid_shipping_fee, product_list } = input;
    return new Promise((resolve, reject) => {
      this.instance.addCart(
        basket_type,
        prepaid_shipping_fee,
        product_list,
        (error: any, response: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(response);
          }
        },
      );
    });
  }

  /**
   * 현재 접속중인 구매자의 장바구니에 품목(일체형 세트상품) 추가
   *
   * Scopes:
   * - 개인화정보 쓰기권한 (mall.write_personal)
   */
  addBundleProductsCart(
    input: AddBundleProductsCartInput,
  ): Promise<AddBundleProductsCartOutput> {
    const { basket_type, prepaid_shipping_fee, product_list } = input;
    return new Promise((resolve, reject) => {
      this.instance.addBundleProductsCart(
        basket_type,
        prepaid_shipping_fee,
        product_list,
        (error: any, response: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(response);
          }
        },
      );
    });
  }

  /**
   * 현재 접속중인 회원의 장바구니 비우기
   *
   * Scopes:
   * - 개인화정보 쓰기권한 (mall.write_personal)
   */
  emptyCart(input: EmptyCartInput): Promise<EmptyCartOutput> {
    const { basket_shipping_type } = input;
    return new Promise((resolve, reject) => {
      this.instance.emptyCart(
        basket_shipping_type,
        (error: any, response: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(response);
          }
        },
      );
    });
  }

  /**
   * 현재 접속중인 회원의 장바구니 특정 품목 삭제
   *
   * Scopes:
   * - 개인화정보 쓰기권한 (mall.write_personal)
   */
  deleteCartItems(input: DeleteCartItemsInput): Promise<DeleteCartItemsOutput> {
    return new Promise((resolve, reject) => {
      const { basket_shipping_type, product_list } = input;
      this.instance.deleteCartItems(
        basket_shipping_type,
        product_list,
        (error: any, response: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(response);
          }
        },
      );
    });
  }

  /**
   * 마이쇼핑 주문조회
   *
   * Scopes:
   * - 주문 읽기권한 (mall.read_order)
   */
  getOrderDetailInfo(
    input: GetOrderDetailInfoInput,
  ): Promise<GetOrderDetailInfoOutput> {
    const { shop_no, order_id } = input;
    return new Promise((resolve, reject) => {
      this.instance.getOrderDetailInfo(
        shop_no,
        order_id,
        (error: any, response: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(response);
          }
        },
      );
    });
  }

  /**
   * 취소/교환/반품 신청 가능한 주문상품정보 조회
   *
   * Scopes:
   * - mall.read_order
   */
  getClaimableItemList(
    input: GetClaimableItemListInput,
  ): Promise<GetClaimableItemListOutput> {
    const { order_id, claim_type } = input;
    return new Promise((resolve, reject) => {
      this.instance.getClaimableItemList(
        order_id,
        claim_type,
        (error: any, response: any) => {
          if (error) {
            reject(error);
          } else {
            resolve(response);
          }
        },
      );
    });
  }
}

/**
 * @example
 * ```json
 * {
 *   "id": {
 *     "guest_id": null,
 *     "member_id": "tester"
 *   }
 * }
 * ```
 */
interface GetCustomerIDInfoOutput {
  id: {
    /** 비회원 아이디 */
    guest_id: string | null;
    /** 회원 아이디 */
    member_id: string | null;
  };
}

interface GetEncryptedMemberIdInput {
  /**
   * 앱 클라이언트 아이디
   *
   * @example ue7aDpAlRa6PrNkCUGfTTB
   */
  client_id: string;
}

/**
 * @example
 * ```json
 * {
 *   "member_id": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiO",
 *   "guest_id": null
 * }
 * ```
 */
interface GetEncryptedMemberIdOutput {
  /** 암호화 처리된 회원 아이디 */
  member_id: string | null;
  /** 비회원 아이디 */
  guest_id: string | null;
}

/**
 * @example
 * ```json
 * {
 *   "customer": {
 *     "birthday": "F",
 *     "email": "test@test.com",
 *     "group_name": "일반회원",
 *     "group_no": 1,
 *     "member_id": "tester",
 *     "name": "teser name",
 *     "nick_name": "닉네임",
 *     "phone": "02-0001-0000",
 *     "additional_information": [
 *       {
 *         "key": "add1",
 *         "name": "add name 1",
 *         "value": "add value 1"
 *       },
 *       {
 *         "key": "add2",
 *         "name": "add name 2",
 *         "value": ""
 *       }
 *     ],
 *     "authentication_method": "m",
 *     "created_date": "2019-07-12 15:00:05"
 *   }
 * }
 * ```
 */
interface GetCustomerInfoOutput {
  /** 생일 (조회일 당일이 생일인 경우 Y) */
  birthday: string;
  /** 이메일 */
  email: string;
  /** 회원등급명 */
  group_name: string;
  /** 회원등급번호 */
  group_no: number;
  /** 회원아이디 */
  member_id: string;
  /** 이름 */
  name: string;
  /** 별명 */
  nick_name: string;
  /** 전화번호 */
  phone: string;
  /** 추가항목 */
  additional_information: Array<{
    key: string;
    name: string;
    value: string;
  }>;
  /** 인증 수단 */
  authentication_method: string;
  /** 가입일 */
  created_date: string;
}

/**
 * @example
 * ```json
 * {
 *   "login": {
 *     "member_id": null,
 *     "provider": null,
 *     "client_id": null
 *   }
 * }
 * ```
 */
interface GetLoginProviderOutput {
  /** 회원아이디 */
  member_id: string | null;
  /**
   * 로그인 연동된 sns 정보
   *
   * - naver : 네이버
   * - apple : 애플
   * - kakao : 카카오
   * - yahoojp : 야후 재팬
   * - googleplus : 구글
   * - line : 라인
   * - facebook : 페이스북
   * - sso : SSO로그인
   * - null : 솔루션 로그인
   */
  provider:
    | "naver"
    | "apple"
    | "kakao"
    | "yahoojp"
    | "googleplus"
    | "line"
    | "facebook"
    | "sso"
    | null;
  /** sso 로그인 연동일 경우 client_id 정보 */
  client_id: string | null;
}

/**
 * @example
 * ```json
 * {
 *   "login": {
 *     "member_id": "test1",
 *     "provider": ["naver", "kakao"]
 *   }
 * }
 * ```
 */
interface GetCustomerProviderOutput {
  login: {
    /** 회원아이디 */
    member_id: string;
    /** 로그인 연동된 sns 정보 */
    provider: string[] | null;
  };
}

/**
 * @example
 * ```json
 * {
 *   "point": {
 *     "available_point": "9600.00",
 *     "returned_point": "0.00",
 *     "total_point": "9600.00",
 *     "unavailable_point": "0.00",
 *     "used_point": "0.00"
 *   }
 * }
 * ```
 */
interface GetPointInfoOutput {
  point: {
    /** 가용 적립금 */
    available_point: string;
    /** 환불 예정 적립금 */
    returned_point: string;
    /** 총 적립금 */
    total_point: string;
    /** 미가용 적립금 */
    unavailable_point: string;
    /** 사용 적립금 */
    used_point: string;
  };
}

/**
 * @example
 * ```json
 * {
 *   "credit": {
 *     "all_credit": "8513.00",
 *     "member_total_credit": "8513.00",
 *     "refund_wait_credit": "1513.00",
 *     "total_credit": "7000.00",
 *     "used_credit": "0.00"
 *   }
 * }
 * ```
 */
interface GetCreditInfoOutput {
  credit: {
    /** 가용 예치금 */
    all_credit: string;
    /** 회원테이블에 있는 예치금 */
    member_total_credit: string;
    /** 환불요청 예치금 */
    refund_wait_credit: string;
    /** 총 예치금 */
    total_credit: string;
    /** 사용된 예치금 */
    used_credit: string;
  };
}

/**
 * @example
 * ```json
 * {
 *   "carts": [
 *     {
 *       "additional_option": null,
 *       "attached_file_option": null,
 *       "basket_product_no": 10,
 *       "product_price": "1000.00",
 *       "quantity": 1,
 *       "selected_product": "T",
 *       "variant_code": "P0000BJU000H"
 *     }
 *   ]
 * }
 * ```
 */
interface GetCartListOutput {
  carts: Array<{
    /** 추가입력 옵션 */
    additional_option: string | null;
    /** 파일 첨부 옵션 */
    attached_file_option: string | null;
    /** 장바구니 번호 */
    basket_product_no: number;
    /** 상품 판매가 */
    product_price: string;
    /** 수량 */
    quantity: number;
    /** 장바구니 선택여부 */
    selected_product: string;
    /** 품목코드 */
    variant_code: string;
    /** 상품번호 (옵션) */
    product_no?: number;
    /** 멀티쇼핑몰 번호 (옵션) */
    shop_no?: number;
  }>;
}

/**
 * @example
 * ```json
 * {
 *   "cart": {
 *     "basket_price": "25000.00"
 *   }
 * }
 * ```
 */
interface GetCartInfoOutput {
  cart: {
    /** 장바구니 금액 */
    basket_price: string;
  };
}

/**
 * @example
 * ```json
 * {
 *   "count": 2
 * }
 * ```
 */
interface GetCartCountOutput {
  /** 장바구니 품목 수 */
  count: number;
}

/**
 * @example
 * ```json
 * {
 *   "items": [
 *     {
 *       "basket_product_no": 2,
 *       "discount_price": 5000,
 *       "display_group": null,
 *       "non_quantity_based_discount": 0,
 *       "option_price": 0,
 *       "price": 5000,
 *       "product_no": 11,
 *       "product_weight": null,
 *       "quantity": 3,
 *       "quantity_based_discount": 0,
 *       "variant_code": "P000000R000C",
 *       "product_volume": {
 *         "product_height": 20,
 *         "product_length": 30,
 *         "product_width": 10
 *       },
 *       "option_id": "000C",
 *       "option_value": ["Pattern 1", "Pattern 2"],
 *       "product_bundle": "F",
 *       "product_bundle_no": null,
 *       "product_image": "//domain/image.jpg",
 *       "product_name": "iPhone X",
 *       "additional_option_values": [
 *         {
 *           "custom_data_idx": 10,
 *           "custom_options": {
 *             "key": "item_option_add",
 *             "type": "text",
 *             "value": "Red",
 *             "info": "Color"
 *           },
 *           "item_code": "P000000R000C",
 *           "option_str": ["Pattern 1", "Pattern 2"],
 *           "quantity": 2
 *         },
 *         {
 *           "custom_data_idx": 11,
 *           "custom_options": {
 *             "key": "item_option_add",
 *             "type": "text",
 *             "value": "Large",
 *             "info": "Size"
 *           },
 *           "item_code": "P000000R000C",
 *           "option_str": ["Pattern 1", "Pattern 2"],
 *           "quantity": 1
 *         }
 *       ],
 *       "categories": [33, 24, 27]
 *     }
 *   ]
 * }
 * ```
 */
interface GetCartItemListOutput {
  /** 장바구니 품목 리스트 */
  items: Array<{
    /** 장바구니 번호 */
    basket_product_no: number;
    /** 할인 판매가 */
    discount_price: number;
    /** 상세 상품분류 */
    display_group: number | null;
    /** 구매수량에 무관한 할인금액 */
    non_quantity_based_discount: number;
    /** 옵션 추가 가격 */
    option_price: number;
    /** 판매가 */
    price: number;
    /** 상품번호 */
    product_no: number;
    /** 상품 중량 */
    product_weight: number | null;
    /** 수량 */
    quantity: number;
    /** 구매수량에 비례하는 할인 금액 */
    quantity_based_discount: number;
    /** 품목코드 */
    variant_code: string;
    /** 상품 부피 */
    product_volume: {
      product_height: number;
      product_length: number;
      product_width: number;
    };
    /** 옵션 ID */
    option_id: string;
    /** 옵션 값 */
    option_value: string[];
    /** 세트상품여부 */
    product_bundle: string;
    /** 세트상품번호 */
    product_bundle_no: number | null;
    /** 상품 썸네일이미지 url */
    product_image: string;
    /** 상품명 */
    product_name: string;
    /** 사용자 지정 옵션 */
    additional_option_values: Array<{
      custom_data_idx: number;
      custom_options: {
        key: string;
        type: string;
        value: string;
        info: string;
      };
      item_code: string;
      option_str: string[];
      quantity: number;
    }>;
    /** 해당 상품이 진열되어 있는 전체 상품 분류 */
    categories: number[];
  }>;
}

/**
 * @example
 * ```json
 * {
 *   "count": 5
 * }
 * ```
 */
interface GetCouponCountOutput {
  /** 보유 쿠폰 수 */
  count: number;
}

/**
 * @example
 * ```json
 * {
 *   "count": 3
 * }
 * ```
 */
interface GetWishCountOutput {
  /** 관심상품 수 */
  count: number;
}

/**
 * @example
 * ```json
 * {
 *   "shop": {
 *     "currency_code": "KRW",
 *     "language_code": "ko_KR",
 *     "timezone": "Asia/Seoul"
 *   }
 * }
 * ```
 */
interface GetShopInfoOutput {
  shop: {
    /** 결제 화폐 코드 */
    currency_code: string;
    /** 언어 코드 */
    language_code: string;
    /** 표준시간대(타임존) */
    timezone: string;
  };
}

/**
 * addCurrentProductToCart 메서드 입력 파라미터
 */
interface AddCurrentProductToCartInput {
  /** 몰아이디 */
  mall_id: string;
  /** 호출날짜 */
  request_time: string;
  /** 앱 키 */
  app_key: string;
  /** 회원아이디(비회원 guest_id) */
  member_id: string;
  /** HMAC */
  hmac: string;
}

/**
 * @example
 * ```json
 * {
 *   "cart": [
 *     {
 *       "additional_option_value": "",
 *       "additional_option_values": null,
 *       "attached_file_option": "",
 *       "basket_product_no": 354,
 *       "category_no": "1",
 *       "checked_products": "T",
 *       "created_date": "2021-05-12 15:03:52",
 *       "option_id": "000A",
 *       "option_price": 0,
 *       "prefaid_shipping_fee": "P",
 *       "product_bundle": "F",
 *       "product_bundle_no": 0,
 *       "product_bundle_price": null,
 *       "product_name": "테스트테스트",
 *       "product_no": 21,
 *       "product_price": "3000.00",
 *       "quantity": 1,
 *       "shipping_type": "A",
 *       "shop_no": 1,
 *       "subscription": "F",
 *       "subscription_cycle": null,
 *       "subscription_shipments_cycle_count": 0,
 *       "variant_code": "P000000V000A"
 *     }
 *   ]
 * }
 * ```
 */
interface AddCurrentProductToCartOutput {
  cart: Array<{
    /** 멀티쇼핑몰 번호 */
    shop_no: number;
    /** 분류 번호 */
    category_no: string;
    /** 수량 */
    quantity: number;
    /** 추가입력 옵션 값 */
    additional_option_value: string;
    /** 상품 품목 코드 */
    variant_code: string;
    /** 세트상품 여부 */
    product_bundle: string;
    /** 배송비 선결제 설정 */
    prefaid_shipping_fee: string;
    /** 파일 첨부 옵션 */
    attached_file_option: string;
    /** 담은일자 */
    created_date: string;
    /** 상품 판매가 */
    product_price: string;
    /** 옵션 추가 가격 */
    option_price: number;
    /** 추가 할인 정보 */
    additional_discount_detail?: any;
    /** 세트상품 할인정보 */
    product_bundle_price: any;
    /** 상품 번호 */
    product_no: number;
    /** 상품옵션 아이디 */
    option_id: string;
    /** 세트상품번호 */
    product_bundle_no: number;
    /** 배송 타입 */
    shipping_type: string;
    /** 정기결제 여부 */
    subscription: string;
    /** 정기 배송 주기 수 */
    subscription_shipments_cycle_count: number;
    /** 정기 배송 주기 */
    subscription_cycle: string | null;
    /** 장바구니 일련번호 */
    basket_product_no: number;
    /** 사용자 지정 옵션 */
    additional_option_values: any;
    /** 상품명 */
    product_name: string;
    /** 장바구니에서 선택한 상품인지 여부 */
    checked_products: string;
  }>;
}

/**
 * addCart 메서드 입력 파라미터
 */
interface AddCartInput {
  /** 장바구니 타입 (A0000: 일반, A0001: 무이자) */
  basket_type: string;
  /** 배송비 선결제 설정 (P: 선불, C: 착불) */
  prepaid_shipping_fee: string;
  /**
   * 장바구니에 추가할 상품 리스트
   *
   * @example
   * ```json
   * [
   *     {
   *         'product_no' : 15,
   *         'variants_code' : 'P000000P000A',
   *         'quantity' : 1,
   *         'additional_option_values': [
   *             {
   *                 'key': "item_option_add",
   *                 'title': "사용자 지정 옵션1",
   *                 'type': "text",
   *                 'value': "사용자 지정 값1"
   *             },
   *             {
   *                 'key': "item_option_add",
   *                 'title': "사용자 지정 옵션2",
   *                 'type': "text",
   *                 'value': "사용자 지정 값2"
   *             },
   *         ]
   *     },
   *     {
   *         'product_no' : 77,
   *         'variants_code' : 'P00000CZ000A',
   *         'quantity' : 1,
   *         'options' : [
   *             {
   *                 'option_code' : 'O000000C',
   *                 'value_no' : '11'
   *             },
   *             {
   *                 'option_code' : 'O000000D',
   *                 'value_no' : '19'
   *             }
   *         ]
   *     }
   * ]
   * ```
   */
  product_list: Array<{
    /** 상품번호 */
    product_no: number;
    /** 품목코드 */
    variants_code: string;
    /** 수량 */
    quantity: number;
    /** 사용자 지정 옵션 */
    additional_option_values?: Array<{
      /** 키 (item_option_add - 고정값) */
      key: string;
      /** 사용자 지정 옵션명 */
      title: string;
      /** 타입 (text - 고정값) */
      type: string;
      /** 사용자 지정 옵션값 */
      value: string;
    }>;
    /** 상품 연동형 옵션 */
    options?: Array<{
      /** 옵션 코드 */
      option_code: string;
      /** 상품 연동형 옵션값 */
      value_no: string;
    }>;
  }>;
}

/**
 * @example
 * ```json
 * {
 *   "carts": [
 *     {
 *       "product_no": "11",
 *       "variants_code": "P000000L000A",
 *       "quantity": "1",
 *       "options": null,
 *       "additional_option_values": [
 *         {
 *           "key": "item_option_add",
 *           "title": "사용자 지정 옵션1",
 *           "type": "text",
 *           "value": "사용자 지정 값1"
 *         },
 *         {
 *           "key": "item_option_add",
 *           "title": "사용자 지정 옵션2",
 *           "type": "text",
 *           "value": "사용자 지정 값2"
 *         }
 *       ]
 *     },
 *     {
 *       "product_no": "13",
 *       "variants_code": "P000000N000A",
 *       "quantity": "1",
 *       "options": [
 *         {
 *           "option_code": "O000000D",
 *           "value_no": "7"
 *         },
 *         {
 *           "option_code": "O000000C",
 *           "value_no": "6"
 *         }
 *       ],
 *       "additional_option_values": null
 *     }
 *   ]
 * }
 * ```
 */
interface AddCartOutput {
  carts: Array<{
    /** 상품번호 */
    product_no: string;
    /** 품목코드 */
    variants_code: string;
    /** 수량 */
    quantity: string;
    /** 상품연동형옵션 */
    options: Array<{
      /** 옵션 코드 */
      option_code: string;
      /** 상품 연동형 옵션값 */
      value_no: string;
    }> | null;
    /** 사용자지정옵션 */
    additional_option_values: Array<{
      key: string;
      title: string;
      type: string;
      value: string;
    }> | null;
  }>;
}

/**
 * addBundleProductsCart 메서드 입력 파라미터
 */
interface AddBundleProductsCartInput {
  /** 장바구니 타입 (A0000: 일반, A0001: 무이자) */
  basket_type: string;
  /** 배송비 선결제 설정 (P: 선불, C: 착불) */
  prepaid_shipping_fee: string;
  /**
   * 장바구니에 추가할 세트상품 리스트
   *
   * @example
   * ```json
   * [
   *     {
   *         'product_no' : 37,
   *         'quantity' : 1,
   *         'bundle_product_components': [
   *             {
   *                 'product_no': 36,
   *                 'variants_code': 'P00000BK000A',
   *                 'additional_option_values': [
   *                     {
   *                         'key': "item_option_add",
   *                         'title': "사용자 지정 옵션1",
   *                         'type': "text",
   *                         'value': "사용자 지정 값1"
   *                     },
   *                     {
   *                         'key': "item_option_add",
   *                         'title': "사용자 지정 옵션2",
   *                         'type': "text",
   *                         'value': "사용자 지정 값2"
   *                     }
   *                 ]
   *             },
   *             {
   *                 'product_no': 35,
   *                 'variants_code': 'P00000BJ000A'
   *             }
   *         ]
   *     },
   *     {
   *         'product_no' : 23,
   *         'quantity' : 1,
   *         'bundle_product_components': [
   *             {
   *                 'product_no': 22,
   *                 'variants_code': 'P000000W000B'
   *             },
   *             {
   *                 'product_no': 21,
   *                 'variants_code': 'P000000V000B'
   *             }
   *         ]
   *     }
   * ]
   * ```
   */
  product_list: Array<{
    /** 세트상품 번호 */
    product_no: number;
    /** 수량 */
    quantity: number;
    /** 세트 구성상품 목록 */
    bundle_product_components: Array<{
      /** 구성상품 번호 */
      product_no: number;
      /** 구성상품 품목코드 */
      variants_code: string;
      /** 사용자 지정 옵션 */
      additional_option_values?: Array<{
        /** 키 (item_option_add - 고정값) */
        key: string;
        /** 사용자 지정 옵션명 */
        title: string;
        /** 타입 (text - 고정값) */
        type: string;
        /** 사용자 지정 옵션값 */
        value: string;
      }>;
    }>;
  }>;
}

/**
 * @example
 * ```json
 * {
 *   "carts": [
 *     {
 *       "product_no": 37,
 *       "variants_code": "P00000BL000A",
 *       "quantity": 1,
 *       "bundle_product_components": [
 *         {
 *           "product_no": 36,
 *           "variants_code": "P00000BK000A",
 *           "additional_option_values": [
 *             {
 *               "key": "item_option_add",
 *               "title": "사용자 지정 옵션1",
 *               "type": "text",
 *               "value": "사용자 지정 값1"
 *             },
 *             {
 *               "key": "item_option_add",
 *               "title": "사용자 지정 옵션2",
 *               "type": "text",
 *               "value": "사용자 지정 값2"
 *             }
 *           ]
 *         },
 *         {
 *           "product_no": 35,
 *           "variants_code": "P00000BJ000A"
 *         }
 *       ]
 *     },
 *     {
 *       "product_no": 23,
 *       "quantity": 1,
 *       "variants_code": "P00000BC000A",
 *       "bundle_product_components": [
 *         {
 *           "product_no": 22,
 *           "variants_code": "P000000W000B"
 *         },
 *         {
 *           "product_no": 21,
 *           "variants_code": "P000000V000B"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * ```
 */
interface AddBundleProductsCartOutput {
  carts: Array<{
    /** 상품번호 */
    product_no: number;
    /** 품목코드 */
    variants_code: string;
    /** 수량 */
    quantity: number;
    /** 세트상품 구성품목 목록 */
    bundle_product_components: Array<{
      /** 구성상품 번호 */
      product_no: number;
      /** 구성상품 품목코드 */
      variants_code: string;
      /** 사용자 지정 옵션 */
      additional_option_values?: Array<{
        key: string;
        title: string;
        type: string;
        value: string;
      }>;
    }>;
  }>;
}

interface EmptyCartInput {
  /** 장바구니 배송유형 (국내 - A, 해외 - B) */
  basket_shipping_type: string;
}

/**
 * @example
 * ```json
 * {
 *   "result": "success"
 * }
 * ```
 */
interface EmptyCartOutput {
  /** 장바구니 비우기 결과 */
  result: string;
}

interface DeleteCartItemsInput {
  /** 장바구니 배송유형 (국내 - A, 해외 - B) */
  basket_shipping_type: string;
  /** 삭제할 상품 목록 */
  product_list: Array<{
    /** 상품번호 */
    product_no: number;
    /** 옵션코드 */
    option_id: string;
    /** 장바구니 코드 */
    basket_product_no: number;
  }>;
}

/**
 * @example
 * ```json
 * {
 *   "basket_shipping_type": "A",
 *   "product_list": [
 *     {
 *       "product_no": "12",
 *       "option_id": "000A",
 *       "basket_product_no": "354"
 *     },
 *     {
 *       "product_no": "10",
 *       "option_id": "000A",
 *       "basket_product_no": "372"
 *     },
 *     {
 *       "product_no": "9",
 *       "option_id": "000A",
 *       "basket_product_no": "371"
 *     },
 *     {
 *       "product_no": "16",
 *       "option_id": "R0000000001",
 *       "basket_product_no": "370"
 *     }
 *   ]
 * }
 * ```
 */
interface DeleteCartItemsOutput {
  /** 장바구니 배송유형 (국내 - A, 해외 - B) */
  basket_shipping_type: string;
  /** 삭제된 상품 목록 */
  product_list: Array<{
    /** 상품번호 */
    product_no: string;
    /** 옵션코드 */
    option_id: string;
    /** 장바구니 코드 */
    basket_product_no: string;
  }>;
}

/**
 * getOrderDetailInfo 메서드 입력 파라미터
 */
interface GetOrderDetailInfoInput {
  /** 멀티쇼핑몰 번호 */
  shop_no: string | number;
  /** 주문번호 */
  order_id: string;
}

/**
 * @example
 * ```json
 * {
 *   "orders": {
 *     "shop_no": 1,
 *     "order_id": "20170710-0000013",
 *     "initial_order_amount": {
 *       "order_price_amount": "5000.00",
 *       "shipping_fee": "14000.00",
 *       "points_spent_amount": "0.00",
 *       "credits_spent_amount": "1500.00",
 *       "coupon_discount_price": "1000.00",
 *       "coupon_shipping_fee_amount": "0.00",
 *       "membership_discount_amount": "0.00",
 *       "shipping_fee_discount_amount": "5500.00",
 *       "app_discount_amount": "0.00",
 *       "point_incentive_amount": "0.00",
 *       "total_amount_due": "0.00",
 *       "payment_amount": "30000.00",
 *       "market_other_discount_amount": "0.00"
 *     },
 *     "actual_order_amount": {
 *       "order_price_amount": "5000.00",
 *       "shipping_fee": "14000.00",
 *       "points_spent_amount": "0.00",
 *       "credits_spent_amount": "1500.00",
 *       "coupon_discount_price": "1000.00",
 *       "coupon_shipping_fee_amount": "0.00",
 *       "membership_discount_amount": "0.00",
 *       "shipping_fee_discount_amount": "5500.00",
 *       "app_discount_amount": "0.00",
 *       "point_incentive_amount": "0.00",
 *       "total_amount_due": "0.00",
 *       "payment_amount": "30000.00",
 *       "market_other_discount_amount": "0.00"
 *     },
 *     "payment_method": [
 *       "card",
 *       "cash"
 *     ],
 *     "order_date": "2018-07-04T11:21:35+09:00",
 *     "first_payment_method": "card",
 *     "items": [
 *       {
 *         "shop_no": 1,
 *         "item_no": 2,
 *         "order_item_code": "20170710-0000013-02",
 *         "variant_code": "P000000N000B",
 *         "product_no": 14,
 *         "product_code": "P000000N",
 *         "product_name": "iPhone XS",
 *         "product_price": "30000.00",
 *         "option_price": "0.00",
 *         "additional_discount_price": "0.00",
 *         "coupon_discount_price": "1000.00",
 *         "app_item_discount_amount": "0.00",
 *         "actual_payment_amount": "29000.00",
 *         "quantity": 1,
 *         "tax_amount": 10,
 *         "order_status": "N40",
 *         "ordered_date": "2017-07-10 15:55:51",
 *         "hs_code": ""
 *       }
 *     ]
 *   }
 * }
 * ```
 */
interface GetOrderDetailInfoOutput {
  orders: {
    /** 멀티쇼핑몰 번호 */
    shop_no: number;
    /** 주문번호 */
    order_id: string;
    /** 최초 주문 금액 */
    initial_order_amount: {
      order_price_amount: string;
      shipping_fee: string;
      points_spent_amount: string;
      credits_spent_amount: string;
      coupon_discount_price: string;
      coupon_shipping_fee_amount: string;
      membership_discount_amount: string;
      shipping_fee_discount_amount: string;
      app_discount_amount: string;
      point_incentive_amount: string;
      total_amount_due: string;
      payment_amount: string;
      market_other_discount_amount: string;
    };
    /** 현재 주문 금액 */
    actual_order_amount: {
      order_price_amount: string;
      shipping_fee: string;
      points_spent_amount: string;
      credits_spent_amount: string;
      coupon_discount_price: string;
      coupon_shipping_fee_amount: string;
      membership_discount_amount: string;
      shipping_fee_discount_amount: string;
      app_discount_amount: string;
      point_incentive_amount: string;
      total_amount_due: string;
      payment_amount: string;
      market_other_discount_amount: string;
    };
    /** 결제수단 코드 */
    payment_method: string[];
    /** 주문일 */
    order_date: string;
    /** 최초 결제수단 코드 */
    first_payment_method: string;
    /** 주문의 품주 정보 */
    items: Array<{
      shop_no: number;
      item_no: number;
      order_item_code: string;
      variant_code: string;
      product_no: number;
      product_code: string;
      product_name: string;
      product_price: string;
      option_price: string;
      additional_discount_price: string;
      coupon_discount_price: string;
      app_item_discount_amount: string;
      actual_payment_amount: string;
      quantity: number;
      tax_amount: number;
      order_status: string;
      ordered_date: string;
      hs_code: string;
    }>;
  };
}

/**
 * getClaimableItemList 메서드 입력 파라미터
 */
interface GetClaimableItemListInput {
  /** 주문번호 */
  order_id: string;
  /** 취소/교환/반품 타입 (C/E/R) */
  claim_type: "C" | "E" | "R";
}

/**
 * @example
 * ```json
 * {
 *   "items": [
 *     {
 *       "order_id": "20220426-0000013",
 *       "item_no": 101,
 *       "order_item_code": "20220426-0000013-01",
 *       "variant_code": "P000000J000A",
 *       "product_no": 9,
 *       "product_code": "P000000J",
 *       "custom_product_code": "AAA",
 *       "custom_variant_code": "AAA",
 *       "option_id": "000A",
 *       "quantity": 1,
 *       "price": 5000,
 *       "order_status": "N30",
 *       "supplier_code": "S0000000",
 *       "supplier_name": "Apple"
 *     },
 *     {
 *       "order_id": "20220426-0000013",
 *       "item_no": 102,
 *       "order_item_code": "20220426-0000013-02",
 *       "variant_code": "P000000K000A",
 *       "product_no": 10,
 *       "product_code": "P000000K",
 *       "custom_product_code": "BBB",
 *       "custom_variant_code": "BBB",
 *       "option_id": "000A",
 *       "quantity": 1,
 *       "price": 10000,
 *       "order_status": "N30",
 *       "supplier_code": "S0000000",
 *       "supplier_name": "Apple"
 *     }
 *   ]
 * }
 * ```
 */
interface GetClaimableItemListOutput {
  items: Array<{
    /** 주문번호 */
    order_id: string;
    /** 품주번호 */
    item_no: number;
    /** 품주코드 */
    order_item_code: string;
    /** 품목코드 */
    variant_code: string;
    /** 상품번호 */
    product_no: number;
    /** 상품코드 */
    product_code: string;
    /** 자체상품코드 */
    custom_product_code: string;
    /** 자체품목코드 */
    custom_variant_code: string;
    /** 옵션 아이디 */
    option_id: string;
    /** 수량 (주문당시수량) */
    quantity: number;
    /** 판매가 (수량 1개에 대한 금액) */
    price: number;
    /** 주문상태 */
    order_status: string;
    /** 공급사 코드 */
    supplier_code: string;
    /** 공급사명 */
    supplier_name: string;
  }>;
}
