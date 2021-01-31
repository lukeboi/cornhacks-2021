const AddPost = () => {
  return (
    <form action="#" method="POST">
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="px-4 py-2 bg-white space-y-2 sm:p-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Write about what you've been up to!
            </label>
            <div className="mt-1">
              <textarea id="updateText" name="updateText" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="  Update Text"></textarea>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Add some media!
            </label>
            <div className="mt-2 flex justify-center px-2 pt-2 pb-3 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple></input>
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  Plz don't upload virus up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button type="submit" onClick="addPost(document.getElementById('updateText'))" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Post Update
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddPost
