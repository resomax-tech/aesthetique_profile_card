const ProfileCard = () => {
  return (
    <>
      <div className="min-h-[72vh] flex flex-col gap-6 justify-around bg-white mx-auto w-full px-10 rounded-xl shadow-xl py-6">
        <div className="flex flex-col gap-6 items-center w-full">
          <div className="space-y-8">
            <img src="/logo_black.png" alt="ADBYSV" className="h-32 mx-auto" />
            <p className="text-center text-sm px-2 ">
              Bespoke Interiors for Elite Living
            </p>
          </div>

          <a
            href="https://www.adbysv.com/"
            target="_blank"
            className="font-bold bg-gray-800 p-2 px-3 max-w-fit mx-auto rounded-full text-white Link"
          >
            Visit Our Website
          </a>
        </div>

        <div className="grid grid-cols-3 gap-8 text-gray-700 font-medium text-sm">
          <a
            href="https://wa.me/+919618881789"
            target="_blank"
            className="flex flex-col items-center justify-center gap-2"
          >
            <img src="/whatsapp.png" alt="Whatsapp" className="h-16" />
            <span>WhatsApp</span>
          </a>

          <a
            href="https://www.instagram.com/adbysv/"
            target="_blank"
            className="flex flex-col items-center justify-center gap-2"
          >
            <img src="/instagram.png" alt="Instagram" className="h-16" />
            <span>Instagram</span>
          </a>

          <a
            href="https://www.facebook.com/adbysv/"
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
