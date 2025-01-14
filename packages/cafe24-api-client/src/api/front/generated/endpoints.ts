/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-types */
import {
  Cafe24Boolean,
  Cafe24Date,
  Cafe24Enum,
  Cafe24Datetime,
} from "cafe24-types";
import * as base from "../../client";

export type Endpoints = ReturnType<typeof Endpoints>;
export const Endpoints = (self: base.Client) => ({
  /**
   * @description
   *
   *
   * 카테고리 상품(Categories products)은 카테고리의 상품의 표시 순서, 고정 여부, 진열 영역 등을 조회, 수정할 수 있는 관계형 리소스입니다.
   *
   * @see https://developers.cafe24.com/docs/api/front/#categories__products
   */
  categoriesproducts: {
    /**
     * @description
     * 특정 카테고리에 배정된 상품을 목록으로 조회할 수 있습니다.
     * 상품은 동시에 여러 카테고리에 배정될 수 있습니다.
     * 상품번호, 표시 순서, 판매 여부 등을 조회할 수 있습니다.
     *
     * Scopes:
     * - mall.read_product
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-list-of-products-by-category
     */
    retrieveAListOfProductsByCategory(
      request: RetrieveAListOfProductsByCategoryRequest,
      options?: base.RequestOptions<RetrieveAListOfProductsByCategoryRequest>,
    ): Promise<RetrieveAListOfProductsByCategoryResponse> {
      return self.createRequest(
        "GET",
        "/api/v2/categories/{category_no}/products",
        request,
        options,
      );
    },
    /**
     * @description
     * 특정 카테고리에 배정된 상품의 수를 조회할 수 있습니다.
     *
     * Scopes:
     * - mall.read_product
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-count-of-products-by-category
     */
    retrieveACountOfProductsByCategory(
      request: RetrieveACountOfProductsByCategoryRequest,
      options?: base.RequestOptions<RetrieveACountOfProductsByCategoryRequest>,
    ): Promise<RetrieveACountOfProductsByCategoryResponse> {
      return self.createRequest(
        "GET",
        "/api/v2/categories/{category_no}/products/count",
        request,
        options,
      );
    },
  },
  /**
   * @description
   *
   *
   * 메인분류 상품(Mains products)은 상품 메인진열의 순서에 관한 메인분류의 관계형 리소스입니다
   *
   * @see https://developers.cafe24.com/docs/api/front/#mains__products
   */
  mainsproducts: {
    /**
     * @description
     * 특정 메인분류에 배정된 상품을 목록으로 조회할 수 있습니다.
     * 상품번호, 상품명, 고정 여부 등을 조회할 수 있습니다.
     * 상품은 동시에 여러 메인분류에 배정될 수 있습니다.
     *
     * Scopes:
     * - mall.read_product
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-list-of-products-in-main-category
     */
    retrieveAListOfProductsInMainCategory(
      request: RetrieveAListOfProductsInMainCategoryRequest,
      options?: base.RequestOptions<RetrieveAListOfProductsInMainCategoryRequest>,
    ): Promise<RetrieveAListOfProductsInMainCategoryResponse> {
      return self.createRequest(
        "GET",
        "/api/v2/mains/{display_group}/products",
        request,
        options,
      );
    },
  },
  /**
   * @description
   *
   *
   * 상품(Products)은 쇼핑몰에서 거래되는 제품의 기본 단위입니다.
   * 컬러, 사이즈 같은 옵션이 있을 경우 각각의 옵션이 상품 하위의 품목으로 생성될 수 있습니다.
   * 상품은 상품명, 판매가, 요약설명, 상품 검색어 등의 정보를 포함하고 있습니다.
   * 상품은 품목, 상품 메모, SEO 등 여러 하위 리소스들을 갖고 있습니다.
   *
   * @see https://developers.cafe24.com/docs/api/front/#products
   */
  products: {
    /**
     * @description
     * 쇼핑몰에 생성되어 있는 상품을 목록으로 조회할 수 있습니다.
     * 상품코드, 상품명, 판매가 등을 조회할 수 있습니다.
     * 상품이 5,000개가 넘을 경우에는 offset 으로는 조회할 수 없으므로 since_product_no 파라메터를 활용해주시면 조회할 수 있습니다.
     *
     * Scopes:
     * - mall.read_product
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-list-of-products
     */
    retrieveAListOfProducts(
      request: RetrieveAListOfProductsRequest,
      options?: base.RequestOptions<RetrieveAListOfProductsRequest>,
    ): Promise<RetrieveAListOfProductsResponse> {
      return self.createRequest("GET", "/api/v2/products", request, options);
    },
    /**
     * @description
     * 쇼핑몰에 등록된 전체 상품의 수를 조회할 수 있습니다.
     *
     * Scopes:
     * - mall.read_product
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-count-of-products
     */
    retrieveACountOfProducts(
      request: RetrieveACountOfProductsRequest,
      options?: base.RequestOptions<RetrieveACountOfProductsRequest>,
    ): Promise<RetrieveACountOfProductsResponse> {
      return self.createRequest(
        "GET",
        "/api/v2/products/count",
        request,
        options,
      );
    },
    /**
     * @description
     * 쇼핑몰에 생성되어 있는 상품을 조회할 수 있습니다.
     * 상품코드, 자체상품 코드, 상품명, 상품 판매가 등을 조회할 수 있습니다.
     *
     * Scopes:
     * - mall.read_product
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-product-resource
     */
    retrieveAProductResource(
      request: RetrieveAProductResourceRequest,
      options?: base.RequestOptions<RetrieveAProductResourceRequest>,
    ): Promise<RetrieveAProductResourceResponse> {
      return self.createRequest(
        "GET",
        "/api/v2/products/{product_no}",
        request,
        options,
      );
    },
  },
  /**
   * @description
   *
   *
   * 꾸미기 이미지(Decorationimages)는 쇼핑몰에 진열된 상품에 등록되어있는 꾸미기 이미지를 조회할 수 있습니다.
   * 꾸미기 이미지는 하위 리소스로서 상품(Products) 하위에서만 사용할 수 있습니다.
   *
   * @see https://developers.cafe24.com/docs/api/front/#products__decorationimages
   */
  productsdecorationimages: {
    /**
     * @description
     * 특정 상품에 등록되어 있는 꾸미기 이미지를 목록으로 조회합니다.
     *
     * Scopes:
     * - mall.read_product
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-list-of-product-decoration-images
     */
    retrieveAListOfProductDecorationImages(
      request: RetrieveAListOfProductDecorationImagesRequest,
      options?: base.RequestOptions<RetrieveAListOfProductDecorationImagesRequest>,
    ): Promise<RetrieveAListOfProductDecorationImagesResponse> {
      return self.createRequest(
        "GET",
        "/api/v2/products/{product_no}/decorationimages",
        request,
        options,
      );
    },
  },
  /**
   * @description
   *
   *
   * 상품 할인가(Discountprice)는 상품의 할인가격을 표시하는 리소스입니다. 혜택(Benefits)이 적용된 상품의 경우 상품의 할인가를 조회할 수 있습니다.
   * 상품 할인가는 하위 리소스로서 상품(Products) 하위에서만 사용가능하며, 상품 목록 조회시 Embed 파라메터로 호출가능합니다.
   *
   * @see https://developers.cafe24.com/docs/api/front/#products__discountprice
   */
  productsdiscountprice: {
    /**
     * @description
     * 상품번호를 이용하여 해당 상품의 할인가를 조회합니다.
     * PC 할인 판매가, 모바일 할인 판매가를 확인할 수 있습니다.
     *
     * Scopes:
     * - mall.read_product
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-product-discounted-price
     */
    retrieveAProductDiscountedPrice(
      request: RetrieveAProductDiscountedPriceRequest,
      options?: base.RequestOptions<RetrieveAProductDiscountedPriceRequest>,
    ): Promise<RetrieveAProductDiscountedPriceResponse> {
      return self.createRequest(
        "GET",
        "/api/v2/products/{product_no}/discountprice",
        request,
        options,
      );
    },
  },
  /**
   * @description
   *
   *
   * 상품 조회수(Hits)는 상품을 쇼핑몰 고객들이 얼마나 조회했는지를 나타내는 지표입니다.
   * 상품 조회수를 확인하면, 고객들이 어떤 상품을 가장 많이 조회하는지 알 수 있습니다.
   * 상품 조회수는 하위 리소스로서 상품(Products) 하위에서만 사용할 수 있습니다.
   *
   * @see https://developers.cafe24.com/docs/api/front/#products__hits
   */
  productshits: {
    /**
     * @description
     * 상품번호를 이용하여 해당 상품의 조회수를 조회합니다.
     *
     * Scopes:
     * - mall.read_product
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-count-of-product-views
     */
    retrieveACountOfProductViews(
      request: RetrieveACountOfProductViewsRequest,
      options?: base.RequestOptions<RetrieveACountOfProductViewsRequest>,
    ): Promise<RetrieveACountOfProductViewsResponse> {
      return self.createRequest(
        "GET",
        "/api/v2/products/{product_no}/hits/count",
        request,
        options,
      );
    },
  },
  /**
   * @description
   *
   *
   * 상품 아이콘은 상품을 강조하기 위해 상품 옆에 추가할 수 있는 작은 이미지들입니다. 진열된 상품에 할인 정보, "매진 임박" 등의 메시지를 추가하여 상품을 강조할 수 있습니다.
   * 상품 아이콘는 하위 리소스로서 상품(Products) 하위에서만 사용할 수 있습니다.
   *
   * @see https://developers.cafe24.com/docs/api/front/#products__icons
   */
  productsicons: {
    /**
     * Scopes:
     * - mall.read_product
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-list-of-product-icons
     */
    retrieveAListOfProductIcons(
      request: RetrieveAListOfProductIconsRequest,
      options?: base.RequestOptions<RetrieveAListOfProductIconsRequest>,
    ): Promise<RetrieveAListOfProductIconsResponse> {
      return self.createRequest(
        "GET",
        "/api/v2/products/{product_no}/icons",
        request,
        options,
      );
    },
  },
  /**
   * @description
   *
   *
   * 상품 옵션(Products options)은 상품이 다른 색상이나 사이즈를 갖고 있는 경우 이를 각각의 옵션으로 구현할 수 있도록 하는 기능입니다.
   * 옵션은 색상, 사이즈 같은 옵션명(option_name)과 색상 중 빨간색, 노란색과 같은 옵션값(option_value)으로 구성되어있습니다.
   * 상품에 옵션 등록시 옵션을 기반으로 품목(variants)이 생성됩니다.
   * 옵션은 하위 리소스로서 상품(Products) 하위에서만 사용할 수 있습니다.
   * 옵션의 목록조회, 생성, 수정, 삭제가 가능합니다.
   *
   * @see https://developers.cafe24.com/docs/api/front/#products__options
   */
  productsoptions: {
    /**
     * @description
     * 상품의 옵션을 목록으로 조회할 수 있습니다.
     *
     * Scopes:
     * - mall.read_product
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-list-of-product-options
     */
    retrieveAListOfProductOptions(
      request: RetrieveAListOfProductOptionsRequest,
      options?: base.RequestOptions<RetrieveAListOfProductOptionsRequest>,
    ): Promise<RetrieveAListOfProductOptionsResponse> {
      return self.createRequest(
        "GET",
        "/api/v2/products/{product_no}/options",
        request,
        options,
      );
    },
  },
  /**
   * @description
   *
   *
   * 상품의 품목(Products variants)은 쇼핑몰에서 판매되는 상품의 기본 단위입니다.
   * 쇼핑몰은 일반적으로 고객에게 다양한 선택권을 제공하기 위해 같은 상품이지만 사이즈가 다르거나, 혹은 색상이 다른 품목들을 판매합니다.
   * 품목의 조회, 등록, 수정 또는 삭제를 할 수 있습니다.
   *
   * @see https://developers.cafe24.com/docs/api/front/#products__variants
   */
  productsvariants: {
    /**
     * @description
     * 상품의 품목을 목록으로 조회할 수 있습니다.
     * 상품 품목 코드, 진열상태, 판매상태 등을 조회할 수 있습니다.
     *
     * Scopes:
     * - mall.read_product
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-list-of-product-variants
     */
    retrieveAListOfProductVariants(
      request: RetrieveAListOfProductVariantsRequest,
      options?: base.RequestOptions<RetrieveAListOfProductVariantsRequest>,
    ): Promise<RetrieveAListOfProductVariantsResponse> {
      return self.createRequest(
        "GET",
        "/api/v2/products/{product_no}/variants",
        request,
        options,
      );
    },
    /**
     * @description
     * 상품의 특정 품목을 조회할 수 있습니다.
     * 옵션정보, 자체 품목 코드, 진열 및 판매상태 등을 조회할 수 있습니다.
     *
     * Scopes:
     * - mall.read_product
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-product-variant
     */
    retrieveAProductVariant(
      request: RetrieveAProductVariantRequest,
      options?: base.RequestOptions<RetrieveAProductVariantRequest>,
    ): Promise<RetrieveAProductVariantResponse> {
      return self.createRequest(
        "GET",
        "/api/v2/products/{product_no}/variants/{variant_code}",
        request,
        options,
      );
    },
  },
  /**
   * @description
   *
   *
   * 재고(Inventories)는 판매 가능한 해당 품목의 수량을 의미합니다. 재고는 품목(Variants)별로 존재하며 해당 재고 이상 품목이 판매되면 해당 상품은 품절 상태가 됩니다.
   *
   * @see https://developers.cafe24.com/docs/api/front/#products__variants__inventories
   */
  productsvariantsinventories: {
    /**
     * @description
     * 상품의 품목의 재고를 조회할 수 있습니다.
     *
     * Scopes:
     * - mall.read_product
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-inventory-details-of-a-product-variant
     */
    retrieveInventoryDetailsOfAProductVariant(
      request: RetrieveInventoryDetailsOfAProductVariantRequest,
      options?: base.RequestOptions<RetrieveInventoryDetailsOfAProductVariantRequest>,
    ): Promise<RetrieveInventoryDetailsOfAProductVariantResponse> {
      return self.createRequest(
        "GET",
        "/api/v2/products/{product_no}/variants/{variant_code}/inventories",
        request,
        options,
      );
    },
  },
  /**
   * @description
   * 상품상세정보(Productsdetail)는 상품 상세페이지에 노출되는 항목과 그 값을 조회할 수 있는 기능입니다.
   *
   * @see https://developers.cafe24.com/docs/api/front/#productsdetail
   */
  productsdetail: {
    /**
     * @description
     * 상품의 상세페이지에 노출되는 항목과 그 값을 조회할 수 있습니다.
     * 상품명, 제조사, 이미지 등을 조회할 수 있습니다.
     *
     * Scopes:
     * - mall.read_product
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-the-details-of-a-product
     */
    retrieveTheDetailsOfAProduct(
      request: RetrieveTheDetailsOfAProductRequest,
      options?: base.RequestOptions<RetrieveTheDetailsOfAProductRequest>,
    ): Promise<RetrieveTheDetailsOfAProductResponse> {
      return self.createRequest(
        "GET",
        "/api/v2/productsdetail/{product_no}",
        request,
        options,
      );
    },
  },
  /**
   * @description
   *
   *
   * 상품분류(Categories)는 쇼핑몰에 노출할 카테고리를 설정하는 기능입니다.
   * 상품분류는 대분류 하위에 중분류, 소분류, 상세 분류까지 세분화해서 설정할 수 있습니다.
   * 상품분류 리소스를 사용하면 쇼핑몰의 분류들을 조회하거나 분류를 생성, 수정, 삭제할 수 있습니다.
   *
   * @see https://developers.cafe24.com/docs/api/front/#categories
   */
  categories: {
    /**
     * @description
     * 쇼핑몰에 등록된 분류를 목록으로 조회합니다.
     * 분류의 분류번호와 분류명 등을 확인할 수 있습니다.
     *
     * Scopes:
     * - mall.read_category
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-list-of-product-categories
     */
    retrieveAListOfProductCategories(
      request: RetrieveAListOfProductCategoriesRequest,
      options?: base.RequestOptions<RetrieveAListOfProductCategoriesRequest>,
    ): Promise<RetrieveAListOfProductCategoriesResponse> {
      return self.createRequest("GET", "/api/v2/categories", request, options);
    },
    /**
     * @description
     * 쇼핑몰에 등록된 분류의 수를 조회합니다.
     *
     * Scopes:
     * - mall.read_category
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-count-of-product-categories
     */
    retrieveACountOfProductCategories(
      request: RetrieveACountOfProductCategoriesRequest,
      options?: base.RequestOptions<RetrieveACountOfProductCategoriesRequest>,
    ): Promise<RetrieveACountOfProductCategoriesResponse> {
      return self.createRequest(
        "GET",
        "/api/v2/categories/count",
        request,
        options,
      );
    },
    /**
     * @description
     * 분류번호를 이용하여 해당 분류에 대해 상세조회합니다.
     * 분류 Depth, 부모 분류 번호, 분류명 등을 조회할 수 있습니다.
     *
     * Scopes:
     * - mall.read_category
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-product-category
     */
    retrieveAProductCategory(
      request: RetrieveAProductCategoryRequest,
      options?: base.RequestOptions<RetrieveAProductCategoryRequest>,
    ): Promise<RetrieveAProductCategoryResponse> {
      return self.createRequest(
        "GET",
        "/api/v2/categories/{category_no}",
        request,
        options,
      );
    },
  },
  /**
   * @description
   * 장바구니(Carts)는 상품을 주문하기 전 한번에 주문할 수 있도록 상품을 미리 담아두는 기능입니다.
   * 장바구니 리소스에서는 Front API를 사용하여 특정 상품을 장바구니에 담을 수 있고 Admin API에서는 특정 회원의 장바구니를 조회할 수 있습니다.
   *
   * @see https://developers.cafe24.com/docs/api/front/#carts
   */
  carts: {
    /**
     * @description
     * 특정 상품을 장바구니에 담을 수 있습니다.
     * 해당 API는 로그인 세션(브라우저 세션)을 기반으로 동작합니다.
     *
     * Scopes:
     * - mall.write_personal
     *
     * @see https://developers.cafe24.com/docs/api/front/#create-a-shopping-cart
     */
    createAShoppingCart(
      request: CreateAShoppingCartRequest,
      options?: base.RequestOptions<CreateAShoppingCartRequest>,
    ): Promise<CreateAShoppingCartResponse> {
      return self.createRequest("POST", "/api/v2/carts", request, options);
    },
  },
  /**
   * @description
   *
   *
   * 상품 장바구니(Products carts)는 특정 상품을 장바구니에 담은 회원과 그 숫자를 조회할 수 있는 리소스입니다.
   * 특정 상품을 장바구니에 담은 회원의 ID, 담은날짜와 회원의 수 정보를 조회할 수 있습니다.
   *
   * @see https://developers.cafe24.com/docs/api/front/#products__carts
   */
  productscarts: {
    /**
     * @description
     * 특정 상품을 장바구니에 담은 회원의 수를 확인할 수 있습니다.
     *
     * Scopes:
     * - mall.read_personal
     *
     * @see https://developers.cafe24.com/docs/api/front/#retrieve-a-count-of-carts-containing-a-product
     */
    retrieveACountOfCartsContainingAProduct(
      request: RetrieveACountOfCartsContainingAProductRequest,
      options?: base.RequestOptions<RetrieveACountOfCartsContainingAProductRequest>,
    ): Promise<RetrieveACountOfCartsContainingAProductResponse> {
      return self.createRequest(
        "GET",
        "/api/v2/products/{product_no}/carts/count",
        request,
        options,
      );
    },
  },
});

