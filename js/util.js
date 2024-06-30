
const sendMessage = async(username, phone, message) => {

  const url = 'https://api.telegram.org/bot7257071849:AAFHpwPl7U2f8McbFExHJh8S8Lzjp34JgVI/sendMessage'
  const text = `MENSSHIRT\n\n${username ? `Name: ${username}\n` : ''}${phone ? `Phone: ${phone}\n` : ''}${message ? `Message: ${message}` : ''}`

  const request = {
      chat_id: 634114608,
      text,
  }

  const telegramResponse = await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(request)
  })

  const response = await telegramResponse.json()

  if (response.ok) {

      return { status: 200 }

  } else {

    return { status: 400 }

  }

}