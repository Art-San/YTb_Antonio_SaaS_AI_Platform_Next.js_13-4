import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import Replicate from 'replicate'

const replicate = new Replicate({
  // auth: process.env.REPLICATE_API_TOKEN
  // auth: process.env.REPLICATE_API_TOKEN || '' // 2:50:24
  auth: process.env.REPLICATE_API_TOKEN!
})

export async function POST(req: Request) {
  try {
    const { userId } = auth()
    const body = await req.json()
    const { messages } = body

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    if (!configuration.apiKey) {
      return new NextResponse('OpenAI API Key not configured', { status: 500 })
    }

    if (!messages) {
      return new NextResponse('Messages are required', { status: 400 })
    }

    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages
    })
    return NextResponse.json(response.data.choices[0].message)
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error)
    return new NextResponse('internal error', { status: 500 })
  }
}