interface RetrieveAListOfProductsByCategoryRequest {
  /**
   * @description
   * 모바일 설정값 조회 여부
   *
   * T : 사용함
   * F : 사용안함
   */
  mobile?: any;
  /**
   * @description
   * 멀티쇼핑몰 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 분류 번호
   */
  categoryNo: any;
  /**
   * @description
   * 상세 상품분류
   *
   * 1 : 일반상품
   * 2 : 추천상품
   * 3 : 신상품
   *
   * @constraints
   * 최소: [1]~최대: [3]
   */
  displayGroup: any;
  /**
   * @description
   * 조회결과 최대건수
   *
   *
   * @constraints
   * 최소: [1]~최대: [200]
   */
  limit?: any;
  /**
   * @description
   * 조회결과 시작위치
   *
   *
   * @constraints
   * 최대값: [8000]
   */
  offset?: any;
}

interface RetrieveACountOfProductsByCategoryRequest {
  /**
   * @description
   * 멀티쇼핑몰 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 분류 번호
   */
  categoryNo: any;
  /**
   * @description
   * 상세 상품분류
   *
   * 1 : 일반상품
   * 2 : 추천상품
   * 3 : 신상품
   *
   * @constraints
   * 최소: [1]~최대: [3]
   */
  displayGroup: any;
}

interface RetrieveAListOfProductsInMainCategoryRequest {
  /**
   * @description
   * 모바일 설정값 조회 여부
   *
   * T : 사용함
   * F : 사용안함
   */
  mobile?: any;
  /**
   * @description
   * 멀티쇼핑몰 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 메인분류 번호
   */
  displayGroup: any;
  /**
   * @description
   * 조회결과 최대건수
   *
   *
   * @constraints
   * 최소: [1]~최대: [200]
   */
  limit?: any;
  /**
   * @description
   * 조회결과 시작위치
   *
   *
   * @constraints
   * 최대값: [8000]
   */
  offset?: any;
}

