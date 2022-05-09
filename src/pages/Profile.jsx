import { getAuth } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Profile() {
    const auth = getAuth()
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email
    })

    const { name, email } = formData

    const onLogOut = () => {
        auth.signOut()
        navigate('/')
    }

    return (
        <div className='profile'>
            <header className="profileHeader">
                <p className="pageHeader">My Profile</p>
                <button className="logOut" type='button' onClick={onLogOut}>Log out</button>
            </header>
        </div>
    )
}

export default Profile
