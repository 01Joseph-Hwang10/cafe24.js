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
   * @see https://developers.cafe24.com/docs/api/cafe24data/#adeffect-addetails
   */
  adeffectaddetails: {
    /**
     * Scopes:
     * - mall.read_analytics
     *
     * @see https://developers.cafe24.com/docs/api/cafe24data/#list-all-adeffect-addetails
     */
    listAllAdeffectAddetails(
      request: ListAllAdeffectAddetailsRequest,
      options?: base.RequestOptions<ListAllAdeffectAddetailsResponse>,
    ): Promise<ListAllAdeffectAddetailsResponse> {
      return self.createRequest("GET", "/adeffect/addetails", request, options);
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/cafe24data/#carts-action
   */
  cartsaction: {
    /**
     * @description
     * 담긴 상품은 각 상품별로 노출 수 대비 장바구니에 담긴수를 비교한 정보를 제공합니다.
     *
     * Scopes:
     * - mall.read_analytics
     *
     * @see https://developers.cafe24.com/docs/api/cafe24data/#list-all-carts-action
     */
    listAllCartsAction(
      request: ListAllCartsActionRequest,
      options?: base.RequestOptions<ListAllCartsActionResponse>,
    ): Promise<ListAllCartsActionResponse> {
      return self.createRequest("GET", "/carts/action", request, options);
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/cafe24data/#members-sales
   */
  memberssales: {
    /**
     * @description
     * 구매건수와 매출액을 회원과 비회원으로 구분하여 분석한 정보를 제공합니다.
     *
     * Scopes:
     * - mall.read_analytics
     *
     * @see https://developers.cafe24.com/docs/api/cafe24data/#list-all-members-sales
     */
    listAllMembersSales(
      request: ListAllMembersSalesRequest,
      options?: base.RequestOptions<ListAllMembersSalesResponse>,
    ): Promise<ListAllMembersSalesResponse> {
      return self.createRequest("GET", "/members/sales", request, options);
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/cafe24data/#pages-view
   */
  pagesview: {
    /**
     * @description
     * 많이 찾는 페이지는 쇼핑몰 사이트의 웹 페이지 중 방문자가 가장 많이 접속한 페이지들에 대한 분석 정보를 제공합니다.
     *
     * Scopes:
     * - mall.read_analytics
     *
     * @see https://developers.cafe24.com/docs/api/cafe24data/#list-all-pages-view
     */
    listAllPagesView(
      request: ListAllPagesViewRequest,
      options?: base.RequestOptions<ListAllPagesViewResponse>,
    ): Promise<ListAllPagesViewResponse> {
      return self.createRequest("GET", "/pages/view", request, options);
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/cafe24data/#products-categorydetails
   */
  productscategorydetails: {
    /**
     * Scopes:
     * - mall.read_analytics
     *
     * @see https://developers.cafe24.com/docs/api/cafe24data/#list-all-products-categorydetails
     */
    listAllProductsCategorydetails(
      request: ListAllProductsCategorydetailsRequest,
      options?: base.RequestOptions<ListAllProductsCategorydetailsResponse>,
    ): Promise<ListAllProductsCategorydetailsResponse> {
      return self.createRequest(
        "GET",
        "/products/categorydetails",
        request,
        options,
      );
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/cafe24data/#products-sales
   */
  productssales: {
    /**
     * @description
     * 각 상품에 대해 장바구니에 담긴수, 판매건수, 판매물품수, 판매금액 정보를 제공합니다.
     *
     * - 판매건수
     * 조회기간 동안 해당 상품이 판매된 횟수입니다. 결제 완료된 주문만 집계됩니다.
     *
     * - 판매물품수
     * 조회기간 동안 해당 상품이 판매된 수량입니다. 결제 완료된 주문만 집계됩니다.
     *
     * Scopes:
     * - mall.read_analytics
     *
     * @see https://developers.cafe24.com/docs/api/cafe24data/#list-all-products-sales
     */
    listAllProductsSales(
      request: ListAllProductsSalesRequest,
      options?: base.RequestOptions<ListAllProductsSalesResponse>,
    ): Promise<ListAllProductsSalesResponse> {
      return self.createRequest("GET", "/products/sales", request, options);
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/cafe24data/#products-view
   */
  productsview: {
    /**
     * @description
     * 각 상품에 대해 조회수 정보를 제공합니다.
     *
     * 상품 상세 페이지에 접속(노출) 될 경우 집계 됩니다.
     * - 시간, 날짜, IP에 관계없이 모든 접속 횟수를 집계하여 제공되고 있습니다.
     *
     * Scopes:
     * - mall.read_analytics
     *
     * @see https://developers.cafe24.com/docs/api/cafe24data/#data-product-hits-analysis-api
     */
    dataProductHitsAnalysisApi(
      request: DataProductHitsAnalysisApiRequest,
      options?: base.RequestOptions<DataProductHitsAnalysisApiResponse>,
    ): Promise<DataProductHitsAnalysisApiResponse> {
      return self.createRequest("GET", "/products/view", request, options);
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/cafe24data/#sales-orderdetails
   */
  salesorderdetails: {
    /**
     * Scopes:
     * - mall.read_analytics
     *
     * @see https://developers.cafe24.com/docs/api/cafe24data/#list-all-sales-orderdetails
     */
    listAllSalesOrderdetails(
      request: ListAllSalesOrderdetailsRequest,
      options?: base.RequestOptions<ListAllSalesOrderdetailsResponse>,
    ): Promise<ListAllSalesOrderdetailsResponse> {
      return self.createRequest("GET", "/sales/orderdetails", request, options);
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/cafe24data/#sales-paymethods
   */
  salespaymethods: {
    /**
     * @description
     * 구매자가 결제완료(입금완료) 된 일자를 기준으로 결제수단별로 집계한 정보를 제공합니다.
     * 주문일을 기준으로 집계하는 쇼핑몰어드민의 '영업관리'와 집계기준의 차이 때문에 값이 다르게 보일 수 있지만, 실제 주문과 차이는 없습니다.
     *
     * (단, 결제취소, 결제대기, 할인금액, 쿠폰할인 금액은 집계되지 않습니다.)
     *
     * Scopes:
     * - mall.read_analytics
     *
     * @see https://developers.cafe24.com/docs/api/cafe24data/#list-all-sales-paymethods
     */
    listAllSalesPaymethods(
      request: ListAllSalesPaymethodsRequest,
      options?: base.RequestOptions<ListAllSalesPaymethodsResponse>,
    ): Promise<ListAllSalesPaymethodsResponse> {
      return self.createRequest("GET", "/sales/paymethods", request, options);
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/cafe24data/#sales-pervisitors
   */
  salespervisitors: {
    /**
     * @description
     * 매출액과 고객수를 비교하여 고객 1명당의 가치를 평가한 정보를 제공합니다.
     *
     * - 방문고객1인당 매출액
     * 매출액을 방문 고객수로 나눈 금액을 의미하며, 집계된 정보를 바탕으로 방문고객 1인당 발생하는 매출액을 추산 할 수 있습니다.
     * 방문고객1인당 매출액 = 결제완료(입금완료)된 매출액 / 방문자수
     *
     * - 구매고객1인당 매출액
     * 매출액을 구매자수로 나눈 금액을 의미합니다.
     * 집계된 정보를 바탕으로 구매고객 1인당 발생하는 매출액을 추산할 수 있으며, 쇼핑몰 실질 방문자의 구매력을 나타냅니다.
     *
     * Scopes:
     * - mall.read_analytics
     *
     * @see https://developers.cafe24.com/docs/api/cafe24data/#list-all-sales-pervisitors
     */
    listAllSalesPervisitors(
      request: ListAllSalesPervisitorsRequest,
      options?: base.RequestOptions<ListAllSalesPervisitorsResponse>,
    ): Promise<ListAllSalesPervisitorsResponse> {
      return self.createRequest("GET", "/sales/pervisitors", request, options);
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/cafe24data/#sales-times
   */
  salestimes: {
    /**
     * @description
     * 결제완료(입금확인) 된 일자를 기준으로 집계한 정보를 제공합니다.
     * 주문일을 기준으로 집계하는 쇼핑몰어드민의 '영업관리'와 집계기준의 차이 때문에 값이 다르게 보일 수 있지만, 실제 주문과 차이는 없습니다.
     * (단, 환불/교환/취소와 할인/쿠폰할인 금액은 매출액에 반영되지 않습니다.)
     *
     * - 조회기간 동안 발생한 주문의 결제 금액입니다. 결제 완료된 주문만 집계됩니다.
     * - 네이버페이, 카카오페이를 사용하여 결제된 주문도 반영됩니다.
     * - 단, 타 마켓연동 주문은 반영되지 않습니다. (자사몰 매출만 취급)
     *
     * Scopes:
     * - mall.read_analytics
     *
     * @see https://developers.cafe24.com/docs/api/cafe24data/#list-all-sales-times
     */
    listAllSalesTimes(
      request: ListAllSalesTimesRequest,
      options?: base.RequestOptions<ListAllSalesTimesResponse>,
    ): Promise<ListAllSalesTimesResponse> {
      return self.createRequest("GET", "/sales/times", request, options);
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/cafe24data/#visitors-dailyactive
   */
  visitorsdailyactive: {
    /**
     * @description
     * DAU
     * - Daily Active User의 약자입니다.
     * - 해당 일(DAU) 동안 중복 방문을 제거한 순수 사용자 수를 의미합니다.
     *
     * Scopes:
     * - mall.read_analytics
     *
     * @see https://developers.cafe24.com/docs/api/cafe24data/#list-all-visitors-dailyactive
     */
    listAllVisitorsDailyactive(
      request: ListAllVisitorsDailyactiveRequest,
      options?: base.RequestOptions<ListAllVisitorsDailyactiveResponse>,
    ): Promise<ListAllVisitorsDailyactiveResponse> {
      return self.createRequest(
        "GET",
        "/visitors/dailyactive",
        request,
        options,
      );
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/cafe24data/#visitors-pageview
   */
  visitorspageview: {
    /**
     * @description
     * 페이지뷰는 방문자가 쇼핑몰 내에서 본 페이지의 총 수를 의미합니다.
     *
     * Scopes:
     * - mall.read_analytics
     *
     * @see https://developers.cafe24.com/docs/api/cafe24data/#list-all-visitors-pageview
     */
    listAllVisitorsPageview(
      request: ListAllVisitorsPageviewRequest,
      options?: base.RequestOptions<ListAllVisitorsPageviewResponse>,
    ): Promise<ListAllVisitorsPageviewResponse> {
      return self.createRequest("GET", "/visitors/pageview", request, options);
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/cafe24data/#visitors-unique
   */
  visitorsunique: {
    /**
     * @description
     * 순 방문자수는 쇼핑몰에 방문한 전체 방문자 수에서 중복 IP를 제외한 순수 방문자 수 입니다.
     *
     * 중복IP를 제외한 방문자 수이며 동일한 PC 또는 모바일 기기로 여러번 방문시 IP 정보가 다를 경우 접속된 IP수 만큼 순방문자 수가 증가합니다.
     *
     * Scopes:
     * - mall.read_analytics
     *
     * @see https://developers.cafe24.com/docs/api/cafe24data/#list-all-visitors-unique
     */
    listAllVisitorsUnique(
      request: ListAllVisitorsUniqueRequest,
      options?: base.RequestOptions<ListAllVisitorsUniqueResponse>,
    ): Promise<ListAllVisitorsUniqueResponse> {
      return self.createRequest("GET", "/visitors/unique", request, options);
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/cafe24data/#visitors-view
   */
  visitorsview: {
    /**
     * @description
     * 전체 방문자수는 방문자가 쇼핑몰내 방문한 총 수를 의미하며 처음방문수와 재방문수의 합과 일치합니다.
     * 방문자수는 세션타임아웃, 브라우저종료 후 재 방문시 방문자수가 증가 합니다.
     *
     * * 방문의 정의
     *
     * - 방문의 정의는 통계 서비스마다 상이하며, 카페24 애널리틱스는 사용자의 접속~마지막 활동으로부터 60분까지를 기준으로 합니다.
     * - 따라서 한 번 접속했다가 사이트 창을 닫았더라도, 마지막 활동으로부터 60분 이내에 다시 접속했다면 같은 방문입니다.
     * - 마지막 활동으로부터 60분이 경과하면 방문이 종료되었다고 간주하며, 이후에 다시 접속(또는 활동)하더라도 다른 방문으로 집계됩니다.
     * - 또한 방문은 브라우저 별로 구분되므로, 한 기기에서 다른 브라우저로 중복 접속하는 경우 각각 다른 방문으로 집계됩니다.
     *
     * * 예외 사항
     *
     * 만약 방문 의도의 변화가 감지된다면(유입 경로, 검색어, 광고 정보가 이전과 다른 경우) 방문이 유지되고 있더라도 다른 방문으로 집계됩니다.
     *
     * Scopes:
     * - mall.read_analytics
     *
     * @see https://developers.cafe24.com/docs/api/cafe24data/#list-all-visitors-view
     */
    listAllVisitorsView(
      request: ListAllVisitorsViewRequest,
      options?: base.RequestOptions<ListAllVisitorsViewResponse>,
    ): Promise<ListAllVisitorsViewResponse> {
      return self.createRequest("GET", "/visitors/view", request, options);
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/cafe24data/#visitpaths-adkeywordsales
   */
  visitpathsadkeywordsales: {
    /**
     * Scopes:
     * - mall.read_analytics
     *
     * @see https://developers.cafe24.com/docs/api/cafe24data/#list-all-visitpaths-adkeywordsales
     */
    listAllVisitpathsAdkeywordsales(
      request: ListAllVisitpathsAdkeywordsalesRequest,
      options?: base.RequestOptions<ListAllVisitpathsAdkeywordsalesResponse>,
    ): Promise<ListAllVisitpathsAdkeywordsalesResponse> {
      return self.createRequest(
        "GET",
        "/visitpaths/adkeywordsales",
        request,
        options,
      );
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/cafe24data/#visitpaths-ads
   */
  visitpathsads: {
    /**
     * @description
     * 쇼핑몰 유입 시의 광고 정보를 분석한 결과입니다.
     *
     * 해당 광고 정보로 유입되어 방문이 유지되는 동안 발생한 성과만 집계합니다. (직접전환)
     *
     * 광고 정보가 존재하지 않는 경우, '채널 없음'으로 표시됩니다.
     *
     * UTM 파라미터의 종류
     *
     * - utm_source: 광고 매체사(채널)를 식별하는 용도입니다. 예) google, youtube, instagram, facebook 등
     * - utm_medium: 광고 형태(그룹)를 식별하는 용도입니다. 예) display, search, video, cpc, cpm 등
     * - utm_campaign: 광고의 목적이나 컨텐츠 등(캠페인)을 식별하는 용도입니다. 주로 utm_source와 utm_medium보다 세부 구분이 필요할 때 사용됩니다. 예) spring_sale, black_friday 등
     * - utm_term: 광고 키워드를 식별하는 용도입니다. 예) onepiece 등
     * - 올바른 분석을 위하여 utm_source와 utm_medium은 필수로 사용해주세요.
     *
     * Scopes:
     * - mall.read_analytics
     *
     * @see https://developers.cafe24.com/docs/api/cafe24data/#list-all-visitpaths-ads
     */
    listAllVisitpathsAds(
      request: ListAllVisitpathsAdsRequest,
      options?: base.RequestOptions<ListAllVisitpathsAdsResponse>,
    ): Promise<ListAllVisitpathsAdsResponse> {
      return self.createRequest("GET", "/visitpaths/ads", request, options);
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/cafe24data/#visitpaths-adsales
   */
  visitpathsadsales: {
    /**
     * @description
     * 네이버, 다음, 구글, 크리테오 등 광고 매체별로 발생한 방문통계와 구매 관련 분석 정보를 제공합니다.
     *
     * - 광고종류
     * 네이버, 다음, 구글, 크리테오 등 온라인 광고를 제공하는 업체의 광고상품(네이버클릭초이스, 다음클릭스, 구글애드워즈 등)을 의미합니다.
     *
     * Scopes:
     * - mall.read_analytics
     *
     * @see https://developers.cafe24.com/docs/api/cafe24data/#list-all-visitpaths-adsales
     */
    listAllVisitpathsAdsales(
      request: ListAllVisitpathsAdsalesRequest,
      options?: base.RequestOptions<ListAllVisitpathsAdsalesResponse>,
    ): Promise<ListAllVisitpathsAdsalesResponse> {
      return self.createRequest("GET", "/visitpaths/adsales", request, options);
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/cafe24data/#visitpaths-domains
   */
  visitpathsdomains: {
    /**
     * @description
     * 쇼핑몰에 유입되기 직전에 거쳐온 URL이 있는 경우, 해당 URL의 도메인 부분을 의미합니다.
     *
     * 도메인 정보가 없는 경우에는 '참조 도메인 없음'으로 표시됩니다. (일반적으로 '직접 유입' 또는 '다이렉트'라고 부르는 것과 같은 개념)
     *
     * '참조 도메인 없음'의 주요 케이스
     * - 브라우저 주소창에 직접 URL을 입력하여 유입
     * - 즐겨찾기 등록을 통한 유입
     * - 앱을 통한 유입
     * - 유입 출처가 남지 않는 형태의 광고를 통한 유입 등
     *
     * Scopes:
     * - mall.read_analytics
     *
     * @see https://developers.cafe24.com/docs/api/cafe24data/#list-all-visitpaths-domains
     */
    listAllVisitpathsDomains(
      request: ListAllVisitpathsDomainsRequest,
      options?: base.RequestOptions<ListAllVisitpathsDomainsResponse>,
    ): Promise<ListAllVisitpathsDomainsResponse> {
      return self.createRequest("GET", "/visitpaths/domains", request, options);
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/cafe24data/#visitpaths-domainsales
   */
  visitpathsdomainsales: {
    /**
     * @description
     * 방문한 도메인을 기준으로 방문도메인별로 구매건수, 매출액을 제공합니다.
     *
     * - 구매건수
     * 검색엔진, 포탈, 블로그, SNS 등의 도메인이 있는 링크 및 북마크를 통해 쇼핑몰에 방문 한 후 결제완료된 건수를 의미합니다.
     *
     * - 매출액
     * 매출액은 도메인 및 북마크를 통해 방문한 후 결제완료(입금완료)된 금액의 합을 의미합니다.
     *
     * Scopes:
     * - mall.read_analytics
     *
     * @see https://developers.cafe24.com/docs/api/cafe24data/#list-all-visitpaths-domainsales
     */
    listAllVisitpathsDomainsales(
      request: ListAllVisitpathsDomainsalesRequest,
      options?: base.RequestOptions<ListAllVisitpathsDomainsalesResponse>,
    ): Promise<ListAllVisitpathsDomainsalesResponse> {
      return self.createRequest(
        "GET",
        "/visitpaths/domainsales",
        request,
        options,
      );
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/cafe24data/#visitpaths-keyworddetails
   */
  visitpathskeyworddetails: {
    /**
     * Scopes:
     * - mall.read_analytics
     *
     * @see https://developers.cafe24.com/docs/api/cafe24data/#list-all-visitpaths-keyworddetails
     */
    listAllVisitpathsKeyworddetails(
      request: ListAllVisitpathsKeyworddetailsRequest,
      options?: base.RequestOptions<ListAllVisitpathsKeyworddetailsResponse>,
    ): Promise<ListAllVisitpathsKeyworddetailsResponse> {
      return self.createRequest(
        "GET",
        "/visitpaths/keyworddetails",
        request,
        options,
      );
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/cafe24data/#visitpaths-keywords
   */
  visitpathskeywords: {
    /**
     * @description
     * 네이버클릭초이스, 다음클릭스, 구글애드워즈 등 온라인 키워드 검색광고로 발생한 방문통계 정보를 제공합니다.
     *
     * Scopes:
     * - mall.read_analytics
     *
     * @see https://developers.cafe24.com/docs/api/cafe24data/#list-all-visitpaths-keywords
     */
    listAllVisitpathsKeywords(
      request: ListAllVisitpathsKeywordsRequest,
      options?: base.RequestOptions<ListAllVisitpathsKeywordsResponse>,
    ): Promise<ListAllVisitpathsKeywordsResponse> {
      return self.createRequest(
        "GET",
        "/visitpaths/keywords",
        request,
        options,
      );
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/cafe24data/#visitpaths-keywordsales
   */
  visitpathskeywordsales: {
    /**
     * @description
     * 네이버클릭초이스, 다음클릭스, 구글애드워즈 등 온라인 키워드 검색광고로 발생한 방문통계의 구매건수, 매출액 정보를 제공합니다.
     *
     * Scopes:
     * - mall.read_analytics
     *
     * @see https://developers.cafe24.com/docs/api/cafe24data/#list-all-visitpaths-keywordsales
     */
    listAllVisitpathsKeywordsales(
      request: ListAllVisitpathsKeywordsalesRequest,
      options?: base.RequestOptions<ListAllVisitpathsKeywordsalesResponse>,
    ): Promise<ListAllVisitpathsKeywordsalesResponse> {
      return self.createRequest(
        "GET",
        "/visitpaths/keywordsales",
        request,
        options,
      );
    },
  },
  /**
   *
   *
   * @see https://developers.cafe24.com/docs/api/cafe24data/#visitpaths-urls
   */
  visitpathsurls: {
    /**
     * @description
     * 쇼핑몰에 접속하기전 웹사이트 URL을 의미합니다.
     * '도메인(.com, .net, co.kr 등) / 페이지' 형태로 정보를 제공합니다.
     *
     * Scopes:
     * - mall.read_analytics
     *
     * @see https://developers.cafe24.com/docs/api/cafe24data/#list-all-visitpaths-urls
     */
    listAllVisitpathsUrls(
      request: ListAllVisitpathsUrlsRequest,
      options?: base.RequestOptions<ListAllVisitpathsUrlsResponse>,
    ): Promise<ListAllVisitpathsUrlsResponse> {
      return self.createRequest("GET", "/visitpaths/urls", request, options);
    },
  },
});

interface ListAllAdeffectAddetailsRequest {
  /**
   * @description
   * 몰 아이디
   *
   * 샘플 아이디
   */
  mallId: any;
  /**
   * @description
   * 샵 번호
   *
   * 샵 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 시작일
   *
   * 2023-01-01
   */
  startDate: any;
  /**
   * @description
   * 종료일
   *
   * 2023-02-01
   */
  endDate: any;
  /**
   * @description
   * 디바이스 타입
   *
   * pc: pc
   * mobile: 모바일
   * total: 전체
   */
  deviceType?: any;
  /**
   * @description
   * 응답 갯수
   *
   * 최소: 50
   * 최대: 1000
   * 기본: 100
   *
   */
  limit?: any;
  /**
   * @description
   * 오프셋
   *
   */
  offset?: any;
  /**
   * @description
   * 정렬 값
   *
   * ad : 광고매체
   * keyword : 조회수
   * visit_count : 담긴수
   * purchase_count : 구매건수
   *
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * desc: 내림차순
   * asc: 오름차순
   *
   */
  order?: any;
}

interface ListAllCartsActionRequest {
  /**
   * @description
   * 몰 아이디
   *
   * 샘플 아이디
   */
  mallId: any;
  /**
   * @description
   * 샵 번호
   *
   * 샵 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 시작일
   *
   * 2023-01-01
   */
  startDate: any;
  /**
   * @description
   * 종료일
   *
   * 2023-02-01
   */
  endDate: any;
  /**
   * @description
   * 디바이스 타입
   *
   * pc: pc
   * mobile: 모바일
   * total: 전체
   */
  deviceType?: any;
  /**
   * @description
   * 응답 갯수
   *
   * 최소: 50
   * 최대: 1000
   * 기본: 100
   *
   */
  limit?: any;
  /**
   * @description
   * 오프셋
   *
   */
  offset?: any;
  /**
   * @description
   * 정렬 값
   *
   * product_name : 상품명
   * count : 조회수
   * add_cart_count : 담긴수
   * add_cart_rate : 담김율
   *
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * desc: 내림차순
   * asc: 오름차순
   *
   */
  order?: any;
}

interface ListAllMembersSalesRequest {
  /**
   * @description
   * 몰 아이디
   *
   * 샘플 아이디
   */
  mallId: any;
  /**
   * @description
   * 샵 번호
   *
   * 샵 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 시작일
   *
   * 2023-01-01
   */
  startDate: any;
  /**
   * @description
   * 종료일
   *
   * 2023-02-01
   */
  endDate: any;
  /**
   * @description
   * 디바이스 타입
   *
   * pc: pc
   * mobile: 모바일
   * total: 전체
   */
  deviceType?: any;
  /**
   * @description
   * 응답 갯수
   *
   * 최소: 50
   * 최대: 1000
   * 기본: 100
   *
   */
  limit?: any;
}

interface ListAllPagesViewRequest {
  /**
   * @description
   * 몰 아이디
   *
   * 샘플 아이디
   */
  mallId: any;
  /**
   * @description
   * 샵 번호
   *
   * 샵 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 시작일
   *
   * 2023-01-01
   */
  startDate: any;
  /**
   * @description
   * 종료일
   *
   * 2023-02-01
   */
  endDate: any;
  /**
   * @description
   * 디바이스 타입
   *
   * pc: pc
   * mobile: 모바일
   * total: 전체
   */
  deviceType?: any;
  /**
   * @description
   * 응답 갯수
   *
   * 최소: 50
   * 최대: 1000
   * 기본: 100
   *
   */
  limit?: any;
  /**
   * @description
   * 오프셋
   *
   */
  offset?: any;
  /**
   * @description
   * 정렬 값
   *
   * url : url
   * count : 조회수
   * visit_count : 방문자수
   * first_visit_count : 처음접속수
   *
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * desc: 내림차순
   * asc: 오름차순
   *
   */
  order?: any;
}

interface ListAllProductsCategorydetailsRequest {
  /**
   * @description
   * 몰 아이디
   *
   * 샘플 아이디
   */
  mallId: any;
  /**
   * @description
   * 샵 번호
   *
   * 샵 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 시작일
   *
   * 2023-01-01
   */
  startDate: any;
  /**
   * @description
   * 종료일
   *
   * 2023-02-01
   */
  endDate: any;
  /**
   * @description
   * 디바이스 타입
   *
   * pc: pc
   * mobile: 모바일
   * total: 전체
   */
  deviceType?: any;
  /**
   * @description
   * 응답 갯수
   *
   * 최소: 50
   * 최대: 1000
   * 기본: 100
   *
   */
  limit?: any;
  /**
   * @description
   * 오프셋
   *
   */
  offset?: any;
  /**
   * @description
   * 정렬 값
   *
   * product_no : 상품번호
   * product_name : 상품명
   * order_count : 판매건수
   * order_product_count : 판매물품수
   * order_amount : 매출액
   *
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * desc: 내림차순
   * asc: 오름차순
   *
   */
  order?: any;
}

interface ListAllProductsSalesRequest {
  /**
   * @description
   * 몰 아이디
   *
   * 샘플 아이디
   */
  mallId: any;
  /**
   * @description
   * 샵 번호
   *
   * 샵 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 시작일
   *
   * 2023-01-01
   */
  startDate: any;
  /**
   * @description
   * 종료일
   *
   * 2023-02-01
   */
  endDate: any;
  /**
   * @description
   * 디바이스 타입
   *
   * pc: pc
   * mobile: 모바일
   * total: 전체
   */
  deviceType?: any;
  /**
   * @description
   * 응답 갯수
   *
   * 최소: 50
   * 최대: 1000
   * 기본: 100
   *
   */
  limit?: any;
  /**
   * @description
   * 오프셋
   *
   */
  offset?: any;
  /**
   * @description
   * 정렬 값
   *
   * product_no : 상품번호
   * product_name : 상품명
   * order_count : 판매건수
   * order_product_count : 판매물품수
   * order_amount : 매출액
   *
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * desc: 내림차순
   * asc: 오름차순
   *
   */
  order?: any;
}

interface DataProductHitsAnalysisApiRequest {
  /**
   * @description
   * 몰 아이디
   *
   * 샘플 아이디
   */
  mallId: any;
  /**
   * @description
   * 샵 번호
   *
   * 샵 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 시작일
   *
   * 2023-01-01
   */
  startDate: any;
  /**
   * @description
   * 종료일
   *
   * 2023-02-01
   */
  endDate: any;
  /**
   * @description
   * 디바이스 타입
   *
   * pc: pc
   * mobile: 모바일
   * total: 전체
   */
  deviceType?: any;
  /**
   * @description
   * 응답 갯수
   *
   * 최소: 50
   * 최대: 1000
   * 기본: 100
   *
   */
  limit?: any;
  /**
   * @description
   * 오프셋
   *
   */
  offset?: any;
  /**
   * @description
   * 정렬 값
   *
   * product_no : 상품번호
   * product_name : 상품명
   * count : 조회수
   *
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * desc: 내림차순
   * asc: 오름차순
   *
   */
  order?: any;
}

interface ListAllSalesOrderdetailsRequest {
  /**
   * @description
   * 몰 아이디
   *
   * 샘플 아이디
   */
  mallId: any;
  /**
   * @description
   * 샵 번호
   *
   * 샵 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 시작일
   *
   * 2023-01-01
   */
  startDate: any;
  /**
   * @description
   * 종료일
   *
   * 2023-02-01
   */
  endDate: any;
  /**
   * @description
   * 디바이스 타입
   *
   * pc: pc
   * mobile: 모바일
   * total: 전체
   */
  deviceType?: any;
  /**
   * @description
   * 주문번호
   *
   * 20240201-0000000
   *
   */
  orderId?: any;
  /**
   * @description
   * 응답 갯수
   *
   * 최소: 50
   * 최대: 1000
   * 기본: 100
   *
   */
  limit?: any;
  /**
   * @description
   * 오프셋
   *
   */
  offset?: any;
  /**
   * @description
   * 정렬 값
   *
   * order_id : 주문번호
   * ad : 광고매체
   * keyword : 검색어
   * payment_method : 결제수단
   * order_amount : 매출액
   *
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * desc: 내림차순
   * asc: 오름차순
   *
   */
  order?: any;
}

interface ListAllSalesPaymethodsRequest {
  /**
   * @description
   * 몰 아이디
   *
   * 샘플 아이디
   */
  mallId: any;
  /**
   * @description
   * 샵 번호
   *
   * 샵 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 시작일
   *
   * 2023-01-01
   */
  startDate: any;
  /**
   * @description
   * 종료일
   *
   * 2023-02-01
   */
  endDate: any;
  /**
   * @description
   * 디바이스 타입
   *
   * pc: pc
   * mobile: 모바일
   * total: 전체
   */
  deviceType?: any;
  /**
   * @description
   * 응답 갯수
   *
   * 최소: 50
   * 최대: 1000
   * 기본: 100
   *
   */
  limit?: any;
  /**
   * @description
   * 오프셋
   *
   */
  offset?: any;
  /**
   * @description
   * 정렬 값
   *
   * payment_method : 결제수단
   * buyers_count : 구매자수
   * order_count : 구매건수
   * order_amount : 매출액
   *
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * desc: 내림차순
   * asc: 오름차순
   *
   */
  order?: any;
}

interface ListAllSalesPervisitorsRequest {
  /**
   * @description
   * 몰 아이디
   *
   * 샘플 아이디
   */
  mallId: any;
  /**
   * @description
   * 샵 번호
   *
   * 샵 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 시작일
   *
   * 2023-01-01
   */
  startDate: any;
  /**
   * @description
   * 종료일
   *
   * 2023-02-01
   */
  endDate: any;
  /**
   * @description
   * 디바이스 타입
   *
   * pc: pc
   * mobile: 모바일
   * total: 전체
   */
  deviceType?: any;
  /**
   * @description
   * 응답 갯수
   *
   * 최소: 50
   * 최대: 1000
   * 기본: 100
   *
   */
  limit?: any;
}

interface ListAllSalesTimesRequest {
  /**
   * @description
   * 몰 아이디
   *
   * 샘플 아이디
   */
  mallId: any;
  /**
   * @description
   * 샵 번호
   *
   * 샵 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 시작일
   *
   * 2023-01-01
   */
  startDate: any;
  /**
   * @description
   * 종료일
   *
   * 2023-02-01
   */
  endDate: any;
  /**
   * @description
   * 디바이스 타입
   *
   * pc: pc
   * mobile: 모바일
   * total: 전체
   */
  deviceType?: any;
  /**
   * @description
   * 응답 갯수
   *
   * 최소: 50
   * 최대: 1000
   * 기본: 100
   *
   */
  limit?: any;
  /**
   * @description
   * 오프셋
   *
   */
  offset?: any;
  /**
   * @description
   * 정렬 값
   *
   * hour : 시간대
   * buyers_count : 구매자수
   * order_count : 구매건수
   * order_amount : 매출액
   *
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * desc: 내림차순
   * asc: 오름차순
   *
   */
  order?: any;
}

interface ListAllVisitorsDailyactiveRequest {
  /**
   * @description
   * 몰 아이디
   *
   * 샘플 아이디
   */
  mallId: any;
  /**
   * @description
   * 샵 번호
   *
   * 샵 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 시작일
   *
   * 2023-01-01
   */
  startDate: any;
  /**
   * @description
   * 종료일
   *
   * 2023-02-01
   */
  endDate: any;
  /**
   * @description
   * 디바이스 타입
   *
   * pc: pc
   * mobile: 모바일
   * total: 전체
   */
  deviceType?: any;
  /**
   * @description
   * 응답 갯수
   *
   * 최소: 50
   * 최대: 1000
   * 기본: 100
   *
   */
  limit?: any;
  /**
   * @description
   * 오프셋
   *
   */
  offset?: any;
  /**
   * @description
   * 정렬 값
   *
   * date : 날짜
   * user_count : 사용자수
   *
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * desc: 내림차순
   * asc: 오름차순
   *
   */
  order?: any;
}

interface ListAllVisitorsPageviewRequest {
  /**
   * @description
   * 몰 아이디
   *
   * 샘플 아이디
   */
  mallId: any;
  /**
   * @description
   * 샵 번호
   *
   * 샵 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 시작일
   *
   * 2023-01-01
   */
  startDate: any;
  /**
   * @description
   * 종료일
   *
   * 2023-02-01
   */
  endDate: any;
  /**
   * @description
   * 디바이스 타입
   *
   * pc: pc
   * mobile: 모바일
   * total: 전체
   */
  deviceType?: any;
  /**
   * @description
   * 데이터 형식
   *
   * day: 일별
   * hour: 시간별
   *
   */
  formatType?: any;
  /**
   * @description
   * 응답 갯수
   *
   * 최소: 50
   * 최대: 1000
   * 기본: 100
   *
   */
  limit?: any;
  /**
   * @description
   * 오프셋
   *
   */
  offset?: any;
  /**
   * @description
   * 정렬 값
   *
   * date : 날짜
   * page_view : 페이지뷰
   *
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * desc: 내림차순
   * asc: 오름차순
   *
   */
  order?: any;
}

interface ListAllVisitorsUniqueRequest {
  /**
   * @description
   * 몰 아이디
   *
   * 샘플 아이디
   */
  mallId: any;
  /**
   * @description
   * 샵 번호
   *
   * 샵 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 시작일
   *
   * 2023-01-01
   */
  startDate: any;
  /**
   * @description
   * 종료일
   *
   * 2023-02-01
   */
  endDate: any;
  /**
   * @description
   * 디바이스 타입
   *
   * pc: pc
   * mobile: 모바일
   * total: 전체
   */
  deviceType?: any;
  /**
   * @description
   * 응답 갯수
   *
   * 최소: 50
   * 최대: 1000
   * 기본: 100
   *
   */
  limit?: any;
  /**
   * @description
   * 오프셋
   *
   */
  offset?: any;
  /**
   * @description
   * 정렬 값
   *
   * date : 날짜
   * unique_visit_count : 순방문자수
   *
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * desc: 내림차순
   * asc: 오름차순
   *
   */
  order?: any;
}

interface ListAllVisitorsViewRequest {
  /**
   * @description
   * 몰 아이디
   *
   * 샘플 아이디
   */
  mallId: any;
  /**
   * @description
   * 샵 번호
   *
   * 샵 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 시작일
   *
   * 2023-01-01
   */
  startDate: any;
  /**
   * @description
   * 종료일
   *
   * 2023-02-01
   */
  endDate: any;
  /**
   * @description
   * 디바이스 타입
   *
   * pc: pc
   * mobile: 모바일
   * total: 전체
   */
  deviceType?: any;
  /**
   * @description
   * 데이터 형식
   *
   * day: 일별
   * hour: 시간별
   *
   */
  formatType?: any;
  /**
   * @description
   * 응답 갯수
   *
   * 최소: 50
   * 최대: 1000
   * 기본: 100
   *
   */
  limit?: any;
  /**
   * @description
   * 오프셋
   *
   */
  offset?: any;
  /**
   * @description
   * 정렬 값
   *
   * date : 날짜
   * visit_count : 방문자수
   * first_visit_count : 처음방문자수
   * re_visit_count : 재방문자수
   *
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * desc: 내림차순
   * asc: 오름차순
   *
   */
  order?: any;
}

interface ListAllVisitpathsAdkeywordsalesRequest {
  /**
   * @description
   * 몰 아이디
   *
   * 샘플 아이디
   */
  mallId: any;
  /**
   * @description
   * 샵 번호
   *
   * 샵 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 시작일
   *
   * 2023-01-01
   */
  startDate: any;
  /**
   * @description
   * 종료일
   *
   * 2023-02-01
   */
  endDate: any;
  /**
   * @description
   * 디바이스 타입
   *
   * pc: pc
   * mobile: 모바일
   * total: 전체
   */
  deviceType?: any;
  /**
   * @description
   * 응답 갯수
   *
   * 최소: 50
   * 최대: 1000
   * 기본: 100
   *
   */
  limit?: any;
  /**
   * @description
   * 오프셋
   *
   */
  offset?: any;
  /**
   * @description
   * 정렬 값
   *
   * keyword : 검색어
   * order_count : 구매건수
   * order_amount : 매출액
   *
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * desc: 내림차순
   * asc: 오름차순
   *
   */
  order?: any;
}

interface ListAllVisitpathsAdsRequest {
  /**
   * @description
   * 몰 아이디
   *
   * 샘플 아이디
   */
  mallId: any;
  /**
   * @description
   * 샵 번호
   *
   * 샵 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 시작일
   *
   * 2023-01-01
   */
  startDate: any;
  /**
   * @description
   * 종료일
   *
   * 2023-02-01
   */
  endDate: any;
  /**
   * @description
   * 디바이스 타입
   *
   * pc: pc
   * mobile: 모바일
   * total: 전체
   */
  deviceType?: any;
  /**
   * @description
   * 응답 갯수
   *
   * 최소: 50
   * 최대: 1000
   * 기본: 100
   *
   */
  limit?: any;
  /**
   * @description
   * 오프셋
   *
   */
  offset?: any;
  /**
   * @description
   * 정렬 값
   *
   * ad : 광고매체명
   * visit_count : 방문수
   *
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * desc: 내림차순
   * asc: 오름차순
   *
   */
  order?: any;
}

interface ListAllVisitpathsAdsalesRequest {
  /**
   * @description
   * 몰 아이디
   *
   * 샘플 아이디
   */
  mallId: any;
  /**
   * @description
   * 샵 번호
   *
   * 샵 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 시작일
   *
   * 2023-01-01
   */
  startDate: any;
  /**
   * @description
   * 종료일
   *
   * 2023-02-01
   */
  endDate: any;
  /**
   * @description
   * 디바이스 타입
   *
   * pc: pc
   * mobile: 모바일
   * total: 전체
   */
  deviceType?: any;
  /**
   * @description
   * 응답 갯수
   *
   * 최소: 50
   * 최대: 1000
   * 기본: 100
   *
   */
  limit?: any;
  /**
   * @description
   * 오프셋
   *
   */
  offset?: any;
  /**
   * @description
   * 정렬 값
   *
   * ad : 광고매체명
   * order_count : 구매건수
   * order_amount : 매출액
   *
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * desc: 내림차순
   * asc: 오름차순
   *
   */
  order?: any;
}

interface ListAllVisitpathsDomainsRequest {
  /**
   * @description
   * 몰 아이디
   *
   * 샘플 아이디
   */
  mallId: any;
  /**
   * @description
   * 샵 번호
   *
   * 샵 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 시작일
   *
   * 2023-01-01
   */
  startDate: any;
  /**
   * @description
   * 종료일
   *
   * 2023-02-01
   */
  endDate: any;
  /**
   * @description
   * 디바이스 타입
   *
   * pc: pc
   * mobile: 모바일
   * total: 전체
   */
  deviceType?: any;
  /**
   * @description
   * 응답 갯수
   *
   * 최소: 50
   * 최대: 1000
   * 기본: 100
   *
   */
  limit?: any;
  /**
   * @description
   * 오프셋
   *
   */
  offset?: any;
  /**
   * @description
   * 정렬 값
   *
   * domain : 도메인
   * visit_count : 방문수
   *
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * desc: 내림차순
   * asc: 오름차순
   *
   */
  order?: any;
}

interface ListAllVisitpathsDomainsalesRequest {
  /**
   * @description
   * 몰 아이디
   *
   * 샘플 아이디
   */
  mallId: any;
  /**
   * @description
   * 샵 번호
   *
   * 샵 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 시작일
   *
   * 2023-01-01
   */
  startDate: any;
  /**
   * @description
   * 종료일
   *
   * 2023-02-01
   */
  endDate: any;
  /**
   * @description
   * 디바이스 타입
   *
   * pc: pc
   * mobile: 모바일
   * total: 전체
   */
  deviceType?: any;
  /**
   * @description
   * 응답 갯수
   *
   * 최소: 50
   * 최대: 1000
   * 기본: 100
   *
   */
  limit?: any;
  /**
   * @description
   * 오프셋
   *
   */
  offset?: any;
  /**
   * @description
   * 정렬 값
   *
   * domain : 도메인
   * order_count : 구매건수
   * order_amount : 매출액
   *
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * desc: 내림차순
   * asc: 오름차순
   *
   */
  order?: any;
}

interface ListAllVisitpathsKeyworddetailsRequest {
  /**
   * @description
   * 몰 아이디
   *
   * 샘플 아이디
   */
  mallId: any;
  /**
   * @description
   * 샵 번호
   *
   * 샵 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 시작일
   *
   * 2023-01-01
   */
  startDate: any;
  /**
   * @description
   * 종료일
   *
   * 2023-02-01
   */
  endDate: any;
  /**
   * @description
   * 디바이스 타입
   *
   * pc: pc
   * mobile: 모바일
   * total: 전체
   */
  deviceType?: any;
  /**
   * @description
   * 응답 갯수
   *
   * 최소: 50
   * 최대: 1000
   * 기본: 100
   *
   */
  limit?: any;
  /**
   * @description
   * 오프셋
   *
   */
  offset?: any;
  /**
   * @description
   * 정렬 값
   *
   * keyword : 검색어
   * engine: 검색엔진
   * purchase_count : 구매건수
   * order_amount : 매출액
   *
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * desc: 내림차순
   * asc: 오름차순
   *
   */
  order?: any;
}

interface ListAllVisitpathsKeywordsRequest {
  /**
   * @description
   * 몰 아이디
   *
   * 샘플 아이디
   */
  mallId: any;
  /**
   * @description
   * 샵 번호
   *
   * 샵 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 시작일
   *
   * 2023-01-01
   */
  startDate: any;
  /**
   * @description
   * 종료일
   *
   * 2023-02-01
   */
  endDate: any;
  /**
   * @description
   * 디바이스 타입
   *
   * pc: pc
   * mobile: 모바일
   * total: 전체
   */
  deviceType?: any;
  /**
   * @description
   * 응답 갯수
   *
   * 최소: 50
   * 최대: 1000
   * 기본: 100
   *
   */
  limit?: any;
  /**
   * @description
   * 오프셋
   *
   */
  offset?: any;
  /**
   * @description
   * 정렬 값
   *
   * keyword : 검색어
   * visit_count : 방문수
   *
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * desc: 내림차순
   * asc: 오름차순
   *
   */
  order?: any;
}

interface ListAllVisitpathsKeywordsalesRequest {
  /**
   * @description
   * 몰 아이디
   *
   * 샘플 아이디
   */
  mallId: any;
  /**
   * @description
   * 샵 번호
   *
   * 샵 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 시작일
   *
   * 2023-01-01
   */
  startDate: any;
  /**
   * @description
   * 종료일
   *
   * 2023-02-01
   */
  endDate: any;
  /**
   * @description
   * 디바이스 타입
   *
   * pc: pc
   * mobile: 모바일
   * total: 전체
   */
  deviceType?: any;
  /**
   * @description
   * 응답 갯수
   *
   * 최소: 50
   * 최대: 1000
   * 기본: 100
   *
   */
  limit?: any;
  /**
   * @description
   * 오프셋
   *
   */
  offset?: any;
  /**
   * @description
   * 정렬 값
   *
   * keyword : 검색어
   * order_count : 구매건수
   * order_amount : 매출액
   *
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * desc: 내림차순
   * asc: 오름차순
   *
   */
  order?: any;
}

interface ListAllVisitpathsUrlsRequest {
  /**
   * @description
   * 몰 아이디
   *
   * 샘플 아이디
   */
  mallId: any;
  /**
   * @description
   * 샵 번호
   *
   * 샵 번호
   *
   */
  shopNo?: any;
  /**
   * @description
   * 시작일
   *
   * 2023-01-01
   */
  startDate: any;
  /**
   * @description
   * 종료일
   *
   * 2023-02-01
   */
  endDate: any;
  /**
   * @description
   * 디바이스 타입
   *
   * pc: pc
   * mobile: 모바일
   * total: 전체
   */
  deviceType?: any;
  /**
   * @description
   * 응답 갯수
   *
   * 최소: 50
   * 최대: 1000
   * 기본: 100
   *
   */
  limit?: any;
  /**
   * @description
   * 오프셋
   *
   */
  offset?: any;
  /**
   * @description
   * 정렬 값
   *
   * url : url
   * visit_count : 방문수
   *
   */
  sort?: any;
  /**
   * @description
   * 정렬 순서
   *
   * desc: 내림차순
   * asc: 오름차순
   *
   */
  order?: any;
}

/**
 * @example
 * ```json
 * {
 *     "addetails": [
 *         {
 *             "visit_count": 1000,
 *             "ad": "ad",
 *             "order_amount_per_visitor": "1800.70",
 *             "visit_rate": "30.50",
 *             "order_amount": 350000,
 *             "purchase_rate": "20.50",
 *             "purchase_count": 1000,
 *             "keyword": "keyword",
 *             "order_amount_per_buyer": "1900.30"
 *         },
 *         {
 *             "visit_count": 2000,
 *             "ad": "ad2",
 *             "order_amount_per_visitor": "3601.40",
 *             "visit_rate": "61.00",
 *             "order_amount": 700000,
 *             "purchase_rate": "41.00",
 *             "purchase_count": 2000,
 *             "keyword": "keyword2",
 *             "order_amount_per_buyer": "3800.60"
 *         }
 *     ]
 * }
 * ```
 */
interface ListAllAdeffectAddetailsResponse {
  addetails: Array<{
    visitCount: number;
    ad: string;
    orderAmountPerVisitor: string;
    visitRate: string;
    orderAmount: number;
    purchaseRate: string;
    purchaseCount: number;
    keyword: string;
    orderAmountPerBuyer: string;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "count": [
 *         {
 *             "add_cart_count": 30000,
 *             "add_cart_rate": 30,
 *             "count": 200,
 *             "product_no": 100,
 *             "product_name": "shirt"
 *         },
 *         {
 *             "count": 400,
 *             "add_cart_count": 60000,
 *             "add_cart_rate": 60,
 *             "product_no": 200,
 *             "product_name": "shirt2"
 *         }
 *     ]
 * }
 * ```
 */
interface ListAllCartsActionResponse {
  count: Array<{
    addCartCount: number;
    addCartRate: number;
    count: number;
    productNo: number;
    productName: string;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "sales": [
 *         {
 *             "nonmember_order_count": 2000,
 *             "member_order_count": 1000,
 *             "member_order_amount": 90000,
 *             "nonmember_order_amount": 80000
 *         },
 *         {
 *             "member_order_amount": 180000,
 *             "nonmember_order_amount": 160000,
 *             "nonmember_order_count": 4000,
 *             "member_order_count": 2000
 *         }
 *     ]
 * }
 * ```
 */
interface ListAllMembersSalesResponse {
  sales: Array<{
    nonmemberOrderCount: number;
    memberOrderCount: number;
    memberOrderAmount: number;
    nonmemberOrderAmount: number;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "pages": [
 *         {
 *             "visit_count": 2000,
 *             "first_visit_count": 3000,
 *             "count": 1000,
 *             "url": "cafe24.com"
 *         },
 *         {
 *             "count": 2000,
 *             "visit_count": 4000,
 *             "first_visit_count": 6000,
 *             "url": "cafe24.com2"
 *         }
 *     ]
 * }
 * ```
 */
interface ListAllPagesViewResponse {
  pages: Array<{
    visitCount: number;
    firstVisitCount: number;
    count: number;
    url: string;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "categorydetails": [
 *         {
 *             "sales_count_per_category": 1025,
 *             "category_name": "CategoryName",
 *             "category_no": 1,
 *             "product_code": "productCode",
 *             "carts_count_per_category": 32,
 *             "product_no": 98766789,
 *             "product_name": "productName",
 *             "sales_item_per_category": 2315,
 *             "sales_price_per_category": "6128.25"
 *         },
 *         {
 *             "sales_count_per_category": 2050,
 *             "category_name": "CategoryName2",
 *             "category_no": 2,
 *             "product_code": "productCode2",
 *             "carts_count_per_category": 64,
 *             "product_no": 197533578,
 *             "product_name": "productName2",
 *             "sales_item_per_category": 4630,
 *             "sales_price_per_category": "12256.50"
 *         }
 *     ]
 * }
 * ```
 */
interface ListAllProductsCategorydetailsResponse {
  categorydetails: Array<{
    salesCountPerCategory: number;
    categoryName: string;
    categoryNo: number;
    productCode: string;
    cartsCountPerCategory: number;
    productNo: number;
    productName: string;
    salesItemPerCategory: number;
    salesPricePerCategory: string;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "sales": [
 *         {
 *             "order_count": 3,
 *             "order_product_count": 0,
 *             "order_amount": 30000,
 *             "product_no": 98766789,
 *             "product_name": "sampleProductNames"
 *         },
 *         {
 *             "order_count": 6,
 *             "order_product_count": 0,
 *             "product_no": 197533578,
 *             "product_name": "sampleProductNames2",
 *             "order_amount": 60000
 *         }
 *     ]
 * }
 * ```
 */
interface ListAllProductsSalesResponse {
  sales: Array<{
    orderCount: number;
    orderProductCount: number;
    orderAmount: number;
    productNo: number;
    productName: string;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "count": [
 *         {
 *             "count": 3,
 *             "product_no": 98766789,
 *             "product_name": "sampleProductNames"
 *         },
 *         {
 *             "count": 6,
 *             "product_no": 197533578,
 *             "product_name": "sampleProductNames2"
 *         }
 *     ]
 * }
 * ```
 */
interface DataProductHitsAnalysisApiResponse {
  count: Array<{
    count: number;
    productNo: number;
    productName: string;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "orderdetails": [
 *         {
 *             "order_date": "2024-06-04",
 *             "ad": "ad",
 *             "order_amount": 218200,
 *             "campaign": "campaign",
 *             "medium": "medium",
 *             "keyword": "keyword",
 *             "order_id": "20240201-0000000",
 *             "content": "content",
 *             "payment_method": "card"
 *         },
 *         {
 *             "order_date": "2024-06-05",
 *             "ad": "ad2",
 *             "order_amount": 436400,
 *             "campaign": "campaign2",
 *             "medium": "medium2",
 *             "keyword": "keyword2",
 *             "order_id": "20240201-00000002",
 *             "content": "content2",
 *             "payment_method": "card2"
 *         }
 *     ]
 * }
 * ```
 */
interface ListAllSalesOrderdetailsResponse {
  orderdetails: Array<{
    orderDate: Cafe24Date;
    ad: string;
    orderAmount: number;
    campaign: string;
    medium: string;
    keyword: string;
    orderId: string;
    content: string;
    paymentMethod: string;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "paymethods": [
 *         {
 *             "buyers_count": 100,
 *             "order_count": 200,
 *             "order_amount": 30000,
 *             "payment_method": "c"
 *         },
 *         {
 *             "buyers_count": 200,
 *             "order_count": 400,
 *             "payment_method": "c2",
 *             "order_amount": 60000
 *         }
 *     ]
 * }
 * ```
 */
interface ListAllSalesPaymethodsResponse {
  paymethods: Array<{
    buyersCount: number;
    orderCount: number;
    orderAmount: number;
    paymentMethod: string;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "pervisitors": [
 *         {
 *             "order_amount_per_visitor": 30000,
 *             "order_amount_per_buyer": 30000
 *         },
 *         {
 *             "order_amount_per_visitor": 60000,
 *             "order_amount_per_buyer": 60000
 *         }
 *     ]
 * }
 * ```
 */
interface ListAllSalesPervisitorsResponse {
  pervisitors: Array<{
    orderAmountPerVisitor: number;
    orderAmountPerBuyer: number;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "times": [
 *         {
 *             "buyers_count": 100,
 *             "hour": 1,
 *             "order_count": 200,
 *             "order_amount": 30000
 *         },
 *         {
 *             "buyers_count": 200,
 *             "hour": 2,
 *             "order_count": 400,
 *             "order_amount": 60000
 *         }
 *     ]
 * }
 * ```
 */
interface ListAllSalesTimesResponse {
  times: Array<{
    buyersCount: number;
    hour: number;
    orderCount: number;
    orderAmount: number;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "dailyactive": [
 *         {
 *             "date": "2023-01-01",
 *             "user_count": 32
 *         },
 *         {
 *             "date": "2023-01-02",
 *             "user_count": 64
 *         }
 *     ]
 * }
 * ```
 */
interface ListAllVisitorsDailyactiveResponse {
  dailyactive: Array<{
    date: Cafe24Date;
    userCount: number;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "pageview": [
 *         {
 *             "date": "2023-01-01",
 *             "hour": 1,
 *             "page_view": 32
 *         },
 *         {
 *             "date": "2023-01-02",
 *             "page_view": 64,
 *             "hour": 2
 *         }
 *     ]
 * }
 * ```
 */
interface ListAllVisitorsPageviewResponse {
  pageview: Array<{
    date: Cafe24Date;
    hour: number;
    pageView: number;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "unique": [
 *         {
 *             "date": "2023-01-01",
 *             "unique_visit_count": 32
 *         },
 *         {
 *             "date": "2023-01-02",
 *             "unique_visit_count": 64
 *         }
 *     ]
 * }
 * ```
 */
interface ListAllVisitorsUniqueResponse {
  unique: Array<{
    date: Cafe24Date;
    uniqueVisitCount: number;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "view": [
 *         {
 *             "date": "2023-01-01",
 *             "visit_count": 32,
 *             "first_visit_count": 20,
 *             "hour": 1,
 *             "re_visit_count": 12
 *         },
 *         {
 *             "date": "2023-01-02",
 *             "visit_count": 64,
 *             "first_visit_count": 40,
 *             "hour": 2,
 *             "re_visit_count": 24
 *         }
 *     ]
 * }
 * ```
 */
interface ListAllVisitorsViewResponse {
  view: Array<{
    date: Cafe24Date;
    visitCount: number;
    firstVisitCount: number;
    hour: number;
    reVisitCount: number;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "adkeywordsales": [
 *         {
 *             "ad": "ad",
 *             "order_count": 1000,
 *             "order_amount": 10000,
 *             "keyword": "keyword"
 *         },
 *         {
 *             "ad": "ad2",
 *             "order_count": 2000,
 *             "keyword": "keyword2",
 *             "order_amount": 20000
 *         }
 *     ]
 * }
 * ```
 */
interface ListAllVisitpathsAdkeywordsalesResponse {
  adkeywordsales: Array<{
    ad: string;
    orderCount: number;
    orderAmount: number;
    keyword: string;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "ads": [
 *         {
 *             "visit_count": "순방문자수",
 *             "ad": "ad"
 *         },
 *         {
 *             "visit_count": "순방문자수2",
 *             "ad": "ad2"
 *         }
 *     ]
 * }
 * ```
 */
interface ListAllVisitpathsAdsResponse {
  ads: Array<{
    visitCount: string;
    ad: string;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "adsales": [
 *         {
 *             "ad": "ad",
 *             "order_count": 1000,
 *             "order_amount": 10000
 *         },
 *         {
 *             "ad": "ad2",
 *             "order_count": 2000,
 *             "order_amount": 20000
 *         }
 *     ]
 * }
 * ```
 */
interface ListAllVisitpathsAdsalesResponse {
  adsales: Array<{
    ad: string;
    orderCount: number;
    orderAmount: number;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "domains": [
 *         {
 *             "visit_count": 1000,
 *             "domain": "cafe24.com"
 *         },
 *         {
 *             "visit_count": 2000,
 *             "domain": "cafe24.com2"
 *         }
 *     ]
 * }
 * ```
 */
interface ListAllVisitpathsDomainsResponse {
  domains: Array<{
    visitCount: number;
    domain: string;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "domainsales": [
 *         {
 *             "order_count": 1000,
 *             "domain": "cafe24.com",
 *             "order_amount": 10000
 *         },
 *         {
 *             "order_count": 2000,
 *             "domain": "cafe24.com2",
 *             "order_amount": 20000
 *         }
 *     ]
 * }
 * ```
 */
interface ListAllVisitpathsDomainsalesResponse {
  domainsales: Array<{
    orderCount: number;
    domain: string;
    orderAmount: number;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "keyworddetails": [
 *         {
 *             "visit_count": 1000,
 *             "engine": "engine",
 *             "order_amount_per_visitor": "1300",
 *             "order_amount": 360000,
 *             "purchase_rate": "20.50",
 *             "purchase_count": 1500,
 *             "keyword": "keyword",
 *             "order_amount_per_buyer": "1900"
 *         },
 *         {
 *             "visit_count": 2000,
 *             "engine": "engine2",
 *             "order_amount_per_visitor": "2600.00",
 *             "order_amount": 720000,
 *             "purchase_rate": "41.00",
 *             "purchase_count": 3000,
 *             "keyword": "keyword2",
 *             "order_amount_per_buyer": "3800.00"
 *         }
 *     ]
 * }
 * ```
 */
interface ListAllVisitpathsKeyworddetailsResponse {
  keyworddetails: Array<{
    visitCount: number;
    engine: string;
    orderAmountPerVisitor: string;
    orderAmount: number;
    purchaseRate: string;
    purchaseCount: number;
    keyword: string;
    orderAmountPerBuyer: string;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "keywords": [
 *         {
 *             "visit_count": 1000,
 *             "keyword": "keyword"
 *         },
 *         {
 *             "keyword": "keyword2",
 *             "visit_count": 2000
 *         }
 *     ]
 * }
 * ```
 */
interface ListAllVisitpathsKeywordsResponse {
  keywords: Array<{
    visitCount: number;
    keyword: string;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "keywordsales": [
 *         {
 *             "order_count": 1000,
 *             "order_amount": 10000,
 *             "keyword": "keyword"
 *         },
 *         {
 *             "order_count": 2000,
 *             "keyword": "keyword2",
 *             "order_amount": 20000
 *         }
 *     ]
 * }
 * ```
 */
interface ListAllVisitpathsKeywordsalesResponse {
  keywordsales: Array<{
    orderCount: number;
    orderAmount: number;
    keyword: string;
  }>;
}

/**
 * @example
 * ```json
 * {
 *     "urls": [
 *         {
 *             "visit_count": 1000,
 *             "url": "cafe24.com"
 *         },
 *         {
 *             "visit_count": 2000,
 *             "url": "cafe24.com2"
 *         }
 *     ]
 * }
 * ```
 */
interface ListAllVisitpathsUrlsResponse {
  urls: Array<{
    visitCount: number;
    url: string;
  }>;
}