interface RetrieveAListOfProductsRequest {
  /**
   * @description
   * 상품 할인판매가 리소스
   */
  channeldiscountprices?: any;
  /**
   * @description
   * 상품 할인판매가 리소스
   */
  discountprice?: any;
  /**
   * @description
   * 꾸미기 이미지 리소스
   */
  decorationimages?: any;
  /**
   * @description
   * 혜택 리소스
   */
  benefits?: any;
  /**
   * @description
   * 상품 옵션 리소스
   */
  options?: any;
  /**
   * @description
   * 품목 리소스
   *
   * 상품당 품목정보를 100개까지 조회할 수 있음.
   * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
   */
  variants?: any;
  /**
   * @description
   * 추가 이미지 리소스
   */
  additionalimages?: any;
  /**
   * @description
   * 상품 조회수 리소스
   */
  hits?: any;
  /**
   * @description
   * 멀티쇼핑몰 번호
   *
   * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
   *
   */
  shopNo?: any;
  /**
   * @description
   * 상품번호
   *
   * 조회하고자 하는 상품의 번호
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  productNo?: any;
  /**
   * @description
   * 진열상태
   *
   * 진열 혹은 미진열 되어있는 상품 검색.
   */
  display?: any;
  /**
   * @description
   * 판매상태
   *
   * 판매중이거나 판매안함 상태의 상품 검색.
   */
  selling?: any;
  /**
   * @description
   * 상품명
   *
   * 검색어를 상품명에 포함하고 있는 상품 검색(대소문자 구분 없음)
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  productName?: any;
  /**
   * @description
   * 상품코드
   *
   * 검색어를 상품코드에 포함하고 있는 상품 검색(대소문자 구분 필요)
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  productCode?: any;
  /**
   * @description
   * 브랜드 코드
   *
   * 브랜드 코드가 일치하는 상품 검색
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  brandCode?: any;
  /**
   * @description
   * 제조사 코드
   *
   * 제조사 코드가 일치하는 상품 검색
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  manufacturerCode?: any;
  /**
   * @description
   * 공급사 코드
   *
   * 공급사 코드가 일치하는 상품 검색
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  supplierCode?: any;
  /**
   * @description
   * 트렌드 코드
   *
   * 트렌드 코드가 일치하는 상품 검색
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  trendCode?: any;
  /**
   * @description
   * 상품 검색어
   *
   * 검색어를 상품 검색어 또는 태그에 포함하고 있는 상품 검색(대소문자 구분 없음)
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  productTag?: any;
  /**
   * @description
   * 자체상품 코드
   *
   * 검색어를 자체상품코드에 포함하고 있는 상품 검색(대소문자 구분 필요)
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  customProductCode?: any;
  /**
   * @description
   * 자체 품목 코드
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  customVariantCode?: any;
  /**
   * @description
   * 상품 판매가 검색 최소값
   *
   * 판매가가 해당 범위 이상인 상품 검색
   */
  priceMin?: any;
  /**
   * @description
   * 상품 판매가 검색 최대값
   *
   * 판매가가 해당 범위 이하인 상품 검색
   */
  priceMax?: any;
  /**
   * @description
   * 상품 소비자가 검색 최소값
   *
   * 소비자가가 해당 범위 이상인 상품 검색
   *
   * @constraints
   * 최소값: [0],최대값: [2147483647]
   */
  retailPriceMin?: any;
  /**
   * @description
   * 상품 소비자가 검색 최대값
   *
   * 소비자가가 해당 범위 이하인 상품 검색
   *
   * @constraints
   * 최소값: [0],최대값: [2147483647]
   */
  retailPriceMax?: any;
  /**
   * @description
   * 상품 공급가 검색 최소값
   *
   * 공급가가 해당 범위 이하인 상품 검색
   */
  supplyPriceMin?: any;
  /**
   * @description
   * 상품 공급가 검색 최대값
   *
   * 공급가가 해당 범위 이상인 상품 검색
   */
  supplyPriceMax?: any;
  /**
   * @description
   * 상품 등록일 검색 시작일
   *
   * 상품 등록일이 해당 날짜 이후인 상품 검색.
   *
   * 등록일 검색 종료일과 같이 사용해야함.
   *
   * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색.
   */
  createdStartDate?: any;
  /**
   * @description
   * 상품 등록일 검색 종료일
   *
   * 상품 등록일이 해당 날짜 이전인 상품 검색.
   *
   * 등록일 검색 시작일과 같이 사용해야함.
   *
   * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색.
   */
  createdEndDate?: any;
  /**
   * @description
   * 상품 수정일 검색 시작일
   *
   * 상품 수정일이 해당 날짜 이후인 상품 검색.
   *
   * 수정일 검색 종료일과 같이 사용해야함.
   *
   * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색.
   */
  updatedStartDate?: any;
  /**
   * @description
   * 상품 수정일 검색 종료일
   *
   * 상품 수정일이 해당 날짜 이전인 상품 검색.
   *
   * 수정일 검색 시작일과 같이 사용해야함.
   *
   * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색.
   */
  updatedEndDate?: any;
  /**
   * @description
   * 분류 번호
   *
   * 특정 분류에 진열된 상품 검색.
   */
  category?: any;
  /**
   * @description
   * 영문 상품명
   *
   * 검색어를 영문 상품명에 포함하고 있는 상품 검색(대소문자 구분 없음)
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  engProductName?: any;
  /**
   * @description
   * 공급사 상품명
   *
   * 검색어를 공급사 상품명에 포함하고 있는 상품 검색(대소문자 구분 없음)
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  supplyProductName?: any;
  /**
   * @description
   * 상품명(관리용)
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  internalProductName?: any;
  /**
   * @description
   * 모델명
   *
   * 검색어를 모델명에 포함하고 있는 상품 검색(대소문자 구분 없음)
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  modelName?: any;
  /**
   * @description
   * 상품 상태
   *
   * 특정 상품 상태 검색
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  productCondition?: any;
  /**
   * @description
   * 원산지정보
   *
   * 원산지가 "기타(1800)"일 경우 원산지로 입력 가능한 정보.
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  originPlaceValue?: any;
  /**
   * @description
   * 재고수량 검색 최대값
   *
   * 재고가 해당 값 이하로 남아있는 상품 검색.
   *
   * 품목을 여러개 갖고 있는 상품의 경우 해당 조건에 해당하는 품목이 하나라도 있을 경우 검색함.
   */
  stockQuantityMax?: any;
  /**
   * @description
   * 재고수량 검색 최소값
   *
   * 재고가 해당 값 이상 남아있는 상품 검색.
   *
   * 품목을 여러개 갖고 있는 상품의 경우 해당 조건에 해당하는 품목이 하나라도 있을 경우 검색함.
   */
  stockQuantityMin?: any;
  /**
   * @description
   * 안전재고수량 검색 최대값
   */
  stockSafetyMax?: any;
  /**
   * @description
   * 안전재고수량 검색 최소값
   */
  stockSafetyMin?: any;
  /**
   * @description
   * 상품 중량
   *
   * 해당 중량의 상품 검색.
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  productWeight?: any;
  /**
   * @description
   * 자체분류
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  classificationCode?: any;
  /**
   * @description
   * 재고 사용여부
   *
   * 해당 상품 품목이 재고를 사용하고 있는지 여부
   *
   * T : 사용함
   * F : 사용안함
   */
  useInventory?: any;
  /**
   * @description
   * 미적용 분류 검색
   *
   * 분류가 등록되지 않은 상품에 대하여 검색함.
   *
   * T: 미적용 분류 검색
   */
  categoryUnapplied?: any;
  /**
   * @description
   * 하위분류 포함 검색
   *
   * 하위분류에 등록된 상품을 포함하여 검색함.
   *
   * T: 포함
   */
  includeSubCategory?: any;
  /**
   * @description
   * 추가항목 검색조건 키
   *
   * 추가항목에 대하여 검색하기 위한 키. 검색을 위해선 key 와 value 모두 필요함.
   */
  additionalInformationKey?: any;
  /**
   * @description
   * 추가항목 검색조건 값
   *
   * 추가항목에 대하여 검색하기 위한 키의 값. 검색을 위해선 key 와 value 모두 필요함.
   */
  additionalInformationValue?: any;
  /**
   * @description
   * 승인상태 검색
   *
   * N : 승인요청 (신규상품) 상태값
   * E : 승인요청 (상품수정) 상태값
   * C : 승인완료 상태값
   * R : 승인거절 상태값
   * I : 검수진행중 상태값
   */
  approveStatus?: any;
  /**
   * @description
   * 해당 상품번호 이후 검색
   *
   * 특정 상품번호 이후의 상품들을 검색. 해당 검색조건 사용시 offset과 관계 없이 모든 상품을 검색할 수 있다.
   *
   * ※ 해당 검색 조건 사용시 다음 파라메터로는 사용할 수 없다.
   *
   * product_no
   * sort
   * order
   * offset
   *
   * @constraints
   * 최소값: [0],최대값: [2147483647]
   */
  sinceProductNo?: any;
  /**
   * @description
   * 세트상품 여부
   *
   * T : 사용함
   * F : 사용안함
   */
  productBundle?: any;
  /**
   * @description
   * 옵션 구성방식
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   *
   * C : 조합 일체선택형
   * S : 조합 분리선택형
   * E : 상품 연동형
   * F : 독립 선택형
   */
  optionType?: any;
  /**
   * @description
   * 마켓 연동 여부
   *
   * T : 사용함
   * F : 사용안함
   */
  marketSync?: any;
  /**
   * @description
   * 정렬 순서 값
   *
   * created_date : 등록일
   * updated_date : 수정일
   * product_name : 상품명
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * asc : 순차정렬
   * desc : 역순 정렬
   */
  order?: any;
  /**
   * @description
   * 조회결과 시작위치
   *
   * 조회결과 시작위치
   *
   *
   * @constraints
   * 최대값: [5000]
   */
  offset?: any;
  /**
   * @description
   * 조회결과 최대건수
   *
   * 조회하고자 하는 최대 건수를 지정할 수 있음.
   * 예) 10 입력시 10건만 표시함.
   *
   *
   * @constraints
   * 최소: [1]~최대: [100]
   */
  limit?: any;
}

interface RetrieveACountOfProductsRequest {
  /**
   * @description
   * 멀티쇼핑몰 번호
   *
   * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
   *
   */
  shopNo?: any;
  /**
   * @description
   * 상품번호
   *
   * 조회하고자 하는 상품의 번호
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  productNo?: any;
  /**
   * @description
   * 진열상태
   *
   * 진열 혹은 미진열 되어있는 상품 검색.
   */
  display?: any;
  /**
   * @description
   * 판매상태
   *
   * 판매중이거나 판매안함 상태의 상품 검색.
   */
  selling?: any;
  /**
   * @description
   * 상품명
   *
   * 검색어를 상품명에 포함하고 있는 상품 검색(대소문자 구분 없음)
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  productName?: any;
  /**
   * @description
   * 상품코드
   *
   * 상품 코드
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  productCode?: any;
  /**
   * @description
   * 브랜드 코드
   *
   * 브랜드 코드가 일치하는 상품 검색
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  brandCode?: any;
  /**
   * @description
   * 제조사 코드
   *
   * 제조사 코드가 일치하는 상품 검색
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  manufacturerCode?: any;
  /**
   * @description
   * 공급사 코드
   *
   * 공급사 코드가 일치하는 상품 검색
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  supplierCode?: any;
  /**
   * @description
   * 트렌드 코드
   *
   * 트렌드 코드가 일치하는 상품 검색
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  trendCode?: any;
  /**
   * @description
   * 상품 검색어
   *
   * 검색어를 상품 검색어 또는 태그에 포함하고 있는 상품 검색(대소문자 구분 없음)
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  productTag?: any;
  /**
   * @description
   * 자체상품 코드
   *
   * 검색어를 자체상품코드에 포함하고 있는 상품 검색(대소문자 구분 필요)
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  customProductCode?: any;
  /**
   * @description
   * 자체 품목 코드
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  customVariantCode?: any;
  /**
   * @description
   * 상품 판매가 검색 최소값
   *
   * 판매가가 해당 범위 이상인 상품 검색
   */
  priceMin?: any;
  /**
   * @description
   * 상품 판매가 검색 최대값
   *
   * 판매가가 해당 범위 이하인 상품 검색
   */
  priceMax?: any;
  /**
   * @description
   * 상품 소비자가 검색 최소값
   *
   * 소비자가가 해당 범위 이상인 상품 검색
   *
   * @constraints
   * 최소값: [0],최대값: [2147483647]
   */
  retailPriceMin?: any;
  /**
   * @description
   * 상품 소비자가 검색 최대값
   *
   * 소비자가가 해당 범위 이하인 상품 검색
   *
   * @constraints
   * 최소값: [0],최대값: [2147483647]
   */
  retailPriceMax?: any;
  /**
   * @description
   * 상품 공급가 검색 최소값
   *
   * 공급가가 해당 범위 이하인 상품 검색
   */
  supplyPriceMin?: any;
  /**
   * @description
   * 상품 공급가 검색 최대값
   *
   * 공급가가 해당 범위 이상인 상품 검색
   */
  supplyPriceMax?: any;
  /**
   * @description
   * 상품 등록일 검색 시작일
   *
   * 상품 등록일이 해당 날짜 이후인 상품 검색.
   *
   * 등록일 검색 종료일과 같이 사용해야함.
   *
   * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색.
   */
  createdStartDate?: any;
  /**
   * @description
   * 상품 등록일 검색 종료일
   *
   * 상품 등록일이 해당 날짜 이전인 상품 검색.
   *
   * 등록일 검색 시작일과 같이 사용해야함.
   *
   * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색.
   */
  createdEndDate?: any;
  /**
   * @description
   * 상품 수정일 검색 시작일
   *
   * 상품 수정일이 해당 날짜 이후인 상품 검색.
   *
   * 수정일 검색 종료일과 같이 사용해야함.
   *
   * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색.
   */
  updatedStartDate?: any;
  /**
   * @description
   * 상품 수정일 검색 종료일
   *
   * 상품 수정일이 해당 날짜 이전인 상품 검색.
   *
   * 수정일 검색 시작일과 같이 사용해야함.
   *
   * 검색 시작일과 종료일이 동일할 경우 해당 날짜로만 검색.
   */
  updatedEndDate?: any;
  /**
   * @description
   * 분류 번호
   *
   * 특정 분류에 진열된 상품 검색.
   */
  category?: any;
  /**
   * @description
   * 영문 상품명
   *
   * 검색어를 영문 상품명에 포함하고 있는 상품 검색(대소문자 구분 없음)
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  engProductName?: any;
  /**
   * @description
   * 공급사 상품명
   *
   * 검색어를 공급사 상품명에 포함하고 있는 상품 검색(대소문자 구분 없음)
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  supplyProductName?: any;
  /**
   * @description
   * 상품명(관리용)
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  internalProductName?: any;
  /**
   * @description
   * 모델명
   *
   * 검색어를 모델명에 포함하고 있는 상품 검색(대소문자 구분 없음)
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  modelName?: any;
  /**
   * @description
   * 상품 상태
   *
   * 특정 상품 상태 검색
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  productCondition?: any;
  /**
   * @description
   * 원산지정보
   *
   * 원산지가 "기타(1800)"일 경우 원산지로 입력 가능한 정보.
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  originPlaceValue?: any;
  /**
   * @description
   * 재고수량 검색 최대값
   *
   * 재고가 해당 값 이하로 남아있는 상품 검색.
   *
   * 품목을 여러개 갖고 있는 상품의 경우 해당 조건에 해당하는 품목이 하나라도 있을 경우 검색함.
   */
  stockQuantityMax?: any;
  /**
   * @description
   * 재고수량 검색 최소값
   *
   * 재고가 해당 값 이상 남아있는 상품 검색.
   *
   * 품목을 여러개 갖고 있는 상품의 경우 해당 조건에 해당하는 품목이 하나라도 있을 경우 검색함.
   */
  stockQuantityMin?: any;
  /**
   * @description
   * 안전재고수량 검색 최대값
   */
  stockSafetyMax?: any;
  /**
   * @description
   * 안전재고수량 검색 최소값
   */
  stockSafetyMin?: any;
  /**
   * @description
   * 상품 중량
   *
   * 해당 중량의 상품 검색.
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  productWeight?: any;
  /**
   * @description
   * 자체분류
   *
   * 자체분류 코드가 일치하는 상품 검색
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  classificationCode?: any;
  /**
   * @description
   * 재고 사용여부
   *
   * 해당 상품 품목이 재고를 사용하고 있는지 여부
   *
   * T : 사용함
   * F : 사용안함
   */
  useInventory?: any;
  /**
   * @description
   * 미적용 분류 검색
   *
   * 분류가 등록되지 않은 상품에 대하여 검색함.
   *
   * T: 미적용 분류 검색
   */
  categoryUnapplied?: any;
  /**
   * @description
   * 하위분류 포함 검색
   *
   * 하위분류에 등록된 상품을 포함하여 검색함.
   *
   * T: 포함
   */
  includeSubCategory?: any;
  /**
   * @description
   * 추가항목 검색조건 키
   *
   * 추가항목에 대하여 검색하기 위한 키. 검색을 위해선 key 와 value 모두 필요함.
   */
  additionalInformationKey?: any;
  /**
   * @description
   * 추가항목 검색조건 값
   *
   * 추가항목에 대하여 검색하기 위한 키의 값. 검색을 위해선 key 와 value 모두 필요함.
   */
  additionalInformationValue?: any;
  /**
   * @description
   * 승인상태 검색
   *
   * N : 승인요청 (신규상품) 상태값
   * E : 승인요청 (상품수정) 상태값
   * C : 승인완료 상태값
   * R : 승인거절 상태값
   * I : 검수진행중 상태값
   */
  approveStatus?: any;
  /**
   * @description
   * 해당 상품번호 이후 검색
   *
   * 특정 상품번호 이후의 상품들을 검색. 해당 검색조건 사용시 offset과 관계 없이 모든 상품을 검색할 수 있다.
   *
   * ※ 해당 검색 조건 사용시 다음 파라메터로는 사용할 수 없다.
   *
   * product_no
   * sort
   * order
   * offset
   *
   * @constraints
   * 최소값: [0],최대값: [2147483647]
   */
  sinceProductNo?: any;
  /**
   * @description
   * 세트상품 여부
   *
   * T : 사용함
   * F : 사용안함
   */
  productBundle?: any;
  /**
   * @description
   * 옵션 구성방식
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   *
   * C : 조합 일체선택형
   * S : 조합 분리선택형
   * E : 상품 연동형
   * F : 독립 선택형
   */
  optionType?: any;
  /**
   * @description
   * 마켓 연동 여부
   *
   * T : 사용함
   * F : 사용안함
   */
  marketSync?: any;
}

