import { NextRequest, NextResponse } from 'next/server'
import { bucket, db } from '../../../../config/firebaseConfig'

export async function POST(req: NextRequest) {
     try {
          // Verify request content type
          const contentType = req.headers.get('content-type')
          if (!contentType || !contentType.includes('multipart/form-data')) {
               return NextResponse.json(
                    { error: 'Content type must be multipart/form-data' },
                    { status: 415 },
               )
          }

          //   // Parse form data with error handling
          let formData: FormData
          try {
               formData = await req.formData()
          } catch (error) {
               return NextResponse.json({ error: 'Failed to parse form data' }, { status: 400 })
          }

          //   // Extract and validate text fields
          const name = formData.get('name')
          const email = formData.get('email')
          const phone = formData.get('phone')
          const message = formData.get('message')

          //   // Type checking and validation
          if (!name || typeof name !== 'string' || !name.trim()) {
               return NextResponse.json({ error: 'Name is required' }, { status: 400 })
          }
          if (!email || typeof email !== 'string' || !email.trim()) {
               return NextResponse.json({ error: 'Email is required' }, { status: 400 })
          }
          if (!message || typeof message !== 'string' || !message.trim()) {
               return NextResponse.json({ error: 'Message is required' }, { status: 400 })
          }

          //   // Handle file upload
          let fileUrl = ''
          const file = formData.get('file') as File | null
          if (file && file instanceof File) {
               try {
                    const fileName = `${Date.now()}-${file.name}`
                    const fileBuffer = await file.arrayBuffer()

                    await bucket.file(fileName).save(Buffer.from(fileBuffer))
                    fileUrl = `https://storage.googleapis.com/${bucket.name}/${fileName}`
               } catch (error) {
                    console.error('File upload error:', error)
                    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 })
               }
          }

          //   // Prepare data for Firestore
          const contactData = {
               name: name.trim(),
               email: email.trim(),
               phone: phone && typeof phone === 'string' ? phone.trim() : '',
               message: message.trim(),
               fileUrl,
               createdAt: new Date(),
          }

          // Store data in Firestore with error handling
          try {
               const docRef = await db.collection('contacts').add({ contactData })
               return NextResponse.json({ success: true, id: docRef.id }, { status: 201 })
          } catch (error) {
               console.error('Firestore error:', error)
               return NextResponse.json({ error: 'Failed to save contact data' }, { status: 500 })
          }
     } catch (error) {
          console.error('Error processing contact form:', error)
          return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
     }
}
