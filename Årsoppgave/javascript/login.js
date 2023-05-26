import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-auth.js';

const firebaseConfig = {
    apiKey: "AIzaSyAjvqaWJRF_9KMZ3dReGXxSNokpDLdiBoM",
    authDomain: "echelon-2492a.firebaseapp.com",
    databaseURL: "https://echelon-2492a-default-rtdb.firebaseio.com",
    projectId: "echelon-2492a",
    storageBucket: "echelon-2492a.appspot.com",
    messagingSenderId: "868055506303",
    appId: "1:868055506303:web:e7e79c98d659877a8d8e4a",
    measurementId: "G-GPD56Q584J"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        sessionStorage.setItem("email", user.email);

        window.location.href = "Personal.html";
    } catch (error) {
        document.getElementById("invalidDisplay").textContent = "Invalid email or password";
    }
}

if (document.getElementById("loginForm")) {
    document.getElementById("loginForm").addEventListener("submit", async (event) => {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        await loginUser(email, password);
    });
}


onAuthStateChanged(auth, async (user) => {
    if (user) {
        const email = sessionStorage.getItem("email");
        document.querySelector(".user-info").textContent = email;
        document.getElementById("user-info").textContent = email;
    } else {
        console.error("No user is currently signed in");
    }
});
