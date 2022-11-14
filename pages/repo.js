import Head from "next/head"
import RepoCard from "../components/repo"

export async function getStaticProps() {
  const data = await fetch('https://api.github.com/users/ronaldaraujo/repos')
  const repos = await data.json()
  return {
    props: {repos}
  }
}

export default function Repo ({repos}){
  return (
    <>
      <Head><title className="">Repositórios</title></Head>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10">
        {repos.map((repo) => (
          <RepoCard repo={repo} key={repo.id} />
        ))}
      </div>
    </>
  )
}