interface RetrieveAProductResourceRequest {
  /**
   * @description
   * 멀티쇼핑몰 번호
   *
   * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
   *
   */
  shopNo?: any;
  /**
   * @description
   * 상품번호
   *
   * 조회하고자 하는 상품의 번호
   */
  productNo: any;
  /**
   * @description
   * 품목 리소스
   *
   *
   * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
   */
  variants?: any;
  /**
   * @description
   * 메모 리소스
   *
   *
   * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
   */
  memos?: any;
  /**
   * @description
   * 상품 조회수 리소스
   *
   *
   * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
   */
  hits?: any;
  /**
   * @description
   * 상품 Seo 리소스
   *
   *
   * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
   */
  seo?: any;
  /**
   * @description
   * 상품 태그 리소스
   *
   *
   * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
   */
  tags?: any;
  /**
   * @description
   * 상품 옵션 리소스
   *
   *
   * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
   */
  options?: any;
  /**
   * @description
   * 상품 할인판매가 리소스
   */
  discountprice?: any;
  /**
   * @description
   * 꾸미기 이미지 리소스
   */
  decorationimages?: any;
  /**
   * @description
   * 혜택 리소스
   */
  benefits?: any;
  /**
   * @description
   * 추가 이미지 리소스
   */
  additionalimages?: any;
  /**
   * @description
   * 사용자 정의 속성
   */
  customProperties?: any;
}

interface RetrieveAListOfProductDecorationImagesRequest {
  /**
   * @description
   * 멀티쇼핑몰 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 상품번호
   *
   * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음.
   */
  productNo: any;
}

interface RetrieveAProductDiscountedPriceRequest {
  /**
   * @description
   * 멀티쇼핑몰 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 상품번호
   */
  productNo: any;
}

interface RetrieveACountOfProductViewsRequest {
  /**
   * @description
   * 멀티쇼핑몰 번호
   *
   * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
   *
   */
  shopNo?: any;
  /**
   * @description
   * 상품번호
   *
   * 시스템에서 부여한 상품의 번호. 상품 번호는 쇼핑몰 내에서 중복되지 않는다.
   */
  productNo: any;
}

interface RetrieveAListOfProductIconsRequest {
  /**
   * @description
   * 멀티쇼핑몰 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 상품번호
   */
  productNo: any;
}

interface RetrieveAListOfProductOptionsRequest {
  /**
   * @description
   * 멀티쇼핑몰 번호
   *
   * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
   *
   */
  shopNo?: any;
  /**
   * @description
   * 상품번호
   *
   * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음.
   */
  productNo: any;
}

interface RetrieveAListOfProductVariantsRequest {
  /**
   * @description
   * 멀티쇼핑몰 번호
   *
   * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
   *
   */
  shopNo?: any;
  /**
   * @description
   * 상품번호
   *
   * 시스템에서 부여한 상품의 번호. 상품 번호는 쇼핑몰 내에서 중복되지 않는다.
   */
  productNo: any;
  /**
   * @description
   * 재고 리소스
   *
   * 품목의 재고 리소스
   * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
   *
   * ,(콤마)로 여러 건을 검색할 수 있다.
   */
  inventories?: any;
}

interface RetrieveAProductVariantRequest {
  /**
   * @description
   * 멀티쇼핑몰 번호
   *
   * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
   *
   */
  shopNo?: any;
  /**
   * @description
   * 상품번호
   *
   * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음.
   */
  productNo: any;
  /**
   * @description
   * 품목코드
   *
   * @constraints
   * 형식 : [A-Z0-9],글자수 최소: [12자]~최대: [12자]
   */
  variantCode: any;
  /**
   * @description
   * 재고 리소스
   *
   *
   * 조회시 Embed 파라메터를 사용하여 조회할 수 있다.
   */
  inventories?: any;
}

interface RetrieveInventoryDetailsOfAProductVariantRequest {
  /**
   * @description
   * 멀티쇼핑몰 번호
   *
   * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
   *
   */
  shopNo?: any;
  /**
   * @description
   * 상품번호
   *
   * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음.
   */
  productNo: any;
  /**
   * @description
   * 품목코드
   *
   * 판매 수량을 검색할 품목 코드
   *
   * @constraints
   * 형식 : [A-Z0-9],글자수 최소: [12자]~최대: [12자]
   */
  variantCode: any;
}

interface RetrieveTheDetailsOfAProductRequest {
  /**
   * @description
   * 멀티쇼핑몰 번호
   *
   * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
   *
   */
  shopNo?: any;
  /**
   * @description
   * 상품번호
   *
   * 상품의 고유한 일련 번호. 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음.
   */
  productNo: any;
  /**
   * @description
   * 모바일 설정값 조회 여부
   *
   * T : 사용함
   * F : 사용안함
   */
  mobile?: any;
}

interface RetrieveAListOfProductCategoriesRequest {
  /**
   * @description
   * 멀티쇼핑몰 번호
   *
   * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
   *
   */
  shopNo?: any;
  /**
   * @description
   * 분류 Depth
   *
   * 조회하고자 하는 상품분류의 차수 검색
   *
   * @constraints
   * 최소: [1]~최대: [4]
   */
  categoryDepth?: any;
  /**
   * @description
   * 분류 번호
   *
   * 조회하고자 하는 상품분류의 번호
   */
  categoryNo?: any;
  /**
   * @description
   * 부모 분류 번호
   *
   * 조회하고자 하는 상품분류의 부모 상품분류 번호 검색
   *
   * 대분류만 검색하고자 할 경우 parent_category_no =1 로 검색한다.
   */
  parentCategoryNo?: any;
  /**
   * @description
   * 분류명
   *
   * 검색어를 분류명에 포함하고 있는 상품분류 검색(대소문자 구분 없음)
   */
  categoryName?: any;
  /**
   * @description
   * 조회결과 시작위치
   *
   * 조회결과 시작위치
   *
   *
   * @constraints
   * 최대값: [8000]
   */
  offset?: any;
  /**
   * @description
   * 조회결과 최대건수
   *
   * 조회하고자 하는 최대 건수를 지정할 수 있음.
   * 예) 10 입력시 10건만 표시함.
   *
   *
   * @constraints
   * 최소: [1]~최대: [100]
   */
  limit?: any;
}

interface RetrieveACountOfProductCategoriesRequest {
  /**
   * @description
   * 멀티쇼핑몰 번호
   *
   * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
   *
   */
  shopNo?: any;
  /**
   * @description
   * 분류 Depth
   *
   * 조회하고자 하는 상품분류의 차수 검색
   *
   * @constraints
   * 최소: [1]~최대: [4]
   */
  categoryDepth?: any;
  /**
   * @description
   * 분류 번호
   *
   * 조회하고자 하는 상품분류의 번호
   */
  categoryNo?: any;
  /**
   * @description
   * 부모 분류 번호
   *
   * 조회하고자 하는 상품분류의 부모 상품분류 번호 검색
   *
   * 대분류만 검색하고자 할 경우 parent_category_no =1 로 검색한다.
   */
  parentCategoryNo?: any;
  /**
   * @description
   * 분류명
   *
   * 검색어를 분류명에 포함하고 있는 상품분류 검색(대소문자 구분 없음)
   */
  categoryName?: any;
}

interface RetrieveAProductCategoryRequest {
  /**
   * @description
   * 멀티쇼핑몰 번호
   *
   * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
   *
   */
  shopNo?: any;
  /**
   * @description
   * 분류 번호
   *
   * 조회하고자 하는 상품분류의 번호
   */
  categoryNo: any;
}

interface CreateAShoppingCartRequest {
  /**
   * @description
   * 멀티쇼핑몰 번호
   *
   * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호
   *
   *
   * @constraints
   * 최소값: [1]
   */
  shopNo?: any;
  /**
   * @description
   * 품목
   *
   * 장바구니에 추가할 품목의 개수와 품목 코드
   * 연동형 옵션을 장바구니에 담을 경우 options에서 option_code와 value_no를 사용하여 담을 수 있음
   */
  variants?: {
    /**
     * @description
     * 수량
     */
    quantity: any;
    /**
     * @description
     * 상품 품목 코드
     */
    variantsCode: any;
    options?: Array<{
      /**
       * @description
       * 옵션코드
       */
      optionCode?: any;
      /**
       * @description
       * 옵션값
       */
      valueNo?: any;
    }>;
    additionalOptionValues?: Array<{
      /**
       * @description
       * 추가옵션 키값
       */
      key?: any;
      /**
       * @description
       * 추가옵션 타입
       */
      type?: any;
      /**
       * @description
       * 추가옵션명
       */
      name?: any;
      /**
       * @description
       * 추가옵션값
       */
      value?: any;
    }>;
  };
  /**
   * @description
   * 추가구성상품의 품목
   */
  addtionalProducts?: any;
  /**
   * @description
   * 상품번호
   *
   * 상품의 고유한 일련 번호
   * 해당 쇼핑몰 내에서 상품 번호는 중복되지 않음
   */
  productNo: any;
  /**
   * @description
   * 장바구니 타입
   *
   * 무이자할부 가능한 상품일 경우 무이자 타입으로 설정 가능
   *
   * A0000 : 일반
   * A0001 : 무이자
   */
  basketType: any;
  /**
   * @description
   * 장바구니 중복체크
   *
   * 장바구니에 추가할 품목에 대하여 중복을 허용할지 여부
   * 중복을 허용하면 품목의 개수가 추가됨
   * 중복을 허용하지 않으면 해당 품목은 장바구니에 추가되지 않음
   *
   * T : 품목 중복체크
   * F : 품목 중복체크 안함
   */
  duplicatedItemCheck: any;
  /**
   * @description
   * 배송비 선결제 설정
   *
   * P : 선불
   * C : 착불
   */
  prepaidShippingFee: any;
}

interface RetrieveACountOfCartsContainingAProductRequest {
  /**
   * @description
   * 멀티쇼핑몰 번호
   *
   * 멀티쇼핑몰 구분을 위해 사용하는 멀티쇼핑몰 번호.
   *
   */
  shopNo?: any;
  /**
   * @description
   * 상품번호
   *
   * 시스템에서 부여한 상품의 번호. 상품 번호는 쇼핑몰 내에서 중복되지 않는다.
   */
  productNo: any;
}

