import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCwJikxTr6SjkFrAzz1EwvGAOUnJll_OA0",
    authDomain: "anamnesys-797fa.firebaseapp.com",
    databaseURL: "https://anamnesys-797fa.firebaseio.com",
    projectId: "anamnesys-797fa",
    storageBucket: "anamnesys-797fa.appspot.com",
    messagingSenderId: "922362797914",
    appId: "1:922362797914:web:32e5a95659186e20121d63",
    measurementId: "G-03J94R85BB"
};
const fire = firebase.initializeApp(firebaseConfig)
//export const app = firebase.initializeApp(firebaseConfig);
//export const bd =firebase.firestore();
//export const auth=firebase.auth();
export default fire;