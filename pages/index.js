import Head from "next/head";

export default function Home() {
  return (
    <>
    {/* header */}
      <Head>
        <title>Shelby Green</title>
        <meta name='description' content='Shelby is a recovering politician, researcher, and software developer in Tallahasse, Florida.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/images/sunflower.png'  />
      </Head>

      {/* body */}
      <body className="min-h-screen text-gray-800 antialiased">

        {/* header -- navigation bar */}
        <header className="relative z-20 flex justify-between items-center pt-12">
          <div className="flex block items-center w-full justify-center">
            <a href="/" className="md:absolute md:left-0 md:ml-12 no-underline font-bold text-xl font-semiboldeading-none border-b-2 border-[#209390]">Shelby Green</a>
          </div>
        </header>

        {/* main section */}
        <main className="md:mt-8 lg:mt-12 relative">
          {/* picture */}
          <div className="mt-16 mb-10">
            <img className="h-24 lg:h-32 mx-auto rounded-full" src="/images/profile-2.png" alt="Photo of Shelby Green, taken in 2022"/>
          </div>
          {/* small bio */}
          <div className="sm:w-2/4 mx-auto text-center text-lg lg:text-lg font-semibold text-gray-700 mt-4">
            <p className="mb-5">
            Hi, I’m Shelby!
            </p>
            <p className="mb-5">
            I’m a <a href="https://www.tallahassee.com/story/news/local/2022/03/16/shelby-green-data-engineer-and-neighborhood-advocate-files-run-city-commission/7047536001/" target="blank" className="font-medium lg:font-semibold text-[#FFD478] bg-[#209390] p-1 rounded">recovering politician</a> in Tallahassee, FL, where I work as a researcher and independent software developer.
            </p>
            <p className="mb-5">
            🧠: how to use (open) data and technology to improve self-organization, public participation, and action. 
            </p>
            <p className="mb-5">
            ☁️: a better world that’s sustainable and open for all.
            </p>
            <p>
              Get in touch: <a href="shelby@shelbytlh.com" target="blank" className="font-medium lg:font-semibold text-[#FFD478] bg-[#209390] p-1 rounded">email</a>, <a href="https://www.twitter.com/shelbyjgreen" target="blank" className="font-medium lg:font-semibold text-[#FFD478] bg-[#209390] p-1 rounded">Twitter</a>, <a href="https://www.instagram.com/shelbytlh" target="blank" className="font-medium lg:font-semibold text-[#FFD478] bg-[#209390] p-1 rounded">Instagram</a>.
            </p>
          </div>
        </main>

      
      </body>

    </>
  );
}