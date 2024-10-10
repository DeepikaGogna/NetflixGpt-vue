import { defineComponent } from 'vue'
import { BK_IMG } from '@/utilis/constant'
import { ref } from 'vue'
import { checkLoginValidation } from '../utilis/validate'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth'
import { auth } from '../utilis/firebase'
import { useUserStore } from '@/stores/userStore'

export default defineComponent({
  setup() {
    const userStore = useUserStore()
    const isSignInForm = ref(true)
    const fullname = ref(null)
    const email = ref(null)
    const password = ref(null)
    const errorMessage = ref('')

    const handleButtonClick = () => {
      const message = checkLoginValidation(email.value, password.value)
      errorMessage.value = message
      const isEmpty = (message) => Object.keys(message).length === 0
      if (!isEmpty) return
      //   errorMessage.value = ''
      if (!isSignInForm.value) {
        //Sign Up Form
        createUserWithEmailAndPassword(auth, email.value, password.value)
          .then((userCredential) => {
            const user = userCredential.user
            updateProfile(auth.currentUser, {
              displayName: fullname.value,
              photoURL: 'https://example.com/jane-q-user/profile.jpg'
            })
              .then(() => {
                const { displayName, photoURL } = auth.currentUser
                // userStore.addUser({})
              })
              .catch((error) => {
                errorMessage.value = error.message
              })
          })
          .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            errorMessage.value = errorCode + errorMessage
          })
      } else {
        //Sign IN Form
        signInWithEmailAndPassword(auth, email.value, password.value)
          .then((userCredential) => {
            const user = userCredential.user
          })
          .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
            errorMessage.value = errorCode + errorMessage
          })
      }
    }
    const ToggleSignInForm = () => {
      isSignInForm.value = !isSignInForm.value
    }
    return () => (
      <div>
        <div className="absolute">
          <img src={BK_IMG} alt="bg-Image" />
        </div>
        <div className="w-3/12 absolute mx-auto left-0 right-0">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="text-white bg-black p-8 bg-opacity-80 my-32"
          >
            <h1 className="p-2 font-bold text-3xl mb-3">
              {isSignInForm.value ? 'Sign In' : 'Sign Up'}
            </h1>
            {!isSignInForm.value && (
              <input
                v-model={fullname.value}
                type="text"
                placeholder="Full Name"
                className="p-4 my-2 w-full bg-gray-800 rounded-lg"
              />
            )}
            <input
              v-model={email.value}
              type="text"
              placeholder="Email or Mobile Number"
              class="p-4 my-2 w-full bg-gray-800 rounded-lg"
            />
            <p className="text-red-700 text-sm">{errorMessage.value.email}</p>
            <input
              v-model={password.value}
              type="password"
              placeholder="Password"
              className="p-4 my-2 w-full bg-gray-800 rounded-lg"
            />
            <p className="text-red-700 text-sm">{errorMessage.value.password}</p>
            <button className="p-2 my-2 w-full bg-red-700 rounded-lg" onClick={handleButtonClick}>
              {isSignInForm.value ? 'Sign In' : 'Sign Up'}
            </button>
            <p className="text-l text-center text-gray-400">OR</p>
            <button className="p-2 my-2 w-full bg-gray-500 rounded-lg">Use a sign-in code</button>
            <p className="my-2 text-center">Forgot Password</p>
            <input className="my-2" type="checkbox" /> Remember Me
            <p className="my-2 cursor-pointer" onClick={ToggleSignInForm}>
              {isSignInForm.value ? 'New to NetFlix? Sign up now' : 'Already Have Account'}{' '}
            </p>
          </form>
        </div>
      </div>
    )
  }
})
