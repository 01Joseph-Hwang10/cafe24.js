import { Cafe24Datetime } from "cafe24-types";
import * as base from "./client";

export type Auth = ReturnType<typeof Auth>;
export const Auth = (self: base.Client) => ({
  authentication: {
    /**
     * @description
     * 발급 받은 인증 코드를 사용하여 실제로 API를 호출할 수 있는 사용자 토큰(Access Token, Refresh Token)을 받아 올 수 있습니다.
     *
     * @method POST
     * @path /api/v2/oauth/token
     *
     * @see https://developers.cafe24.com/docs/api/admin/#get-access-token
     */
    getAccessToken(
      request: GetAccessTokenRequest,
      options?: base.RequestOptions,
    ): Promise<GetAccessTokenResponse> {
      const password = btoa(`${request.clientId}:${request.clientSecret}`);
      const headers = {
        ...options?.headers,
        Authorization: `Basic ${password}`,
        "Content-Type": "application/x-www-form-urlencoded",
      };
      const params = {
        grant_type: "authorization_code",
        code: request.code,
        redirect_uri: request.redirectUri,
      };
      return self.createRequest("POST", "/api/v2/oauth/token", params, {
        ...options,
        headers,
      });
    },
    /**
     * @description
     * 접근 토큰은 발급 받은 후 2시간이 지나면 사용할 수 없습니다. 접근 토큰이 만료된 후 다시 재발급을 받아야 리소스 서버에 접근할 수 있습니다.
     * 이미 접근 토큰을 발급 받았다면 refresh_token를 사용하여 접근 토큰을 재발급 받을수 있습니다.
     *
     * refresh token은 2주간 유효하며, refresh token 만료전에 요청을 하면 갱신된 access token과 갱신된 refresh token이 함께 반환됩니다.
     * 기존 refresh token은 만료처리되어 사용할 수 없습니다.
     *
     * 발급 받은 인증 코드를 사용하여 실제로 API를 호출할 수 있는 사용자 토큰(Access Token, Refresh Token)을 받아 올 수 있습니다.
     *
     * @method POST
     * @path /api/v2/oauth/token
     *
     * @see https://developers.cafe24.com/docs/api/admin/#get-access-token-using-refresh-token
     */
    getAccessTokenUsingRefreshToken(
      request: GetAccessTokenUsingRefreshTokenRequest,
      options?: base.RequestOptions,
    ): Promise<GetAccessTokenUsingRefreshTokenResponse> {
      const password = btoa(`${request.clientId}:${request.clientSecret}`);
      const headers = {
        ...options?.headers,
        Authorization: `Basic ${password}`,
        "Content-Type": "application/x-www-form-urlencoded",
      };
      const params = {
        grant_type: "refresh_token",
        refresh_token: request.refreshToken,
      };
      return self.createRequest("POST", "/api/v2/oauth/token", params, {
        ...options,
        headers,
      });
    },
    /**
     * @description
     * Access Token을 사용하여 직접 토큰을 폐기할 수 있습니다.
     *
     * 요청한 토큰에 해당하는 리프레시 토큰도 함께 폐기됩니다.
     *
     * @method POST
     * @path /api/v2/oauth/revoke
     *
     * @see https://developers.cafe24.com/docs/api/admin/#revoke-access-token
     */
    revokeAccessToken(
      request: RevokeAccessTokenRequest,
      options?: base.RequestOptions,
    ): Promise<RevokeAccessTokenResponse> {
      const password = btoa(`${request.clientId}:${request.clientSecret}`);
      const headers = {
        ...options?.headers,
        Authorization: `Basic ${password}`,
        "Content-Type": "application/x-www-form-urlencoded",
      };
      const params = {
        token: request.token,
      };
      return self.createRequest("POST", "/api/v2/oauth/revoke", params, {
        ...options,
        headers,
      });
    },
  },
});

interface GetAccessTokenRequest {
  /**
   * @description
   * 개발자 센터에서 생성한 앱의 client_id를 입력합니다.
   */
  clientId: string;
  /**
   * @description
   * 개발자 센터에서 생성한 앱의 client_secret을 입력합니다.
   */
  clientSecret: string;
  /**
   * @description
   * 발급받은 코드를 입력합니다.
   */
  code: string;
  /**
   * @description
   * 개발자 센터에서 생성한 앱의 Redirect URL을 입력합니다.
   */
  redirectUri: string;
}

/**
 * @example
 * ```json
 * {
 *   "access_token": "0iqR5nM5EJIq..........",
 *   "expires_at": "2021-03-01T14:00:00.000",
 *   "refresh_token": "JeTJ7XpnFC0P..........",
 *   "refresh_token_expires_at": "2021-03-15T12:00:00.000",
 *   "client_id": "BrIfqEKoPxeE..........",
 *   "mall_id": "yourmall",
 *   "user_id": "test",
 *   "scopes": [
 *     "mall.read_order",
 *     "mall.read_product",
 *     "mall.read_store",
 *     "...etc...",
 *   ],
 *   "issued_at": "2021-03-01T12:00:00.000"
 * }
 * ```
 */
interface GetAccessTokenResponse {
  /**
   * @description
   * 접근 토큰으로서 클라이언트가 리소스 서버에 접근시 사용됩니다.
   */
  accessToken: string;
  expiresAt: Cafe24Datetime;
  /**
   * @description
   * 접근 토큰 만료 후 재발급을 위해 사용하는 토큰입니다.
   */
  refreshToken: string;
  refreshTokenExpiresAt: Cafe24Datetime;
  clientId: string;
  mallId: string;
  userId: string;
  scopes: string[];
  issuedAt: Cafe24Datetime;
}

interface GetAccessTokenUsingRefreshTokenRequest {
  /**
   * @description
   * 개발자 센터에서 생성한 앱의 client_id를 입력합니다.
   */
  clientId: string;
  /**
   * @description
   * 개발자 센터에서 생성한 앱의 client_secret을 입력합니다.
   */
  clientSecret: string;
  /**
   * @description
   * 접근 토큰 만료 후 재발급을 위해 사용하는 토큰입니다.
   */
  refreshToken: string;
}

type GetAccessTokenUsingRefreshTokenResponse = GetAccessTokenResponse;

interface RevokeAccessTokenRequest {
  /**
   * @description
   * 개발자 센터에서 생성한 앱의 client_id를 입력합니다.
   */
  clientId: string;
  /**
   * @description
   * 개발자 센터에서 생성한 앱의 client_secret을 입력합니다.
   */
  clientSecret: string;
  /**
   * @description
   * 토큰 발급시 받은 access_token을 입력합니다.
   */
  token: string;
}

// eslint-disable-next-line @typescript-eslint/ban-types
type RevokeAccessTokenResponse = {};
