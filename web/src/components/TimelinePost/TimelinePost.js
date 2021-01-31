const TimelinePost = () => {
  return (
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Project Name
        </h3>
        <p class="mt-1 max-w-2xl text-sm text-gray-500">
          datetime
        </p>
      </div>
      <div class="border-t border-gray-200">
        <dl>
          <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              Update text goes here
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

export default TimelinePost