/**
 * @example
 * ```json
 * {
 *     "products": [
 *         {
 *             "shop_no": 1,
 *             "product_no": 20,
 *             "product_name": "iPhone X",
 *             "manufacturer_name": "APPLE",
 *             "origin_place_value": "Korea",
 *             "retail_price": "0.00",
 *             "price": "11000.00",
 *             "interest_free_period": "",
 *             "eng_product_name": "iPhone Ten",
 *             "custom_product_code": "",
 *             "point_amount": [
 *                 {
 *                     "payment_method": "card",
 *                     "type": "P",
 *                     "value": "110.00",
 *                     "rate": "10.00"
 *                 },
 *                 {
 *                     "payment_method": "cash",
 *                     "type": "W",
 *                     "value": "100.00",
 *                     "rate": ""
 *                 }
 *             ],
 *             "brand_name": "",
 *             "model_name": "A1865",
 *             "price_excluding_tax": "10000.00",
 *             "tax": "1000.00",
 *             "product_code": "P000000X",
 *             "simple_description": "This is Product Description.",
 *             "summary_description": "This is Product Summary.",
 *             "supplier_name": "SUPPLIER NAME",
 *             "made_date": "",
 *             "review_count": 0,
 *             "expiration_date": {
 *                 "start_date": "2019-07-08",
 *                 "end_date": "2019-09-14"
 *             },
 *             "coupon_discounted_price": "",
 *             "trend_name": "",
 *             "shipping_scope": "Domestic/International shipping",
 *             "shipping_fee_type": "R",
 *             "shipping_rates": "",
 *             "shipping_fee": "2500.00",
 *             "discount_price": "",
 *             "optimum_discount_price": "",
 *             "shipping_method": "Courier Service",
 *             "promotion_period": {
 *                 "start_date": "2019-07-11T00:00:00+09:00",
 *                 "end_date": "2019-07-16T23:55:00+09:00",
 *                 "dc_price": "220.00"
 *             },
 *             "color": [
 *                 "#000000",
 *                 "#C20F0A"
 *             ],
 *             "translated_additional_description": "This is a translated additional description of product.",
 *             "stock_quantity": 10,
 *             "question_count": 0,
 *             "product_article_count": 0
 *         },
 *         {
 *             "shop_no": 1,
 *             "product_no": 21,
 *             "product_name": "iPhone X",
 *             "manufacturer_name": "APPLE",
 *             "origin_place_value": "Korea",
 *             "retail_price": "0.00",
 *             "price": "11000.00",
 *             "interest_free_period": "",
 *             "eng_product_name": "iPhone Ten",
 *             "custom_product_code": "",
 *             "point_amount": [
 *                 {
 *                     "payment_method": "mileage",
 *                     "type": "W",
 *                     "value": "100.00",
 *                     "rate": ""
 *                 }
 *             ],
 *             "brand_name": "",
 *             "model_name": "A1865",
 *             "price_excluding_tax": "10000.00",
 *             "tax": "1000.00",
 *             "product_code": "P000000X",
 *             "simple_description": "This is Product Description.",
 *             "summary_description": "This is Product Summary.",
 *             "supplier_name": "SUPPLIER NAME",
 *             "made_date": "",
 *             "review_count": 0,
 *             "expiration_date": {
 *                 "start_date": "2019-07-08",
 *                 "end_date": "2019-09-14"
 *             },
 *             "coupon_discounted_price": "",
 *             "trend_name": "",
 *             "shipping_scope": "Domestic/International shipping",
 *             "shipping_fee_type": "W",
 *             "shipping_rates": [
 *                 {
 *                     "shipping_rates_min": "1.00",
 *                     "shipping_rates_max": "2.00",
 *                     "shipping_fee": "2500.00"
 *                 },
 *                 {
 *                     "shipping_rates_min": "2.00",
 *                     "shipping_rates_max": "3.00",
 *                     "shipping_fee": "3000.00"
 *                 }
 *             ],
 *             "shipping_fee": "",
 *             "discount_price": "",
 *             "optimum_discount_price": "",
 *             "shipping_method": "Courier Service",
 *             "promotion_period": {
 *                 "start_date": "2019-07-11T00:00:00+09:00",
 *                 "end_date": "2019-07-16T23:55:00+09:00",
 *                 "dc_price": "220"
 *             },
 *             "color": [
 *                 "#000000",
 *                 "#C20F0A"
 *             ],
 *             "translated_additional_description": "This is a translated additional description of product.",
 *             "stock_quantity": 10,
 *             "question_count": 0,
 *             "product_article_count": 0
 *         }
 *     ]
 * }```
 */
