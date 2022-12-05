import {ConnectorMessage} from './types'
import axios from 'axios'

async function sendNotification(
  webHookUrl: string,
  dryRun: boolean,
  message?: ConnectorMessage,
  log?: (logMessage: string) => void,
  errorLog?: (logMessage: string) => void
): Promise<void> {
  !log || log(`Connector message ${JSON.stringify(message, null, 2)}`)
  if (!webHookUrl || dryRun) {
    !log || log('Webhook url not defined')
    return
  }
  const axiosInstance = axios.create()
  try {
    const axiosResponse = await axiosInstance.post(webHookUrl, message)
    if (log) {
      log(
        `HTTP ${axiosResponse.status}: Posted connector message. Response: ${axiosResponse.data}`
      )
    }
  } catch (error: unknown) {
    if (errorLog) {
      errorLog(`Error occurred when trying to post connector message: ${error}`)
    }
    throw error
  }
}

export {sendNotification}
