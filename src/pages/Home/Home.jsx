import Hero from "../../components/Hero/Hero"
import Features from "../../components/Features/Features"
import FeedPreview from "../../components/FeedPreview/FeedPreview"
import RealTime from "../../components/RealTime/RealTime"
import Stack from "../../components/Stack/Stack"
import CTABand from "../../components/CTABand/CTABand"
function Home() {
  return (
   <>
    <Hero/>
    <Features/>
    <FeedPreview/>
    <RealTime/>
    <Stack/>
    <CTABand/>
   </>
  )
}

export default Home
