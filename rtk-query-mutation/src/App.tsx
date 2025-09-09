
import './App.css'
import { useGetUsersQuery, useAddUserMutation } from './api'

function App() {

  const { data: users ,isLoading} = useGetUsersQuery();
  const [addUser] = useAddUserMutation();

  const handleAddUser = () => {
    addUser({name: "Tavuk"});
  }

  if (isLoading){
    return <div>Loading...</div> 
  }
 
  return (
   // ... existing code ...
   <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="text-center space-y-6">
      <button className='bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors' onClick={handleAddUser}>
        Kullanıcı Ekle
      </button>    
      <ul className="space-y-2">
        {users?.map(user => (
          <li key={user.id} className="bg-white p-3 rounded-md shadow-sm">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
   </div>
// ... existing code ...

  )
}

export default App
