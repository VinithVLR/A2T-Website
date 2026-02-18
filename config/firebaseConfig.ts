import admin from 'firebase-admin'

const serviceAccount: any = {
     type: 'service_account',
     project_id: 'testing-a347d',
     private_key_id: '',
     private_key:
          '-----BEGIN PRIVATE KEY-----',
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
