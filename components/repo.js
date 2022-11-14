import Link from "next/link"

export default function RepoCard ({repo}){
  return(
    <>
    <Link href={repo.html_url}>
      <div className="flex flex-col items-center rounded-lg border shadow-md md:flex-col md:max-w-auto dark:border-gray-700 dark:bg-gray-800 p-4 m-5">
        <div>
          <h1 className="text-white text-4xl pb-3">{repo.name}</h1>
        </div>
        <div className="flex flex-row pb-2">
          <span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">{repo.language}</span>
          <span class="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
          <svg aria-hidden="true" class="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>
            {repo.updated_at}
          </span>
        </div>
      </div>
    </Link>
    </>
  )
}