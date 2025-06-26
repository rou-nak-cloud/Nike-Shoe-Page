
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav'
import { CustomerReviews, Footer, Hero, 
      PopularProduct,
      Services,
      SpecialOffer,
      Subscribe,
      SuperQuality,
      ShoeDetails,
      ShopNow
} from './sections'



const App = () => (
 <BrowserRouter>
  <main className="relative">
    <Nav />
    <Routes>
      {/* Home Page */}
      <Route
        path="/"
        element={
          <>
            <section className="xl:padding-l wide:padding-r padding-b">
              <Hero />
            </section>
            <section className="padding">
              <PopularProduct />
            </section>
            <section className="padding">
              <SuperQuality />
            </section>
            <section className="padding-x py-10">
              <Services />
            </section>
            <section className="padding">
              <SpecialOffer />
            </section>
            <section className="bg-pale-blue padding">
              <CustomerReviews />
            </section>
            <section className="padding-x sm:py-32 py-16 w-full">
              <Subscribe />
            </section>
            <section className="bg-black padding-x padding-t pb-8">
              <Footer />
            </section>
          </>
        }
      />

      {/* Shoe Details Page */}
      <Route
        path="/details"
        element={
          <>
            <section className="padding">
              <ShoeDetails />
            </section>
            <section className="bg-black padding-x padding-t pb-8">
              <Footer />
            </section>
          </>
        }
      />
      {/* shop now */}
      <Route
        path="/shop"
        element={
          <>
          <section className="padding">
            <ShopNow />
          </section>
          <section className="bg-black padding-x padding-t pb-8">
              <Footer />
            </section>
          </>
        }
      />
    </Routes>
  </main>
</BrowserRouter>

)

export default App
