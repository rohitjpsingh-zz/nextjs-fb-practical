import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Welcome Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <h1 className="title">
        Welcome Form
      </h1>

        <p className="mt-3 text-2xl">
          Fill up the form{' '}
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl sm:w-full">
          
        <form id="register" class="text-sm m-8 xs:p-4 sm:p-4 md:p-8 lg:p-8" method="POST" action="/register">

          <div className="relative border rounded mb-4 shadow appearance-none label-floating">
              <input className="w-full py-2 px-3 text-black leading-normal rounded" id="name" name="name" type="text" placeholder="Name" />
          </div>

          <div className="relative border rounded mb-4 shadow appearance-none label-floating">
              <input className="w-full py-2 px-3 text-black leading-normal rounded" id="minage" name="minage" type="number" placeholder="Min Age" />
          </div>

          <div className="relative border rounded mb-4 shadow appearance-none label-floating">
              <input className="w-full py-2 px-3 text-black leading-normal rounded" id="maxage" name="maxage" type="number" placeholder="Max Age" />
          </div>

          <div className="relative rounded mb-4 appearance-none flex items-center">
              <input className="py-2 px-3 text-black" id="male" name="gender" type="radio" /> Male
              <input className="py-2 px-3 text-black rounded ml-2" id="female" name="gender" type="radio" /> Female
          </div>

          <div className="relative border rounded mb-4 shadow appearance-none label-floating">
              <select className="w-full py-2 px-3 text-black leading-normal rounded" id="country" name="country" >
                <option value="">Select Country</option>
                <option value="india">India</option>
                <option value="usa">USA</option>
              </select>
          </div>

          <div className="relative border rounded mb-4 shadow appearance-none label-floating">
              <select className="w-full py-2 px-3 text-black leading-normal rounded" id="city" name="city" >
                <option value="">Select City</option>
                <option value="surat">Surat</option>
                <option value="ahemdabad">Ahemedabad</option>
              </select>
          </div>

          <div className="flex flex-wrap py-2 items-center justify-evenly">
              <div className="sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-12 text-center align-baseline">
                  <input className="bg-black hover:bg-white hover:text-black text-white w-full py-2 px-4 rounded" type="submit" value="Register" />
              </div>
              <div className="sm:w-full md:w-1/2 lg:w-1/2 xl:w-1/2 h-12 text-center align-baseline">
                  <a className="inline-block align-baseline text-gray-400 hover:text-white" href="#" onclick="document.getElementById('register').reset(); return false;">
                      Clear Form
                  </a>
              </div>
          </div>

        </form>
        
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
