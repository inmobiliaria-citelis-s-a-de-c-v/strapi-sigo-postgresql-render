module.exports = ({ env }) => ({
  // ...
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: env('SENDGRID_API_KEY'),
    },
    settings: {
      defaultFrom: 'dev.silva@citelis.mx',
      defaultReplyTo: 'dev.silva@citelis.mx',
      testAddress: 'a.quintos@citelis.mx',
    },
  },
  upload: {
    provider: 'google-cloud-storage',
    providerOptions: {
      bucketName: 'sigo-sobre-ruedas',
      publicFiles: true,
      uniform: true,
      serviceAccount: {
        "type": "service_account",
        "project_id": "pksravi",
        "private_key_id": "d0d5126d122a7242064eac90ca47e5aa215a0ee0",
        "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDbh1Rofch5W41E\nKB4F32h4c9AJA1CHdfqPiFtcY4lkyVDh+n745FL/qIKyIQM4Eo3pH5F7wfWyiVkO\nhngXVH+Wk5ccniaUJZNe2sZHVci02p1y2UV2ZHxzkz5LPLwGjZIQZwJAW8H+WTNd\nniWmTntJQjeolpJSvKfxnBVd5uzouFnYX+HNellpqyQ+D0RogF7K5pR0T1hcJXRR\nxwBpMi6iladVXU8N6ZSvCSGjQwTVaZN2p2KBgC1C92asv8iYCOCnDTkVp+Wagrp+\naYsUEWQFixIHRfFta2XOv0glWxUa35B34HvBJtOgtLnPwLKEqDfb/BaXSVpE1BkW\nhKz//r8FAgMBAAECggEAWwCxGXXXBpPQrknRFE8l8BTWTv4sQlNCcICumtB6Uqjv\nmhXsz8FatLeGok/0FSj/4f1fokVn1ECChfZxTv6Mu39oO4lF5dDj1ATuAAFMJ8ie\nT09JL8h9HK4Tuz2slizWuWzyLnq7IvSYSf02j0fmbJqCFyV/98NT/WDeLKR/XgLV\nBGi6OJFPwB5zOS8Ih8f63hiCY2UiGpnCyFX4G4c7t3TPjkvEGSPdqJBz61MLg32L\nLbOarmPfhYBHnF1/cOKr+bw9kBYiSSIThN0C0T+f9e0jDRIEez59H/kZlQExJxjs\nucmJoJ0ANl1cD9Ahdqv4vqfGJvzrV5ii49dAA27b6wKBgQD6xTxYk/iNwV5OnZoj\nuni4n9jlPsKwLq1MoDFm6fS6GLMWK76Gc2E8F8jhy8O/fUZ/lOY4KtTko8rNhTOp\nWfTOYgUaoDKy5k4rXgJGNeOxF6n+lz0anVw6i4Dg1AwKz5fQh5/JtGWAlVkGMQ++\nLuula01seaRJvJ/zANEDYvtwYwKBgQDgG05npJXSOKF1nUUnLIxKd6F9SXIqA+fa\nGoWBb3QKXhwwT83UPLx1ECqJ9LpLI5zP5t+QrpvjJXuBb3QTiRWpE5xSTRx8eDSc\nBvrTwF/Ah+b+abTRd6hNxSgo9ugJIKn2gCFg/wsgjWeZUY/c5aGqVfQloV0lG2kP\nJjux17XLdwKBgQDCbjyMvSXA2wWA1MdXHlRNaXpkvBV9PqOVPrsu/QSHaXEpJn+R\nhVIFordZAoDiLoKDlvIs6GCqaahrUvSsQJgDkJI+g6jrdo9zJm+C+nNwslVWlPKG\neS2yIsmpCB/SHgSqZQ1p+Zmdaa5dk5qOLZj9Z8Xe7i2IEly9r4tfIdar2wKBgQCA\nt+5epS/QYOqL7Vrs1y91DiVZGrhR3ZBru1P3NhbGZat3LD8iqgfsjO6B8miWA8xr\ntUWvijrLSpoXi/Z1ygUA6dydgODdtQUyoOesfBADO4u3kOtkbH/ku1sHvFkl9Pbq\nOEnztkmj1tQsQaaJz/L9LQVgH8CqMYY0R1d+HFG0nQKBgDe/y6Q7ju5BkqSeG+zF\n0fQ+XZ9V8HsGjWHUQU8KcDCQv73zMlb2jiFQb9E0tKu+mncqV4xNI+SaxACKMSWD\nF1HJu3bOcCmgE3YhU6xNX2hnojKa1kRdNWMpsbD4NrCkYaXuOp2WYKAw3Zq9mqIP\necuLb67hBBSocQRs8s3unCS+\n-----END PRIVATE KEY-----\n",
        "client_email": "test-bucket-imageoptimization@pksravi.iam.gserviceaccount.com",
        "client_id": "104401444424654811357",
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/test-bucket-imageoptimization%40pksravi.iam.gserviceaccount.com"
      },
      baseUrl: 'https://storage.googleapis.com/sigo-sobre-ruedas',
      basePath: 'contenido',
    },
  },
  // ...
});