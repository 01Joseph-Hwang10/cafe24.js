import * as t from "./types";

export const events = {
  90077: t.OnAppDeleted,
  90078: t.OnAppExpired,
  90079: t.OnAppExpirationExtended,
  90157: t.OnAppPayment,
  90158: t.OnAppPaymentRefundRequested,
  90159: t.OnAppPaymentRefundCompleted,
  90160: t.OnAppOrderReturnCompleted,
  90001: t.OnProductCreated,
  90002: t.OnProductUpdated,
  90041: t.OnBulkProductUpdate,
  90003: t.OnProductDeleted,
  90022: t.OnProductRestored,
  90075: t.OnProductInventoryChanged,
  90150: t.OnProductStockStatusChanged,
  90023: t.OnOrderReceived,
  90024: t.OnOrderDeliveryStatusChanged,
  90071: t.OnBulkOrderDeliveryStatusChanged,
  90025: t.OnOrderPaymentStatusChanged,
  90026: t.OnOrderCancellationStatusChanged,
  90072: t.OnBulkOrderCancellationStatusChanged,
  90028: t.OnOrderExchangeStatusChanged,
  90027: t.OnOrderReturnStatusChanged,
  90074: t.OnBulkOrderReturnStatusChanged,
  90029: t.OnOrderRefundStatusChanged,
  90073: t.OnBulkOrderRefundStatusChanged,
  90031: t.OnProductAddedToOrder,
  90064: t.OnOrderRecipientInfoChanged,
  90066: t.OnAdminNoteAddedToOrder,
  90068: t.OnAdminNoteUpdatedOnOrder,
  90069: t.OnAdminNoteDeletedFromOrder,
  90070: t.OnOrderFormDeleted,
  90084: t.OnProductAddedToCart,
  90162: t.OnOrderShippingCodeChanged,
  90032: t.OnNewMemberRegistered,
  90063: t.OnMemberLinkedSNSAccount,
  90080: t.OnMemberInfoChanged,
  90143: t.OnMemberLogin,
  90144: t.OnMemberGradeChanged,
  90145: t.OnMemberBecameDormant,
  90146: t.OnMemberDormancyReleased,
  90147: t.OnMemberWithdrawal,
  90148: t.OnMemberPointsChanged,
  90033: t.OnPostCreated,
  90034: t.OnCommentAddedToPost,
  90035: t.OnUrgentInquiryReceived,
  90036: t.OnPostDeleted,
  90037: t.OnCommentDeletedFromPost,
  90038: t.OnUrgentInquiryDeleted,
  90039: t.OnPostUpdated,
  90042: t.OnProductCategoryAdded,
  90043: t.OnProductCategoryUpdated,
  90046: t.OnBulkProductCategoryDisplaySettingsChanged,
  90044: t.OnProductCategoryDeleted,
  90045: t.OnProductCategoryOrderChanged,
  90090: t.OnSupplierAdded,
  90091: t.OnSupplierUpdated,
  90092: t.OnBulkSupplierUpdate,
  90093: t.OnSupplierDeleted,
  90100: t.OnShippingProviderAdded,
  90101: t.OnShippingProviderUpdated,
  90102: t.OnShippingProviderDeleted,
  90110: t.OnMultiStoreAdded,
  90111: t.OnMultiStoreUpdated,
  90112: t.OnMultiStoreDeleted,
  90113: t.OnSuboperatorAdded,
  90114: t.OnSuboperatorUpdated,
  90115: t.OnSuboperatorDeleted,
  90116: t.OnPrivacySettingsChanged,
  90117: t.OnStoreDomainAdded,
  90119: t.OnStoreDomainToBeDeleted,
  90121: t.OnMyStoreInfoSettingsUpdated,
  90166: t.OnStoreDeleted,
  90167: t.OnStoreDormanted,
  90168: t.OnStoreDormantLifted,
  90169: t.OnStoreBlocked,
  90142: t.OnKakaoSyncSettingsChanged,
  90151: t.OnCouponUpdated,
  90152: t.OnCouponDeleted,
  90153: t.OnCouponAdded,
  90154: t.OnCouponIssuanceStatusChanged,
  90047: t.OnStoreBenefitAdded,
  90048: t.OnStoreBenefitChanged,
  90050: t.OnStoreBenefitDeleted,
};
