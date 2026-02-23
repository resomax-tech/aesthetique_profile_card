const ProfileCard = () => {
  return (
    <>
      <div className="min-h-[72vh] flex flex-col justify-around bg-white w-full md:w-[50%] mx-auto px-6 rounded-xl shadow-xl py-6">
        <div>
          <img src="/logo_black.png" alt="MAI" className="h-30 mx-auto" />
          <p className="text-center text-sm px-2 pt-4">
            We craft interiors defined by calm, clarity, and purpose.
          </p>
        </div>

        <a
          href="www.adbysv.com"
          className="text-lg font-bold bg-gray-800 p-4 max-w-fit mx-auto rounded-full text-white Link"
        >
          Visit Our Website
        </a>

        <div className="grid grid-cols-3 gap-x-4 gap-y-8  text-gray-700 font-medium text-sm">
          <a
            href="https://wa.me/+919618881789"
            target="_blank"
            className="flex flex-col items-center justify-center gap-2"
          >
            <img src="/whatsapp.png" alt="Whatsapp" className="h-16" />
            <span>WhatsApp</span>
          </a>

          <a
            href="#"
            target="_blank"
            className="flex flex-col items-center justify-center gap-2"
          >
            <img src="/instagram.png" alt="Instagram" className="h-16" />
            <span>Instagram</span>
          </a>

          <a
            href="#"
            target="_blank"
            className="flex flex-col items-center justify-center gap-2"
          >
            <img src="/facebook.png" alt="facebook" className="h-16" />
            <span>Facebook</span>
          </a>

          <a
            href="#"
            target="_blank"
            className="flex flex-col items-center justify-center gap-2"
          >
            <img src="/rating.png" alt="rating" className="h-16" />
            <span>Rate Us</span>
          </a>

          <a
            href="#"
            target="_blank"
            className="flex flex-col items-center justify-center gap-2"
          >
            <img src="/maps.png" alt="Location" className="h-16" />
            <span>Location</span>
          </a>

          <a
            href="#"
            target="_blank"
            className="flex flex-col items-center justify-center gap-2"
          >
            <img src="/gallery.png" alt="review" className="h-16" />
            <span>Gallery</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default ProfileCard;
