import { getAuth } from 'firebase/auth'
import { useState, useEffect } from 'react'

function Profile() {
    const auth = getAuth()
    const [user, setUser] = useState(null)

    useEffect(() => {
        setUser(auth.currentUser)
    }, [])

    return (
        <div>
            {user ? <h1>Welcome back {user.displayName}!</h1> : <h1>Not logged in</h1>}
        </div>
    )
}

export default Profile