interface RetrieveAListOfProductsByCategoryResponse {
  products: Array<{
    shopNo: number;
    productNo: number;
    productName: string;
    manufacturerName: string;
    originPlaceValue: string;
    retailPrice: string;
    price: string;
    interestFreePeriod: string;
    engProductName: string;
    customProductCode: string;
    pointAmount: Array<{
      paymentMethod: string;
      type: Cafe24Enum;
      value: string;
      rate: string;
    }>;
    brandName: string;
    modelName: string;
    priceExcludingTax: string;
    tax: string;
    productCode: string;
    simpleDescription: string;
    summaryDescription: string;
    supplierName: string;
    madeDate: string;
    reviewCount: number;
    expirationDate: {
      startDate: Cafe24Date;
      endDate: Cafe24Date;
    };
    couponDiscountedPrice: string;
    trendName: string;
    shippingScope: string;
    shippingFeeType: Cafe24Enum;
    shippingRates: string;
    shippingFee: string;
    discountPrice: string;
    optimumDiscountPrice: string;
    shippingMethod: string;
    promotionPeriod: {
      startDate: Cafe24Datetime;
      endDate: Cafe24Datetime;
      dcPrice: string;
    };
    color: Array<string>;
    translatedAdditionalDescription: string;
    stockQuantity: number;
    questionCount: number;
    productArticleCount: number;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "count": 2
 * }```
 */
interface RetrieveACountOfProductsByCategoryResponse {
  count: number;
}

/**
 * @example
 * ```json
 * {
 *     "products": [
 *         {
 *             "shop_no": 1,
 *             "product_no": 20,
 *             "product_name": "iPhone X",
 *             "manufacturer_name": "APPLE",
 *             "origin_place_value": "Korea",
 *             "retail_price": "0.00",
 *             "price": "11000.00",
 *             "interest_free_period": "",
 *             "eng_product_name": "iPhone Ten",
 *             "custom_product_code": "",
 *             "point_amount": [
 *                 {
 *                     "payment_method": "card",
 *                     "type": "P",
 *                     "value": "110.00",
 *                     "rate": "10.00"
 *                 },
 *                 {
 *                     "payment_method": "cash",
 *                     "type": "W",
 *                     "value": "100.00",
 *                     "rate": ""
 *                 }
 *             ],
 *             "brand_name": "",
 *             "model_name": "A1865",
 *             "price_excluding_tax": "10000.00",
 *             "tax": "1000.00",
 *             "product_code": "P000000X",
 *             "simple_description": "This is Product Description.",
 *             "summary_description": "This is Product Summary.",
 *             "supplier_name": "SUPPLIER NAME",
 *             "made_date": "",
 *             "review_count": 0,
 *             "expiration_date": {
 *                 "start_date": "2019-07-08",
 *                 "end_date": "2019-09-14"
 *             },
 *             "coupon_discounted_price": "",
 *             "trend_name": "",
 *             "shipping_scope": "Domestic/International shipping",
 *             "shipping_fee_type": "R",
 *             "shipping_rates": "",
 *             "shipping_fee": "2500.00",
 *             "discount_price": "",
 *             "optimum_discount_price": "",
 *             "shipping_method": "Courier Service",
 *             "promotion_period": {
 *                 "start_date": "2019-07-11T00:00:00+09:00",
 *                 "end_date": "2019-07-16T23:55:00+09:00",
 *                 "dc_price": "220"
 *             },
 *             "color": [
 *                 "#000000",
 *                 "#C20F0A"
 *             ],
 *             "translated_additional_description": "This is a translated additional description of product.",
 *             "stock_quantity": 10,
 *             "question_count": 0,
 *             "product_article_count": 0
 *         },
 *         {
 *             "shop_no": 1,
 *             "product_no": 21,
 *             "product_name": "iPhone X",
 *             "manufacturer_name": "APPLE",
 *             "origin_place_value": "Korea",
 *             "retail_price": "0.00",
 *             "price": "11000.00",
 *             "interest_free_period": "",
 *             "eng_product_name": "iPhone Ten",
 *             "custom_product_code": "",
 *             "point_amount": [
 *                 {
 *                     "payment_method": "mileage",
 *                     "type": "W",
 *                     "value": "100.00",
 *                     "rate": ""
 *                 }
 *             ],
 *             "brand_name": "",
 *             "model_name": "A1865",
 *             "price_excluding_tax": "10000.00",
 *             "tax": "1000.00",
 *             "product_code": "P000000X",
 *             "simple_description": "This is Product Description.",
 *             "summary_description": "This is Product Summary.",
 *             "supplier_name": "SUPPLIER NAME",
 *             "made_date": "",
 *             "review_count": 0,
 *             "expiration_date": {
 *                 "start_date": "2019-07-08",
 *                 "end_date": "2019-09-14"
 *             },
 *             "coupon_discounted_price": "",
 *             "trend_name": "",
 *             "shipping_scope": "Domestic/International shipping",
 *             "shipping_fee_type": "W",
 *             "shipping_rates": [
 *                 {
 *                     "shipping_rates_min": "1.00",
 *                     "shipping_rates_max": "2.00",
 *                     "shipping_fee": "2500.00"
 *                 },
 *                 {
 *                     "shipping_rates_min": "2.00",
 *                     "shipping_rates_max": "3.00",
 *                     "shipping_fee": "3000.00"
 *                 }
 *             ],
 *             "shipping_fee": "",
 *             "discount_price": "",
 *             "optimum_discount_price": "",
 *             "shipping_method": "Courier Service",
 *             "promotion_period": {
 *                 "start_date": "2019-07-11T00:00:00+09:00",
 *                 "end_date": "2019-07-16T23:55:00+09:00",
 *                 "dc_price": "220.00"
 *             },
 *             "color": [
 *                 "#000000",
 *                 "#C20F0A"
 *             ],
 *             "translated_additional_description": "This is a translated additional description of product.",
 *             "stock_quantity": 10,
 *             "question_count": 0,
 *             "product_article_count": 0
 *         }
 *     ]
 * }```
 */
interface RetrieveAListOfProductsInMainCategoryResponse {
  products: Array<{
    shopNo: number;
    productNo: number;
    productName: string;
    manufacturerName: string;
    originPlaceValue: string;
    retailPrice: string;
    price: string;
    interestFreePeriod: string;
    engProductName: string;
    customProductCode: string;
    pointAmount: Array<{
      paymentMethod: string;
      type: Cafe24Enum;
      value: string;
      rate: string;
    }>;
    brandName: string;
    modelName: string;
    priceExcludingTax: string;
    tax: string;
    productCode: string;
    simpleDescription: string;
    summaryDescription: string;
    supplierName: string;
    madeDate: string;
    reviewCount: number;
    expirationDate: {
      startDate: Cafe24Date;
      endDate: Cafe24Date;
    };
    couponDiscountedPrice: string;
    trendName: string;
    shippingScope: string;
    shippingFeeType: Cafe24Enum;
    shippingRates: string;
    shippingFee: string;
    discountPrice: string;
    optimumDiscountPrice: string;
    shippingMethod: string;
    promotionPeriod: {
      startDate: Cafe24Datetime;
      endDate: Cafe24Datetime;
      dcPrice: string;
    };
    color: Array<string>;
    translatedAdditionalDescription: string;
    stockQuantity: number;
    questionCount: number;
    productArticleCount: number;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "products": [
 *         {
 *             "shop_no": 1,
 *             "product_no": 24,
 *             "product_code": "P000000X",
 *             "custom_product_code": "",
 *             "product_name": "iPhone X",
 *             "eng_product_name": "iPhone Ten",
 *             "model_name": "A1865",
 *             "price_excluding_tax": "1000.00",
 *             "price": "1100.00",
 *             "retail_price": "0.00",
 *             "display": "T",
 *             "selling": "F",
 *             "product_used_month": 2,
 *             "summary_description": "This is Product Summary.",
 *             "tax_calculation": "M",
 *             "price_content": null,
 *             "buy_limit_by_product": "T",
 *             "buy_limit_type": "F",
 *             "buy_group_list": [
 *                 8,
 *                 9
 *             ],
 *             "buy_member_id_list": [
 *                 "sampleid",
 *                 "testid"
 *             ],
 *             "repurchase_restriction": "F",
 *             "single_purchase_restriction": "F",
 *             "buy_unit_type": "O",
 *             "buy_unit": 1,
 *             "order_quantity_limit_type": "O",
 *             "minimum_quantity": 1,
 *             "maximum_quantity": 0,
 *             "points_by_product": "T",
 *             "points_setting_by_payment": "C",
 *             "points_amount": [
 *                 {
 *                     "payment_method": "cash",
 *                     "points_rate": "0.00%"
 *                 },
 *                 {
 *                     "payment_method": "mileage",
 *                     "points_rate": "0.00%"
 *                 }
 *             ],
 *             "adult_certification": "F",
 *             "detail_image": "https://{domain}/web/product/big/201711/20_shop1_750339.png",
 *             "list_image": "https://{domain}/web/product/medium/201711/20_shop1_750339.png",
 *             "tiny_image": "https://{domain}/web/product/tiny/201711/20_shop1_750339.png",
 *             "small_image": "https://{domain}/web/product/small/201711/20_shop1_750339.png",
 *             "use_naverpay": "T",
 *             "naverpay_type": "C",
 *             "use_kakaopay": "T",
 *             "manufacturer_code": "M0000000",
 *             "trend_code": "T0000000",
 *             "brand_code": "B0000000",
 *             "made_date": "",
 *             "expiration_date": {
 *                 "start_date": "2017-09-08",
 *                 "end_date": "2017-09-14"
 *             },
 *             "origin_classification": "F",
 *             "origin_place_no": 1798,
 *             "origin_place_value": "",
 *             "made_in_code": "KR",
 *             "icon_show_period": {
 *                 "start_date": "2017-10-30T09:00:00+09:00",
 *                 "end_date": "2017-11-02T16:00:00+09:00"
 *             },
 *             "icon": [
 *                 "icon_01_01",
 *                 "icon_02_01"
 *             ],
 *             "product_material": "",
 *             "list_icon": {
 *                 "soldout_icon": true,
 *                 "recommend_icon": false,
 *                 "new_icon": false
 *             },
 *             "approve_status": "",
 *             "sold_out": "F",
 *             "clearance_category_code": "ACAB0000",
 *             "exposure_limit_type": "M",
 *             "exposure_group_list": [
 *                 8,
 *                 9
 *             ],
 *             "set_product_type": null,
 *             "shipping_fee_type": "W",
 *             "main": [
 *                 3,
 *                 2
 *             ],
 *             "market_sync": "F"
 *         },
 *         {
 *             "shop_no": 1,
 *             "product_no": 23,
 *             "product_code": "P000000W",
 *             "custom_product_code": "",
 *             "product_name": "iPhone X",
 *             "eng_product_name": "iPhone Ten",
 *             "model_name": "A1865",
 *             "price": 1000,
 *             "retail_price": 0,
 *             "display": "T",
 *             "selling": "F",
 *             "product_used_month": 2,
 *             "summary_description": "This is Product Summary.",
 *             "tax_calculation": "M",
 *             "price_content": null,
 *             "buy_limit_by_product": "T",
 *             "buy_limit_type": "F",
 *             "buy_group_list": [
 *                 8,
 *                 9
 *             ],
 *             "buy_member_id_list": [
 *                 "sampleid",
 *                 "testid"
 *             ],
 *             "repurchase_restriction": "F",
 *             "single_purchase_restriction": "F",
 *             "buy_unit_type": "O",
 *             "buy_unit": 1,
 *             "order_quantity_limit_type": "O",
 *             "minimum_quantity": 1,
 *             "maximum_quantity": 0,
 *             "points_by_product": "T",
 *             "points_setting_by_payment": "C",
 *             "points_amount": [
 *                 {
 *                     "payment_method": "cash",
 *                     "points_rate": "0.00%"
 *                 },
 *                 {
 *                     "payment_method": "mileage",
 *                     "points_rate": "0.00%"
 *                 }
 *             ],
 *             "adult_certification": "F",
 *             "detail_image": "https://{domain}/web/product/big/201711/20_shop1_750339.png",
 *             "list_image": "https://{domain}/web/product/medium/201711/20_shop1_750339.png",
 *             "tiny_image": "https://{domain}/web/product/tiny/201711/20_shop1_750339.png",
 *             "small_image": "https://{domain}/web/product/small/201711/20_shop1_750339.png",
 *             "use_naverpay": "T",
 *             "naverpay_type": "C",
 *             "use_kakaopay": "T",
 *             "manufacturer_code": "M0000000",
 *             "trend_code": "T0000000",
 *             "brand_code": "B0000000",
 *             "made_date": "",
 *             "expiration_date": {
 *                 "start_date": "2017-09-08",
 *                 "end_date": "2017-09-14"
 *             },
 *             "origin_classification": "F",
 *             "origin_place_no": 1798,
 *             "origin_place_value": "",
 *             "made_in_code": "KR",
 *             "icon_show_period": {
 *                 "start_date": "2017-10-30T09:00:00+09:00",
 *                 "end_date": "2017-11-02T16:00:00+09:00"
 *             },
 *             "icon": [
 *                 "icon_01_01",
 *                 "icon_02_01"
 *             ],
 *             "product_material": "",
 *             "list_icon": {
 *                 "soldout_icon": true,
 *                 "recommend_icon": false,
 *                 "new_icon": false
 *             },
 *             "approve_status": "C",
 *             "sold_out": "F",
 *             "clearance_category_code": null,
 *             "exposure_limit_type": "M",
 *             "exposure_group_list": [
 *                 8,
 *                 9
 *             ],
 *             "set_product_type": null,
 *             "shipping_fee_type": "T",
 *             "main": [
 *                 3,
 *                 2
 *             ],
 *             "market_sync": "F"
 *         }
 *     ]
 * }```
 */
interface RetrieveAListOfProductsResponse {
  products: Array<{
    shopNo: number;
    productNo: number;
    productCode: string;
    customProductCode: string;
    productName: string;
    engProductName: string;
    modelName: string;
    priceExcludingTax: string;
    price: string;
    retailPrice: string;
    display: Cafe24Enum;
    selling: Cafe24Enum;
    productUsedMonth: number;
    summaryDescription: string;
    taxCalculation: Cafe24Enum;
    priceContent: any;
    buyLimitByProduct: Cafe24Enum;
    buyLimitType: Cafe24Enum;
    buyGroupList: Array<number>;
    buyMemberIdList: Array<string>;
    repurchaseRestriction: Cafe24Enum;
    singlePurchaseRestriction: Cafe24Enum;
    buyUnitType: Cafe24Enum;
    buyUnit: number;
    orderQuantityLimitType: Cafe24Enum;
    minimumQuantity: number;
    maximumQuantity: number;
    pointsByProduct: Cafe24Enum;
    pointsSettingByPayment: Cafe24Enum;
    pointsAmount: Array<{
      paymentMethod: string;
      pointsRate: string;
    }>;
    adultCertification: Cafe24Enum;
    detailImage: string;
    listImage: string;
    tinyImage: string;
    smallImage: string;
    useNaverpay: Cafe24Enum;
    naverpayType: Cafe24Enum;
    useKakaopay: Cafe24Enum;
    manufacturerCode: string;
    trendCode: string;
    brandCode: string;
    madeDate: string;
    expirationDate: {
      startDate: Cafe24Date;
      endDate: Cafe24Date;
    };
    originClassification: Cafe24Enum;
    originPlaceNo: number;
    originPlaceValue: string;
    madeInCode: string;
    iconShowPeriod: {
      startDate: Cafe24Datetime;
      endDate: Cafe24Datetime;
    };
    icon: Array<string>;
    productMaterial: string;
    listIcon: {
      soldoutIcon: any;
      recommendIcon: any;
      newIcon: any;
    };
    approveStatus: string;
    soldOut: Cafe24Enum;
    clearanceCategoryCode: string;
    exposureLimitType: Cafe24Enum;
    exposureGroupList: Array<number>;
    setProductType: any;
    shippingFeeType: Cafe24Enum;
    main: Array<number>;
    marketSync: Cafe24Enum;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "count": 2
 * }```
 */
interface RetrieveACountOfProductsResponse {
  count: number;
}

/**
 * @example
 * ```json
 * {
 *     "product": {
 *         "shop_no": 1,
 *         "product_no": 20,
 *         "category": [
 *             {
 *                 "category_no": 27,
 *                 "recommend": "F",
 *                 "new": "T"
 *             },
 *             {
 *                 "category_no": 28,
 *                 "recommend": "T",
 *                 "new": "F"
 *             }
 *         ],
 *         "project_no": [
 *             31,
 *             32
 *         ],
 *         "product_code": "P000000T",
 *         "custom_product_code": "",
 *         "product_name": "iPhone X",
 *         "eng_product_name": "iPhone Ten",
 *         "model_name": "A1865",
 *         "price_excluding_tax": "1000.00",
 *         "price": "1100.00",
 *         "retail_price": "0.00",
 *         "display": "T",
 *         "description": "Sample Description.",
 *         "mobile_description": "Sample Mobile Description.",
 *         "separated_mobile_description": "T",
 *         "payment_info": "Sample payment info. You have to Pay.",
 *         "shipping_info": "Sample shipping info. You have to ship.",
 *         "exchange_info": "Sample exchange info. You have to exchange.",
 *         "service_info": "Sample service info. You have to service.",
 *         "product_tax_type_text": null,
 *         "set_product_type": null,
 *         "selling": "F",
 *         "product_used_month": 2,
 *         "simple_description": "This is Product Description.",
 *         "summary_description": "This is Product Summary.",
 *         "product_tag": [
 *             "edu",
 *             "sample"
 *         ],
 *         "tax_calculation": "M",
 *         "price_content": null,
 *         "buy_limit_by_product": "T",
 *         "buy_limit_type": "F",
 *         "repurchase_restriction": "F",
 *         "buy_group_list": [
 *             8,
 *             9
 *         ],
 *         "buy_member_id_list": [
 *             "sampleid",
 *             "testid"
 *         ],
 *         "single_purchase_restriction": "F",
 *         "buy_unit_type": "O",
 *         "buy_unit": 1,
 *         "order_quantity_limit_type": "O",
 *         "minimum_quantity": 1,
 *         "maximum_quantity": 0,
 *         "points_by_product": "T",
 *         "points_setting_by_payment": "C",
 *         "points_amount": [
 *             {
 *                 "payment_method": "cash",
 *                 "points_rate": "0.00%"
 *             },
 *             {
 *                 "payment_method": "mileage",
 *                 "points_rate": "0.00%"
 *             }
 *         ],
 *         "adult_certification": "F",
 *         "detail_image": "https://{domain}/web/product/big/201711/20_shop1_750339.png",
 *         "list_image": "https://{domain}/web/product/medium/201711/20_shop1_750339.png",
 *         "tiny_image": "https://{domain}/web/product/tiny/201711/20_shop1_750339.png",
 *         "small_image": "https://{domain}/web/product/small/201711/20_shop1_750339.png",
 *         "has_option": "F",
 *         "soldout_message": "Sold out",
 *         "option_type": "T",
 *         "use_naverpay": "T",
 *         "naverpay_type": "C",
 *         "use_kakaopay": "T",
 *         "manufacturer_code": "M0000000",
 *         "trend_code": "T0000000",
 *         "brand_code": "B0000000",
 *         "made_date": "",
 *         "expiration_date": {
 *             "start_date": "2017-09-08",
 *             "end_date": "2017-09-14"
 *         },
 *         "origin_classification": "F",
 *         "origin_place_no": 1798,
 *         "origin_place_value": "",
 *         "made_in_code": "KR",
 *         "icon_show_period": {
 *             "start_date": "2017-10-30T09:00:00+09:00",
 *             "end_date": "2017-11-02T16:00:00+09:00"
 *         },
 *         "icon": null,
 *         "product_material": "",
 *         "shipping_calculation": "M",
 *         "shipping_method": "01",
 *         "prepaid_shipping_fee": "B",
 *         "shipping_period": {
 *             "minimum": 3,
 *             "maximum": 7
 *         },
 *         "shipping_scope": "A",
 *         "shipping_area": "All around World",
 *         "shipping_fee_type": "W",
 *         "shipping_rates": [
 *             {
 *                 "shipping_rates_min": "0.00",
 *                 "shipping_rates_max": "1.00",
 *                 "shipping_fee": "100.00"
 *             },
 *             {
 *                 "shipping_rates_min": "1.00",
 *                 "shipping_rates_max": "2.00",
 *                 "shipping_fee": "200.00"
 *             }
 *         ],
 *         "clearance_category_code": "ACAB0000",
 *         "product_shipping_type": "D",
 *         "origin_place_code": 1798,
 *         "list_icon": {
 *             "soldout_icon": true,
 *             "recommend_icon": true,
 *             "new_icon": true
 *         },
 *         "additional_information": [
 *             {
 *                 "key": "custom_option1",
 *                 "name": "gift option",
 *                 "value": "Yes"
 *             }
 *         ],
 *         "main": [
 *             3,
 *             2
 *         ],
 *         "relational_product": [
 *             {
 *                 "product_no": 17,
 *                 "interrelated": "T"
 *             },
 *             {
 *                 "product_no": 19,
 *                 "interrelated": "F"
 *             }
 *         ],
 *         "select_one_by_option": "F",
 *         "approve_status": "C",
 *         "sold_out": "F",
 *         "exposure_limit_type": "M",
 *         "exposure_group_list": [
 *             8,
 *             9
 *         ],
 *         "market_sync": "F"
 *     }
 * }```
 */
interface RetrieveAProductResourceResponse {
  product: {
    shopNo: number;
    productNo: number;
    category: Array<{
      categoryNo: number;
      recommend: Cafe24Enum;
      new: Cafe24Enum;
    }>;
    projectNo: Array<number>;
    productCode: string;
    customProductCode: string;
    productName: string;
    engProductName: string;
    modelName: string;
    priceExcludingTax: string;
    price: string;
    retailPrice: string;
    display: Cafe24Enum;
    description: string;
    mobileDescription: string;
    separatedMobileDescription: Cafe24Enum;
    paymentInfo: string;
    shippingInfo: string;
    exchangeInfo: string;
    serviceInfo: string;
    productTaxTypeText: any;
    setProductType: any;
    selling: Cafe24Enum;
    productUsedMonth: number;
    simpleDescription: string;
    summaryDescription: string;
    productTag: Array<string>;
    taxCalculation: Cafe24Enum;
    priceContent: any;
    buyLimitByProduct: Cafe24Enum;
    buyLimitType: Cafe24Enum;
    repurchaseRestriction: Cafe24Enum;
    buyGroupList: Array<number>;
    buyMemberIdList: Array<string>;
    singlePurchaseRestriction: Cafe24Enum;
    buyUnitType: Cafe24Enum;
    buyUnit: number;
    orderQuantityLimitType: Cafe24Enum;
    minimumQuantity: number;
    maximumQuantity: number;
    pointsByProduct: Cafe24Enum;
    pointsSettingByPayment: Cafe24Enum;
    pointsAmount: Array<{
      paymentMethod: string;
      pointsRate: string;
    }>;
    adultCertification: Cafe24Enum;
    detailImage: string;
    listImage: string;
    tinyImage: string;
    smallImage: string;
    hasOption: Cafe24Enum;
    soldoutMessage: string;
    optionType: Cafe24Enum;
    useNaverpay: Cafe24Enum;
    naverpayType: Cafe24Enum;
    useKakaopay: Cafe24Enum;
    manufacturerCode: string;
    trendCode: string;
    brandCode: string;
    madeDate: string;
    expirationDate: {
      startDate: Cafe24Date;
      endDate: Cafe24Date;
    };
    originClassification: Cafe24Enum;
    originPlaceNo: number;
    originPlaceValue: string;
    madeInCode: string;
    iconShowPeriod: {
      startDate: Cafe24Datetime;
      endDate: Cafe24Datetime;
    };
    icon: any;
    productMaterial: string;
    shippingCalculation: Cafe24Enum;
    shippingMethod: string;
    prepaidShippingFee: Cafe24Enum;
    shippingPeriod: {
      minimum: number;
      maximum: number;
    };
    shippingScope: Cafe24Enum;
    shippingArea: string;
    shippingFeeType: Cafe24Enum;
    shippingRates: Array<{
      shippingRatesMin: string;
      shippingRatesMax: string;
      shippingFee: string;
    }>;
    clearanceCategoryCode: string;
    productShippingType: Cafe24Enum;
    originPlaceCode: number;
    listIcon: {
      soldoutIcon: any;
      recommendIcon: any;
      newIcon: any;
    };
    additionalInformation: Array<{
      key: string;
      name: string;
      value: string;
    }>;
    main: Array<number>;
    relationalProduct: Array<{
      productNo: number;
      interrelated: Cafe24Enum;
    }>;
    selectOneByOption: Cafe24Enum;
    approveStatus: Cafe24Enum;
    soldOut: Cafe24Enum;
    exposureLimitType: Cafe24Enum;
    exposureGroupList: Array<number>;
    marketSync: Cafe24Enum;
  };
}

/**
 * @example
 * ```json
 * {
 *     "decorationimage": {
 *         "use_show_date": "T",
 *         "show_start_date": "2017-10-30T09:00:00+09:00",
 *         "show_end_date": "2017-11-02T16:00:00+09:00",
 *         "image_list": [
 *             {
 *                 "code": "image_custom_4",
 *                 "path": "https://{domain}/web/upload/image_custom_415421761806290.gif",
 *                 "image_vertical_position": "T",
 *                 "image_horizontal_position": "L"
 *             },
 *             {
 *                 "code": "image_custom_3",
 *                 "path": "https://{domain}/web/upload/image_custom_615421761805558.gif",
 *                 "image_vertical_position": "B",
 *                 "image_horizontal_position": "C"
 *             }
 *         ]
 *     }
 * }```
 */
interface RetrieveAListOfProductDecorationImagesResponse {
  decorationimage: {
    useShowDate: Cafe24Enum;
    showStartDate: Cafe24Datetime;
    showEndDate: Cafe24Datetime;
    imageList: Array<{
      code: string;
      path: string;
      imageVerticalPosition: Cafe24Enum;
      imageHorizontalPosition: Cafe24Enum;
    }>;
  };
}

/**
 * @example
 * ```json
 * {
 *     "discountprice": {
 *         "pc_discount_price": "7000.00",
 *         "mobile_discount_price": "6000.00",
 *         "app_discount_price": "5000.00"
 *     }
 * }```
 */
interface RetrieveAProductDiscountedPriceResponse {
  discountprice: {
    pcDiscountPrice: string;
    mobileDiscountPrice: string;
    appDiscountPrice: string;
  };
}

/**
 * @example
 * ```json
 * {
 *     "count": 3
 * }```
 */
interface RetrieveACountOfProductViewsResponse {
  count: number;
}

/**
 * @example
 * ```json
 * {
 *     "icons": {
 *         "shop_no": 1,
 *         "use_show_date": "T",
 *         "show_start_date": "2017-10-30T09:00:00+09:00",
 *         "show_end_date": "2017-11-02T16:00:00+09:00",
 *         "image_list": [
 *             {
 *                 "code": "custom_1",
 *                 "path": "https://{domain}/web/upload/custom_115855429954932.gif"
 *             },
 *             {
 *                 "code": "custom_2",
 *                 "path": "https://{domain}/web/upload/custom_215855430928360.gif"
 *             }
 *         ]
 *     }
 * }```
 */
interface RetrieveAListOfProductIconsResponse {
  icons: {
    shopNo: number;
    useShowDate: Cafe24Enum;
    showStartDate: Cafe24Datetime;
    showEndDate: Cafe24Datetime;
    imageList: Array<{
      code: string;
      path: string;
    }>;
  };
}

/**
 * @example
 * ```json
 * {
 *     "options": {
 *         "shop_no": 1,
 *         "product_no": 7,
 *         "has_option": "T",
 *         "option_type": "E",
 *         "option_list_type": "S",
 *         "options": [
 *             {
 *                 "option_code": "O000000A",
 *                 "option_name": "Color",
 *                 "option_value": [
 *                     {
 *                         "option_image_file": "https://{domain}/web/product/option_button/201804/temp_shop1_831549.gif",
 *                         "option_link_image": "https://{domain}/web/product/big/201604/1_shop1_423399.png",
 *                         "option_color": "#000000",
 *                         "option_text": "Black",
 *                         "value_no": null,
 *                         "additional_amount": "1000.00"
 *                     },
 *                     {
 *                         "option_image_file": "https://{domain}/web/product/option_button/201804/temp_shop1_831549.gif",
 *                         "option_link_image": "https://{domain}/web/product/big/201604/1_shop1_436875.png",
 *                         "option_color": "#007543",
 *                         "option_text": "Red",
 *                         "value_no": null,
 *                         "additional_amount": "1000.00"
 *                     }
 *                 ],
 *                 "required_option": "T",
 *                 "option_display_type": "S"
 *             },
 *             {
 *                 "option_code": "O000000B",
 *                 "option_name": "Size",
 *                 "option_value": [
 *                     {
 *                         "option_image_file": "https://{domain}/web/product/option_button/201804/temp_shop1_931549.gif",
 *                         "option_link_image": "",
 *                         "option_color": "#000000",
 *                         "option_text": "Small",
 *                         "value_no": null,
 *                         "additional_amount": "0.00"
 *                     },
 *                     {
 *                         "option_image_file": "https://{domain}/web/product/option_button/201804/temp_shop1_931549.gif",
 *                         "option_link_image": "",
 *                         "option_color": "#007543",
 *                         "option_text": "Large",
 *                         "value_no": null,
 *                         "additional_amount": "0.00"
 *                     }
 *                 ],
 *                 "required_option": "T",
 *                 "option_display_type": "S"
 *             }
 *         ],
 *         "select_one_by_option": "F",
 *         "use_additional_option": "T",
 *         "additional_options": [
 *             {
 *                 "additional_option_name": "Pattern",
 *                 "required_additional_option": "T",
 *                 "additional_option_text_length": 20
 *             },
 *             {
 *                 "additional_option_name": "Custom Option",
 *                 "required_additional_option": "F",
 *                 "additional_option_text_length": 10
 *             }
 *         ],
 *         "use_attached_file_option": "T",
 *         "attached_file_option": {
 *             "option_name": "Pattern Images",
 *             "required": "T",
 *             "size_limit": 3
 *         }
 *     }
 * }```
 */
interface RetrieveAListOfProductOptionsResponse {
  options: {
    shopNo: number;
    productNo: number;
    hasOption: Cafe24Enum;
    optionType: Cafe24Enum;
    optionListType: Cafe24Enum;
    options: Array<{
      optionCode: string;
      optionName: string;
      optionValue: Array<{
        optionImageFile: string;
        optionLinkImage: string;
        optionColor: string;
        optionText: string;
        valueNo: any;
        additionalAmount: string;
      }>;
      requiredOption: Cafe24Enum;
      optionDisplayType: Cafe24Enum;
    }>;
    selectOneByOption: Cafe24Enum;
    useAdditionalOption: Cafe24Enum;
    additionalOptions: Array<{
      additionalOptionName: string;
      requiredAdditionalOption: Cafe24Enum;
      additionalOptionTextLength: number;
    }>;
    useAttachedFileOption: Cafe24Enum;
    attachedFileOption: {
      optionName: string;
      required: Cafe24Enum;
      sizeLimit: number;
    };
  };
}

/**
 * @example
 * ```json
 * {
 *     "variants": [
 *         {
 *             "shop_no": 1,
 *             "variant_code": "P000000R000C",
 *             "options": [
 *                 {
 *                     "name": "Color",
 *                     "value": "Blue"
 *                 },
 *                 {
 *                     "name": "Size",
 *                     "value": "Small"
 *                 }
 *             ],
 *             "display": "T",
 *             "selling": "T",
 *             "additional_amount": "0.00",
 *             "quantity": 6,
 *             "safety_inventory": 7,
 *             "image": "https://{domain}/web/product/medium/202402/b51c97e46192e6e2b97732cf196829ed.jpg"
 *         },
 *         {
 *             "shop_no": 1,
 *             "variant_code": "P000000R000D",
 *             "options": [
 *                 {
 *                     "name": "Color",
 *                     "value": "Red"
 *                 },
 *                 {
 *                     "name": "Size",
 *                     "value": "Small"
 *                 }
 *             ],
 *             "display": "T",
 *             "selling": "T",
 *             "additional_amount": "0.00",
 *             "quantity": 15,
 *             "safety_inventory": 0,
 *             "image": "https://{domain}/web/product/medium/202402/b51c97e46192e6e2b97732cf196829ed.jpg"
 *         }
 *     ]
 * }```
 */
interface RetrieveAListOfProductVariantsResponse {
  variants: Array<{
    shopNo: number;
    variantCode: string;
    options: Array<{
      name: string;
      value: string;
    }>;
    display: Cafe24Enum;
    selling: Cafe24Enum;
    additionalAmount: string;
    quantity: number;
    safetyInventory: number;
    image: string;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "variant": {
 *         "shop_no": 1,
 *         "variant_code": "P000000R000C",
 *         "options": [
 *             {
 *                 "name": "Color",
 *                 "value": "Black"
 *             },
 *             {
 *                 "name": "Size",
 *                 "value": "L"
 *             }
 *         ],
 *         "display": "T",
 *         "selling": "T",
 *         "additional_amount": "0.00",
 *         "quantity": 3,
 *         "safety_inventory": 8,
 *         "image": "https://{domain}/web/product/extra/202402/620fafeb5c3f4616887b96c40579cbe2.png"
 *     }
 * }```
 */
interface RetrieveAProductVariantResponse {
  variant: {
    shopNo: number;
    variantCode: string;
    options: Array<{
      name: string;
      value: string;
    }>;
    display: Cafe24Enum;
    selling: Cafe24Enum;
    additionalAmount: string;
    quantity: number;
    safetyInventory: number;
    image: string;
  };
}

/**
 * @example
 * ```json
 * {
 *     "inventory": {
 *         "shop_no": 1,
 *         "variant_code": "P000000R000C",
 *         "quantity": 0,
 *         "safety_inventory": 0,
 *         "origin_code": "W00000BT"
 *     }
 * }```
 */
interface RetrieveInventoryDetailsOfAProductVariantResponse {
  inventory: {
    shopNo: number;
    variantCode: string;
    quantity: number;
    safetyInventory: number;
    originCode: string;
  };
}

/**
 * @example
 * ```json
 * {
 *     "productsdetail": {
 *         "shop_no": 1,
 *         "product_no": 20,
 *         "detail_image": "https://{domain}/web/product/big/201711/20_shop1_750339.png",
 *         "small_image": "https://{domain}/web/product/small/201711/20_shop1_750339.png",
 *         "additional_images": [
 *             {
 *                 "big": "https://{domain}/web/product/extra/big/201810/a2803c44ee8299486ff19be239cef7d0.jpg",
 *                 "medium": "https://{domain}/web/product/extra/medium/201810/a2803c44ee8299486ff19be239cef7d0.jpg",
 *                 "small": "https://{domain}/web/product/extra/small/201810/a2803c44ee8299486ff19be239cef7d0.jpg"
 *             },
 *             {
 *                 "big": "https://{domain}/web/product/extra/big/201810/e1ab68969d69287a828438c7684b14c4.jpg",
 *                 "medium": "https://{domain}/web/product/extra/medium/201810/e1ab68969d69287a828438c7684b14c4.jpg",
 *                 "small": "https://{domain}/web/product/extra/small/201810/e1ab68969d69287a828438c7684b14c4.jpg"
 *             }
 *         ],
 *         "product_name": "iPhone X",
 *         "manufacturer_name": "APPLE",
 *         "origin_place_value": "Korea",
 *         "retail_price": "0.00",
 *         "price": "11000.00",
 *         "interest_free_period": null,
 *         "eng_product_name": "iPhone Ten",
 *         "custom_product_code": "ABCD",
 *         "points_amount": [
 *             {
 *                 "payment_method": "card",
 *                 "type": "P",
 *                 "value": "110.00",
 *                 "rate": "10.00"
 *             },
 *             {
 *                 "payment_method": "cash",
 *                 "type": "W",
 *                 "value": "100.00",
 *                 "rate": null
 *             }
 *         ],
 *         "brand_name": "BRAND NAME",
 *         "model_name": "A1865",
 *         "price_excluding_tax": "10000.00",
 *         "tax": "1000.00",
 *         "product_code": "P000000X",
 *         "simple_description": "This is Product Description.",
 *         "summary_description": "This is Product Summary.",
 *         "supplier_name": "SUPPLIER NAME",
 *         "made_date": "2019-07-11T00:00:00+09:00",
 *         "review_count": 0,
 *         "expiration_date": {
 *             "start_date": "2019-07-08",
 *             "end_date": "2019-09-14"
 *         },
 *         "coupon_discounted_price": "9000.00",
 *         "trend_name": "TREND NAME",
 *         "shipping_scope": "Domestic/International shipping",
 *         "shipping_fee_type": "R",
 *         "shipping_rates": null,
 *         "shipping_fee": "2500.00",
 *         "discount_price": "10500.00",
 *         "optimum_discount_price": "8500.00",
 *         "shipping_method": "Courier Service",
 *         "promotion_period": {
 *             "start_date": "2019-07-11T00:00:00+09:00",
 *             "end_date": "2019-07-16T23:55:00+09:00",
 *             "dc_price": "220.00"
 *         },
 *         "colors": [
 *             "#000000",
 *             "#C20F0A"
 *         ],
 *         "translated_additional_description": "This is a translated additional description of product.",
 *         "stock_quantity": 10,
 *         "question_count": 0,
 *         "product_material": "Aluminum",
 *         "product_article_count": 0,
 *         "additional_information": [
 *             {
 *                 "key": "custom_option1",
 *                 "name": "gift option",
 *                 "value": "Yes"
 *             },
 *             {
 *                 "key": "custom_option1",
 *                 "name": "benefit option",
 *                 "value": "Yes"
 *             }
 *         ],
 *         "payment_methods": [
 *             "cash",
 *             "mileage"
 *         ],
 *         "add_products": [
 *             14,
 *             15
 *         ]
 *     }
 * }```
 */
interface RetrieveTheDetailsOfAProductResponse {
  productsdetail: {
    shopNo: number;
    productNo: number;
    detailImage: string;
    smallImage: string;
    additionalImages: Array<{
      big: string;
      medium: string;
      small: string;
    }>;
    productName: string;
    manufacturerName: string;
    originPlaceValue: string;
    retailPrice: string;
    price: string;
    interestFreePeriod: any;
    engProductName: string;
    customProductCode: string;
    pointsAmount: Array<{
      paymentMethod: string;
      type: Cafe24Enum;
      value: string;
      rate: string;
    }>;
    brandName: string;
    modelName: string;
    priceExcludingTax: string;
    tax: string;
    productCode: string;
    simpleDescription: string;
    summaryDescription: string;
    supplierName: string;
    madeDate: Cafe24Datetime;
    reviewCount: number;
    expirationDate: {
      startDate: Cafe24Date;
      endDate: Cafe24Date;
    };
    couponDiscountedPrice: string;
    trendName: string;
    shippingScope: string;
    shippingFeeType: Cafe24Enum;
    shippingRates: any;
    shippingFee: string;
    discountPrice: string;
    optimumDiscountPrice: string;
    shippingMethod: string;
    promotionPeriod: {
      startDate: Cafe24Datetime;
      endDate: Cafe24Datetime;
      dcPrice: string;
    };
    colors: Array<string>;
    translatedAdditionalDescription: string;
    stockQuantity: number;
    questionCount: number;
    productMaterial: string;
    productArticleCount: number;
    additionalInformation: Array<{
      key: string;
      name: string;
      value: string;
    }>;
    paymentMethods: Array<string>;
    addProducts: Array<number>;
  };
}

/**
 * @example
 * ```json
 * {
 *     "categories": [
 *         {
 *             "shop_no": 1,
 *             "category_no": 27,
 *             "category_depth": 1,
 *             "parent_category_no": 1,
 *             "category_name": "(large scale classification) Bottoms",
 *             "full_category_name": {
 *                 "1": "(large scale classification) Bottoms",
 *                 "2": null,
 *                 "3": null,
 *                 "4": null
 *             },
 *             "full_category_no": {
 *                 "1": "27",
 *                 "2": null,
 *                 "3": null,
 *                 "4": null
 *             },
 *             "root_category_no": 27,
 *             "use_display": "T",
 *             "display_order": 0,
 *             "hash_tags": [
 *                 "tag1",
 *                 "tag2"
 *             ]
 *         },
 *         {
 *             "shop_no": 1,
 *             "category_no": 28,
 *             "category_depth": 1,
 *             "parent_category_no": 1,
 *             "category_name": "(large scale classification) Accessories",
 *             "full_category_name": {
 *                 "1": "(large scale classification) Accessories",
 *                 "2": null,
 *                 "3": null,
 *                 "4": null
 *             },
 *             "full_category_no": {
 *                 "1": "28",
 *                 "2": null,
 *                 "3": null,
 *                 "4": null
 *             },
 *             "root_category_no": 28,
 *             "use_display": "T",
 *             "display_order": 0,
 *             "hash_tags": [
 *                 "tag1",
 *                 "tag2"
 *             ]
 *         }
 *     ]
 * }```
 */
interface RetrieveAListOfProductCategoriesResponse {
  categories: Array<{
    shopNo: number;
    categoryNo: number;
    categoryDepth: number;
    parentCategoryNo: number;
    categoryName: string;
    fullCategoryName: {
      1: string;
      2: any;
      3: any;
      4: any;
    };
    fullCategoryNo: {
      1: string;
      2: any;
      3: any;
      4: any;
    };
    rootCategoryNo: number;
    useDisplay: Cafe24Enum;
    displayOrder: number;
    hashTags: Array<string>;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "count": 3
 * }```
 */
interface RetrieveACountOfProductCategoriesResponse {
  count: number;
}

/**
 * @example
 * ```json
 * {
 *     "category": {
 *         "shop_no": 1,
 *         "category_no": 40,
 *         "category_depth": 4,
 *         "parent_category_no": 37,
 *         "category_name": "(Detailed Category) Cropped",
 *         "full_category_no": {
 *             "1": "25",
 *             "2": "28",
 *             "3": "30",
 *             "4": "40"
 *         },
 *         "full_category_name": {
 *             "1": "(Main Category) Tops",
 *             "2": "(Middle Category) Tees",
 *             "3": "(Small Category) Long Sleeve",
 *             "4": "(Detailed Category) Cropped"
 *         },
 *         "use_display": "T",
 *         "display_order": 0,
 *         "hash_tags": [
 *             "tag1",
 *             "tag2"
 *         ]
 *     }
 * }```
 */
interface RetrieveAProductCategoryResponse {
  category: {
    shopNo: number;
    categoryNo: number;
    categoryDepth: number;
    parentCategoryNo: number;
    categoryName: string;
    fullCategoryNo: {
      1: string;
      2: string;
      3: string;
      4: string;
    };
    fullCategoryName: {
      1: string;
      2: string;
      3: string;
      4: string;
    };
    useDisplay: Cafe24Enum;
    displayOrder: number;
    hashTags: Array<string>;
  };
}

/**
 * @example
 * ```json
 * {
 *     "carts": {
 *         "duplicated_item": "T",
 *         "variants": [
 *             {
 *                 "quantity": 1,
 *                 "variants_code": "P0000BJU000H",
 *                 "options": [
 *                     {
 *                         "option_code": "O000000D",
 *                         "value_no": 95
 *                     },
 *                     {
 *                         "option_code": "O000000C",
 *                         "value_no": 76
 *                     }
 *                 ],
 *                 "additional_option_values": [
 *                     {
 *                         "key": "item_option_add",
 *                         "title": "Signature",
 *                         "type": "text",
 *                         "value": "John doe"
 *                     },
 *                     {
 *                         "key": "item_option_add",
 *                         "title": "Requests and offers",
 *                         "type": "text",
 *                         "value": "Make it elegant"
 *                     }
 *                 ]
 *             },
 *             {
 *                 "quantity": 2,
 *                 "variants_code": "P0000BJU000D",
 *                 "options": [
 *                     {
 *                         "option_code": "O000000D",
 *                         "value_no": 24
 *                     },
 *                     {
 *                         "option_code": "O000000C",
 *                         "value_no": 56
 *                     }
 *                 ],
 *                 "additional_option_values": [
 *                     {
 *                         "key": "item_option_add",
 *                         "title": "Signature",
 *                         "type": "text",
 *                         "value": "John doe"
 *                     },
 *                     {
 *                         "key": "item_option_add",
 *                         "title": "Requests and offers",
 *                         "type": "text",
 *                         "value": "Make it elegant"
 *                     }
 *                 ]
 *             }
 *         ],
 *         "product_no": 950,
 *         "basket_type": "A0000",
 *         "prepaid_shipping_fee": "P"
 *     }
 * }```
 */
interface CreateAShoppingCartResponse {
  carts: {
    duplicatedItem: Cafe24Enum;
    variants: Array<{
      quantity: number;
      variantsCode: string;
      options: Array<{
        optionCode: string;
        valueNo: number;
      }>;
      additionalOptionValues: Array<{
        key: string;
        title: string;
        type: string;
        value: string;
      }>;
    }>;
    productNo: number;
    basketType: string;
    prepaidShippingFee: Cafe24Enum;
  };
}

/**
 * @example
 * ```json
 * {
 *     "count": 7
 * }```
 */
interface RetrieveACountOfCartsContainingAProductResponse {
  count: number;
}
