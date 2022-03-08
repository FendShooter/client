import Link from 'next/link'
import Title from '../components/Title'
export default function Contact() {
  return (
    <div className="wrap_center p-3">
      <Title size="text-2xl text-center" text="Our Contacts" />
      <div className="flex flex-col bg-slate-100/40 ">
        <div className="my-6 flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="#1887D0"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span>
            <Link href="tel:934-200-8161">
              <a className=" py-2 text-2xl font-semibold text-slate-700">
                934-200-8161
              </a>
            </Link>
          </span>
        </div>
        <div className="my-6 flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="#1887D0"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span>
            <Link href="mailto:934-200-8161">
              <a className=" py-2 text-2xl font-semibold text-slate-700">
                edekmoving1@gmail.com
              </a>
            </Link>
          </span>
        </div>
        <div className="my-4 flex flex-col ">
          <div className="mb-4 flex items-center space-x-2">
            <span className="mb-4 inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="#1887D0"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="inline-block text-2xl font-semibold">
              location :
            </span>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d772980.5348130316!2d-73.61804059915522!3d40.817963878578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f5137455d2d9%3A0x80a433117c3b4872!2sEDEK%20MOVING%20STORAGE%20%26%20SERVICES%20LLC!5e0!3m2!1sen!2sus!4v1644266704844!5m2!1sen!2sus"
            loading="lazy"
            className="h-[250px] w-[100%] md:h-[450px] md:w-[600px] "
          ></iframe>
        </div>
        <div></div>
      </div>
    </div>
  )
}
