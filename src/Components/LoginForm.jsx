import React from 'react'

const LoginForm = () => {
  return (
    <div class="flex items-center justify-center min-h-screen">
    <div class="bg-gray-200 p-4 w-550 h-440">
      <form>
        <div class="mb-4">
          <label for="name" class="block text-gray-800 text-sm font-semibold mb-2">Name:</label>
          <input type="text" id="name" name="name" class="w-full border rounded-md p-2" />
        </div>
  
        <div class="mb-4">
          <label for="email" class="block text-gray-800 text-sm font-semibold mb-2">Email:</label>
          <input type="email" id="email" name="email" class="w-full border rounded-md p-2" />
        </div>
  
        <div class="mb-4">
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
        </div>
      </form>
    </div>
  </div>
  
  )
}

export default LoginForm
