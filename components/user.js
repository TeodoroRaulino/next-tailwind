import Link from "next/link"

export default function cardUser({users}){
  return(
    <div className="flex flex-col items-center rounded-lg border shadow-md md:flex-row md:max-w-auto dark:border-gray-700 dark:bg-gray-800 p-4">
      <div className="flex flex-col justify-center text-center">
        <img className="object-cover w-48 h-48 rounded-full md:h-48 md:w-48 md:rounded-full p-2" src={users.avatar_url} alt="imageRonaldAraujo"/>
        <p className='dark:text-white'>{users.name}</p>
        <Link href={users.html_url}><p className='dark:text-white opacity-80'>{users.login}</p></Link>
      </div>
      <div className="flex flex-col justify-between p-4 leading-normal md:max-w-xl">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{users.bio}</h5>
        <div className="grid grid-cols-1 sm:grid-cols-2 py-5">
          <div className='flex flex-row py-5 sm:py-0'>
            <img src='/images/twitter.svg' className='px-2 h-8 ml-3' alt='iconTwitter'/>
            <p className='dark:text-white'> {users.twitter_username} </p>
          </div>
          <div className='flex flex-row'>
            <img src='/images/location.svg' className='px-2 h-8 ml-3' alt='iconLocation'/>
            <p className='dark:text-white'> {users.location} </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className='flex flex-row items-center py-3 sm:py-0'><img src='/images/follow.svg' className='px-2' alt='iconFollows'/>
            <p className='dark:text-white'>
              Seguindo: {users.following}
            <br/>
              Seguidores: {users.followers}
            </p>
          </div>
          <Link href='/repo' className='w-fit'>
            <div className='flex flex-row items-center'>
              <img src='/images/repos.svg' className='px-2 h-12' alt='iconStar'/>
              <p className='dark:text-white'> Acesse meus repositórios {users.repo}</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}