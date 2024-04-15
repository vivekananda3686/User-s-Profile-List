import UserProfile from './Components/UserProfile'
import './App.css'

const userDetailsList = [
  {
    uniqueNo:1,
    image: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Vivekananda',
    role: 'Full Stack Developer',
  },
  {
    uniqueNo:2,
    image: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Vivekananda',
    role: 'Full Stack Developer',
  },
  {
    uniqueNo:3,
    image: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Vivekananda',
    role: 'Full Stack Developer',
  },
  {
    uniqueNo:4,
    image: 'https://assets.ccbp.in/frontend/react-js/esther-howard-img.png',
    name: 'Vivekananda',
    role: 'Full Stack Developer',
  },
]

const App = () => (
  <div className="list-container">
    <h1 className="title">User's Profile List</h1>
    <ul>
        {userDetailsList.map((eachItem) => (
          <UserProfile userDetails={eachItem} key={eachItem.uniqueNo}/>
        ))}
    </ul>
  </div>
)

export default App
