import './index.css'

const UserProfile = props => {
  const {userDetails,key} = props
  console.log(key)//Undefined
  const {image, name, role} = userDetails
  return (
    <div>
      <li className="user-card-container">
        <img src={image} alt="avatar" className="avatar" />
        <div className="user-details-container">
          <h1 className="user-name">{name}</h1>
          <p className="user-designation">{role}</p>
        </div>
      </li>
    </div>
  )
}

export default UserProfile
