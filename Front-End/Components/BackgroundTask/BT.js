import BackgroundTask from 'react-native-background-task'

export const notificationBackgroundTask = async () => {
    console.log('Hello from a background task')
    BackgroundTask.finish()
}