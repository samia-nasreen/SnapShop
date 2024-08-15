const DownloadApp = () => {
  return (
    <div className="w-full md:-ml-10 sm:w-1/2 lg:w-1/5 px-4 mb-6">
      <h2 className="text-lg font-normal mb-4">Download App</h2>
      <p className="mb-3 text-xs text-gray-400">
        Save $3 with App New User Only
      </p>
      <div className="mb-4 flex">
        <img
          src="/assets/qr_code.png"
          alt="QR Code"
          className="mb-2 w-20 mr-2"
        />
        <div>
          <img
            src="/assets/google_play.png"
            alt="Google Play"
            className="mb-2 h-9"
          />
          <img
            src="/assets/app_store.png"
            alt="App Store"
            className="mb-2 h-9"
          />
        </div>
      </div>
      <div className="flex space-x-6">
        <img
          src="/assets/facebook_icon.png"
          alt="Facebook"
          className="ml-2 w-6 h-6"
        />
        <img
          src="/assets/twitter_icon.png"
          alt="Twitter"
          className="mt-0.5 w-5 h-5"
        />
        <img
          src="/assets/instagram_icon.png"
          alt="Instagram"
          className="w-6 h-6"
        />
        <img
          src="/assets/linkedin_icon.png"
          alt="LinkedIn"
          className="w-6 h-6"
        />
      </div>
    </div>
  );
};

export default DownloadApp;
