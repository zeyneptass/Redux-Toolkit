import './App.css'

import { useGetUsersQuery, useGetTodosQuery, useGetUserQuery } from "../src/api/api";

const App = () => {
  const {data: users, isLoading: usersLoading, error: usersError} = useGetUsersQuery();
  const {data: todos, isLoading: todosLoading, error: todosError} = useGetTodosQuery();
  const {data: user, isLoading: userLoading, error: userError} = useGetUserQuery(8);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            RTK Query Uygulaması
          </h1>
          <p className="text-xl text-gray-600">
            Redux Toolkit Query ile API verilerini yönetme
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Users Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Kullanıcılar</h2>
            </div>
            
            {usersLoading && (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              </div>
            )}
            
            {usersError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                Veri yüklenirken hata oluştu
              </div>
            )}
            
            {users && (
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {users.slice(0, 10).map((user) => (
                  <div key={user.id} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-sm font-medium text-blue-600">{user.id}</span>
                    </div>
                    <span className="text-gray-700 font-medium">{user.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Todos Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Görevler</h2>
            </div>
            
            {todosLoading && (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500"></div>
              </div>
            )}
            
            {todosError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                Veri yüklenirken hata oluştu
              </div>
            )}
            
            {todos && (
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {todos.slice(0, 10).map((todo) => (
                  <div key={todo.id} className="flex items-start p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-xs font-medium text-green-600">{todo.id}</span>
                    </div>
                    <span className="text-gray-700 text-sm leading-relaxed">{todo.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Single User Section */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Seçili Kullanıcı</h2>
            </div>
            
            {userLoading && (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
              </div>
            )}
            
            {userError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                Veri yüklenirken hata oluştu
              </div>
            )}
            
            {user && (
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">{user.id}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{user.name}</h3>
                <div className="bg-purple-50 rounded-lg p-4">
                  <p className="text-sm text-purple-700">
                    ID: {user.id} numaralı kullanıcı
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-gray-500">
            Redux Toolkit Query ile güçlendirilmiş API yönetimi
          </p>
        </div>
      </div>
    </div>
  )
}

export default App