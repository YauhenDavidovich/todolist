import { initializeApp } from 'firebase/app' // no compat for new SDK
import { getDatabase, ref } from 'firebase/database'

// Your web app's Firebase configuration
const config  = {
    apiKey: "AIzaSyBpdSv4CQaR2cAvtoDa9LLafi6DenVusyA",
    authDomain: "todolist-e701a.firebaseapp.com",
    projectId: "todolist-e701a",
    storageBucket: "todolist-e701a.appspot.com",
    messagingSenderId: "458662339700",
    appId: "1:458662339700:web:8812c0994b60ce7e501d21"
};

const app = initializeApp(config)

const database = getDatabase(app)

export const todosRef = ref(database, "todos")
export default firebase;
