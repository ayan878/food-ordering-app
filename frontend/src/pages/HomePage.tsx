import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import Hero from "@/components/Hero";
function HomePage() {
  return (
    <div className="flex flex-col gap-12">
      <Hero />
      <div className="bg-white rounded-md shadow-lg py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text=5xl font-bold tracking-tighter text-orange-600">
          Tuck into take away today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter ">
            Order takeaway even faster!
          </span>
          <span>
            Downlaod the TastyTrails App for faster ordrring and personalised
            recommendations
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
