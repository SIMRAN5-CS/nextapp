import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
const FooterIcon=()=>{
    return(
        <div className="h-full bg-slate-500 px-16 flex justify-between align-middle">
        <div className='p-4 text-3xl text-center mt-auto font-semibold'>
         Dribble
        </div>
        <div className="flex items-center space-x-4">
      <a href="https://www.instagram.com/" >
        <FaInstagram className="text-3xl text-gray-800 hover:text-gray-600 cursor-pointer" />
      </a>
      <a href="https://www.facebook.com/" >
        <FaFacebook className="text-3xl text-gray-800 hover:text-gray-600 cursor-pointer" />
      </a>
      <a href="https://twitter.com/" >
        <FaTwitter className="text-3xl text-gray-800 hover:text-gray-600 cursor-pointer" />
      </a>
    </div>

        </div>
    )
}
export default FooterIcon