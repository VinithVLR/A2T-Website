import admin from 'firebase-admin'

const serviceAccount: any = {
     type: 'service_account',
     project_id: 'testing-a347d',
     private_key_id: '932dae3a5c206deec0b7f8d40ef3b1d891e81b91',
     private_key:
          '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQC3B9XFgpP8yRaL\ndcXDoAdk7Bz1bjFRn6rd6g6pYGTkluz2GeNd2DBT2Mx3Wwpph+07RnCOqmPraW8/\nD5NvbImONCVAf7EYBySpyIMaKl2d3+xcyjQ19E94Rz73LubYVaagekfqpNTgahN3\n2m681oV2SneA2ZHaPKS5XnlUsXosAlmciSwiP4k5p2VSWWWQ9mA4Vr4pO50DQhjH\nz/olzb4MVe4vrpjbINJOSUb412cCUlTouQeMcbnOJdt7eUNBIbl7tHX45qnzujOg\nAE0NT3dz+1dipDdrvNe5G5YyvHgkfC/A4W95xWdukuoFlAPqzAm9q3Q0E4W96BtS\na+/QCjGFAgMBAAECggEAHx2kYIMN8JQpEoVvnQ3IJAal962HkeZQkJB5dJ8QF/J2\nj3IgPrSBpsd9Hy9pij5S/NhBS2e5O+y9Pl3CBVfQ3M2NpbTvoPOZ7olJjHm2V6AZ\nWT8A+Ekz93E5SaF+GjoZbT/MmR3zmME/1Qjb+ZuIre8D+PJEAvN7V44xl03ixLdJ\nxclFEKP2dJUwoX0NoNFm3PQKb5pPdTNAqFxNPDOx5t7I6gZYDdfI6uaoroMgkk75\nsELiGkpe22DB5V7IJvxd+XNhtCqXfjyXuepeIanMf+xR+cngviC30FCB9zBLQMwm\nDerTT9AZbnulQ75rSlBUfoMiaVszu+zh/14BcUh7EwKBgQDojTI6nHY4KhBKMw+Y\nhoIi0CVJ/MKVkH9TPmSyiWxQdyu9hYEtzeGzCm3tWbA0Jt+Cy3eMtqO/dYIr9gMf\niTUGXLjKXoIbIoubClGb7re1fd/86ep8KqN7G00B/9w6kfAx1fnHp4inAywCi7j5\npbEfv9dIvl4+77+iSk7++dGqcwKBgQDJfF2BwJWU1LseI73bGxa93TfSLnRi5aot\nh2AB2iUQjuNDuoru8qSJjZmrALrh5hAZduNVhCrZI3e2aVs4pP2xNOUmL2STwtqR\nxZN8X+4RTtB2MOb7+CXCYasYghhgA1r/GXKpftIe2pBNqHAF8eP91f6zxaGszEhj\ny4igqbFeJwKBgAUYcu1N2FlKsqitjb3t1JQms2p3m1vjmqacS2COGk15DwBMGJSE\nWlmt9NKqkG3UHDmlc60lo1jinkOQVGkwfHTzOylUAM3PZ/extjAQfv3/EBVemsC1\nvndIFdvhW1X9NKIi6iIxzZC7RQ+ZOChgNQ1ZCsKRSUdfwXcw4aI8nxd5AoGAQUpo\nrqQulKT+4bxpSHgVvX7TGOvu0SFlLQ3CQbdj7WKwKIFphhbg1KYrFqvM42j+7JGH\nB24lyGli4JxxcACfKO5gFyiiafNpinVA3rvjVH56tOIR57K44a1umSmHJo3Pzfx8\nGIq9IjxnKJMdgf+phtbyi2TOiEVGa/hHlPCIRl8CgYAQ4hef1KWdtIkxDkkL0iZA\nx4NJrhOOAMcxlA3VMmwpIp+olFc77xTsK/MuZftGjPMf/ZsN7qxZDSqpdnhOhO8g\nrDRwv9HyKxAof1FJYgA5lyHBjoJzQ774hpgB6aApRt16viBztkVsJeNUqE6zQfLv\nS+iPnUg3dnQueLtCCV47Ww==\n-----END PRIVATE KEY-----\n',
     client_email: 'firebase-adminsdk-f6x6t@testing-a347d.iam.gserviceaccount.com',
     client_id: '101622161367770772674',
     auth_uri: 'https://accounts.google.com/o/oauth2/auth',
     token_uri: 'https://oauth2.googleapis.com/token',
     auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
     client_x509_cert_url:
          'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-f6x6t%40testing-a347d.iam.gserviceaccount.com',
     universe_domain: 'googleapis.com',
}

if (!admin.apps.length) {
     admin.initializeApp({
          credential: admin.credential.cert(serviceAccount),
          databaseURL: 'https://testing-a347d.firebaseapp.com',
          storageBucket: 'testing-a347d.firebasestorage.app',
     })
}
const db = admin.firestore()
const bucket = admin.storage().bucket()

export { db, bucket }
