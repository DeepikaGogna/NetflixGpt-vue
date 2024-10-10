import { defineComponent, onMounted } from 'vue'
import { LOGO, SUPPORTED_LANGUGAGE } from '@/utilis/constant'
import { auth } from '../utilis/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/userStore'
import { useGPTStore } from '@/stores/gptStore'
import { signOut } from 'firebase/auth'

export default defineComponent({
  setup() {
    const router = useRouter()
    const userStore = useUserStore()
    const gptStore = useGPTStore()
    onMounted(() => {
      const unsubscibe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const { uid, email, displayName, photoURL } = user
          userStore.addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL
          })
          router.push('/browse')
        } else {
          console.log('No user')
          // User is signed out
          userStore.removeUser()
          router.push('/')
        }
      })
      return () => unsubscibe()
    })
    const handleGptSearchClick = () => {
      gptStore.toggleGptSearchView()
    }

    const handleSignOut = () => {
      signOut(auth)
        .then(() => {
          userStore.removeUser()
          router.push('/')
        })
        .catch((error) => {
          console.log(error)
        })
    }

    return () => (
      <div className="absolute w-screen flex flex-col md:flex-row px-8 py-2 bg-gradient-to-b from-black z-10 justify-between">
        <img className="w-44" src={LOGO} alt="NetFlix Logo" />

        <div>
          <select className="p-2 bg-gray-600 text-white m-2">
            {SUPPORTED_LANGUGAGE.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>
          <button
            className="rounded-lg text-white py-2 px-4 mx-4 bg-purple-700"
            onClick={handleGptSearchClick}
          >
            {' '}
            {gptStore.showGptSearch ? 'Home Page' : 'GPT Search'}
          </button>
          <button className="font-bold text-white" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </div>
    )
  }
})
