import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col font-cursive'>
    <h1 className='head_text text-center'>
      "Writing Through Time"
      <br className='max-md:hidden' />
      <span className='blue_gradient text-center'> Create Your Blog Post and Share </span>
    </h1>
    <p className='desc text-center'>
        WritelyHub App is an open-source tool for modern world to
      discover, create and share creative blog post
    </p>

    <Feed />
  </section>
);

export default Home;
